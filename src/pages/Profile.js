import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";


export default function Profile() {
  const { user, setUser } = useContext(AppContext);
  if (user) {
    return (
      <div>
        <h1>
          {user.firstName}, {user.lastName}
        </h1>
        <p>{user.email}</p>
        <p>{user.city}</p>
        <p>{user.phone}</p>
        <button onClick={() => setUser(null)}>SIGN OUT</button>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
