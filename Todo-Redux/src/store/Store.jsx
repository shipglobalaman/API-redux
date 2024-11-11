import { configureStore } from "@reduxjs/toolkit";
import {taskReducer} from "../reducers/Reducer"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; 

const persistConfig = {
    key: "root",
    storage, 
  };
const persistedReducer = persistReducer(persistConfig, taskReducer);

export const store = configureStore({
  reducer: {
    tasks:persistedReducer
  }
});

export const persistor = persistStore(store);
