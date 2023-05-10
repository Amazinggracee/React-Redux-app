import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  selectUsers,
  selectIsLoading,
  selectError,
} from "./redux/User/usersSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
}

export default App;
