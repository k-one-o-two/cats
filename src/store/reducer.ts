import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BreedSortBy } from "types";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { useAppSelector } from "./hooks";

interface CatsLayoutState {
  sortBy: BreedSortBy;
  searchStr: string;
}

const initialState: CatsLayoutState = {
  sortBy: "name",
  searchStr: "",
};

const catsLayoutSlice = createSlice({
  name: "catsLayout",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<BreedSortBy>) => {
      state.sortBy = action.payload;
    },
    setSearchStr: (state, action: PayloadAction<string>) => {
      state.searchStr = action.payload;
    },
  },
});

const { reducer: catsLayout, actions: catsLayoutActions } = catsLayoutSlice;

export const useCatsLayout = () => {
  const dispatch = useDispatch();
  const catsLayoutState = useAppSelector((state) => state.catsLayout);

  const setSort = useCallback(
    (sort: BreedSortBy) => {
      dispatch(catsLayoutActions.setSortBy(sort));
    },
    [dispatch]
  );

  const setSearch = useCallback(
    (search: string) => {
      dispatch(catsLayoutActions.setSearchStr(search));
    },
    [dispatch]
  );

  return { catsLayoutState, setSort, setSearch };
};

export { catsLayout, catsLayoutActions };
