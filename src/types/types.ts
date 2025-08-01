export type TPainting = {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: string;
    name: string;
  };
  images: {
    galleryWidth: number;
    galleryHeight: number;
    heroLargeWidth: number;
    heroLargeHeight: number;
    heroSmallWidth: number;
    heroSmallHeight: number;
    thumbWidth: number;
    thumbHeight: number;
    thumbnail: string;
    hero: {
      small: string;
      large: string;
    };
    gallery: string;
  };
};
