import { NumberInput, TextInput } from "@mantine/core";
import React from "react";

export function Admin() {
  return (
    <div className="h-auto min-h-[73.6vh]">
      <div className="w-9/12 ml-auto mr-auto bg-[#e4e4e4] mb-10 pb-5 px-5">
        <header className="py-12 p-2 mt-20 text-3xl font-extrabold">
          <div>შექმენით პროდუქტი</div>
        </header>
        <form className="text-center flex w-auto  my-12  gap-1 gap-y-10 items-center justify-center flex-col">
          <TextInput placeholder="სახელი" label="სახელი" withAsterisk className="w-[215px]" />
          <TextInput placeholder="ეკრანის ზომა" label="ეკრანის ზომა" className="w-[215px]" withAsterisk />
          <TextInput placeholder="პროცესორი" label="პროცესორი" withAsterisk className="w-[215px]" />
          <TextInput placeholder="ოპერატიული" label="ოპერატიული" withAsterisk className="w-[215px]" />
          <NumberInput placeholder="ფასი" label="ფასი" withAsterisk className="w-[215px]" />
          <TextInput placeholder="კატეგორია" label="კატეგორია" withAsterisk className="w-[215px]" />
          <button type="submit" className="px-4 text-white py-1 hover:bg-[#184b28ee] bg-[#0e6128ee] rounded-md">შექმენით</button>
        </form>
      </div>
    </div>
  );
}
