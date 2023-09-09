import {
   
  
    Text,
    SimpleGrid,
    UnstyledButton,
   

  } from '@mantine/core';
  import {

    IconMapPinFilled,
    IconPhoneFilled,
    IconMailFilled,
   
  } from '@tabler/icons-react';
import { useContext } from 'react';
import { UserContext } from '../main';
  
 
  
  
  export function ActionsGrid() {
    const { user } = useContext(UserContext);
 
    const mockdata = [
      { title: user.email, icon: IconMailFilled, color: 'violet' },
      { title: user.location, icon: IconMapPinFilled, color: 'indigo' },
      { title: user.phoneNumber, icon: IconPhoneFilled, color: 'blue' },
     
    ];
    const items = mockdata.map((item) => (
      <UnstyledButton key={item.title} className={`${item.title==='Tehran'?'bg-green':'bg-gray2'} text-white flex just items-center flex-col py-[16px] `}>
        <item.icon color="#fff" size="2rem" />
        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </UnstyledButton>
    ));
  
    return (
      
        <SimpleGrid style={{ gap: 0 }} cols={3} mt="md" >
       {items}
        </SimpleGrid>
    
    );
  }