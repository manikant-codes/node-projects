import React from "react";
import AdminPageTitle from "../../components/common/AdminPageTitle";
import MyAddBtn from "../../components/common/MyAddBtn";
import { useNavigate } from "react-router-dom";

function CategoriesListAdmin() {
  const navigate = useNavigate();

  function goToAddUpdateCategories(e, value) {
    if (value) {
      navigate(`/admin/categories/${value._id}`);
    } else {
      navigate("/admin/categories/add");
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <AdminPageTitle title={"Categories"} />
        <MyAddBtn text="Add Category" onClick={goToAddUpdateCategories} />
      </div>
    </div>
  );
}

export default CategoriesListAdmin;
