import "./globals.css";

export const metadata = {
  title: "Google",
  description: "Google clone built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}