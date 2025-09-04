import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethan Bennett - Computer Science Student & Developer",
  description: "Computer Science student at Arcadia University specializing in algorithms, 3D graphics, and interactive systems. Passionate about computational modeling and VR applications.",
  keywords: ["Computer Science", "Software Developer", "3D Graphics", "VR", "Java", "Python", "Algorithms"],
  authors: [{ name: "Ethan Bennett" }],
  creator: "Ethan Bennett",
  openGraph: {
    title: "Ethan Bennett - Computer Science Student & Developer",
    description: "Computer Science student specializing in algorithms, 3D graphics, and interactive systems",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
