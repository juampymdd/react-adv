import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/customForm.json'
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: { [key :string]: any } = {}
const requiredFields: { [key: string]: any} = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if( !input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations ) {
        if ( rule.type === 'required' ){
            schema = schema.required('Este campo es requerido.');
        }

        if ( rule.type === "minLength"){
            schema = schema.min((rule as any).value || 2 , `El campo debe tener al menos ${(rule as any).value || 2} caracteres.` )
        }

        if (rule.type === "email"){
            schema = schema.email("El campo debe tener formato de email.")
        }
        // ... otras reglas
        requiredFields[input.name] = schema;
        console.log(requiredFields)
    }
}

const validationSchema = Yup.object({ ...requiredFields })
export const DynamicForm = () => {

    console.log(formJson)


    return <div>
        <h1> Dynamic Form</h1>
        <Formik
            initialValues={ 
                initialValues
            }
            onSubmit={( values )=>console.log( values )}
            validationSchema={validationSchema}
        >
            { (formik) => (
                <Form>
                    {formJson.map( ({type, name, placeholder, label, options}) => {
                        if (type === 'input' || type === 'password' || type === 'email'){

                            return <MyTextInput
                                key={ name }
                                label={ label }
                                name={ name }
                                type={ type as any }
                                placeholder={ placeholder}
                            />
                        } else if (type === 'select'){
                            return (
                                <MySelect 
                                    key={ name }
                                    label={ label }
                                    name={ name }
                                >
                                    <option value=""> Select an option </option>
                                    {
                                        options?.map(({id, label})=>(
                                            <option key={ id } value={ id }>{ label }</option>
                                        ))
                                    }
                                </MySelect>
                            )
                        }
                        throw new Error(`El type ${type} no es soportado.`)
                    })
                    }

                    <button type="submit">Crear</button>
                </Form>
            )}
        </Formik>
    </div>;
};
