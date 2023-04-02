import "./normalizer.css";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Inter, Poppins } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });
const inter = Inter({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            html {
              font-family: ${inter.style.fontFamily};
              --secondary-font: ${poppins.style.fontFamily};
            }
          `}
        </style>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
