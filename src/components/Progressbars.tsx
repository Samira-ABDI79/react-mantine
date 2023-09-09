import { Text } from "@mantine/core";

interface PropType{
    title:string
    value:string
}
export default function Progressbar({title,value}:PropType){
    return(
        <>
        <Text >
{title}
        </Text>
        <div className="relative pt-1">
  <div className="overflow-hidden h-12 mb-4 text-xs flex  bg-gray3 ">
    <div style={{ width: value }} className="shadow-none flex flex-col text-[15px] text-center whitespace-nowrap text-white justify-center bg-gray2">{value}</div>
  </div>
</div>
        </>
        )
}