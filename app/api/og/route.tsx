import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Maxx Engage";
  const category = searchParams.get("category") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #0A0A0B 0%, #1A0A3B 100%)",
          padding: "60px 64px",
          position: "relative",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(160,32,240,0.3)",
            filter: "blur(120px)",
          }}
        />
        {/* Category badge */}
        {category && (
          <div style={{
            display: "flex",
            marginBottom: 24,
            padding: "6px 16px",
            borderRadius: 999,
            border: "1px solid rgba(160,32,240,0.4)",
            background: "rgba(160,32,240,0.1)",
            color: "#A020F0",
            fontSize: 13,
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}>
            {category}
          </div>
        )}
        {/* Title */}
        <div style={{
          fontSize: 56,
          fontWeight: 800,
          color: "#FAFAFA",
          lineHeight: 1.1,
          maxWidth: 900,
          letterSpacing: "-0.03em",
        }}>
          {title}
        </div>
        {/* Studio name */}
        <div style={{
          marginTop: 24,
          fontSize: 18,
          color: "#71717A",
          fontFamily: "monospace",
          letterSpacing: "0.05em",
        }}>
          Maxx Engage · Lagos, Nigeria
        </div>
        {/* Purple dot accent */}
        <div style={{
          position: "absolute",
          bottom: 60,
          right: 64,
          fontSize: 24,
          color: "#A020F0",
        }}>
          ✦
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
