import React from "react";
import AdminPageTitle from "../../common/AdminPageTitle";
import CommonList from "../../common/list/CommonList";

import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../../services/apiServices";

function UsersListAdmin() {
  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/admin/users/${id}`);
  }

  function getImage(value) {
    return "/images/placeholder-avatar.jpg";
  }

  return (
    <div>
      <AdminPageTitle title="Users" />
      <div className="mt-8">
        <CommonList
          fields={{ image: "", title: "email", desc: "role" }}
          getAllItems={getAllUsers}
          deleteItem={() => {}}
          getImage={getImage}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default UsersListAdmin;
