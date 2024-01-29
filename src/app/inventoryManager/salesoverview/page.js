import React from "react";
import Image from "next/image";
import Sales from '../salesoverview/Sales.png'
import Revenue from '../salesoverview/Revenue.png'
import Profit from '../salesoverview/Profit.png'
import Cost from '../salesoverview/Cost.png'

const page = () => {
  return (
    <>
      <div className="bg-gray-400 h-[1000px]">
        <div className="w-[690px] bg-white mx-16  h-[163px] p-3 rounded-md ">
          <p className="font-medium text-[20px]"> Sales Overview</p>

          <div className="flex gap-6 items-end justify-center pt-3 ">
            <div className="flex flex-col items-center w-[140px] mr-[-9px]  ">
              {/* <MdInventory /> */}
              <Image
                src={Sales}
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <div className="flex justify-center items-center gap-10">
              <p className="pt-2 font-semibold text-gray-600">&#8377; 832</p>
              <p className="text-sm font-medium pt-2 text-gray-500">Sales</p>
              </div>
            </div>

            <div className="  border-gray-200 h-[80px]  border-l "></div>
            {/* border-[1px] */}
            <div className="flex flex-col items-center w-[160px] mr-[-9px] ml-[-9px]">
              {/* <MdInventory /> */}
              <Image
                src={Revenue}
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <div className="flex justify-center items-center gap-5">
              <p className="pt-2 font-semibold text-gray-600">&#8377; 18,300</p>
              <p className="text-sm font-medium pt-2 text-gray-500">Revenue</p>
              </div>
            </div>

            <div className="  border-gray-200 h-[80px]  border-l "></div>

            <div className="flex flex-col items-center w-[140px] mr-[-9px] ml-[-9px]">
              {/* <MdInventory /> */}
              <Image
                src={Profit}
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <div className="flex justify-center items-center gap-10">
              <p className="pt-2 font-semibold text-gray-600">&#8377; 868</p>
              <p className="text-sm font-medium pt-2 text-gray-500">Profit</p>
              </div>
            </div>

            <div className="  border-gray-200 h-[80px]  border-l "></div>

            <div className="flex flex-col items-center w-[160px] mr-[-9px] ml-[-9px]">
              {/* <MdInventory /> */}
              <Image
                src={Cost}
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <div className="flex justify-center items-center gap-8">
              <p className="pt-2 font-semibold text-gray-600">&#8377; 17,432</p>
              <p className="text-sm font-medium pt-2 text-gray-500">Cost</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default page;
