import React from "react";
import { useSlate } from "slate-react";
import Button from "../Button";
import { isBlockActive, toggleBlock } from "../../utils";

const BlockButton = ({ format }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      icon={format}
    />
  );
};

export default BlockButton;
