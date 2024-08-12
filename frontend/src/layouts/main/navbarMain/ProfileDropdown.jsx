import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../redux/slices/userSlice";

const dropDownLinks = [
  { name: "Profile", to: "/user/profile" },
  { name: "Orders", to: "/user/orders" },
];

function ProfileDropdown() {
  const user = useSelector((store) => {
    return store.user.user;
  });

  const dispatch = useDispatch();

  async function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar
          alt="Profile Settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        />
      }
    >
      <Dropdown.Header>
        <span className="block text-sm">{user.name}</span>
        <span className="block font-medium text-sm truncate">{user.email}</span>
      </Dropdown.Header>
      {dropDownLinks.map((value, index) => {
        return (
          <Dropdown.Item key={index} as={Link} to={value.to}>
            {value.name}
          </Dropdown.Item>
        );
      })}
      <Dropdown.Divider />
      <Dropdown.Item as={Link} to="/admin/dashboard">
        Dashboard
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
    </Dropdown>
  );
}

export default ProfileDropdown;
