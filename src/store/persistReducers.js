import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetApp', // chave do app
      storage,
      whitelist: ['auth', 'user'], // quais reducers terao persistencia
    },
    reducers,
  );

  return persistedReducer;
};
