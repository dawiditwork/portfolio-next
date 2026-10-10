
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Dawid Frankowicz — Software Developer | React, Next.js, TypeScript";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "65px 75px",
          color: "#ffffff",
          backgroundColor: "#090c12",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -180,
            width: 650,
            height: 650,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,112,49,0.22) 0%, rgba(255,112,49,0) 70%)",
          }}
        />

        {/* Decorative border */}
        <div
          style={{
            position: "absolute",
            inset: 25,
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              color: "#ff8138",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            FRANKOWICZ.DEV
          </span>

          <span
            style={{
              color: "#9ba3b3",
              fontSize: 18,
              letterSpacing: 2,
            }}
          >
            BASEL-LAND · SWITZERLAND
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 73,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            DAWID FRANKOWICZ
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 38,
              fontWeight: 700,
              color: "#ff8138",
              letterSpacing: 2,
            }}
          >
            SOFTWARE DEVELOPER
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#bdc4d0",
              marginTop: 10,
            }}
          >
            React · Next.js · TypeScript · Full-stack Engineering
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 25,
            borderTop: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <span
            style={{
              fontSize: 21,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            BUILD · TEST · SHIP
          </span>

          <span
            style={{
              fontSize: 20,
              color: "#9ba3b3",
            }}
          >
            dawidfrankowicz.com
          </span>
        </div>
      </div>
    ),
    size
  );
}
