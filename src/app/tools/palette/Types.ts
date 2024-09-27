export type PaletteType = "warm" | "cool" | "neutral" | "brand";

export type ColorType = {
    id: string;
    color: string;  // Tailwind class like 'bg-red-500'
    hex: string;    // Hex value like '#ff0000'
    rgba: string;   // RGBA value like 'rgba(255, 0, 0, 1)'
    palette: PaletteType;
  };

