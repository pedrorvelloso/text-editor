import React from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaCode,
  FaHeading,
  FaListUl,
  FaListOl
} from "react-icons/fa";

import { ButtonContainer } from "./styles";

const iconMap = {
  bold: <FaBold size={18} />,
  italic: <FaItalic size={18} />,
  underline: <FaUnderline size={18} />,
  code: <FaCode size={18} />,
  "heading-one": <FaHeading size={18} />,
  "heading-two": <FaHeading size={14} />,
  "unordered-list": <FaListUl size={18} />,
  "numbered-list": <FaListOl size={18} />
};

const Button = ({ icon, ...props }) => {
  const Icon = iconMap[icon];
  return <ButtonContainer {...props}>{Icon}</ButtonContainer>;
};

export default Button;
