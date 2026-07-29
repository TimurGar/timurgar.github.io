import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Analytics } from "@vercel/analytics/react"

// import { TechStack } from "@/components/TechStack";
// import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Исәнмесез! I&apos;m Timur</Heading>
      <p className="italic text-sm lg:text-xl font-normal text-secondary">
        <span className="text-2xl">↑</span> Means &quot;Hello&quot; in Tatar
        language (my native tongue)
      </p>
      <Paragraph className="max-w-xl mt-4">
        I design and build <Highlight>digital products</Highlight> that are{" "}
        <Highlight>intuitive</Highlight>, <Highlight>scalable</Highlight>, and{" "}
        <Highlight>purpose-driven</Highlight>. My work sits at the
        intersection of <Highlight>design</Highlight> and{" "}
        <Highlight>development</Highlight>, where I focus on creating
        experiences that not only look great but also solve meaningful
        problems.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        With a background in <Highlight>software engineering</Highlight>,{" "}
        <Highlight>economics</Highlight>, and <Highlight>AI</Highlight>, I
        enjoy translating ideas into products that balance user experience,
        technical excellence, and business impact. From{" "}
        <Highlight>websites and web applications</Highlight> to{" "}
        <Highlight>intelligent tools and automation</Highlight>, I believe
        thoughtful design and clean engineering should work together.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        Outside of work, I enjoy <Highlight>rock climbing</Highlight> and
        training in the <Highlight>gym</Highlight>, activities that reinforce
        discipline, resilience, and continuous growth.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      {/* <TechStack /> */}
      <Analytics />
    </Container>
  );
}
