import "./globals.css";

export const metadata = {
  title: "AI Cattle Feed Manager",
  description: "Smart beef cattle feeding system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
