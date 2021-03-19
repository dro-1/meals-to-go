import styled from "styled-components/native";
import { StatusBar } from "react-native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  align-items: center;
  justify-content: ${({ details }) => (details ? "flex-start" : "center")};
  margin-top: ${StatusBar.currentHeight ? StatusBar.currentHeight : 0}px;
  width: 100%;
`;

export default SafeArea;
