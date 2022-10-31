import { configureStore, createSlice } from "@reduxjs/toolkit";
import ApiResponse from "../models/ApiResponse";

interface StoreState {
    list: ApiResponse[]
}

const initialState = {
    list: []
} as StoreState


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            state.list = [...state.list, action.payload]
        }
    }
})

export const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const actions = userSlice.actions