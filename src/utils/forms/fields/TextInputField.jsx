/**
 * TextInputField component.
 *
 * @author Javier Alejandro Corra
 */

import { useField } from "formik";

//import './TextInputField.scss';


const TextInputField = ({ children, ...props }) => {
    const [field, meta] = useField(props);

    // FormGroup ?
    return (
        <div className='mb-3'>
            <label htmlFor={props.id || props.name} className='form-label'>{props.label}</label>

            <input
                type='text'
                className={`form-control ${meta.touched && meta.error ? 'is-invalid' : null}`}
                {...field} {...props}
            />

            {meta.touched && meta.error ? (
                <div className='invalid-feedback'>{meta.error}</div>
            ) : null}

            {children}
        </div>
    );
};


export {
    TextInputField
}
