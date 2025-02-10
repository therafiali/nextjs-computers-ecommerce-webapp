"use client"

import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { usePathname } from 'next/navigation'

const RubikSans = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900","300"],
});

function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith('/studio');

  if (isStudioPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${RubikSans.variable} antialiased min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
          <div className="fixed top-4 right-4">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
