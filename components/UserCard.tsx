import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { User } from "../app/types/user";

interface UserCardProps {
  user: User;
}
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex-col items-center justify-center">
      {" "}
      <Card className="flex flex-col justify-between w-full">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>
            <div>Works for: </div>
            {user.company.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>Email: {user.email}</div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href={`/user/${user.id}`}>
            <Button>More info</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
