


import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import '../styles/styles.css'
import * as Yup from 'yup';


export const RegisterFormikPage = () => {


    return (<div>
        <h1>Register Formik Page</h1>
        <Formik
        
            initialValues={{
                name: '',
                email: '',
                password: '',
                passwordConfirm: ''
            }}

            onSubmit={(values)=> console.log( {values })}

            validationSchema={Yup.object({
                name: Yup.string()
                        .max(15, 'Should have max of 15 characters')
                        .min(2, 'Should have min of 2 characters')
                        .required('Is required'),

                email: Yup.string()
                        .email('Should be have email format.')
                        .required('Is required'),
                password: Yup.string()
                            .required('Password is required'),
                passwordConfirm: Yup.string()
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')

            })}
        >
            
            {
                ({handleReset}) => (
                    <Form>
                        <MyTextInput 
                            label="Name" 
                            type="text" 
                            name="name"
                            placeholder="Name"
                        />

                        <MyTextInput 
                            label="Email Address" 
                            type="email" 
                            name="email"
                            placeholder="Email Address" 
                        />
                        <MyTextInput 
                            label="Password" 
                            type="password" 
                            name="password"
                            placeholder="Password"
                        />
                        <MyTextInput 
                            label="Confirm Password" 
                            type="password" 
                            name="passwordConfirm"
                            placeholder="Confirm Password"
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={ handleReset } >Reset Form</button>
                    </Form>
                )
            }
        </Formik>
        
    </div>
    );
};
