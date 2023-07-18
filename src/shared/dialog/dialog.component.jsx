import AlertMessage from "./alert/alert.component";
import ToastMessage from "./toast/toast.component";


const Dialog = ({type, info, ...otherProps})=> {  
  if(type === 'alert'){
    return <AlertMessage info={info} {...otherProps}></AlertMessage>
  }else if(type==='toast'){
    return <ToastMessage info={info} {...otherProps}></ToastMessage>
  }
}

export default Dialog;