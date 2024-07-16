import * as allColors from '../foundations/colors'
import * as semanticColors from './semanticColors'
import { ColorCategory, ColorInCategory, ColorsInCategories, ThemedColors } from './types'

// path is a dot separated string e.g. 'neutrals.900'
/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
function _get(object: any, path: string, defaultValue: string | null = null): string | null {
  return path.split('.').reduce((results, key) => (results && results[key] ? results[key] : defaultValue), object)
}

function translateCategory(category: ColorCategory): ColorInCategory {
  return Object.entries(semanticColors[category]).reduce((computedSemanticColors, [key, themedColors]) => ({
    ...computedSemanticColors,
    [key]: {
      light: _get(allColors, (themedColors as ThemedColors).light || 'red.300', 'red.500'),
      dark: _get(allColors, (themedColors as ThemedColors).dark || 'red.300', 'red.500'),
    }
  }), {})
}

const translatedCategories: ColorsInCategories = (Object.keys(semanticColors) as ColorCategory[]).reduce((translatedCategories, categoryName) => ({
  ...translatedCategories,
  [categoryName]: translateCategory(categoryName)
}), {} as ColorsInCategories)

export default translatedCategories
