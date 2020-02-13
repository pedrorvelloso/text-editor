import styled from "styled-components";

const activeShadow =
  "inset 10px 10px 20px #d9d9d9, inset -10px -10px 20px #ffffff";
const shadow = "10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff";

const hoverEffectBackground = "linear-gradient(145deg, #e6e6e6, #ffffff)";

export const ButtonContainer = styled.button`
  border-radius: 12px;
  background: #ffffff;
  box-shadow: ${({ active }) => (active ? activeShadow : shadow)};

  border: 1px solid #eee;

  height: 40px;
  width: 40px;

  margin-left: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;

  :first-child {
    margin-left: 0;
  }

  :active {
    box-shadow: inset 10px 10px 20px #d9d9d9, inset -10px -10px 20px #ffffff;
  }

  :hover {
    background: ${hoverEffectBackground};
  }
`;
