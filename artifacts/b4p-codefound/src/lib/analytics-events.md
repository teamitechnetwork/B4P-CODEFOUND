# Analytics event contract

The B4P CODEFOUND website uses Replit-hosted analytics when it is enabled for a
published app. These events are intentionally limited to non-personal,
predefined dimensions so useful interactions can be measured without capturing
account data or free-form content.

### Partnership

| Event name | When it fires | Properties |
| --- | --- | --- |
| `partnership_interest_selected` | A visitor selects a partnership interest in the inquiry form | `partnership_category`: the selected option; `page_location`: `partnership_page` |
| `partnership_email_draft_opened` | A visitor completes the required fields and opens the email draft | `partnership_category`: the selected option; `page_location`: `partnership_page` |

### Planning list

| Event name | When it fires | Properties |
| --- | --- | --- |
| `planning_observance_saved` | A visitor saves an observance for planning | `observance_slug`: title-derived safe identifier; `source_surface`: `directory` or `detail_page` |
| `planning_observance_removed` | A visitor removes an observance from planning | `observance_slug`: title-derived safe identifier; `source_surface`: `directory`, `detail_page`, or `planning_list` |
| `planning_list_cleared` | A visitor clears one or more saved observances | `saved_count`: number of observances removed |
| `planning_brief_downloaded` | A visitor downloads the planning brief | `saved_count`: number of saved observances included; `brief_scope`: `saved_list` or `full_calendar` |

The event payloads must not include names, email addresses, phone numbers,
organization details, locations, budgets, timelines, or free-form message
content.
