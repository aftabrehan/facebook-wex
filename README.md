# Facebook Clone

Portfolio demo using Next.js Pages Router, React, NextAuth, Firebase Firestore/Storage, and Tailwind CSS. Guest login is intentionally public. Navigation, likes, comments, and video controls that were decorative in the original remain decorative.

## Run locally

Use Node.js 24 (`nvm use`) and npm. The old Yarn lockfile has been replaced by `package-lock.json`.

```sh
npm ci
cp .env.example .env.local # only when you do not already have .env.local
npm run dev
```

Fill in the environment values before starting. Open http://localhost:3000. `NEXTAUTH_URL` must match the actual port and origin. Guest login needs a configured `NEXTAUTH_SECRET`, but no guest password or OAuth credentials. Generate a secret with `openssl rand -base64 32`. Do not commit `.env.local`.

```sh
npm run lint
npm run build
npm run start
```

## Configuration and Vercel

- Use the Next.js framework preset, Node.js 24, install command `npm ci`, and build command `npm run build`. Remove old Yarn install overrides and custom output directory overrides.
- Copy the variables from `.env.example` into Vercel for the appropriate environment. Set production `NEXTAUTH_URL` to your deployed HTTPS origin, never localhost. Keep `NEXTAUTH_SECRET` stable across deployments. `DEMO_USER_PASSWORD` is obsolete and can be removed.
- Firebase web app identifiers are intentionally public. OAuth client secrets and the NextAuth secret stay server-side. Firebase identifiers are embedded at build time; redeploy after changing them.
- Google and Facebook each need their client ID and secret. Register callback URLs `https://YOUR_DOMAIN/api/auth/callback/google` and `https://YOUR_DOMAIN/api/auth/callback/facebook`, plus equivalent localhost callbacks for local testing. Refresh credentials in their provider consoles if login reports an invalid client or callback.

## Firebase assistance required

The existing project responds to feed reads with `permission-denied: Missing or insufficient permissions`. Check Firestore rules (including expired test-mode rules), project status, and Storage configuration in the Firebase console. Account-side rules and billing cannot be repaired from this repository.

The current app uses NextAuth for its sessions and the Firebase web SDK for data; NextAuth sessions do **not** create Firebase Auth sessions. Rules requiring `request.auth != null` therefore reject these requests. Do not open production write rules broadly to bypass this. A secure authentication bridge or server-mediated data access needs Firebase administrator configuration before those rules can be enforced. Storage writes likewise need compatible authorization and an active bucket/billing configuration.

The page now renders independently of Firestore availability. The feed reports failures without crashing the page, and unsuccessful posts retain their text/image for retry. Firebase read denial currently prevents full post/upload verification. Google/Facebook login needs interactive verification with active accounts.

## Dependencies and verification

Upgraded to Next.js 16.4.0, React/React DOM 19.3.0, Firebase 13.0.0, NextAuth 4.24.15, and Tailwind 4.3.3. Versions are pinned and npm's lockfile is committed. Unused Firebase hooks and the scrollbar plugin were removed. Axios is absent from the complete installed dependency tree. ESLint 9 is retained because the current Next lint plugins do not declare ESLint 10 compatibility.

Locally verified: lint, production build, production page rendering, guest login, and logout. The initial local authentication origin incorrectly used port 3001; `.env.local` now uses port 3000. Verification used the available Node 26 runtime; `.nvmrc` and Vercel target Node 24.

`npm audit --omit=dev` reports zero vulnerabilities. The full audit reports five high-severity entries in the development-only chain `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces` (GHSA-vfj7-8cjw-p6xm). The latest braces release remains 3.0.3 and has no patched version. The reported automatic fix downgrades Next's lint configuration and is not suitable for this upgrade. Firebase's gRPC dependency is overridden to the compatible patched 1.14.x line. Recheck the full audit when upstream publishes a braces fix.
