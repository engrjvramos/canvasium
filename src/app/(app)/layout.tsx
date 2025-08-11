import Footer from '@/components/footer';
import Header from '@/components/header';
import { Loader2 } from 'lucide-react';
import { ReactNode, Suspense } from 'react';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="mx-auto w-full max-w-[90rem] flex-1">
        <Suspense fallback={<LandingLoader />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
}

function LandingLoader() {
  return (
    <div className="grid h-full w-full flex-1 place-items-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  );
}
