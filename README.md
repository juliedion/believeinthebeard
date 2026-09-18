# Believe in the Beard

Website for Believe in the Beard, a real-beard Santa serving the Capital
District of New York.

This working copy lives in Dropbox at `Believe in the Beard/website` so it
stays backed up and synced; it's also a git repo pushed to
[github.com/juliedion/believeinthebeard](https://github.com/juliedion/believeinthebeard).

## Structure

- `index.html` — home page (starry-night hero with a flying Santa & reindeer
  silhouette and a rotating photo changer)
- `services.html` — details on the four visit types (home visits, corporate
  & community events, photo sessions, virtual visits)
- `booking.html` — booking request form
- `contact.html` — contact info + general inquiry form
- `css/style.css` — all styling
- `js/main.js` — mobile nav toggle, starfield generation, photo changer,
  booking form service pre-select, footer year
- `images/logo-icon.png` — cropped, sharpened logo used in the nav/footer/favicon
- `images/logo.png` — original full logo file
- `images/gallery/` — real event/visit photos used in the hero photo changer

Plain HTML/CSS/JS, no build step or framework required.

## Booking form (Formspree)

The booking and contact forms submit to Formspree
(`https://formspree.io/f/xljdrqka`), which delivers submissions by email
without needing a backend server. **The site intentionally does not display
or embed any email address** — recipients are managed entirely in the
Formspree dashboard:

1. Log in to Formspree and open this form.
2. Under the form's settings, add every email address that should receive
   booking/contact submissions as a notification recipient.
3. Test both forms by submitting a real entry and confirming delivery.

## Deploying with GitHub Pages

1. Push this repo to `main` on GitHub (already done).
2. In the repo settings, go to **Pages** and set the source to the `main`
   branch, root folder.
3. Your site will be live at `https://juliedion.github.io/believeinthebeard/`
   until a custom domain is attached (see below).

## Connecting your Bluehost domain (believeinthebeard.com)

You can keep the domain registered at Bluehost and still host the site for
free on GitHub Pages — no need to move the domain or use Bluehost's own
hosting. A `CNAME` file containing `believeinthebeard.com` is already
committed at the repo root for this.

**1. In this GitHub repo:** Settings → Pages → under "Custom domain," enter
`believeinthebeard.com` and save (GitHub will read the existing `CNAME` file
automatically).

**2. In Bluehost's DNS settings** (Bluehost account → Domains → DNS, or
cPanel → Zone Editor) for `believeinthebeard.com`, add:

- Four **A records** for the root domain (`@`) pointing to GitHub Pages' IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- One **CNAME record** for `www` pointing to `juliedion.github.io`

Remove/replace any existing A or CNAME records on those same hosts (Bluehost
often has default "parked domain" records that need to be deleted first).

**3. Back in GitHub Pages settings**, once DNS has propagated (can take a
few minutes to a few hours), check "Enforce HTTPS" so the site serves over
`https://`.

DNS changes can take a little time to take effect — if the domain doesn't
resolve right away, give it a few hours and try again.

## Adding real photos later

Drop new images into `images/gallery/` and add matching `<img
class="photo-changer__img">` entries in `index.html`'s hero — the changer
picks up any images listed there automatically.
