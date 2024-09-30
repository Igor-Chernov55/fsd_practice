import themeVariables from '<//theme variables path here>';

type ThemeInterface = typeof themeVariables

declare module "styled-components" {
    interface DefaultTheme extends ThemeInterface {}
}