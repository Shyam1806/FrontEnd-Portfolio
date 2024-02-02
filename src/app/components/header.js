'use client';
import React from 'react'
import Link from "next/link";
import { stack as Menu } from 'react-burger-menu'

const Header = () => {
 
  return (
    <>
      <div className="header-parents  ">
        <div className="container">
          <div className="header-parent flex flex-wrap justify-between">
            <div className="header-logo">
              <ul>
                <li>
                  <Link href="/" target='blank'>
                    Shyam
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-navigation lg:block md:block sm:hidden">
              <ul className="flex flex-wrap justify-between">
                <li>
                  <Link href="/skills">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/work">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/blogs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="burgermenus lg:hidden sm:block md:hidden">
              <Menu right>
                <a href="/skills">
                  Skills
                </a>
                <Link href="/work">
                    Work
                  </Link>
                  <Link href="/blogs">
                    Blogs
                  </Link>
                  <Link href="/contact">
                    Contact
                  </Link>
              </Menu>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header