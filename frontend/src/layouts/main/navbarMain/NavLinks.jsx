import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { getAllPages } from "../../../services/apiServices";
import { Link } from "react-router-dom";

function NavLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getAllPages().then((data) => {
      setLinks(
        data?.data?.map((value) => {
          return { id: value._id, name: value.name, slug: value.slug };
        })
      );
    });
  }, []);

  return (
    <Navbar.Collapse>
      {links.map((value) => {
        return (
          <Navbar.Link key={value.id} as={Link} to={`/${value.slug}`}>
            {value.name}
          </Navbar.Link>
        );
      })}
    </Navbar.Collapse>
  );
}

export default NavLinks;
