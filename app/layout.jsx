import "./globals.css";
import MotionEffects from "@/components/MotionEffects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export const metadata = {
  title: "Joelle Academy",
  description: "Joelle Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>
        <a href="#main-content" className="skip-link">
          انتقل إلى المحتوى
        </a>
        <MotionEffects />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
