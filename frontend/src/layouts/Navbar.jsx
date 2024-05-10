import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.svg" alt="" className={styles.logo} />
        <h1>Todos</h1>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
