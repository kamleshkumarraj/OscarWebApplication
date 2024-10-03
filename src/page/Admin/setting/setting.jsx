// import React from "react";

const Setting = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
  };
  return (
    <div className="p-7 bg-gray-100 h-full">
      <div className="bg-white w-full h-full border border-gray-200 rounded-md">
        <div className="flex flex-col ">
          <div className="flex justify-between items-center p-4 px-12">
            <div>
              <h2 className="text-2xl font-medium ">Setting</h2>
            </div>
          </div>
          <hr />
          <div className=" w-4/12 ">
            <div className="p-12 py-16 mt-4">
              <form action="" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-x-24 gap-y-9">
                  <div className="flex flex-col  space-y-2">
                    <label htmlFor="siteName">Site Name</label>
                    <input
                      id="siteName"
                      name="siteName"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>
                  <div className="flex flex-col  space-y-2">
                    <label htmlFor="supportEmail">Support Email</label>
                    <input
                      id="supportEmail"
                      name="supportEmail"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>

                  <div className="flex flex-col  space-y-2">
                    <label htmlFor="monthlyGoal">Monthly Goal</label>
                    <input
                      id="monthlyGoal"
                      name="monthlyGoal"
                      type="text"
                      className="border border-gray-300 rounded-md px-4 py-3 "
                    />
                  </div>
                  <div className="mt-10">
                    <button className="bg-[#0e1422] text-white px-5 py-3 rounded-md ">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
