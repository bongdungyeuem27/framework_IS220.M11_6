import React, { Component } from "react";
import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
    list: [],
  },
  {
    name: "Điện thoại",
    to: "/mobiles",
    exact: true,
    list: [
      {
        name: "Iphone",
        to: "/iphone",
        exact: false,
        list: [],
      },
      {
        name: "Samsung",
        to: "/samsung",
        exact: false,
        list: [],
      },
      {
        name: "Oppo",
        to: "/oppo",
        exact: false,
        list: [],
      },
      {
        name: "Vivo",
        to: "/vivo",
        exact: false,
        list: [],
      },
      {
        name: "Xiaomi",
        to: "/xiaomi",
        exact: false,
        list: [],
      },
    ],
  },
  {
    name: "Máy tính",
    to: "/computers",
    exact: false,
    list: [],
  },
  {
    name: "Phụ kiện",
    to: "/exdevices",
    exact: false,
    list: [],
  },
  {
    name: "Dịch vụ",
    to: "/services",
    exact: false,
    list: [],
  },
];

var MenuLink = ({ lable, to, activeOnlyWhenExact, list }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";

        if (list.length != 0) {
          return showItemDown(lable, to, activeOnlyWhenExact, list);
        } else {
          return (
            <li className={active}>
              <Link className="nav-link scrollto" to={to}>
                {lable}
              </Link>
            </li>
          );
        }
      }}
    ></Route>
  );
};

var ItemLink = ({ lable, to, activeOnlyWhenExact, list }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";

        if (list.length != 0) {
          return showItemRight(list);
        } else {
          return (
            <li className={active}>
              <Link className="nav-link scrollto" to={to}>
                {lable}
              </Link>
            </li>
          );
        }
      }}
    ></Route>
  );
};

var showItemDown = (lable, to, activeOnlyWhenExact, list) => {
  var result = null;
  result = (
    <li className="dropdown">
      <Link className="" to={to}>
        <span>{lable}</span> <i className="bi bi-chevron-down" />
      </Link>
      <ul>
        {list.map((value, key) => {
          return (
            <ItemLink
              key={key}
              lable={value.name}
              to={to + value.to}
              activeOnlyWhenExact={value.exact}
              list={value.list}
            ></ItemLink>
          );
        })}
      </ul>
    </li>
  );
  return result;
};

var showItemRight = (lable, to, activeOnlyWhenExact, list) => {
  var result = null;
  result = (
    <li className="dropdown">
      <Link className="" to={to}>
        <span>{lable}</span> <i className="bi bi-chevron-right" />
      </Link>
      <ul>
        {list.map((value, key) => {
          return (
            <ItemLink
              key={key}
              lable={value.name}
              to={to + value.to}
              activeOnlyWhenExact={value.exact}
              list={value.list}
            ></ItemLink>
          );
        })}
      </ul>
    </li>
  );
  return result;
};

var showMenu = (temps) => {
  var result = null;
  result = temps.map((value, key) => {
    return (
      <MenuLink
        key={key}
        lable={value.name}
        to={value.to}
        activeOnlyWhenExact={value.exact}
        list={value.list}
      ></MenuLink>
    );
  });
  return result;
};

export default class Header extends Component {
  render() {
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to="/">Lavender</Link>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar">
            <ul>
              {showMenu(menus)}
              <li>
                <Link className="getstarted scrollto " to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart mr-5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <a>Giỏ hàng</a>
                </Link>
              </li>
              <li>
                <Link className="getstarted scrollto" to="/lmember">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <a>LMember</a>
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
    );
  }
}
