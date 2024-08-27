import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
// import { TechStack } from "@/components/TechStack";
// import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Исәнмесез! I&apos;m Timur</Heading>
      <p className="italic text-sm lg:text-xl font-normal text-secondary"><span className="text-2xl">↑</span> Means &quot;Hello&quot; in Tatar language (my native tongue)</p>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m an aspiring software engineer passionate  about {" "}<Highlight>volunteering</Highlight>{" "} and {" "}<Highlight>using tech for positive change</Highlight>{" "}.
        I am a big fan of self-education, which is how I learned Web/Mobile Development and Robotics.         
      
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently interested in {" "}<Highlight>Machine learning</Highlight>{" "}, and {" "}<Highlight>Cybersecurity</Highlight>{" "}.
      </Paragraph>

       <Paragraph className="max-w-xl mt-4">
        In my free time, I like to go {" "}<Highlight>rock climbing</Highlight>{" "} with friends and exersice in the {" "}<Highlight>gym</Highlight>{" "}.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      {/* <TechStack /> */}
    </Container>
  );
}
