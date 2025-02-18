import { ThemeOptions } from "@mui/material";

type ColorMode = 'light' | 'dark'

export interface ColorModeProps {
    mode: string,
    toggleColorMode: () => void
}

interface PaletteOptions {
    mode: ColorMode;
    primary?: {
      main: string;
    };
    secondary?: {
      main: string;
    };
}

export interface CustomThemeOptions extends ThemeOptions {
    palette: PaletteOptions;
}