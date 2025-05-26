import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Merriweather as FontMerriweather
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});


export const fontMerriweather = FontMerriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
})
  
  