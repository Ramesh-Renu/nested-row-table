import {createAsyncThunk} from '@reduxjs/toolkit'
import Environment from '../environments/environment';

export const teamMemberCreateAction = createAsyncThunk('teamMemberData', 
async(paramValues)=>{
    return await fetch(Environment.apiBaseUrl+'get-work-hours-by-key',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                "root_name": "tool",
                "root_value": paramValues.rootValue ? paramValues.rootValue : '',
                "grp_key": paramValues.grpKey ? paramValues.grpKey : 'member',
                "parent": {
                    "root_name": "member",
                    "root_value": paramValues.memberRootValue ? paramValues.memberRootValue : '',
                    "parent": {
                        "root_name": "team",
                        "root_value": paramValues.teamRootValue ? paramValues.teamRootValue : '',
                        "parent": {
                            "root_name": "branch",
                            "root_value": paramValues.branchRootValue ? paramValues.branchRootValue : '',
                        }
                    }
                }
            }
        )

    }).then((res)=> {
        return res.json();
    })

});

export default teamMemberCreateAction;