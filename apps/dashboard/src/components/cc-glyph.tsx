import type { SVGProps } from "react";

/** Brand mark — same as BrandGlyph in apps/web/src/components/common/logo.tsx. */
export function CCGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="12 12 270 240" fill="currentColor" aria-hidden {...props}>
      <path d="M68,12h112c8,0,12,4,12,12v52c0,8-4,12-12,12h-78v80c0,8-4,12-12,12h-54c-16,0-24-8-24-24v-88c0-37.33,18.67-56,56-56Z" />
      <path d="M204,86h54c16,0,24,8,24,24v84c0,38.67-18.67,58-56,58h-114c-8,0-12-4-12-12v-50c0-8,4-12,12-12h78v-80c0-8,4.67-12,14-12Z" />
    </svg>
  );
}
