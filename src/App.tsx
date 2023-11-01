import { useAppDispatch, useAppSelector } from "./store/hooks";
import { RootState } from "./store/store";
import { setUser } from "./store/slices/usersSlice";
import { fetchAllUsers } from "./store/slices/usersSlice";

function App() {
  const users = useAppSelector((state: RootState) => state.usersReducer);
  const dispatch = useAppDispatch();

  console.log("users :", users);

  const handleFetchAllUsers = async () => {
    try {
      await dispatch(fetchAllUsers()).unwrap();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSetUser = async () => {
    try {
      dispatch(setUser("esrafil"));
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClick = async () => {
    await handleSetUser();
    await handleFetchAllUsers();
  };

  return (
    <div>
      <span className="text-3xl font-bold underline">users</span>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;
