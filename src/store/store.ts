import { configureStore } from "@reduxjs/toolkit";
import BlocksSlice from "./BlocksSlice";
const store = configureStore({
  reducer: {
    blocks: BlocksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
