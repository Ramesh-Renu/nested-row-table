import { HttpUtilService } from "./http.utils";
import { setLoading, decreaseLoadingCount } from '@shared/loader/loadingReducer';

/**
 * Save registration
 */
export const saveRegistration = async(dispatch, data) => {
    const url = `account/register`;
    return triggerHTTPRequest(dispatch, "POST", url, data);
}
/**
 * Time sheet Tables Datas
 */

export const getTableDatas = async(dispatch, data, disableLoader=false) => {
    const url = `get-work-hours-by-key`;
    return triggerHTTPRequest(dispatch, "POST", url, data, disableLoader);
}
/**
 * Time sheet Tables Template download
 */

export const downloadTimeSheet = async(dispatch, data) => {
    const url = `download-file/`+data;
    // return HttpUtilService("GET", url);
    return triggerHTTPRequest(dispatch, "GET", url, null,true);
}
/**
 * Login
 */
export const loginUser = async(dispatch, data) => {
    const url = `posts`;
    return triggerHTTPRequest(dispatch, "POST", url, data);
}

/**
 * Get User Data
 */
export const getUser = async(dispatch) => {
    const url = `users`;
    return triggerHTTPRequest(dispatch, "GET", url);
}

/**
 * Delete
 */
export const deleteUser = async(dispatch) => {
    const url = `posts/1`;
    return triggerHTTPRequest(dispatch, "DELETE", url);
}

// USED TO CALL API SERVICES
const triggerHTTPRequest = async(dispatch, method, url, data, disableLoader = false) =>{
    if(disableLoader===false){
        // dispatch(setLoading(true)); // SHOW LOADER
    }
    try {
        const response = await HttpUtilService(method, url, data); // CALLS API
        if(disableLoader===false){
            // dispatch(decreaseLoadingCount()); // USED TO DECREMENT LOADING COUNT AND HIDES LOADER
        }
        if (response) {
          return response;
        }
        throw new Error("Network response was not ok.");
    } catch (error) {
        if(disableLoader===false){
            // dispatch(setLoading(false)); // HIDE LOADER
        }
        throw error;
    }
}