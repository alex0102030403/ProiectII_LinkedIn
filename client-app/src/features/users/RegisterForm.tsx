import { ErrorMessage, Form, Formik } from "formik";
import { set, values } from "mobx";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Button, Header, Label } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import ValidationError from "../../app/common/errors/ValidationError";
import axios, { AxiosError } from "axios";

export default observer(function RegisterForm() {

    const {userStore} = useStore();

    

    return(
        <Formik
        initialValues={{displayName:'',username: '',email:'',password:'', error: null}}
        onSubmit={(values,{setErrors}) => userStore.register(values).catch(error => 
        setErrors({error:"Invalid email or password"}))}
        validationSchema={Yup.object({
            displayName: Yup.string().required(),
            username: Yup.string().required(),
            email: Yup.string().required().email(),
            password: Yup.string().required()
        })}
        >

            {({handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Sign up to JobHive' color='teal' textAlign='center' />
                    <MyTextInput name='displayName' placeholder='DisplayName' />
                    <MyTextInput name='username' placeholder='Username' />
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <ErrorMessage name='error' render={() =>
                    
                        <Label style={{marginBottom: 10}} basic color='red' content={"error (De rezolvat pe vitor)"} />
                    }
                    />
                    <Button 
                   
                    disabled={!isValid || !dirty || isSubmitting}
                    loading={isSubmitting} 
                    positive content='Register' 
                    type="submit" fluid />
                </Form>
            )}

        </Formik>
    )
})