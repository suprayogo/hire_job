import Link from "next/link";
import React, { useState } from "react";

function Navigation() {
  const [navActive, setNavActive] = useState(null);

  const setLocalStorage = {
    access:
      typeof window !== "undefined" ? localStorage.getItem("token") : false,
  };

  return (
    <div className="bg-white pb-3">
      <nav className="container pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <img src="/logo.png" alt="logo" />

          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            <div>
              {setLocalStorage.access ? (
                <>
                  <Link href="#"> 
                  <button
    className="btn btn-outline-primary"
    style={{ marginRight: "10px" }}
  >
    Keluar
  </button>
                   </Link>


                </>
              ) : (
                <>
{/*                  
                  <Link href="/login"> 
  <button
    className="btn btn-outline-primary"
    style={{ marginRight: "10px" }}
  >
    Masuk
  </button>
</Link>


<Link href="/register">
  <button button className="btn btn-primary">
    Daftar
  </button>
</Link> */}
                </>
              )}
            </div>

            {/* <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
