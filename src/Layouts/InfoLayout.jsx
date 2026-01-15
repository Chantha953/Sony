import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const InfoLayout = () => {
  const location = useLocation();

  const navigation = [
    { id: 1, name: "My Profile", link: "profile", icon: <i className="fa-regular fa-user ms-1"></i> },
    { id: 2, name: "My Order", link: "orders", icon: <i className="fa-solid fa-list ms-2"></i> },
    { id: 3, name: "Sign out", link: "signout", icon: <i className="fa-solid fa-right-from-bracket ms-3"></i> },
  ];

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-12 col-md-3 hieghtAside"
          style={{ height: "86vh", transform: "translateY(6rem)" }}
        >
          <aside className="border h-100 rounded asideNavigateInfo bg-blur">
            <nav>
              <ul className="text-white navigateInfo">
                {navigation.map((url) => (
                  <li key={url.id} className="list-unstyled mt-4">
                    <Link
                      to={url.link}
                      className={`text-decoration-none text-white fw-medium LinkNavigate w-100 rounded-5 ${
                        (location.pathname === "/information" &&
                          url.link === "profile") ||
                        location.pathname.includes(url.link)
                          ? "activeAside"
                          : ""
                      }`}
                    >
                      {url.name} {url.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        <div className="col-12 col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
