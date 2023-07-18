import Environment from "../environments/environment";
// import { issetLocalAuth, get } from "@core/storage.utils";

/**
 * Set headers
 */
export function CreateHttpHeader(){

    // Set default headers
    const headers = { 'Content-Type': 'application/json' };

    // if(issetLocalAuth){
    //     headers['token'] = get('token');
    //     headers['userId'] = get('id').toString();
    // }

    // Set all headers to global variable
    return headers;
}


export const HttpUtilService = async(method, path, data)=>{
    // HEADERS
    let httpHeaders = CreateHttpHeader();
    const APIURL = `${Environment.apiBaseUrl}${path}`;

    switch(method){

        case 'GET':
            return await fetch(APIURL, {
                method: "GET",
                headers: httpHeaders,
            })
            .then((response) => { 
                if(response.ok){
                    return response;
                }
            })
            .catch((error) => {
                console.log(error);
            });
        
        case 'POST':
            return fetch(APIURL, {
                method: "POST",
                headers: httpHeaders,
                body: JSON.stringify(data),
            })
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
            })
            .catch((error) => {
                console.log(error);
            });

        case 'PUT':
            return fetch(APIURL, {
                method: "PUT",
                headers: httpHeaders,
                body: JSON.stringify(data),
            })
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
            })
            .catch((error) => {
                console.log(error);
            });

        case 'DELETE':
            return fetch(APIURL, {
                method: "DELETE"
            })
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
            })
            .catch((error) => {
                console.log(error);
            });
        default:
            return null;
        
    }
}
