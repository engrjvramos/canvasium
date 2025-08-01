import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode } from 'react';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex h-screen w-full max-w-[1440px] flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
