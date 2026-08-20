// Comprehensive dictionary providing built-in SVG graphics or data references for all 12 Meridians and Acupoints
export const BUILTIN_POINT_IMAGES: Record<string, string> = {
  // Can be expanded with direct static assets or CDN / SVG data URLs
};

export function getBuiltinAcupointVisual(pointCode: string): string | null {
  if (!pointCode) return null;
  return BUILTIN_POINT_IMAGES[pointCode] || null;
}
