import React from "react";
import binoculars from "./icons/binoculars .png"

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center w-full h-dvh justify-center text-center px-2.5">
        <div className="flex flex-col gap-2">
            <img src={binoculars} alt="binoculars" />
            <h1 className="font-black text-2xl text-[red]">404 - Страница не найдена</h1>
            <p className="text-xl">Извините, мы не можем найти запрашиваемую страницу.</p>
        </div>
    </div>
  );
};

export default NotFound;