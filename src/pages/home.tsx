import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";

export default function Home() {
  return <>
<div className="ml-[320px]">
<h1 className="my-[10px] font-400 text-[36px]" >My Portfolio</h1>
</div>
<AboutMe />

<ContactMe />
  </>;
}
