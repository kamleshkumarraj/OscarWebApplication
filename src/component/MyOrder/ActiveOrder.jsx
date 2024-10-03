import OrderCard from './OrderCard';

function ActiveOrder() {
  return (
    <div className="mt-8 text-[18px] font-poppins flex flex-col gap-8">
      <h2 className="ml-2 text-2xl font-semibold text-gray-800 mb-1">Active Orders</h2>
      <div className="space-y-6">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}

export default ActiveOrder;
