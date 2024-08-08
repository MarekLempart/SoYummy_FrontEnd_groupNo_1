// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
// import { default as thunk } from "redux-thunk"; // Importowanie jako named import

// Konfiguracja dla persist
const persistConfig = {
  key: "root",
  storage,
};

// Stworzenie persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Konfiguracja stora Redux
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Tworzenie persistor
const persistor = persistStore(store);

export { persistor, store };
