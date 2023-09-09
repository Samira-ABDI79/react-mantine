import  { ReactElement } from 'react';
import { Card, Text } from '@mantine/core';

import Progressbar from './Progressbars';

interface Props {}

const AboutMe = ({}: Props): ReactElement => {
    interface Skill {
        value: string;
        title: string;
      }
  const technicalSkills: Skill[] = [
   {value:"100%",title: 'HTML'},

   {value:"100%",title: 'CSS'},

    {value:"60%",title:'JavaScript'},
   {value:"80%",title: 'Git'},
   {value:"70%",title: 'Npm'},


   {value:"80%",title: 'React'},
   {value:"90%",title: 'Tailwind'},
   {value:"40%",title: 'Mantine'},
   {value:"80%",title: 'Material UI'},



    {value:"1%",title:'Sass'},
    {value:"20%",title:'Vite'},
    {value:"1%",title:'Testing'},
    {value:"20%",title:'Next.js'},
    {value:"60%",title:'TypeScript'},





  ];

  return (
    <div id="AboutMe" className=" ml-[20%] py-[24px] px-[24px] mb-0 ">
    <Card  bg="#f1f1f1"   p={0}>
   
      <Text size={20} variant='h4' weight={500} style={{ marginBottom: '16px' }}>
      About Me
      </Text>
      <Text size={15}>
      I am a self-taught front-end developer. I primarily focus on writing clean, elegant, and efficient code. I am proficient in HTML, CSS, JavaScript . 
      </Text>
      <Text variant='h4' size={20} weight={400} my={10}  >
      Technical Skills
      </Text>
      <ul >
        {technicalSkills.map((skill, ) => (
          <Progressbar title={skill.title} value={skill.value} />
        ))}
      </ul>

    </Card>
    </div>
  );
};

export default AboutMe;