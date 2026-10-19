import { ImageResponse } from "next/og";
import { BrandGlyph, LOGO_BLUE } from "@/components/common/logo";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 112,
          background: LOGO_BLUE,
        }}
      >
        <BrandGlyph width={320} height={284} fill="white" />
      </div>
    ),
    { ...size },
  );
}
