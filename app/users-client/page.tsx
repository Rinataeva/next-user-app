"use client";
import { useState, useEffect } from "react";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{user.name}</div>
          <div className="text-sm">
            <div>Username:{user.username}</div>
            <div>Email{user.email}</div>
            <div>Phone:{user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
