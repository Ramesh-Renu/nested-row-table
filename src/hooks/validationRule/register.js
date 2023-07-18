import appConstants from "@core/constants";
import {omit} from 'lodash';
let errors = {};
export default function validate(name, values) {
      
    /** FULL NAME */
    const validateFullName = () => {
      if (!values.fullName) {
        errors.fullName = 'Full name is required';
      }else if (values.fullName.length < 5) {
        errors.fullName = 'Minimum characters should not be less than 5';
      }else if (values.fullName.length > 250) {
        errors.fullName = 'Maximum characters should not exceed 250 ';
      }else{
        errors = omit(errors, "fullName");
      }
    }

    /** EMAIL ID */
    const validateEmail = () => {
      if (!values.email) {
        errors.email = 'Email address is required';
      }else if (!new RegExp(appConstants.VALIDATION_PATTERNS.email).test(values.email)) {
        errors.email = 'Enter a valid email address';
      }else if (values.email.length > 100) {
        errors.email = 'Maximum characters should not exceed 100';
      }else{
        errors = omit(errors, "email");
      }
    }
    
    /** PASSWORD */
    const validatePassword = () => {
      if (!values.password) {
        errors.password = 'Password is required';
      }else if (values.password.length < 6) {
        errors.password = 'Minimum characters should not be less than 6';
      }else if (values.password.length > 50) {
        errors.password = 'Maximum characters should not exceed 50';
      }else {
        errors = omit(errors, "password");
      }
    }

    if(name){
      if(name === 'fullName'){
        errors = omit(errors, "fullName");
        validateFullName();
      }
      if(name === 'email'){
        errors = omit(errors, "email");
        validateEmail();
      }
      if(name === 'password'){
        errors = omit(errors, "password");
        validatePassword();
      }
    }else{
      errors = {};
      validateFullName();
      validateEmail();
      validatePassword();
    }
    
    
    return errors;
};