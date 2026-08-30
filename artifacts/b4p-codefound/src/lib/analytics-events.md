# Partnership analytics event contract

The B4P CODEFOUND website uses Replit-hosted analytics when it is enabled for a
published app. These events are intentionally limited to non-personal,
predefined dimensions so partnership interest can be measured without
capturing inquiry details.

| Event name | When it fires | Properties |
| --- | --- | --- |
| `partnership_interest_selected` | A visitor selects a partnership interest in the inquiry form | `partnership_category`: the selected option; `page_location`: `partnership_page` |
| `partnership_email_draft_opened` | A visitor completes the required fields and opens the email draft | `partnership_category`: the selected option; `page_location`: `partnership_page` |

The event payloads must not include names, email addresses, phone numbers,
organization details, locations, budgets, timelines, or free-form message
content.