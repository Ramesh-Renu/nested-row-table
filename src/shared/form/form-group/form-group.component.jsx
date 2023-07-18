import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './form-group.styles.scss';

const FormGroup = ({label, validationMsg, ...otherProps})=> {
        
    let formFeedbackControl;
    if(validationMsg){
        formFeedbackControl =  <span className="validation-error"> {validationMsg} </span>;
    }

    return (
        <Row>
            <Form.Group className="mb-2">
                <Form.Label>{label}</Form.Label>
                <Form.Control {...otherProps} />
                
                {validationMsg && formFeedbackControl}
                
            </Form.Group>
        </Row>
    );
}

export default FormGroup;