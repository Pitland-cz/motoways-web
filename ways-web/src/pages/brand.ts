export const prerender = true;

import brandHtml from '../assets/brand-book.html?raw';

export function GET() {
  return new Response(brandHtml, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
