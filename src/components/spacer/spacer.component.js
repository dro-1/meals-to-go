import React from "react";
import styled, { useTheme } from "styled-components/native";

const spaceVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariants = {
  left: "marginLeft",
  right: "marginRight",
  top: "marginTop",
  bottom: "marginBottom",
};

const getVariants = (position, theme, size) => {
  const sizeIndex = spaceVariants[size];
  const finalSize = theme.space[sizeIndex];
  const pos = positionVariants[position];
  return `${pos}:${finalSize};`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariants(position, theme, size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
