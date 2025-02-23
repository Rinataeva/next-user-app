"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import UserCard from "../../components/UserCard";
import type { User } from "../types/user";

interface UserSearchProps {
  users: User[];
}
export default function UserSearch({ users }: UserSearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  return (
    <div className="space-y-4">
      <Input
        className="shadow-md"
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-1 pt-2">
        {filteredUsers.length === 0 ? (
          <div>No users found matching that name</div>
        ) : (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}
