# Tabflux

Tabflux is a Next.js 14 and TypeScript website for career-first AI education.

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Production configuration

Set `NEXT_PUBLIC_SITE_URL` to the public HTTPS origin without a trailing slash. It is used for Open Graph metadata, `robots.txt`, and `sitemap.xml`.

## Deploy

For Vercel, import the repository, set `NEXT_PUBLIC_SITE_URL`, and deploy with the detected Next.js defaults.

For a container deployment:

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.example -t tabflux .
docker run -p 3000:3000 tabflux
```

Before deploying, run:

```bash
npm run build
```
