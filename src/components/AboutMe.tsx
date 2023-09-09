import  { ReactElement } from 'react';
import { Card, Text } from '@mantine/core';

import Progressbar from './Progressbars';

interface Props {}

const AboutMe = ({}: Props): ReactElement => {
  const technicalSkills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Sass',

  ];

  return (
    <div className=" ml-[20%] py-[24px] px-[24px] mb-0 ">
    <Card  bg="#f1f1f1" >
   
      <Text size={20} variant='h4' weight={500} style={{ marginBottom: '16px' }}>
      About Me
      </Text>
      <Text size={15}>
      I am a self-taught front-end developer. I primarily focus on writing clean, elegant, and efficient code. I am proficient in HTML, CSS, JavaScript . 
      </Text>
      <Text variant='h4' size={20} weight={400}  >
      Technical Skills
      </Text>
      <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>
        {technicalSkills.map((skill, index) => (
          <Progressbar title={skill} />
        ))}
      </ul>

    </Card>
    </div>
  );
};

export default AboutMe;