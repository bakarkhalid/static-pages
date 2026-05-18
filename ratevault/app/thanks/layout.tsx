import { Header } from '@/components/Header';

export default function ThanksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header variant="thanks" />
      {children}
    </>
  );
}
