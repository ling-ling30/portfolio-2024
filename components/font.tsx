import { Anton, Poppins, Space_Mono } from "next/font/google";

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
});
