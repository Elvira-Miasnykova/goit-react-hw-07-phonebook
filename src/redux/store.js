import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const rootReducer = combineReducers({
//     contactsReducer,
//     filterReducer,
// })

//const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    },
    // middleware(getDefaultMiddleware) {
    //     return getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // })
    // },
    
});

//export const persistor = persistStore(store);