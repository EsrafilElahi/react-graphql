import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { WebStorage, persistReducer, persistStore } from "redux-persist";

import { usersSlice } from "./slices/usersSlice";
import { users2Slice } from "./slices/users2Slice";

type PersistConfig = {
  key: string;
  storage: WebStorage;
};

const persistConfig: PersistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  usersReducer: usersSlice.reducer,
  users2Reducer: users2Slice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk] as const,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

type Store = ReturnType<typeof store.dispatch>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<typeof store.getState>;
