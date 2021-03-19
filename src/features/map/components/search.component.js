import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchbarContainer = styled.View`
  margin-top: 30px;
  position: absolute;
  width: 100%;
  z-index: 999;
  background-color: transparent;
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
        icon="map"
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
