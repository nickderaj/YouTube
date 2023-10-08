import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const combinedReducers = combineReducers({
  user: userReducer,
});

function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: combinedReducers,
    preloadedState
  })
}

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType< typeof combinedReducers >;

export const store = configureStore({
  reducer: combinedReducers
})

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch =  typeof store.dispatch;