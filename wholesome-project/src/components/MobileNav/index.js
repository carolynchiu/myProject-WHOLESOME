import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import './index.scss';
function MobileNav() {
  return (
    <>
      <nav className="header_nav_mobile d-md-none navbar navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <Link to="/" className="navbar-brand">
              <img
                className="logo"
                src={require('../../Assets/Logo/logo.png')}
                alt="logo"
              />
            </Link>
          </div>
          <div>
            {/* <BsSearch className="header_nav_mobile-search-icon" /> */}
          </div>

          <div
            className="offcanvas offcanvas-start w-75"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <div className="offcanvas-title" id="offcanvasNavbarLabel">
                <Link to="/" className="navbar-brand">
                  <img
                    className="logo"
                    src={require('../../Assets/Logo/logo.png')}
                    alt="logo"
                  />
                </Link>
              </div>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    ?????????
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="account">
                    ????????????
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="shoppingCart">
                    ?????????
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="products/?????????"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ?????????
                  </Link>
                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/?????????/?????????"
                      >
                        ?????????
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/?????????/?????????"
                      >
                        ?????????
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/?????????/?????????"
                      >
                        ?????????
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="products/???????????????"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ???????????????
                  </Link>
                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/???????????????/??????"
                      >
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/???????????????/?????????????????????"
                      >
                        ?????????????????????
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/???????????????/???????????????"
                      >
                        ???????????????
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="products/????????????"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ????????????
                  </Link>
                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/????????????/??????"
                      >
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/????????????/?????????????????????"
                      >
                        ?????????????????????
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="products/????????????/??????"
                      >
                        ??????
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="recipes/???????search"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ????????????
                  </Link>
                  <ul
                    className="dropdown-menu border-0"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/recipes/???????search">
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/recipes/???????search">
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/recipes/???????search">
                        ??????
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
