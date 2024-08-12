import React, { useEffect, useState } from "react";
import AdminPageTitle from "../../components/common/AdminPageTitle";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import MyList from "../../components/common/list/MyList";
import { getAllUsers } from "../../services/apiServices";

function UsersListAdmin() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  function handleDelete() {}

  function goToUpdateUsers(e, value) {
    navigate(`/admin/users/${value._id}`);
  }

  function getImageUrl(value) {
    return "/images/placeholder-avatar.jpg";
  }

  return (
    <div>
      <AdminPageTitle title="Users" />
      <div className="mt-8">
        <MyList
          list={users}
          fields={{ title: "email" }}
          getImgUrl={getImageUrl}
          // renderDesc={renderDesc}
          actions={[
            { id: 1, icon: <HiPencil />, onClick: goToUpdateUsers },
            {
              id: 2,
              icon: <HiTrash />,
              onClick: handleDelete,
              color: "failure",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default UsersListAdmin;
