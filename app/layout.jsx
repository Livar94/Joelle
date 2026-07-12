import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';

export const metadata = {
  title: 'Joelle Academy',
  description: 'Joelle Academy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
