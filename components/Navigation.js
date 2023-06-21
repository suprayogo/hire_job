import Link from "next/link";
import React, { useState, useEffect } from "react";

function Navigation() {
  const [navActive, setNavActive] = useState(null);

  const [access, setAccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAccess(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setAccess(false);

    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
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
              {access ? (
                <div>
                <Link href="/"    className="text-black fw-medium text-decoration-none"
                style={{marginRight: "620px"}} >
                 
                
                  Home
                </Link>
            
                <Link href="/profile" >
                  <button
                   className="btn btn-primary me-3"
                
                  >Profile</button>
                </Link>
            
            <Link href="#" >
                  <button
                   className="btn btn-primary"
                  onClick={handleLogout}
                  >Keluar</button>
                </Link>

                </div>
              ) : (
                <>
                  <Link href="/login">
                    <button
                      className="btn btn-outline-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Masuk
                    </button>
                  </Link>

                  <Link href="/register">
                    <button className="btn btn-primary">Daftar</button>
                  </Link>
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
