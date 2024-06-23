import { baseTheme } from "./base";

interface ITheme {
  [key: string]: string;
}

interface IThemes {
  [key: string]: ITheme;
}

export const themes: IThemes = {
  base: baseTheme,
};

const mapThemeWithProperties = (theme: ITheme) => {
  return {
    "--primary-color": theme.primary,
    "--secondary-color": theme.secondary,
    "--primary-background-color": theme.primaryBackground,
    "--secondary-background-color": theme.secondaryBackground,
    "--primary-text-color": theme.primaryText,
  };
};

export const applyTheme = (theme: ITheme) => {
  const themeObject = mapThemeWithProperties(theme);
  const rootElemet = document.documentElement;
  Object.entries(themeObject).forEach(([key, value]) => {
    rootElemet.style.setProperty(key, value);
  });
};

export const DEFAULT_THEME = "base";
