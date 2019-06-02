import React from 'react';
import './form.css'
import { Field, reduxForm } from 'redux-form'

 


const Form = (props) => {

 const  renderform = (formprop) => {


       return    (<div>
                  <label>{formprop.label}</label>
                  <input onChange={formprop.input.onChange} value={formprop.input.value}/>
                  </div> )

}
const formSubmit =(formvalue)=> {
  console.log(formvalue)
}
  return <div className='  container justify-content-center '>

             <form onSubmit={props.handleSubmit(formSubmit)} className='form-group'>

                 <Field name='name' component={renderform} label='Name'/>
                 <Field name='email' component={renderform} label='Email'/>
                 <button type='submit'> Submit</button>

             </form>

        </div>
}

export default reduxForm({
 form: 'register'
})(Form);
