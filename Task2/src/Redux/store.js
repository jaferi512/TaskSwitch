import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './Slices/mainSlice';

import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(), //.concat(logger),
});
