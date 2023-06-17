import { Button, Input, MultiSelect, Select } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ImageCarousel } from './imagecarousel';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import maks from './products';
import { Admin } from './admin';
import { Product } from './product';

function Index() {
    return (
        <div className="h-auto min-h-[73.6vh]">
        <div className="w-9/12 ml-auto mr-auto">
          <header className="py-12 p-2 mt-20 text-3xl font-extrabold">
            <div>Apple MacBook's</div>
          </header>
          <form className="flex gap-5 lg:flex-row flex-col items-center justify-center">
            <Input.Wrapper label="სახელი">
              <Input type="text" />
            </Input.Wrapper>
            <Select
              label="ეკრანის ზომა"
              placeholder="აირჩიეთ"
              data={[
                { value: "", label: "აირჩიეთ" },
                { value: "13", label: "13" },
                { value: "14", label: "14" },
                { value: "16", label: "16" },
              ]}
            />
            <Select
              label="ოპერატიული"
              placeholder="აირჩიეთ"
              data={[
                { value: "", label: "აირჩიეთ" },
                { value: "8", label: "8" },
                { value: "16", label: "16" },
                { value: "32", label: "32" },
              ]}
            />
            <Select
              label="პროცესორი"
              placeholder="აირჩიეთ"
              data={[
                { value: "", label: "აირჩიეთ" },
                { value: "10", label: "10" },
                { value: "12", label: "12" },
                { value: "16", label: "16" },
                { value: "18", label: "18" },
              ]}
            />
            <MultiSelect
              label="კატეგორია"
              placeholder="აირჩიეთ"
              data={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
              ]}
            />
            <Select
              label="ფასი"
              placeholder="აირჩიეთ"
              data={[
                { value: "", label: "აირჩიეთ" },
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
            <div>
              <Button type="submit" className="text-black border border-solid px-2 py-1.5 bg-">
                ფილტრაცია
              </Button>
            </div>
          </form>
          <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 justify-center items-center gap-1 gap-y-10 justify-items-center">
            {maks.map((mak) => (
              <ImageCarousel mak={mak} />
            ))}
          </div>
        </div>
      </div>
      );
}

export default Index;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <div>
            <Routes>
        <Route index element={<Index />} />
        <Route path="admin" element={<Admin />} />
        <Route path="/product/:id" element={<Product />} />  
      </Routes>

        </div>
    )
}
