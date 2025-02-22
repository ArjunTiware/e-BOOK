import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <div className="logo bg-white fixed z-30"><p className="text-3xl font-medium text-gray-700 mt-2 ml-4">e-BOOK</p></div>
      <div className="navbar flex justify-end bg-white mr-10 fixed w-full top-0">
        <ul className="flex list-none gap-5">
          <NavLink to={"/"}>
            <li>
              <i className="fa-solid fa-house">&nbsp;</i>HOME
            </li>
          </NavLink>

          <li className="relative group">
            <i className="fa-solid fa-book">
              &nbsp;
            </i>
            BROWSE BOOKS <i class="fa-solid fa-caret-down"></i>
            <div
              className={`bg-slate-300 absolute group-hover:block hidden p-4 top-6`}
            >
              <Link to={"/browsebooks/sciFiBooks"}>
                <p className="hover:bg-black p-1 hover:text-white">
                  Science
                </p>
              </Link>

              <Link to={"/browsebooks/fictionBooks"}>
                <p className="hover:bg-black p-1 hover:text-white">
                  Fiction
                </p>
              </Link>

              <Link to={"/browsebooks/nonFictionBooks"}>
                <p className="hover:bg-black p-1 hover:text-white">
                  Non-Fiction
                </p>
              </Link>
            </div>
          </li>

          <NavLink to={"/Addbook"}>
            <li>
              {" "}
              <i
                className="fa-solid fa-cart-plus"
              ></i>
              &nbsp;ADD NEW BOOK
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};
