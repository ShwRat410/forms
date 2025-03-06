import { useState,useRef } from "react"

export default function Login() {

  const[emailValidityStatus,setEmailValidityStatus] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleOnSubmit(event){
    event.preventDefault()
    const enteredEmail = email.current.value
    const enteredPassword = password.current.value
    const emailIsInvalid = !enteredEmail.includes('@gmail.com')
    if(emailIsInvalid){
      setEmailValidityStatus(true)
      return
    }
    setEmailValidityStatus(false)
    console.log("Sending http request")
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
            ref={email}
          />
          <div className="control-error">{emailValidityStatus && <p>Entered email is not valid</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            ref={password}
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
