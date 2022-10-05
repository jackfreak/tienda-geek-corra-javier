/**
 * TextAreaField component.
 *
 * @author Javier Alejandro Corra
 */

import { useField } from "formik";

//import './TextAreaField.scss';


const TextAreaField = ({ children, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className='mb-3'>
            <label htmlFor={props.id || props.name} className='form-label'>{props.label}</label>

            <textarea
                {...field} {...props}
                className={`form-control ${meta.touched && meta.error ? 'is-invalid' : null}`}
            />

            {meta.touched && meta.error ? (
                <div className='invalid-feedback'>{meta.error}</div>
            ) : null}

            { children }
        </div>
    );
};


export {
    TextAreaField
}
