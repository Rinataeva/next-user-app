import { Button } from "@/components/ui/button";
import Link from "next/link";
import { userApiService } from "../services/UserApiService";
import type { User } from "../types/user";

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const users: User[] = await userApiService.getAllUsers();

  return (
    <ul className="space-y-4 p-4 bg-slate-200">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{user.name}</div>
          <div className="text-sm">
            <div>Email: {user.email}</div>
            <div>Company: {user.company.name}</div>
            <Link href={`/user/${user.id}`}>
              <Button>More info</Button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
