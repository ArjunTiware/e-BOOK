import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
    <h1 className="text-4xl font-semibold">Catergories book</h1>
      <section className="container flex gap-12 mx-auto justify-center">
        <Link to={"/browsebooks/fictionBooks"}>
          <div className="flex flex-col justify-center">
            <p className="p-2 text-white rounded-full bg-black font-medium text-md mx-auto">
              Fiction Books
            </p>
          </div>
        </Link>

        <Link to={"/browsebooks/sciFiBooks"}>
          <div className="">
            <p className="p-2 text-white rounded-full bg-black font-medium text-md">
              Sci-Fic Books
            </p>
          </div>
        </Link>

        <Link to={"/browsebooks/nonFictionBooks"}>
          <div className="">
            <p className="p-2 text-white rounded-full bg-black font-medium text-md">
              Non-Fiction Books
            </p>
          </div>
        </Link>
      </section>
      <br /> <br />
    </>
  );
};

export default Category;
