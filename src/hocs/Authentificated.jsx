import { Navigate } from "react-router-dom";

function Authentificated(Component) {
  return function AuthentificatedComponent(props) {
    const isAuth = localStorage.getItem("name");

    if (isAuth) {
      return <Navigate to={'/form'} />
    }

    return <Component {...props} />
  }
}

export default Authentificated;