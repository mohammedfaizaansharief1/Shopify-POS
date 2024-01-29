import React from "react";
// import { MdInventory } from "react-icons/md";
import Image from "next/image";
import image from '..//inventorysummary/Quantity.png'
import image1 from '..//inventorysummary/On the way.png'

// import { Button } from '@/components/ui/button'
{
  /* <Button>Click Me</Button> */
}

const page = () => {
  return (
    <>
      <div className="bg-gray-400 h-[1000px]">

        <div className="w-[384px] bg-white mx-16  h-[163px] p-3 rounded-md ">

          <p className="font-medium text-[20px]"> Inventory Summary</p>

          <div className="flex gap-6 items-end justify-center pt-3 ">

            <div className="flex flex-col items-center w-[200px] mr-[-9px] ">

              {/* <MdInventory /> */}
              <Image
                src={image}
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <p className="pt-2 font-semibold text-gray-600">868</p>
              <p className="text-sm font-medium pt-2">Quantity in Hand</p>
            </div>

            <div className="  border-gray-200 h-[80px]  border-l "></div>
            {/* border-[1px] */}
            <div className="flex flex-col items-center w-[200px] ml-5  ">
              {/* <MdInventory /> */}
              <Image
                src={image1}
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <p className="pt-2 font-semibold text-gray-600">200</p>
              <p className="text-sm font-medium pt-2">To be received</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
