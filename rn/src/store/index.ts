import { configureStore } from "@reduxjs/toolkit"
import { bookSliceReducer } from "../redux/books"

const store = configureStore({
    reducer: {
        book: bookSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(
        ),
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

