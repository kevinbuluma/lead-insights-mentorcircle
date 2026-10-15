# Content awaiting approval

- Upload original Lead Insights Africa Consulting and MentorCircle Conversations logos from the presentations. Do not redraw, recolour or modify them. Current names are text identifiers, not recreated logos.
- Supply Jane Mburia’s approved professional portrait. Replace the explicit portrait placeholder, never use an AI-generated person as Jane.
- Current city and executive dialogue imagery is AI-generated editorial illustration, not evidence of the firm’s actual team, clients or office. Replace with approved photography when available.
- Services, team, programme areas and insights are held in src/content/site.ts for approved content updates. Insight articles and upcoming programmes intentionally remain empty.
- Legal pages are explicit placeholders awaiting approved privacy policy and terms.
- Enquiries are stored in Cloud → Database → contact_submissions. Visitors cannot read stored submissions. A real UI submission was saved, read back and removed by its ID.
- Owner email notifications are not active. A paid plan and verified owned sending domain are required; once verified, request owner notifications to jmburia@leadinsightsafrica.com.
- The preferred public contact path is /api/public/contact. /api/contact forwards to it while retaining the POST body.
- Sitemap creation awaits a public domain; relative canonical and Open Graph page URLs are already set. Bundled imagery deliberately has no placeholder social-image URLs.
- This app uses the supported TanStack Start framework with TypeScript and Tailwind CSS, not Next.js.
