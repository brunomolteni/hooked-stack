import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const asyncActions = {
  delete: createAsyncThunk("user/delete", async (id) =>
    del(`/api/users/${id}`)
  ),
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: true,
  },
  reducers: {
    finishLoading: (ui) => {
      ui.loading = false;
    },
  },
  extraReducers: {},
});

export const actions = {
  ...uiSlice.actions,
  ...asyncActions,
};

export default uiSlice.reducer;
