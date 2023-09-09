
import AboutMe from "../components/AboutMe";

import ContactMe from "../components/ContactMe";

import WorkSample from "../components/WorkSample";

export default function Home() {
  return <>
<div className=" ml-[20%] py-[24px] px-[24px]">
<h1 className="my-[10px] font-400 text-[36px]" >My Portfolio</h1>
</div>
<WorkSample />
<AboutMe />

<ContactMe />
  </>;
}
