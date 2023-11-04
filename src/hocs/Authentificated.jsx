import { Navigate } from "react-router-dom";

function Authentificated({ children }) {
  const isAuth = localStorage.getItem("name");

  if (isAuth) {
    return <Navigate to={'/form'}></Navigate>
  }

  return children
}

export default Authentificated;