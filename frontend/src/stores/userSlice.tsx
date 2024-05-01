import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "./store";
import { pb } from "@/lib/pocketbase";

type UserState = {
  value: User | null;
};

const initialState: UserState = {
  value: pb.authStore.model as User | null,
};

const slice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.value = action.payload;
    },
  },
});

export const userReducer = slice.reducer;

export function useCurrentUser(): User | null {
  return useSelector((state: RootType) => state.user.value);
}

export function useCurrentUserSetter() {
  const dispatch = useDispatch();
  return (user: User | null) => {
    dispatch(slice.actions.setCurrentUser(user));
  };
}
