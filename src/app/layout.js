import "./globals.css";

export const metadata = {
  title: "Google",
  description: "Google clone built with Next.js",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
