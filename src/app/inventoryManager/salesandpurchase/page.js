
import BarChartComponnet from "@/components/barChartPlot";


const page = () => {

  return (
    <>
      <div className="bg-gray-400 h-[700px]">
        <div className="w-[690px] bg-white mx-16  h-[360px] p-3 rounded-md ">
          <h1 className="font-medium text-[20px]">Sales & Purchase</h1>
          <div className="h-[300px] w-[600px]">
          <BarChartComponnet />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
