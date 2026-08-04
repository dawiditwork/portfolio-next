import "./globals.css";

export const metadata = {
  title: "Frankowicz | Full-stack Developer",
  description:
    "Portfolio von Dawid Frankowicz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
