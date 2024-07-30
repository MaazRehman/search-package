import React, { ChangeEvent } from "react";
import useGetPackageInfoSearchResult from "../../hooks/useGetPackageInfoSearchResult";
import { Input } from "antd";
import {
  DEBOUNCE_DELAY,
  PLACEHOLDER_SEARCH_TEXT,
} from "../AppLayout/constants";
// eslint-disable-next-line
const lodash = require("lodash");

const SearchPackage = () => {
  const [search, setSearch] = React.useState("");
  useGetPackageInfoSearchResult(search);

  const debouncedSearch = lodash.debounce((value: string) => {
    setSearch(value);
  }, DEBOUNCE_DELAY);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <Input placeholder={PLACEHOLDER_SEARCH_TEXT} onChange={searchHandler} />
  );
};

export default SearchPackage;
