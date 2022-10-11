/**
 * EmailInputField component.
 *
 * @author Javier Alejandro Corra
 */

import { useField } from "formik";

//import './EmailInputField.scss';


const EmailInputField = ({ label = 'Email', children, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);

    //console.log('field', field);
    //console.log('meta', meta);
    //console.log(props);
    //console.log(children);

    return (
        <div className='mb-3'>
            <label htmlFor={props.id || props.name} className='form-label'>{label}</label>

            <input
                type='email'
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
    EmailInputField
}
