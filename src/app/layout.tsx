import './globals.css';
import Providers from '@/components/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'bg-white text-gray-700 antialiased'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
