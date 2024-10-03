import React from "react";

const AddressCard = () => {
  const data = [
    {
      name: "Jhanvi shah",
      phone: "8980252445",
      address:
        "1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road",
      home: "Home",
      default: "Default billing address",
      remove: "Remove",
      edit: "Edit",
    },
    {
      name: "Jhanvi shah",
      phone: "8980252445",
      address:
        "1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road",
      home: "Home",
      default: "Default billing address",
      remove: "Remove",
      edit: "Edit",
    },
    {
      name: "Jhanvi shah",
      phone: "8980252445",
      address:
        "1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road",
      home: "Home",
      default: "Default billing address",
      remove: "Remove",
      edit: "Edit",
    },
    {
      name: "Jhanvi shah",
      phone: "8980252445",
      address:
        "1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road",
      home: "Home",
      default: "Default billing address",
      remove: "Remove",
      edit: "Edit",
    },
  ];
  return (
    <>
      {data.map((item, i) => (
        <div
          key={i}
          className="lg:px-10 md:px-5 px-10 py-6 bg-gray-100 rounded-xl"
        >
          <div className="flex flex-col gap-4 font-medium">
            <h1 className="font-bold lg:text-lg text-md">{item.name}</h1>
            <p className="text-gray-500">{item.phone}</p>
            <p className="text-gray-500">{item.address}</p>
            <div className="flex gap-4">
              <button className="text-gray-500 border py-2 px-3 text-sm lg:text-md border-gray-500 rounded-lg font-semibold">
                {item.home}
              </button>
              <button className="text-gray-500 border py-2 px-3 text-sm lg:text-md border-gray-500 rounded-lg font-semibold">
                {item.default}
              </button>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">{item.remove}</span>
              <span className="font-semibold">|</span>
              <span className="font-semibold">{item.edit}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressCard;
