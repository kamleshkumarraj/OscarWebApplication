import { NavLink, Outlet } from "react-router-dom";

function MyOrder() {
  const navHandler = (status) => {
    return status
      ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-b-4 border-indigo-500 px-5 py-2 rounded-t-lg shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out"
      : "text-gray-600 hover:text-purple-600 px-5 py-2 transition-transform transform hover:scale-105 duration-300 ease-in-out";
  };

  return (
    <div
      id="my-order"
      className="w-full md:col-start-2 md:col-end-4 p-8 bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-xl"
    >
      <h1 className="font-poppins font-bold text-left text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight text-gray-900 mb-8">
        My Orders
      </h1>

      <div
        id="order-header"
        className="flex justify-around items-center border-b-2 border-gray-200 mb-10"
      >
        <NavLink
          to={"/my-orders/active"}
          className={({ isActive }) => navHandler(isActive)}
        >
          <p className="font-poppins font-medium text-lg lg:text-xl xl:text-2xl">
            Active
          </p>
        </NavLink>
        <NavLink
          to={"/my-orders/canceledOrder"}
          className={({ isActive }) => navHandler(isActive)}
        >
          <p className="font-poppins font-medium text-lg lg:text-xl xl:text-2xl">
            Canceled
          </p>
        </NavLink>
        <NavLink
          to={"/my-orders/completed"}
          className={({ isActive }) => navHandler(isActive)}
        >
          <p className="font-poppins font-medium text-lg lg:text-xl xl:text-2xl">
            Completed
          </p>
        </NavLink>
      </div>

      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default MyOrder;
