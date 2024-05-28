import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useAuth } from "../providers/AuthProvider";

function Navbar() {
  const { logout, user } = useAuth();
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
        {user ? (
          <li>
            <Link to="/admin/todos">Dashboard</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
        )}

        {user && (
          <li>
            <Button onClick={logout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
