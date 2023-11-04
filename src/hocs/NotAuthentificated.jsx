import { Navigate } from "react-router-dom";

function NotAuthentificated(Component) {
  return function NotAuthentificated(props) {
    const isAuth = localStorage.getItem("name");

    if (!isAuth) {
      return <Navigate to={'/auth'}></Navigate>
    }

    return <Component {...props} />
  }
}

export default NotAuthentificated;