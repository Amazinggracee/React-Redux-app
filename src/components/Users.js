import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsersAsync,
  selectUsers,
  selectIsLoading,
  selectError,
} from "../store/users/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
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
};

export default Users;
