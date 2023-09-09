import { useContext, useState } from "react";
import { Image, Navbar } from "@mantine/core";
import {
 
  IconBrandGithub,

  IconBrandLinkedin,
 
  IconBrandWindows,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import { UserContext } from "../main";



const tabs = {
  account: [
    { link: "", label: "PORTFOLIO", icon: IconBrandWindows },
    { link: "#AboutMe", label: "ABOUT", icon: IconUser },
    { link: "", label: "CONTACT", icon: IconMail },
  ],
};

export function NavbarSegmented() {
  // const { classes, cx } = useStyles();
  const [section, setSection] = useState<"account">("account");
  const [active, setActive] = useState("Billing");
  const { user } = useContext(UserContext);
  const socialMediaIcons = {
    account: [
    
      { link: user.linkdin, label: "Linkedin", icon: IconBrandLinkedin },
      { link: user.github, label: "Github", icon: IconBrandGithub },
  
    ],
  };
  
  const links = tabs[section].map((item) => (
  <div className="py-[8px] px-[16px] w-full hover:bg-gray1 ">
      <a
     className="flex justify-start items-center w-36 "
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className="text-black mr-[16px]" stroke={1.5} />
      <span>{item.label}</span>
    </a>
  </div>
  ));
  const socialMedia = <div className="flex justify-between items-center w-16 my-[16px] pl-[16px]" >
   { socialMediaIcons[section].map((item) => (
    <a
      className="text-black"
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className="text-black text-[18px] hover:text-gray"  />
    </a>
  ))}
  </div>

  return (
    <Navbar height={840} width={{ sm: 300 }} className="py-[32px] w-[20%] fixed h-full">

     <Image style={{borderRadius:'20px'}} className="pl-[16px]" radius={4} src={user.profile} alt="user image" width={140} height={130} />
      <h4 className="pl-[16px] font-bold my-[10px]">PORTFOLIO</h4>
      <p className="text-gray  pl-[16px]">{user.name}</p>
      <Navbar.Section grow mt="xl">
        {links}
        {socialMedia}
      </Navbar.Section>
    </Navbar>
  );
}
