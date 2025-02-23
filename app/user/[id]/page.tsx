import { userApiService } from "../../services/UserApiService";
import type { User } from "../../types/user";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function UserPage({ params }: { params: { id: string } }) {
  const userId = Number(params.id);
  const user: User = await userApiService.getUserById(userId);

  return (
      <div className="max-w-3xl mx-auto py-10 flex flex-col items-center justify-center">
    <Card className="max-w-sm mx-auto py-5 px-5 flex flex-col gap-5">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <div>
          <strong>Address:</strong>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
        <div>
          <strong>Company:</strong>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
    <Link href="/users">
      <Button className="mx-auto mt-10">Back to users</Button>
    </Link>
  </div>
  );
}
