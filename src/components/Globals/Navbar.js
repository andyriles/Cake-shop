import React, { useState } from "react"
import { Link } from "gatsby"
import { FaShoppingCart } from "react-icons/fa"
import Logo from "../../images/Logo.png"

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")
  const links = [
    {
      id: 1,
      title: "cake",
      path: "/",
    },
    {
      id: 2,
      title: "pastries",
      path: "/pastries",
    },
    {
      id: 3,
      title: "special orders",
      path: "/special-orders",
    },
    {
      id: 4,
      title: "contact",
      path: "/contact",
    },
  ]
  const navbarHandler = () => {
    if (navbarOpen) {
      setNavbarOpen(false)
      setCss("collapse navbar-collapse")
    } else {
      setNavbarOpen(true)
      setCss("collapse navbar-collapse show")
    }
  }
  return (
    <nav className="navbar navbar-light fixed-top  navbar-expand-lg ">
      <Link
        to="/"
        className="navbar-brand rounded-circle border border-white px-4 mt-5 ml-5"
      >
        <img src={Logo} alt="bellr cakes logo" />
      </Link>
      <button className="navbar-toggler" onClick={navbarHandler}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={css}>
        <ul className="navbar-nav ml-auto mr-5 ">
          {links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link
                  to={link.path}
                  className="nav-link text-capitalize text-white ml-sm-5"
                >
                  {link.title}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5 ">
            <FaShoppingCart className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
