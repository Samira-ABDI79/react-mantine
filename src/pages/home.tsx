import { SimpleGrid } from "@mantine/core";
import AboutMe from "../components/AboutMe";
import { BadgeCard } from "../components/Card";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return <>
<div className="ml-[320px]">
<h1 className="my-[10px] font-400 text-[36px]" >My Portfolio</h1>
</div>
<SimpleGrid style={{ gap: 20}} cols={3} mt="md" className="   py-[24px] px-[24px] mb-0 ml-[20%]"  >
<BadgeCard image="https://www.w3schools.com/w3images/mountains.jpg" title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla." />
</SimpleGrid>
<AboutMe />

<ContactMe />
  </>;
}
