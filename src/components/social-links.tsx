import Image from 'next/image';
import { Icons } from './icons';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const SOCIAL_LINKS = [
  {
    name: 'jobie.dev',
    url: 'https://jobie.dev',
    imageUrl: '/jobie-favicon.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/engrjvramos',
    icon: <Icons.gitHub className="size-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/engrjvramos/',
    icon: <Icons.linkedIn className="size-5" />,
  },
];

export default function SocialLinks() {
  return (
    <Dialog>
      <DialogTrigger className="hover:text-theme-secondary dark:hover:text-theme-primary cursor-pointer text-inherit hover:underline">
        Jose Roberto Ramos
      </DialogTrigger>
      <DialogContent className="font-poppins">
        <DialogHeader className="items-center justify-center py-5">
          <DialogTitle className="text-2xl">Jose Roberto Ramos</DialogTitle>
          <DialogDescription className="dark:text-theme-primary text-theme-secondary text-center text-sm font-semibold">
            Manila, Philippines
          </DialogDescription>
          <p className="mt-5">&quot;Frontend developer and avid gamer.&quot;</p>
        </DialogHeader>
        <ul className="flex w-full flex-col gap-4 overflow-hidden p-2">
          {SOCIAL_LINKS.map(({ icon, name, url, imageUrl }) => (
            <li key={name} className="w-full overflow-hidden rounded-xl">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-input/50 hover:bg-input flex h-12 w-full items-center justify-center gap-2"
              >
                {imageUrl && <Image src={imageUrl} alt={name} width={0} height={0} sizes="100vw" className="size-5" />}
                {icon && icon}
                {name}
              </a>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
