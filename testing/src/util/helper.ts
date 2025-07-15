/**
 * A simple utility to get a contrasting text color (black or white) for any given hex background.
 * @param hexColor - The hex color string (e.g., '#RRGGBB').
 * @returns 'black' or 'white'.
 */
export const getContrastColor = (hexColor: string) => {
  if (!hexColor.startsWith('#')) return 'black' // Default for invalid format
  const r = parseInt(hexColor.slice(1, 3), 16)
  const g = parseInt(hexColor.slice(3, 5), 16)
  const b = parseInt(hexColor.slice(5, 7), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? 'black' : 'white'
}

/**
 * Calculates the contrast color (black or white) for a semi-transparent RGBA color overlaid on a solid background.
 * @param rgbaString - The RGBA color string (e.g., 'rgba(255, 255, 255, 0.5)').
 * @param backgroundHex - The solid background hex color (e.g., '#000000').
 * @returns 'black' or 'white'.
 */
export const getAlphaContrastColor = (rgbaString: string, backgroundHex: string): 'black' | 'white' => {
  // 1. Parse the RGBA string to get the color and alpha values.
  const rgbaMatch = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/)
  if (!rgbaMatch) return 'black' // Default on parse error

  const rOverlay = parseInt(rgbaMatch[1], 10)
  const gOverlay = parseInt(rgbaMatch[2], 10)
  const bOverlay = parseInt(rgbaMatch[3], 10)
  const alpha = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1

  // 2. Parse the background HEX string.
  if (!backgroundHex.startsWith('#')) return 'black'
  const rBg = parseInt(backgroundHex.slice(1, 3), 16)
  const gBg = parseInt(backgroundHex.slice(3, 5), 16)
  const bBg = parseInt(backgroundHex.slice(5, 7), 16)

  // 3. Blend the overlay color with the background color.
  const rFinal = Math.round(rOverlay * alpha + rBg * (1 - alpha))
  const gFinal = Math.round(gOverlay * alpha + gBg * (1 - alpha))
  const bFinal = Math.round(bOverlay * alpha + bBg * (1 - alpha))

  // 4. Calculate the brightness of the final blended color.
  const brightness = (rFinal * 299 + gFinal * 587 + bFinal * 114) / 1000

  // 5. Return 'black' or 'white' based on the brightness.
  return brightness > 128 ? 'black' : 'white'
}