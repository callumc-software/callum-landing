import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { BrandGlyph, LOGO_BLUE } from "@/components/common/logo";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b0c0e",
          backgroundImage:
            "radial-gradient(900px 500px at 80% -10%, rgba(47,107,255,0.5), transparent), radial-gradient(700px 500px at 0% 110%, rgba(74,168,255,0.32), transparent)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: LOGO_BLUE,
            }}
          >
            <BrandGlyph width={46} height={41} fill="white" />
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, textTransform: "uppercase" }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 940, letterSpacing: -2 }}>
            Website dan software untuk cara kerja bisnis Anda.
          </div>
          <div style={{ fontSize: 34, color: "rgba(255,255,255,0.7)", maxWidth: 900 }}>
            Proyek kustom · Template per niche segera hadir
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
          <span>callumc.id</span>
          <span>Konsultasi gratis via WhatsApp</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
