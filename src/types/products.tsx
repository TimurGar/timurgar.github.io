export type Product = {
  robotics: boolean | undefined;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
