import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ImportantNotice } from '@/components/ImportantNotice';
import { BackToTop } from '@/components/BackToTop';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ImportantNotice />
      <BackToTop />
    </>
  );
}
