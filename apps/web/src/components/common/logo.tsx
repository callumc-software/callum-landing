import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/** Logo blue from the brand guide. */
export const LOGO_BLUE = "#4285ff";

/** Brand mark: two interlocking rounded blocks (public/logo.svg). Shared by the navbar logo, favicon and OG image. */
export function BrandGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="12 12 270 240" fill="currentColor" {...props}>
      <path d="M68,12h112c8,0,12,4,12,12v52c0,8-4,12-12,12h-78v80c0,8-4,12-12,12h-54c-16,0-24-8-24-24v-88c0-37.33,18.67-56,56-56Z" />
      <path d="M204,86h54c16,0,24,8,24,24v84c0,38.67-18.67,58-56,58h-114c-8,0-12-4-12-12v-50c0-8,4-12,12-12h78v-80c0-8,4.67-12,14-12Z" />
    </svg>
  );
}

export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} style={{ color: LOGO_BLUE }}>
      <BrandGlyph className="h-7 w-auto" aria-hidden />
      {withWordmark ? (
        <span className="text-lg font-extrabold tracking-tight uppercase">{siteConfig.name}</span>
      ) : null}
    </span>
  );
}
