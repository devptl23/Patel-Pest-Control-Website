# Deployment Guide: Patel Pest Control

Since you have a static website (HTML/CSS/JS), you can host it for **free** on **Netlify** or **Vercel**. Both are excellent, high-performance options.

**Recommendation**: **Netlify** is often slightly easier for a "drag-and-drop" deployment if you aren't using GitHub yet.

---

## Option 1: Netlify (Recommended for Simplicity)

### 1. Deploy the Site
1.  Go to [app.netlify.com](https://app.netlify.com) and sign up (free).
2.  Once logged in, go to the **"Sites"** tab.
3.  You will see a box that says **"Drag and drop your site output folder here"**.
4.  Open your file explorer to `C:\Users\Dev\.gemini\antigravity\scratch\pest-control-site`.
5.  **Drag the entire `pest-control-site` folder** into that box on Netlify.
6.  Netlify will upload and deploy it instantly. You'll get a random URL (e.g., `happy-beaver-123456.netlify.app`).

### 2. Connect Your Domain (`patelpest.ca`)
1.  On your Netlify site dashboard, click **"Domain management"**.
2.  Click **"Add a domain"**.
3.  Enter `patelpest.ca` and click **Verify**.
4.  Click **"Add domain"**.

### 3. Configure GoDaddy DNS
Netlify will show you a warning that the domain needs configuration.
1.  Log in to your **GoDaddy** account.
2.  Go to **My Products** > **Domains** > `patelpest.ca` > **DNS**.
3.  **Delete** any existing "A" records with the name `@` (Parked records).
4.  Add the **Netlify Load Balancer** record (Netlify will provide this, but usually):
    -   **Type**: `A`
    -   **Name**: `@`
    -   **Value**: `75.2.60.5` (Check Netlify's specific instruction, usually they recommend an `A` record for the root domain).
5.  Add a **CNAME** record for `www`:
    -   **Type**: `CNAME`
    -   **Name**: `www`
    -   **Value**: `[your-site-name].netlify.app` (e.g., `happy-beaver-123456.netlify.app`).
6.  Save changes. It may take up to 48 hours to propagate, but usually works within minutes.

---

## Option 2: Vercel

1.  Go to [vercel.com](https://vercel.com) and sign up.
2.  Install Vercel CLI (`npm i -g vercel`) OR use their Git integration if you push this code to GitHub.
3.  **Manual Deploy**:
    -   Open your terminal in the project folder.
    -   Run `vercel`.
    -   Follow the prompts (keep defaults).
4.  **Domain**:
    -   Go to the Vercel Dashboard > Project > Settings > Domains.
    -   Add `patelpest.ca`.
    -   Vercel will give you an **A Record** (usually `76.76.21.21`) and a **CNAME** to add to GoDaddy, similar to the Netlify steps above.

---

## Important Note on HTTPS
Both Netlify and Vercel provide **Free SSL (HTTPS)** automatically. Once your DNS is connected, they will generate a certificate for you.
