import { useState } from "react"
import Input from "./Input"
import {isEmail,isNotEmpty,hasMinLength} from '../util/validation.js'

export default function Login() {

  const[enteredValues,setEnteredValues] = useState({
    email:'',
    password:''
  })

  const [didEdit,setDidEdit] = useState({
    email:false,
    password:false
  })

  const emailIsInValid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6)

  function handleOnBlur(identifier){
    console.log("Inside blur")
    setDidEdit((prevValues)=>({
        ...prevValues,
        [identifier]:true
    }))
  }

  function handleOnSubmit(event){
    console.log(enteredValues)
    event.preventDefault()
  }

  function handleOnChange(identifier,value){
    setEnteredValues((prevValues)=>({
      ...prevValues,
      [identifier]:value
    }))
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
            label="Email"
            id="email" 
            type="text" 
            name="email" 
            value={enteredValues.email} 
            onBlur={()=>handleOnBlur('email')}
            onChange={(event)=>handleOnChange('email',event.target.value)}
            error={emailIsInValid && "Please enter a valid email"}
        />
        <Input 
            label="Password"
            id="password" 
            type="password" 
            name="password" 
            value={enteredValues.password} 
            onBlur={()=>handleOnBlur('password')}
            onChange={(event)=>handleOnChange('password',event.target.value)}
            error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button  className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
