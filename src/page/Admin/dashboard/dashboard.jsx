import sale from "../../../assets/admin/dashboard/dashboard1.svg";
import customer from "../../../assets/admin/dashboard/dashboardchart.svg";
import order from "../../../assets/admin/dashboard/dashboardbar.svg";
import selling from "../../../assets/admin/dashboard/dashboardselling.svg";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#f6f6f6] w-full h-full">
        <div className="w-full h-full p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16">
            <div className="bg-white rounded-md border border-gray-200 p-7 ">
              <div className="flex flex-col space-y-16">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-semibold">Total Sales </h1>
                    <span>This month</span>
                  </div>
                  <div>
                    <span className="font-bold text-3xl">$4,235</span>
                  </div>
                </div>
                <img src={sale} alt="" />
              </div>
            </div>
            <div className="bg-white rounded-md border border-gray-200 p-7 ">
              <div className="flex flex-col space-y-16">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-semibold">Customer</h1>
                    <span>This Month</span>
                  </div>
                  <div>
                    <span className="font-bold text-3xl">$4,235</span>
                  </div>
                </div>
                <img src={customer} alt="" />
              </div>
            </div>
            <div className="bg-white rounded-md border border-gray-200 p-7 ">
              <div className="flex flex-col space-y-16">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-semibold">Orders </h1>
                    <span>MONTHLY GOAL: 1,000</span>
                  </div>
                  <div>
                    <span className="font-bold text-3xl">734</span>
                  </div>
                </div>
                <img src={order} alt="" />
              </div>
            </div>
            <div className="bg-white rounded-md border border-gray-200 ">
              <div className="flex flex-col  ">
                <div className="flex justify-between items-center p-7">
                  <div>
                    <h1 className="text-xl font-semibold">Best Selling </h1>
                    <span>This Month</span>
                  </div>
                </div>

                <hr />

                <div className="p-6">
                  <div>
                    <span className="font-bold text-3xl">
                      $2,400{" "}
                      <span className="text-lg font-normal">- Total Sale</span>
                    </span>
                  </div>
                  <div className="my-4 flex flex-col space-y-3">
                    <p className="text-base border border-gray-200 rounded-full px-4 py-1">
                      Classic Monochrome Tees —{" "}
                      <span className="font-semibold">$9,40 Sales</span>
                    </p>
                    <p className="text-base border border-gray-200 rounded-full px-4 py-1">
                      Monochromatic Wardrobe —{" "}
                      <span className="font-semibold">$790 Sales</span>
                    </p>
                    <p className="text-base border border-gray-200 rounded-full px-4 py-1">
                      Classic Monochrome Tees -{" "}
                      <span className="font-semibold">$9,40 Sales</span>
                    </p>
                    <div className="mt-9">
                      <img src={selling} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md border border-gray-200 p-7 col-span-1 lg:col-span-2 ">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-start items-center space-x-5 ">
                  <h1 className="text-xl font-semibold">Recent Orders</h1>
                  <button className="px-3 py-2 bg-[#f6f6f6] rounded-2xl text-black">
                    View All
                  </button>
                </div>
                <hr />
                <div className="w-full">
                  <table className="w-full">
                    <thead className="w-full  border-b-[1px] ">
                      <tr className="">
                        <td className="p-3  ">Item</td>
                        <td className="p-3  ">Date</td>
                        <td className="p-3  ">Total</td>
                        <td className="p-3  ">Status</td>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr>
                        <td className="p-3">Lorem ipsum dolor</td>
                        <td className="p-3">20 Mar, 2023</td>
                        <td className="p-3">$75.00</td>
                        <td className="p-3">Processing</td>
                      </tr>
                      <tr>
                        <td className="p-3">Lorem ipsum dolor</td>
                        <td className="p-3">20 Mar, 2023</td>
                        <td className="p-3">$75.00</td>
                        <td className="p-3">Processing</td>
                      </tr>
                      <tr>
                        <td className="p-3">Lorem ipsum dolor</td>
                        <td className="p-3">20 Mar, 2023</td>
                        <td className="p-3">$75.00</td>
                        <td className="p-3">Processing</td>
                      </tr>
                      <tr>
                        <td className="p-3">Lorem ipsum dolor</td>
                        <td className="p-3">20 Mar, 2023</td>
                        <td className="p-3">$75.00</td>
                        <td className="p-3">Processing</td>
                      </tr>
                      <tr>
                        <td className="p-3">Lorem ipsum dolor</td>
                        <td className="p-3">20 Mar, 2023</td>
                        <td className="p-3">$75.00</td>
                        <td className="p-3">Processing</td>
                      </tr>
                      <tr>
                        <td className="p-3">Lorem ipsum dolor</td>
                        <td className="p-3">20 Mar, 2023</td>
                        <td className="p-3">$75.00</td>
                        <td className="p-3">Processing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
