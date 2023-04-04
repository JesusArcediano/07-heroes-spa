import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { PrivateRoute } from "../../router/PrivateRoute";

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {
    let lastPath = localStorage.getItem('lastPath') || '/';
    
    login('Fernando Herrera');

    navigate( lastPath, {
      replace: true
    });
  }


  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>
    </div>
  )
}
