import { useEffect, useState } from "react";

const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect with an empty dependency array runs once, when the component loads.
  useEffect(() => {
    const abortController = new AbortController();

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(USERS_API_URL, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        // Ignore the abort that happens when the component unmounts.
        if (error.name === "AbortError") return;
        setErrorMessage(error.message || "Something went wrong.");
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchUsers();

    // Cleanup: cancel the request if the component unmounts mid-fetch.
    return () => abortController.abort();
  }, []);

  if (isLoading) {
    return (
      <div className="status status--loading" role="status">
        <span className="spinner" aria-hidden="true" />
        Loading users…
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="status status--error" role="alert">
        <strong>Couldn't load users.</strong> {errorMessage}. Check your
        connection and refresh the page.
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td data-label="ID">{user.id}</td>
              <td data-label="Name" className="user-table__name">
                {user.name}
              </td>
              <td data-label="Username">@{user.username}</td>
              <td data-label="Email">
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td data-label="Phone">{user.phone}</td>
              <td data-label="Website">
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDirectory;
