export type ColorCategory = 'background' | 'border' | 'icon' | 'text'

export type ThemedColors = {
  default: string
  _dark: string
}

export type ColorInCategory = Record<string, ThemedColors>

export type ColorsInCategories = Record<ColorCategory, ColorInCategory>
