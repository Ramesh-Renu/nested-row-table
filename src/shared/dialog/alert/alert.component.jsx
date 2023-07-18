import Alert from 'react-bootstrap/Alert';

const AlertMessage = ({info, ...otherProps})=> {  
  if(info && otherProps.show){
    return (
        <Alert {...otherProps} dismissible>
            {info}
        </Alert>
    );
  }else{
    return null;
  }
}

export default AlertMessage;