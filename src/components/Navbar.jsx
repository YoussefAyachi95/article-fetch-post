import React from 'react'
import {
    NavLink,
    Link,
  } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
          <Link to="/">
            <h1>My Articles</h1>
          </Link>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/send">Send your Article</NavLink>
        </nav>
  )
}
