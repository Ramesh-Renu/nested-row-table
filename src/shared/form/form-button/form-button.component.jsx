import Button from 'react-bootstrap/Button';
import React from 'react';

// Ref forwarding is a technique for automatically passing a ref through a component to one of its children
const CustomButton = React.forwardRef((props, ref) => (
    <Button {...ref}> {props.children} </Button>
));
  
const FormButton = ({label, ...otherProps})=> {
    return (
        <>
        <CustomButton ref={otherProps}>{label}</CustomButton>
        </>
    );
}

export default FormButton;