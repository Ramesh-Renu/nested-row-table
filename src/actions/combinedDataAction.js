import { createAsyncThunk } from "@reduxjs/toolkit";
import Environment from "../environments/environment";

export const combinedDataAction = createAsyncThunk(
  "combinedDataAction",
  async () => {
    return fetch(Environment.apiBaseUrl + "get-work-hours-by-key", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        root_name: "tool",
        root_value: "",
        grp_key: "",
        parent: {
          root_name: "member",
          root_value: "",
          parent: {
            root_name: "team",
            root_value: "",
            parent: {
              root_name: "branch",
              root_value: "",
            },
          },
        },
      }),
    }).then((res) => {
      return res.json();
    });
  }
);

export default combinedDataAction;
