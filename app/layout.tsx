import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ESSL — Enterprise IT Infrastructure & Cybersecurity Solutions | Bangladesh",
  description:
    "ESSL (Ensure Support Service Limited) designs, deploys, and manages enterprise network, security, and cloud solutions for Bangladesh's leading banks, government institutions, and enterprises. Certified partner of Cisco, Fortinet, Palo Alto, CrowdStrike, Dell, and more.",
  keywords: [
    "ESSL",
    "Ensure Support Service Limited",
    "IT Infrastructure Bangladesh",
    "Cybersecurity Bangladesh",
    "Cisco Partner Bangladesh",
    "Enterprise Networking",
    "Managed Services",
    "System Integration",
    "Data Center Solutions",
    "Cloud Infrastructure",
  ],
  openGraph: {
    title: "ESSL — Enterprise IT Infrastructure & Cybersecurity Solutions",
    description:
      "Bangladesh's trusted integration partner for enterprise network, security, and cloud solutions.",
    url: "https://ensure-bd.com",
    siteName: "ESSL",
    type: "website",
  },
  alternates: {
    canonical: "https://ensure-bd.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased w-full static-grid-bg min-h-screen text-slate-100" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
