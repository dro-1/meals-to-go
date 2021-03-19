import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchbarContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;
const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchbarContainer>
      <Searchbar
        placeholder="Search for a location"
        onChangeText={setSearchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        value={searchKeyword}
      />
    </SearchbarContainer>
  );
};

export default Search;
