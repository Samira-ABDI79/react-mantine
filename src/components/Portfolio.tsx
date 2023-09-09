import { Image } from "@mantine/core";

export default function Portfolio(){
    return(
        <>
     <Image style={{borderRadius:'20px'}} className="pl-[16px]" radius={4} src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?size=626&ext=jpg&ga=GA1.1.1639797349.1687076402&semt=sph" alt="user image" width={500} height={500} />
     <div className=" ml-[20%] py-[24px] px-[24px]">
<h1 className="my-[10px] font-400 text-[36px]" >My Portfolio</h1>
</div>
        </>
    )
}