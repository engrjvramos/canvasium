import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode } from 'react';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden">
      <Header />
      <main className="mx-auto w-full max-w-[90rem] flex-1">{children}</main>
      <Footer />
    </div>
  );
}
