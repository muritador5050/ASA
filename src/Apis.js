import { useEffect, useReducer } from "react";

const initialState = {
  user: [],
  isLoading: false,
  error: null,
};

function fecthreducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, user: action.payload };

    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}

export default function Apis() {
  const [state, dispatch] = useReducer(fecthreducer, initialState);
  const { user, isLoading, error } = state;
  useEffect(() => {
    const fetchUser = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await fetch(
        //   "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };
    fetchUser();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {user.map((us) => (
          <tr key={us.id}>
            <th>{us.id}</th>
            <th>{us.name}</th>
            <th>{us.email}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
