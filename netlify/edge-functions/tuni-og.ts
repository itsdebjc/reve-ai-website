import type { Config, Context } from "https://edge.netlify.com";

// Social crawlers that need static OG tags
const CRAWLERS = [
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "slackbot",
  "whatsapp",
  "telegrambot",
  "discordbot",
  "iframely",
  "embedly",
  "outbrain",
];

export default async (request: Request, context: Context) => {
  const ua = (request.headers.get("user-agent") || "").toLowerCase();
  const isCrawler = CRAWLERS.some((bot) => ua.includes(bot));

  if (!isCrawler) {
    // Real user — let the SPA handle it
    return context.next();
  }

  // Crawler — return static HTML with Tuni OG tags
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Tuni | Personal Body Feedback for Midlife Women</title>
    <meta name="description" content="Tuni helps women in midlife discover what their own bodies respond to through a simple daily log, weekly feedback and clearer daily choices." />
    <meta property="og:title" content="Tuni | Personal Body Feedback for Midlife Women" />
    <meta property="og:description" content="Tuni helps women in midlife discover what their own bodies respond to through a simple daily log, weekly feedback and clearer daily choices." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.wereve.ca/bff-coach" />
    <meta property="og:image" content="https://www.wereve.ca/og-tuni.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tuni | Personal Body Feedback for Midlife Women" />
    <meta name="twitter:description" content="Tuni helps women in midlife discover what their own bodies respond to through a simple daily log, weekly feedback and clearer daily choices." />
    <meta name="twitter:image" content="https://www.wereve.ca/og-tuni.jpg" />
  </head>
  <body></body>
</html>`;

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
};

export const config: Config = {
  path: "/bff-coach",
};
