import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  const { user } = useContext( UserContext );
    return (
      <>
          <h1>Home page  </h1><small>{ user?.name }</small>
          <hr />
  
          <pre>
            { JSON.stringify(user, null, 3)}
          </pre>  

          
      </>
    )
  }
  