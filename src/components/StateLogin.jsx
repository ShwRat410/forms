import { useState } from "react"

export default function Login() {

  const[enteredValues,setEnteredValues] = useState({
    email:'',
    password:''
  })

  const [didEdit,setDidEdit] = useState({
    email:false,
    password:false
  })

  const emailIsValid = !didEdit.email || enteredValues.email.includes('@')

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            value={enteredValues.email} 
            onBlur={()=>handleOnBlur('email')}
            onChange={(event)=>handleOnChange('email',event.target.value)}
          />
          <div className="control-error">{!emailIsValid && <p>Entered email is not valid</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            value={enteredValues.password} 
            onChange={(event)=>handleOnChange('password',event.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
