import React from "react";
import styled, { useTheme } from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

const TextView = styled.Text`
  ${({ variantStyles }) => variantStyles}
`;

const getVariants = (theme, variant, center) => {
  const defaultTheme = defaultTextStyles(theme);
  const extraStyles = variants[variant](theme);
  return `${defaultTheme}
          ${extraStyles}
          ${center ? "text-align: center;" : ""}
  `;
};

export const Text = ({ variant, children, center }) => {
  const theme = useTheme();
  const variantStyles = getVariants(theme, variant, center);
  return <TextView variantStyles={variantStyles}>{children}</TextView>;
};

Text.defaultProps = {
  variant: "body",
};
