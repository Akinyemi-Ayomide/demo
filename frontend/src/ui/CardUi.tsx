import React from 'react';
import useProductStore from '../store/useProductStore';
interface Product {
  itemid: string;
  itemname: string;
  itemprice: number;
  itemImg: string[];
}
const CardUi: React.FC<Product> = ({
  itemid,
  itemImg,
  itemname,
  itemprice,
}) => {
  const { currencySymbol } = useProductStore();
  return (
    <div>
      <div
        key={itemid}
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <img
          src={itemImg[0]}
          alt={itemname}
          className=" h-full w-full rounded-2xl shadow-lg object-cover md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px]"
        />
        <div className="flex` flex-col items-center justify-center text-center p-2">
          <h1 className="font-bold text-[12px] md:text-[15px]">{itemname}</h1>
          <p>
            {currencySymbol}
            {itemprice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardUi;
