import React from "react";
import { useNavigate } from "react-router-dom";
import AdminPageTitle from "../../components/common/AdminPageTitle";
import MyAddBtn from "../../components/common/MyAddBtn";

function FiltersListAdmin() {
  const navigate = useNavigate();

  function goToAddUpdateFilters(e, value) {
    if (value) {
      navigate(`/admin/filters/${value._id}`);
    } else {
      navigate("/admin/filters/add");
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <AdminPageTitle title={"Filters"} />
        <MyAddBtn text="Add Filter" onClick={goToAddUpdateFilters} />
      </div>
    </div>
  );
}

export default FiltersListAdmin;
