import { Carousel } from "@mantine/carousel";
import { Link } from "react-router-dom";
import React from "react";
import { Product } from "./products";

export function ImageCarousel({ mak }: { mak: Product }) {
  return (
    <div className="flex flex-col">
      <Carousel mx="auto" withIndicators>
        {mak.image?.map((s) => (
          <Carousel.Slide>
            <img src={s} />
          </Carousel.Slide>
        ))}
      </Carousel>

      <Link className="bg-white font-bold w-full h-full p-1 hover:border-b hover:pb-1 pb-[6px] hover:border-black hover:border-solid" to={`/product/${mak.id}`}>
        {mak.name} <br />
        <span className="font-normal text-sm text-[#666666]">{mak.price} ₾</span>
      </Link>
    </div>
  );
}
