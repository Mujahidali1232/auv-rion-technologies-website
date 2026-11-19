import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#ffffff",
        }}
      >
        <svg width="48" height="42" viewBox="0 0 200 176">
          <polygon fill="#0B1E33" points="100,6 34,158 72,158 100,78" />
          <polygon fill="#1E86E5" points="100,6 166,158 128,158 100,78" />
          <polygon fill="#1E86E5" points="58,158 100,92 142,158 124,158 100,122 76,158" />
          <polygon fill="#1E86E5" points="34,158 72,158 53,148" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
