import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import AdminPageTitle from "../../components/common/AdminPageTitle";
import MyList from "../../components/common/list/MyList";
import MyAddBtn from "../../components/common/MyAddBtn";
import { deletePage, getAllPages } from "../../services/apiServices";

function PagesListAdmin() {
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getAllPages().then((data) => {
      setPages(data.data);
    });
  }, []);

  function goToAddUpdatePages(e, value) {
    console.log("value", value);
    if (value) {
      navigate(`/admin/pages/${value.slug}`);
    } else {
      navigate("/admin/pages/add");
    }
  }

  async function handleDelete(e, value) {
    const input = window.confirm("Are you sure you want to delete this?");
    if (input) {
      await deletePage(value._id);
      alert("Deleted successfully.");
      const data = await getAllPages();
      setPages(data.data);
    }
  }

  function getImageUrl(value) {
    return value.categories[0].image;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <AdminPageTitle title="Pages" />
        <MyAddBtn text="Add Page" onClick={goToAddUpdatePages} />
      </div>
      <div className="mt-8">
        <MyList
          list={pages}
          fields={{ title: "name" }}
          getImgUrl={getImageUrl}
          actions={[
            { id: 1, icon: <HiPencil />, onClick: goToAddUpdatePages },
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

export default PagesListAdmin;
