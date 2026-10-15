<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep content in typed CMS-ready modules and render it through reusable editorial and enquiry components so approved content can replace empty states without layout changes.
- Use TanStack file routes and the root shared shell; keep service content in an index leaf under its Outlet layout to support detail pages.
- Enquiries use a shared Zod schema and same-origin public server endpoint with server-only insertion into private Cloud storage; visitors must never read submitted enquiries.
- Keep original brand assets nullable until approved originals arrive; text identity and an explicit portrait placeholder must not impersonate an unavailable logo or founder photo.
