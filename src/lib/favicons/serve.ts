import * as data from "./data";

function b64ToBytes(b64: string): Uint8Array {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

export function serveBinary(b64: string, contentType: string): Response {
  const bytes = b64ToBytes(b64);
  return new Response(bytes.buffer as ArrayBuffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}

export const icons = {
  svg: () => new Response(atob(data.favicon_svg), {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  }),
  ico: () => serveBinary(data.favicon_ico, "image/x-icon"),
  png16: () => serveBinary(data.favicon_16x16_png, "image/png"),
  png32: () => serveBinary(data.favicon_32x32_png, "image/png"),
  png48: () => serveBinary(data.favicon_48x48_png, "image/png"),
  apple: () => serveBinary(data.apple_touch_icon_png, "image/png"),
};
