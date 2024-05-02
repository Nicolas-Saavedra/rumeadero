import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "./store";

type UserState = {
  value: User | null;
};

const initialState: UserState = {
  value: JSON.parse(localStorage.getItem("authUser") || "null") as User | null,
};

const slice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.value = action.payload;
      if (action.payload) {
        localStorage.setItem("authUser", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("authUser");
      }
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
