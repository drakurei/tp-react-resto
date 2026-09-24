// Shown when a remote image (PokeAPI) cannot be loaded
export const FALLBACK_IMAGE = '/pokeball.svg'

// To use as onError={handleImageError} on an <img>
export function handleImageError(event) {
  // Avoid an infinite loop if the fallback itself fails
  event.currentTarget.onerror = null
  event.currentTarget.src = FALLBACK_IMAGE
}
