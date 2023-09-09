import { SimpleGrid, Text } from "@mantine/core";
import { WorkSamples } from "../data";
import { BadgeCard } from "./Card";

export default function WorkSample(){
    return(
        <>
          <div  className=" ml-[20%] py-[24px] px-[24px] mb-0 ">
          <Text size={20} variant='h4' weight={500} style={{ marginBottom: '16px' }}>
          Examples Of My Work
      </Text>
      <SimpleGrid style={{ gap: 20}} cols={3} mt="md" className="    mb-0 "  >
{WorkSamples.map((item, ) => (
         <BadgeCard image={item.image} title={item.title} description={item.description} link={item.link}/>

        ))}
</SimpleGrid>
          </div>
        </>
    )
}