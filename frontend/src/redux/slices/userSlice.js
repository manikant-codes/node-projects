import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/apiServices";

export const getUser = createAsyncThunk("user/getUser", async function (data) {
  return login(data);
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: JSON.parse(localStorage.getItem("user")),
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
      state.error = "";
      localStorage.setItem("user", JSON.stringify(action.payload.data));
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

const userSliceReducer = userSlice.reducer;

export default userSliceReducer;
