import React from "react";
import MyListItem from "./MyListItem";

function getListItem(
  value,
  fields,
  actions,
  getImgUrl,
  renderImg,
  renderTitleDesc,
  renderTitle,
  renderDesc,
  renderActions
) {
  const listItem = {};
  if (fields.img) {
    listItem.img = value[fields.img];
  }
  if (fields.title) {
    listItem.title = value[fields.title];
  }
  if (fields.desc) {
    listItem.desc = value[fields.desc];
  }
  if (getImgUrl) {
    listItem.getImgUrl = getImgUrl;
  }
  if (actions) {
    listItem.actions = actions;
  }
  if (renderImg) {
    listItem.renderImg = renderImg;
  }
  if (renderTitleDesc) {
    listItem.renderTitleDesc = renderTitleDesc;
  }
  if (renderTitle) {
    listItem.renderTitle = renderTitle;
  }
  if (renderDesc) {
    listItem.renderDesc = renderDesc;
  }
  if (renderActions) {
    listItem.renderActions = renderActions;
  }

  return listItem;
}

function MyList({
  list,
  fields,
  actions,
  getImgUrl,
  renderImg,
  renderTitleDesc,
  renderTitle,
  renderDesc,
  renderActions,
}) {
  if (!list || !list.length)
    return (
      <div className="flex items-center gap-3 py-2 border-b border-b-slate-200 w-full">
        <p className="text-lg">No list items to show!</p>
      </div>
    );
  return (
    <div>
      {list.map((value, index) => {
        const listItem = getListItem(
          value,
          fields,
          actions,
          getImgUrl,
          renderImg,
          renderTitleDesc,
          renderTitle,
          renderDesc,
          renderActions
        );

        return <MyListItem key={index} value={value} listItem={listItem} />;
      })}
    </div>
  );
}

export default MyList;
