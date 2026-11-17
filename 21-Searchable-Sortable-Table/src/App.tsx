
import { useMemo, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  status: "Active" | "Inactive";
}

const initialUsers: User[] = [
  { id: 1, name: "Akanksha", email: "akanksha@gmail.com", age: 31, status: "Active" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com", age: 28, status: "Inactive" },
  { id: 3, name: "Priya", email: "priya@gmail.com", age: 29, status: "Active" },
  { id: 4, name: "Amit", email: "amit@gmail.com", age: 35, status: "Active" }
];

type SortKey = "name" | "age" | "email";
type SortDirection = "asc" | "desc";

export default function DataTable() {
  const [users] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );

    return [...filtered].sort((a, b) => {
      const first = a[sortKey];
      const second = b[sortKey];

      const comparison =
        typeof first === "number" && typeof second === "number"
          ? first - second
          : String(first).localeCompare(String(second));

          // console.log(comparison);

      return sortDirection === "asc"
        ? comparison
        : -comparison;
    });
  }, [users, search, sortKey, sortDirection]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(prev =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  return (
    <div>
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("email")}>Email</th>
            <th onClick={() => handleSort("age")}>Age</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan={4}>No users found</td>
            </tr>
          ) : (
            filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
