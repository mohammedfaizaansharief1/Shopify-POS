"use client";
import Image from "next/image";
import image from "@/app/inventory/On the way.png";
import image1 from "@/app/inventory/Quantity.png";
import Cost from "@/app/inventory/Cost.png";
import Profit from "@/app/inventory/Profit.png";
import Revenue from "@/app/inventory/Revenue.png";
import Sales from "@/app/inventory/Sales.png";
import BarChartComponnet from "@/components/barchart";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function ChaiPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    // main div
    <div className="bg-gray-400 h-[750px] grid grid-col-1 grid-row-1 grid-flow-col ">
      {/* inventory summary part */}
      <div className="w-[384px] bg-white mx-16  h-[163px] p-3 rounded-md ">
        <p className="font-medium text-[20px]"> Inventory Summary</p>

        <div className="flex gap-6 items-end justify-center pt-3 ">
          <div className="flex flex-col items-center w-[200px] mr-[-9px] ">
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

          <div className="flex flex-col items-center w-[200px] ml-5  ">
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

      {/* sales overview part */}
      <div className="bg-gray-400 h-[750px]">
        <div className="w-[690px] bg-white mx-16  h-[163px] p-3 rounded-md ">
          <p className="font-medium text-[20px]"> Sales Overview</p>

          <div className="flex gap-6 items-end justify-center pt-3 ">
            <div className="flex flex-col items-center w-[140px] mr-[-9px]  ">
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
            <div className="flex flex-col items-center w-[160px] mr-[-9px] ml-[-9px]">
              <Image
                src={Revenue}
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <div className="flex justify-center items-center gap-5">
                <p className="pt-2 font-semibold text-gray-600">
                  &#8377; 18,300
                </p>
                <p className="text-sm font-medium pt-2 text-gray-500">
                  Revenue
                </p>
              </div>
            </div>

            <div className="  border-gray-200 h-[80px]  border-l "></div>

            <div className="flex flex-col items-center w-[140px] mr-[-9px] ml-[-9px]">
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
              <Image
                src={Cost}
                width={30}
                height={30}
                alt="Picture of the author"
              />
              <div className="flex justify-center items-center gap-8">
                <p className="pt-2 font-semibold text-gray-600">
                  &#8377; 17,432
                </p>
                <p className="text-sm font-medium pt-2 text-gray-500">Cost</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sales and purchase part */}
      <div className="bg-gray-400 h-[750px]">
        <div className="w-[690px] bg-white mx-16  h-[360px] p-3 rounded-md ">
          <div className="flex justify-between w-[660px]">
            <h1 className="font-medium text-[20px]">Sales & Purchase</h1>

            {/* Calender */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[200px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setDate(addDays(new Date(), parseInt(value)))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="0">Today</SelectItem>
                    <SelectItem value="1">Tomorrow</SelectItem>
                    <SelectItem value="3">In 3 days</SelectItem>
                    <SelectItem value="7">In a week</SelectItem>
                  </SelectContent>
                </Select>
                <div className="rounded-md border">
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="h-[300px] w-[600px]">
            <BarChartComponnet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChaiPage;
