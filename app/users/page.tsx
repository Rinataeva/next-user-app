import { userApiService } from "../services/UserApiService";
import type { User } from "../types/user";
import UserSearch from "./search"; 

export default async function UsersServer() {
  const users: User[] = await userApiService.getAllUsers();

  return (
    <div className="space-y-4 p-4 bg-slate-200">
            <UserSearch users={users} />
    </div>
  );
}
