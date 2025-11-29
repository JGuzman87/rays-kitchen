"use client"
import { useCount } from '@/context/CountContext';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';


const Nav = () => {
  const { count } = useCount();
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <ul className="p-2">
                <li>
                  <Link href={"/menu/lunch"}>Lunch Menu</Link>
                </li>
                <li>
                  <Link href={"/menu/desserts"}>Dessert Menu</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href={"/"}>
        <img src='/logo.png' alt="logo" className='w-20'/>
        
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="btn-ghost"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              Menus
            </button>

            <ul
              className="dropdown dropdown-center menu w-52 rounded-box bg-base-100"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <li>
                <Link href={"/menu/lunch"}>Lunch Menu</Link>
              </li>
              <li>
                <Link href={"/menu/desserts"}>Dessert Menu</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/order"}>Order Online</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-4">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">{count}</span>
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2a1 1 0 001 1.3h11.6a1 1 0 001-1.3L17 13M7 13h10m-5 8a1 1 0 110 2 1 1 0 010-2zm-4 0a1 1 0 110 2 1 1 0 010-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

}

export default Nav;


