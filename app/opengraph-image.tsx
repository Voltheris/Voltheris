import { ImageResponse } from "next/og";

export const alt = "Voltheris — AI Systems for Business Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F7F3EA",
        }}
      >
        <div
          style={{
            fontSize: 108,
            fontWeight: 500,
            color: "#211F1C",
            letterSpacing: -2,
          }}
        >
          VOLTHERIS
        </div>
        <div style={{ marginTop: 28, width: 180, height: 3, backgroundColor: "#B08D57" }} />
        <div style={{ marginTop: 32, fontSize: 30, color: "#57534A" }}>
          AI Systems for Business Automation
        </div>
      </div>
    ),
    { ...size }
  );
}
