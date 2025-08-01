import { Icons } from '@/components/icons';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TPainting } from '@/types/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  painting: TPainting;
  setPause: (value: boolean) => void;
};

export default function ImageModal({ painting, setPause }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setPause(true);
  }, [isOpen, setPause]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="absolute top-4 left-4 flex cursor-pointer items-center gap-2 bg-black px-4 py-3.5 text-[10px] leading-[120%] font-bold tracking-widest text-white uppercase sm:top-auto sm:bottom-4">
        <Icons.view className="size-4" />
        View Image
      </DialogTrigger>
      <DialogContent
        className="gap-0 rounded-none border-none bg-transparent p-0 sm:max-w-2xl"
        showCloseButton={false}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader className="p-0">
          <DialogTitle className="sr-only">Full size image</DialogTitle>
          <DialogDescription className="sr-only">This is the full size image.</DialogDescription>
        </DialogHeader>
        <div
          className="relative mx-auto flex max-h-full max-w-full flex-col gap-8"
          style={{
            maxWidth: painting.images.galleryWidth,
            maxHeight: painting.images.galleryHeight,
          }}
        >
          <DialogClose className="cursor-pointer self-end text-white uppercase outline-none">Close</DialogClose>
          <Image
            src={painting.images.gallery}
            alt={painting.name}
            width={painting.images.galleryWidth}
            height={painting.images.galleryHeight}
            placeholder="blur"
            blurDataURL={painting.images.gallery}
            className=""
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
