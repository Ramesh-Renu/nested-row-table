/**
 * Check storage exist or not
 */
export const issetLocalAuth = async() => {
    return (localStorage.getItem('userInfo'))? true : false;
}

/**
 * Set data
 */
export const set  = async(data) =>{
    let temp = Math.random().toString(36).substr(2);
    // Set storage
    localStorage.setItem('userInfo', JSON.stringify(temp + temp));
    return true;
}

/**
 * Get data
 */
export function get(key){
    if (issetLocalAuth) {
        const storageData = localStorage.getItem('userInfo');
        if (key === undefined) {
            return JSON.parse(storageData);
        } else {
            const sData = JSON.parse(storageData);
            return sData[key];
        }
    } else {
        console.log('Cannot get from storage: Local storage no set!');
        return '';
    }
}

/**
 * Add field to storage
 */
export function update(key, value){
    if (issetLocalAuth) {
      const storageData = localStorage.getItem('userInfo');
      const sData = JSON.parse(storageData);
      sData[key] = value;

      // Set storage
      localStorage.setItem('userInfo', JSON.stringify(sData));
    } else {
      console.log('Cannot append to storage: Local storage no set!');
    }
}

/**
 * Flush the session after logout
 */
export const flushSession = async() => {
    localStorage.removeItem('userInfo');
    return false;
}