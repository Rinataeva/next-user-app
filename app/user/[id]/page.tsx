import { userApiService } from "../../services/UserApiService";
import type { User } from "../../types/user";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardContent, CardTitle } from "@/components/ui/card";

export default async function User({ params }: { params: { id: string } }) {
  const userId = Number(params.id); 
  const user: User = await userApiService.getUserById(userId);

  return (
    <div>
      <h1>User Profile</h1>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <div>
            <strong>Address:</strong>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
          </div>
          <div>
            <strong>Company:</strong>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button>More info</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
