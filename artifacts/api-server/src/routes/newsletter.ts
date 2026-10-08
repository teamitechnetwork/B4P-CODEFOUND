import { createHash } from "node:crypto";
import { Router, type IRouter } from "express";
import {
  SubscribeToNewsletterBody,
  SubscribeToNewsletterResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();
const mailchimpApiBase = "https://{dc}.api.mailchimp.com/3.0";

router.post("/newsletter/subscribe", async (req, res): Promise<void> => {
  const parsed = SubscribeToNewsletterBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn(
      { fields: parsed.error.issues.map((issue) => issue.path.join(".")) },
      "Rejected invalid newsletter subscription",
    );
    res.status(400).json({ error: "Enter a valid email address and confirm consent." });
    return;
  }

  const apiKey = process.env.MAILCHIMP_API_KEY?.trim();
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID?.trim();
  const dataCenter = apiKey?.match(/-([a-z0-9]+)$/i)?.[1];

  if (!apiKey || !audienceId || !dataCenter) {
    req.log.error(
      {
        hasApiKey: Boolean(apiKey),
        hasAudienceId: Boolean(audienceId),
        hasDataCenter: Boolean(dataCenter),
      },
      "Newsletter subscription is missing Mailchimp configuration",
    );
    res.status(503).json({
      error: "Newsletter signup is temporarily unavailable. Please try again later.",
    });
    return;
  }

  const email = parsed.data.email.trim().toLowerCase();
  const subscriberHash = createHash("md5").update(email).digest("hex");
  const memberUrl = `${mailchimpApiBase.replace("{dc}", dataCenter)}/lists/${encodeURIComponent(audienceId)}/members/${subscriberHash}`;

  let mailchimpResponse: Response;
  try {
    mailchimpResponse = await fetch(memberUrl, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`b4p-codefound:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "pending",
      }),
    });
  } catch (error) {
    req.log.error({ err: error }, "Mailchimp newsletter request failed");
    res.status(503).json({
      error: "Newsletter signup is temporarily unavailable. Please try again later.",
    });
    return;
  }

  if (!mailchimpResponse.ok) {
    req.log.warn(
      { statusCode: mailchimpResponse.status },
      "Mailchimp rejected newsletter subscription",
    );
    res.status(503).json({
      error: "Newsletter signup is temporarily unavailable. Please try again later.",
    });
    return;
  }

  let memberStatus: unknown;
  try {
    const member = (await mailchimpResponse.json()) as { status?: unknown };
    memberStatus = member.status;
  } catch (error) {
    req.log.error({ err: error }, "Mailchimp returned an unreadable member response");
    res.status(503).json({
      error: "Newsletter signup is temporarily unavailable. Please try again later.",
    });
    return;
  }

  if (memberStatus === "pending") {
    res.json(
      SubscribeToNewsletterResponse.parse({
        status: "pending",
        message: "Check your inbox for a confirmation email to complete your signup.",
      }),
    );
    return;
  }

  if (memberStatus === "subscribed") {
    res.json(
      SubscribeToNewsletterResponse.parse({
        status: "subscribed",
        message: "This email is already on the supporter list.",
      }),
    );
    return;
  }

  req.log.warn({ status: memberStatus }, "Mailchimp member is not eligible for signup");
  res.status(409).json({
    error: "This email cannot be re-subscribed through this form. Please contact B4P CODEFOUND.",
  });
});

export default router;
