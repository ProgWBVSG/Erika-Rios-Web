import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Erika Ríos - Coach Ontológico",
  description: "Acompaño tu proceso para detener el piloto automático e integrar consciencia, cuerpo y arte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
