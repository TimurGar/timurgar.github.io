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
        I am a Computer Science and Economics student focused on data-driven
        decision making and scalable problem solving. I care about translating
        technical insights into measurable business impact and improving how
        organizations operate.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        My interests span <Highlight>machine learning</Highlight> and{" "}
        <Highlight>web development</Highlight>. I enjoy analyzing systems,
        identifying inefficiencies, and building practical tools that support
        forecasting, optimization, and better strategic decisions.
      </Paragraph>

      <Paragraph className="max-w-xl mt-4">
        Outside of work, I spend time <Highlight>rock climbing</Highlight> and
        training in the <Highlight>gym</Highlight>, activities that reinforce
        discipline, resilience, and steady progress.
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
