import { Button } from "flowbite-react";
import React from "react";

function MyListItem({ listItem, value }) {
  if (!listItem) return null;
  const {
    img,
    getImgUrl,
    title,
    desc,
    actions,
    renderImg,
    renderTitleDesc,
    renderTitle,
    renderDesc,
    renderActions,
  } = listItem;

  function getImage() {
    if (renderImg) {
      return renderImg(value);
    }

    if (img || getImgUrl) {
      const src = getImgUrl ? getImgUrl(value) : img;
      return (
        <div className="border-slate-300 border rounded-full w-[56px] h-[56px] overflow-hidden shrink-0">
          <img
            src={src}
            alt={title || "..."}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }

    return null;
  }

  function getTitleDesc() {
    if (renderTitleDesc) {
      return renderTitleDesc(value);
    }

    if (title || renderTitle || desc || renderDesc) {
      const titleText = renderTitle ? (
        renderTitle(value)
      ) : (
        <h4 className="font-semibold text-lg">{title}</h4>
      );
      const descText = renderDesc ? renderDesc(value) : <p>{desc}</p>;
      return (
        <div className="flex flex-col gap-1 grow-[1]">
          {!!titleText && titleText}
          {!!descText && descText}
        </div>
      );
    }

    return null;
  }

  function getActions() {
    if (renderActions) {
      return renderActions(value);
    }

    if (actions) {
      return (
        <div className="flex items-center gap-2">
          {actions.map((action) => {
            if (action.renderAction) {
              return action.renderAction(value);
            }

            const btnContent = action.renderChild
              ? action.renderChild(value)
              : action.icon || action.text;

            const btnProps = action.btnProps ? action.btnProps(value) : [];

            return (
              <Button
                pill
                color={action.color || "gray"}
                key={action.id}
                onClick={(e) => {
                  action.onClick(e, value);
                }}
                {...btnProps}
              >
                {btnContent}
              </Button>
            );
          })}
        </div>
      );
    }

    return null;
  }

  return (
    <div className="flex items-center gap-3 py-2 border-b border-b-slate-200 w-full">
      {/* Image */}
      {getImage()}
      {/* Title & Desc */}
      {getTitleDesc()}
      {/* Actions */}
      {getActions()}
    </div>
  );
}

export default MyListItem;
