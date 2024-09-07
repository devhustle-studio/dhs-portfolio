import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/components/ui/Custom/Universal/Navbar";


export const metadata: Metadata = {
  title: "Dev Hustle",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
           <Navbar />
          {children}</ThemeProvider></body>
    </html>
  );
}
