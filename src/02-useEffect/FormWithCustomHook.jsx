import { useEffect } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { onResetForm, onInputChange , username, email, password} = useForm({
        username:'',
        email: '',
        password:''
    })

   // const { username, email, password } = formState;

  return (
    <>
    <h1>Formulario con custom hooks</h1><br/>
    <hr />
    <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
        value= {username}
    />

    <input 
        type="email"
        className="form-control mt-2"
        placeholder="Fernando@google.com"
        name="email"
        onChange={onInputChange}
        value={email} 
    />
    <input 
        type="password"
        className="form-control mt-2"
        placeholder="*********"
        name="password"
        onChange={onInputChange}
        value={password} 
    />

    <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
