import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Category from "./Category";
import heroImage from "../../assets/hero_images.png";

export const Home = () => {
  const PopularBooks = useSelector((state) => state.popularBooks);
  console.log(PopularBooks);

  return (
    <>
      <section className="container flex flex-wrap py-10 mt-5 gap-5 justify-center">
      <div id="hero_Section" className="bg-bgBanner h-[450px] flex md:flex-row flex-col md:justify-center justify-start items-start md:items-center w-full p-5 gap-10">
                <div className="w-1/2">
                    <h2 className="md:text-5xl text-4xl text-left font-semibold font-Poppins mb-2">The Ultimate Library Management Tool</h2>
                </div>
                <img src={heroImage} alt="hero_image" className='w-96 h-auto' />
            </div>
        <Category />
        {PopularBooks.map((book) => {
          return (
            <Card
              id={book.id}
              category={"popularBooks"}
              key={book.id}
              coverImage={book.coverImage}
              title={book.title}
            />
          );
        })}
      </section>
    </>
  );
};
