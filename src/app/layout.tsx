import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sellio | Sell Online. Simply.",
  description:
    "Launch your ecommerce business without the big upfront website cost. Sellio builds, launches and supports your online store for one simple monthly price.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-navy">
        {children}
      </body>
    </html>
  );
}
