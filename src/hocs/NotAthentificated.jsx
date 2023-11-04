import { Navigate } from "react-router-dom";

function NotAuthentificated({ children }) {
  const isAuth = localStorage.getItem("name");

  if (!isAuth) {
    return <Navigate to={'/auth'}></Navigate>
  }

  return children
}

export default NotAuthentificated;