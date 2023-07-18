import React, { useState } from "react";
import pic from "@assets/images/image1.jpg";
import { NavLink, useNavigate } from "react-router-dom";

// BOOTSTRAP FORM
import { Form } from "react-bootstrap";

// FORM ELEMENT
import FormGroup from "@shared/form/form-group/form-group.component";
import FormButton from "@shared/form/form-button/form-button.component";

// FORM VALIDATION HOOKS
import useForm from "@hooks/useForm";
import validate from "@hooks/validationRule/login";

// DIALOG
import Dialog from "@shared/dialog/dialog.component";

// API
import { get, set } from "@core/storage.utils";

const Login = () => {
  const navigate = useNavigate();

  const initialForm = {
    email: "",
    password: "",
  };

  // DIALOG HOOKS
  const [dialogType, setDialogType] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogStatus, setDialogStatus] = useState(false);
  const [dialogColor, setDialogColor] = useState("");

  //Final submit function
  const formLogin = () => {
    try {
      if (submitting) {
        const userId = get();
        // API CALL
        console.log("values.email", values);
        // if(userId.email===values.email && userId.password === values.password)
        if (
          values.email === "test@euroland.com" &&
          values.password === "oYuyHlHYOvPDrsj"
        ) {
          // loginUser().then((res)=>{
          //     if(res){
          //         /** DIALOG INFORMATION */
          //         setDialogType('toast');
          //         setDialogStatus(true);
          //         setDialogColor('success');
          //         setDialogMessage("Logged In Success");

          //         /** SAVE USER INFO TO LOCALSTORAGE */
          //         if(set(values)){
          //             navigate('/home');
          //             navigate(0);
          //         }
          //     }
          // });

          /** DIALOG INFORMATION */
          setDialogType("toast");
          setDialogStatus(true);
          setDialogColor("success");
          setDialogMessage("Logged In Success");

          /** SAVE USER INFO TO LOCALSTORAGE */
          if (set(values)) {
            navigate("/home");
            navigate(0);
          }
        } else {
          /** DIALOG INFORMATION */
          setDialogType("toast");
          setDialogStatus(true);
          setDialogColor("danger");
          setDialogMessage("Invalid User Credential");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const { handleChange, values, errors, handleSubmit, submitting } = useForm(
    initialForm,
    formLogin,
    validate
  );

  return (
    <>
      <Dialog
        type={dialogType}
        info={dialogMessage}
        show={dialogStatus}
        variant={dialogColor}
        bg={dialogColor}
        onClose={() => setDialogStatus(false)}
      ></Dialog>

      <div className="login-page">
        <div className="login-page-inner">
          <h2>Login</h2>

          <Form noValidate onSubmit={handleSubmit} className="login-form">
            <FormGroup
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              placeholder="Email"
              value={values.email || ""}
              validationMsg={errors.email}
            />

            <FormGroup
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              placeholder="********"
              value={values.password || ""}
              validationMsg={errors.password}
            />

            <FormButton
              className="submit-btn"
              label="Login"
              variant="primary"
              type="submit"
            />
          </Form>
          <NavLink className={"gotoRegister-link"}>
            <button className="gotoRegister-btn" label="Sign Up" type="button">
              Sign Up
            </button>
          </NavLink>
        </div>
        <div className="login-page-inner">
          <div className="image-col">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
