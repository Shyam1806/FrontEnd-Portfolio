import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="header-parents  ">
        <div className="container">
          <div className="header-parent flex flex-wrap justify-between">
            <div className="header-logo">
              <ul>
                <li>
                  <Link href="/">
                    Shyam
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-navigation">
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
                {/* <link href="/">About</link>
                        <link href="/"></link> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header