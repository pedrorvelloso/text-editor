import React from "react";
import { useSlate } from "slate-react";
import Button from "../Button";
import { isMarkActive, toggleMark } from "../../utils";

const MarkButton = ({ format }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
      icon={format}
    />
  );
};

export default MarkButton;
