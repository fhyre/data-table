import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen w-screen bg-[#1d1c1e] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
