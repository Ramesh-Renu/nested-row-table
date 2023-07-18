import {omit} from 'lodash';
import appConstants from "@core/constants";
let errors = {};
export default function validate(name, values) {
      
    /** EMAIL ID */
    const validateEmail = () => {
      if (!values.email) {
        errors.email = 'Email address is required';
      }else if (!new RegExp(appConstants.VALIDATION_PATTERNS.email).test(values.email)) {
        errors.email = 'Enter a valid email address';
      }else{
        errors = omit(errors, "email");
      }
    }
    
    /** PASSWORD */
    const validatePassword = () => {
      if (!values.password) {
        errors.password = 'Password is required';
      }else {
        errors = omit(errors, "password");
      }
    }

    if(name){
     
    }else{
      errors = {};
      validateEmail();
      validatePassword();
    }
    
    
    return errors;
};