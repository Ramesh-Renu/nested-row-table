import { createAsyncThunk } from "@reduxjs/toolkit";
import Environment from "../environments/environment";

const createXHR = () => new XMLHttpRequest();

export const uploadExcelAction = createAsyncThunk(
  "uploadExcel",
  async (formData) => {
    return await fetch(Environment.apiUploadUrl, {
      method: "POST",
      createXHR,
      body: formData,
    }).then((response) => {
      return response.json();
    });
  }
);

export default uploadExcelAction;
