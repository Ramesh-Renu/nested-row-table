import React from "react";
import { NavLink,useNavigate } from 'react-router-dom';

// BOOTSTRAP FORM
import { Form } from "react-bootstrap";

// FORM ELEMENT
import FormGroup from '@shared/form/form-group/form-group.component';
import FormButton from "@shared/form/form-button/form-button.component";

// FORM VALIDATION HOOKS
import useForm from "@hooks/useForm";
import validate from '@hooks/validationRule/register';
import { set } from "@core/storage.utils";

const Register = ()=>{
    const initialForm = {
        fullName: '',
        email: '',
        password: '',
    }
    const navigate = useNavigate();


    //Final submit function
    const formRegister = () => {
        try{
            if(submitting){
                // API CALL
                navigate('/');
                const initialForm = {
                    fullName: values.fullName,
                    email: values.email,
                    password: values.password,
                }
                
                set(initialForm);
                // let result = saveRegistration(values)
                // if(result){
                //     console.log("API call success");
                // }
            }
        }catch(err){
            console.log(err);
        }
    }
    const {handleChange, values,errors,handleSubmit,submitting} = useForm(initialForm, formRegister, validate);



    return(
        <div className="register">
            <div className="box-deign">
                <h2>Register</h2>
                
                <Form noValidate onSubmit={handleSubmit} className="register-form">
                    <FormGroup label="Full Name" type="text" required onChange={handleChange} name="fullName" placeholder="Full Name" value={values.fullName || ''} validationMsg={errors.fullName}/>
                    
                    <FormGroup label="Email" type="email" required onChange={handleChange} name="email" placeholder="Email" value={values.email || ''} validationMsg={errors.email}/>
                        
                    <FormGroup label="Password" type="password" required onChange={handleChange} name="password" placeholder="********" value={values.password || ''} validationMsg={errors.password}/>
                    
                    <FormButton className='submit-btn' label="Submit" variant="primary" type="submit"/>
                </Form>
                <p className="already-acc">Already you have account click below!</p>
                <NavLink to="/" className={'gotoRegister-link'}><FormButton className='gotoLogin-btn' label="Login" type="button">Login</FormButton></NavLink>

            </div>
        </div>
    )

}

export default Register; 