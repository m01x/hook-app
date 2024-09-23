import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'strider',
        email: 'flavio@google.kr'
    })

    const {username, email} = formState;



    const onInputChange = ({target}) => {
      
        const {name , value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }


    useEffect( () => {
    //   console.log('General useEffect Called!');
    }, [ ]);

    useEffect( () => {
    //   console.log('formState useEffect Called!');
    }, [ formState]);

    useEffect( () => {
    //   console.log('Email useEffect Called!');
    }, [ email]);







  return (
    <>
    <h1>Formulario simple</h1><br/>
    <small><b>Keyword: strider2</b></small>
    <hr />
    <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        onChange={onInputChange} 
    />

    <input 
        type="email"
        className="form-control mt-2"
        placeholder="Fernando@google.com"
        name="email"
        onChange={onInputChange} 
    />

    {
        (username === 'strider2') && <Message/>
    }
    
    </>
  )
}
