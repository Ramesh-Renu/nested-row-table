import { createContext, useEffect, useReducer } from 'react';
import { issetLocalAuth, get } from '@core/storage.utils';



export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) =>{
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
    
  };

  useEffect(() => {
    if(issetLocalAuth){
        setCurrentUser(get());
    }else{
      setCurrentUser(null);
    }
    return issetLocalAuth;
  }, []);

  return <UserContext.Provider value={{currentUser, dispatch}}>{children}</UserContext.Provider>;
};