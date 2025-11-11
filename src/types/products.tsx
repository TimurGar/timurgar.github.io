export type Product = {
  robotics: boolean | undefined;
  title: string;
  description: string | React.ReactNode;
  thumbnail: string;
  images: string[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
