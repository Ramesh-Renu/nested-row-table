import { createAsyncThunk } from "@reduxjs/toolkit";
import Environment from "../environments/environment";

export const toolWiseTeamAction = createAsyncThunk(
  "toolWiseTeam",
  async (paramValues) => {
    console.log("paramValues", paramValues);
    return fetch(Environment.apiBaseUrl + "get-work-hours-by-all", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(
      //   [
      //     {
      //         "requested_key": "WHATSAPP BOT",
      //         "root_name": "tool",
      //         "root_value": "WHATSAPP BOT",
      //         "grp_key": "team",
      //         "parent": {
      //             "root_name": "member",
      //             "root_value": "",
      //             "parent": {
      //                 "root_name": "team",
      //                 "root_value": "",
      //                 "parent": {
      //                     "root_name": "branch",
      //                     "root_value": ""
      //                 }
      //             }
      //         }
      //     }
      // ]
      paramValues
      ),
    }).then((res) => {
      console.log("res", res);
      return res.json();
    });
  }
);

export default toolWiseTeamAction;
