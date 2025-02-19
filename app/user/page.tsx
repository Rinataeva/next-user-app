import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function User() {
  return (
    <div>
      <h1>User Profile</h1>
      <Card className={cn("max-w-sm")}>
        <CardHeader>
          <CardTitle>Info</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-sm font-medium leading-none">Name:</p>
          <p>Email:</p>
          <p>Company:</p>
        </CardContent>
        <CardFooter>
          <Button>More info</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
