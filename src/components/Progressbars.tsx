import { Text } from "@mantine/core";

interface PropType{
    title:string
}
export default function Progressbar({title}:PropType){
    return(
        <>
        <Text >
{title}
        </Text>
        <div className="relative pt-1">
  <div className="overflow-hidden h-6 mb-4 text-xs flex  bg-gray3 ">
    <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray2"></div>
  </div>
</div>
        </>
        )
}