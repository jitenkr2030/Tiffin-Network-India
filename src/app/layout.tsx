import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiffin Network India - Fresh & Delicious Tiffin Service",
  description: "Order fresh, homemade tiffins in Delhi. Veg & Special tiffins available with daily delivery service in Rohini, Pitampura, Dwarka & Karol Bagh.",
  keywords: ["tiffin", "food delivery", "homemade food", "Delhi tiffin service", "lunch delivery", "dinner delivery"],
  authors: [{ name: "Tiffin Network India" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Tiffin Network India - Fresh Tiffin Service",
    description: "Fresh, homemade tiffins delivered daily in Delhi",
    url: "https://tiffinnetworkindia.com",
    siteName: "Tiffin Network India",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiffin Network India",
    description: "Fresh, homemade tiffins delivered daily in Delhi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
