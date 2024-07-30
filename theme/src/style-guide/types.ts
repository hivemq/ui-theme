export type ColorCategory = 'background' | 'border' | 'icon' | 'text'

export type ThemedColors = {
  light: string
  dark: string
}

export type ColorInCategory = Record<string, ThemedColors>

export type ColorsInCategories = Record<ColorCategory, ColorInCategory>
