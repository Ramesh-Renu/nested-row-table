import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastMessage = ({info, ...otherProps})=> {
  if(info){
    return (
      <ToastContainer position="top-end">
        <Toast autohide delay={2200} {...otherProps}>
            <Toast.Body className='text-white'>{info}</Toast.Body>
        </Toast>
      </ToastContainer>
    );
  }else{
    return null;
  }
}

export default ToastMessage;