import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { Products } from "@/components/Products";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product: Product | undefined = products.find(
    (product: Product) => product.slug === slug
  );

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Timur's Portfolio",
      description:
        "Projects that Timur has worked on, including web development, mobile development, and robotics.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product: Product | undefined = products.find(
    (product: Product) => product.slug === slug
  );

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
