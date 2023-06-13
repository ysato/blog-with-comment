import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'bg-white text-gray-700 antialiased'}>{children}</body>
    </html>
  );
}
