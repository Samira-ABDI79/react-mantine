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
  
  const mockdata = [
    { title: 'samiraabdiurmi*@gmail.com', icon: IconMailFilled, color: 'violet' },
    { title: 'Tehran', icon: IconMapPinFilled, color: 'indigo' },
    { title: '0933918334*', icon: IconPhoneFilled, color: 'blue' },
   
  ];
  
  
  export function ActionsGrid() {
 
  
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