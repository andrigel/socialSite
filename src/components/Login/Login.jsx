import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utills/validators/validators";
import {Input} from "../common/FormsControlls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const maxLength30 = maxLengthCreator(30);


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={Input}
                   validate={[requiredField,maxLength30]}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}
                   validate={[requiredField,maxLength10]}/>
        </div>
        <div>
            <Field component={Input} type={'checkbox'} name={'rememberMe'}/> remember me
        </div>
        <div>
            <button type={'submit'}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;