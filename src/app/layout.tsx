import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ethan Bennett | Data Science, Machine Learning & Software Engineering",
  description: "Portfolio of Ethan Bennett, an Arcadia University computer science student interested in data science, machine learning, and software engineering, with experience in computer graphics and interactive systems.",
  keywords: ["Ethan Bennett", "Computer Science", "Data Science", "Machine Learning", "Software Engineering", "Python", "PyTorch", "Next.js", "Computer Graphics", "Interactive Systems"],
  authors: [{ name: "Ethan Bennett" }],
  creator: "Ethan Bennett",
  openGraph: {
    title: "Ethan Bennett | Data Science, Machine Learning & Software Engineering",
    description: "Computer science student building projects across machine learning, web development, computer graphics, and interactive systems.",
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
