import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Read the hero still at render time so the card carries a face.
 * Wrapped because public/ is not guaranteed to be traced into a serverless
 * bundle — if it is missing we just render the card without the photo.
 */
function heroDataUri(): string | null {
  try {
    const file = path.join(process.cwd(), "public", "media", "gopal-hero-poster.jpg");
    return `data:image/jpeg;base64,${fs.readFileSync(file).toString("base64")}`;
  } catch {
    return null;
  }
}

const HIGHLIGHTS = ["Agentic AI · LangGraph", "Quant & Trading Systems", "Distributed Backends"];

export default function OpenGraphImage() {
  const hero = heroDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0a0a0f 0%, #16121f 55%, #1f1630 100%)",
          color: "#f2f2f5",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -180,
            width: 560,
            height: 560,
            borderRadius: 999,
            background: "rgba(245,166,35,0.30)",
            filter: "blur(130px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -160,
            bottom: -220,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(167,139,250,0.28)",
            filter: "blur(130px)",
          }}
        />

        {/* left: the words */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 0 64px 68px",
            width: hero ? 736 : 1200,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 23, color: "#b4b4c2" }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "linear-gradient(135deg, #f5a623, #a78bfa)",
                color: "#0a0a0f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              {site.initials}
            </div>
            {site.currentRole} &middot; IIT (BHU) &rsquo;23
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 94, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>{site.name}</div>
            <div style={{ fontSize: 30, color: "#b4b4c2", maxWidth: 640, lineHeight: 1.35 }}>
              I build where AI meets finance — multi-agent platforms and systematic trading systems.
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 6, maxWidth: 620 }}>
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h}
                  style={{
                    display: "flex",
                    fontSize: 17,
                    padding: "8px 14px",
                    borderRadius: 999,
                    color: "#d8d8e2",
                    border: "1px solid rgba(255,255,255,0.16)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 23, color: "#7c7c8f" }}>
            {site.github.replace(/^https?:\/\//, "")}
          </div>
        </div>

        {/* right: the face */}
        {hero && (
          <div style={{ display: "flex", alignItems: "center", padding: "0 54px 0 0" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero}
              alt=""
              width={342}
              height={438}
              style={{
                width: 342,
                height: 438,
                objectFit: "cover",
                objectPosition: "62% 30%",
                borderRadius: 28,
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            />
          </div>
        )}
      </div>
    ),
    size,
  );
}
