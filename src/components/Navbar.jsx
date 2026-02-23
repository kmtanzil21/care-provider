"use client";

import Link from "next/link";
import React from "react";
import NavLink from "./buttons/NavLink";

const Navbar = () => {
  return (
    <div className="w-full bg-base-100 shadow-sm">

      <div className="navbar max-w-7xl mx-auto">

        {/* LEFT */}
        <div className="navbar-start">

          <div className="dropdown">

            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
            >
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/services">Services</NavLink></li>
              <li><NavLink href="/bookings">Bookings</NavLink></li>
            </ul>

          </div>

          <Link className="btn btn-ghost text-xl" href="/">
            <span className="text-primary font-bold">Care.xyz</span>
          </Link>

        </div>


        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal px-1">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/services">Services</NavLink></li>
            <li><NavLink href="/bookings">My Bookings</NavLink></li>
          </ul>

        </div>


        {/* RIGHT */}
        <div className="navbar-end">
          <button className="btn btn-primary btn-outline font-extrabold rounded-xl text-black">
            <Link href="/login">
              Login
            </Link>
          </button>
        </div>

      </div>

    </div>
  );
};

export default Navbar;