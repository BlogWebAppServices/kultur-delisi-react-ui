import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    function getCategories() {
      const url = "https://localhost:7125/api/categories";

      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((categoriesFromServer) => {
          getChildCategories(categoriesFromServer);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    function getChildCategories(parentCategories) {
      const url = "https://localhost:7125/api/childCategories";

      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((childsFromServer) => {
          const newCategories = parentCategories.map((c) => ({
            ...c,
            childs: [],
          }));
          parentCategories.map((parent, i) => {
            childsFromServer.map((child) => {
              if (parent.id === child.categoryId) {
                newCategories[i].childs.push(child);
                return child;
              }
            });
          });
          setCategories(newCategories);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getCategories();
  }, []);

  useEffect(() => {
    console.log("categories: ", JSON.stringify(categories));
  }, [categories]);

  return (
    <>
      <header className="menu_wrapper fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src="../logowhite.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
              area-controls="menu"
              aria-expanded="false"
              area-label="Toggle Navigation"
            >
              <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {categories.slice(0, 5).map((category) => (
                  <div>
                    {category?.childs?.length ?
                        <li
                        className="nav-item dropdown"
                        key={category.id}
                        id={"dropdown" + category.id}
                      >
                        <a
                          href="/"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                        >
                          {category.categoryName}
                        </a>
                          <ul className="dropdown-menu shadow">
                            <li>
                              <Link
                                to={category.categoryName}
                                className="dropdown-item"
                                key={category.id}
                              >
                                {" "}
                                Tüm Makaleler{" "}
                              </Link>
                            </li>
                            {category?.childs?.map((child) => (
                              <div key={child.categoryId}>
                                <li>
                                  <Link
                                    to={child.categoryName}
                                    className="dropdown-item"
                                    key={child.id}
                                  >
                                    {child.categoryName}
                                  </Link>
                                </li>
                              </div>
                            ))}
                          </ul>
                      </li> :
                      <li>
                      <Link
                        to={category.categoryName}
                        className="nav-link"
                        key={category.id}
                      >
                        {category.categoryName}
                      </Link>
                    </li>
                    }
                  </div>
                ))}
                <div>
                  {categories.length > 5 && (
                     <li className="nav-item dropdown">
                      <a
                        href="/"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Diğer Kategoriler
                      </a>
                      <ul className="dropdown-menu shadow">
                        {categories.slice(5).map((category) => (
                            <div>
                                {category?.childs?.length ?
                                <li
                                className="dropstart"
                                key={category.id}
                                id={"dropdown" + category.id}
                              >
                                <a
                                  href="/"
                                  className="dropdown-item 
                                            dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                >
                                  {category.categoryName}
                                </a>
                                <ul className="dropdown-menu shadow">
                                  <li>
                                    <Link
                                      to={category.categoryName}
                                      className="dropdown-item"
                                      key={category.id}
                                    >
                                      {" "}
                                      Tüm Makaleler{" "}
                                    </Link>
                                  </li>
                                  {category?.childs?.map((child) => (
                              <div key={child.categoryId}>
                                <li>
                                  <Link
                                    to={child.categoryName}
                                    className="dropdown-item"
                                    key={child.id}
                                  >
                                    {child.categoryName}
                                  </Link>
                                </li>
                              </div>
                            ))}
                                </ul>
                              </li>
                              :
                              <li key={category.id} id={"single" + category.id}>
                              <Link
                                to={category.categoryName}
                                key={category.id}
                                className="dropdown-item"
                              >
                                {" "}
                                {category.categoryName}
                              </Link>
                            </li>     
                            }
                            </div>
                        ))}
                      </ul>
                    </li>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
