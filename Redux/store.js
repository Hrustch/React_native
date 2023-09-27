import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { authReducer } from './auth/slice';
import { postsReducer } from './posts/slice';
import { commentsReducer } from './comments/slice';


const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
};
const postsConfig = {
  key: 'posts',
  storage: AsyncStorage,
};
const commentsConfig = {
  key: 'comments',
  storage: AsyncStorage,
};

const auth = persistReducer(authConfig, authReducer);
const posts = persistReducer(postsConfig, postsReducer);
const comments = persistReducer(commentsConfig, commentsReducer);

const store = configureStore({
  reducer: {
    auth,
    posts,
    comments,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export default { store, persistor };