import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import '../styles/styles.css'
import {MyCheckbox , MyTextInput, MySelect} from '../components'
// import { MyTextInput } from '../components/MyTextInput';
// import { MySelect } from '../components/MySelect';
// import { MyCheckbox } from '../components/MyCheckbox';


export const FormikAbstractation = () => {
    
    


    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values)=>{
                    console.log( values )
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                        lastName: Yup.string()
                                    .max(10, 'Debe de tener 10 caracteres o menos')
                                    .required('Requerido'),
                        email: Yup.string()
                                .required('Requerido')
                                .email('El correo no tiene un formato valido'),
                        terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las condiciones.'),
                        jobType: Yup.string()
                                    .notOneOf([ 'it-jr' ], 'Esta opcion no es permitida.')
                                    .required("Requerido")
                    })
                }
                
            >
                {(formik) => {
                    return (
                        <Form>
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="First Name" />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder="Last Name" />

                            <MyTextInput
                                label="Email Address"
                                name="email"
                                placeholder="Email Address"
                                type="email" />


                            <label htmlFor="jobType">Job Type</label>
                            <MySelect name="jobType" label="Job Type">
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-jr">It Junior</option>
                            </MySelect>

                            <MyCheckbox label="Terms and conditions" name={'terms'}  />

                            <button type='submit'>Submit</button>
                        </Form>
                    );
                }
                }
            </Formik>
            
        </div>
    )
};

