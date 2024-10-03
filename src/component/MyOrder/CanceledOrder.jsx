function CanceledOrder() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-400 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-poppins font-semibold text-white">Order Canceled</h1>
      <p className="text-sm text-white mt-2">
        Unfortunately, this order has been canceled. Please contact support if you need further assistance.
      </p>
    </div>
  );
}

export default CanceledOrder;
