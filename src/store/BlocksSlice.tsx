import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlockProps } from "../ui/blocks/Block";
import { RootState } from "./store";

interface BlocksState {
  value: BlockProps[];
}

const initialState: BlocksState = {
  value: [],
};

export const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<BlockProps[]>) => {
      state.value = action.payload;
    },
    append: (state, action: PayloadAction<BlockProps>) => {
      state.value = [...state.value, action.payload];
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((value) => action.payload !== value.id);
    },
  },
});

export const { set, append, remove } = blocksSlice.actions;

export const blocks = (state: RootState) => state.blocks.value;

export default blocksSlice.reducer;
