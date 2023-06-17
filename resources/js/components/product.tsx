import { useParams } from "react-router-dom";
import maks from "./products";
import React from 'react';

export function Product() {
  const { id } = useParams();

  const product = maks.find((mak) => mak.id == id);

  if (!product) {
    return <div>პროდუქტი არ მოიძებნა</div>;
  }

  return (
    <div>
      <div className="h-auto min-h-[65vh] w-3/4 mr-auto ml-auto">
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 mt-28">
          <div>
            <img className="invisible w-0 h-0 lg:w-auto lg:h-auto lg:visible" src="https://i.imgur.com/5PyPjFK.jpg" />{" "}
          </div>
          <div className="text-black md:ml-4 lg:ml-8 md:mr-16">
            <h1 className="text-3xl tracking-wide">
              {product.name} <br />
            </h1>
            <h2 className="text-gray-700">{product.price} ₾</h2>
            <div>
              <h3 className="pt-4 sm:pt-0">
                უფასო მიტანის სერვისი შესაძლებელია თბილისის მაშტაბით.! <br />
              </h3>
              <br />
              <div className="mb-4 sm:mb-0 text-center">
                <a href="tel:+995571174686" className="border border-solid border-black lg:p-3 p-1 rounded hover:bg-slate-900 hover:text-white">
                  შეგვეხმიანეთ შესაძენად
                </a>
              </div>
              <h1 className="pt-4 font-extrabold  text-lg">მონაცემები</h1> <br />
              ოპერატიული: {product.RAM} <br />
              მეხსიერება: {product.about} <br />
              მოდელი: {product.Processor} <br />
              დამტენი: 140ვატ <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
