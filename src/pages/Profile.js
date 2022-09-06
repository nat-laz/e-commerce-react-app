import Reac, {useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { Navigate } from "react-router-dom";
export default function Profile() {
  const {user} = useContext(AppContext)
   if (user) {
    return (
    <div><h1>{user.firstName}</h1></div>
  );
    } else {
      return <Navigate to="/login"/>;
    }
}
