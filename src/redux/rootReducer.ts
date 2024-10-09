import {combineReducers, configureStore} from '@reduxjs/toolkit'
import app from './app'
import reducer from "@/redux/app/reducer";

const rootReducer = combineReducers({
  app: app.reducer,
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>

export const initRootState = {
  app: app.initState,
}

const isDevelopmentMode = process.env.NODE_ENV === 'development'


export const store = configureStore({
  reducer: {
    app: reducer,
  },
  preloadedState: initRootState,
  devTools: isDevelopmentMode,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        ignoredPaths: ['connection'],
      },
    }).concat([]),
})
