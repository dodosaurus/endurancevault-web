import { CircleFlag } from "react-circle-flags";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

function AppCard() {
  return (
    <div className="relative h-96 w-80 flex flex-col justify-end border rounded-lg shadow-lg">
      <Image className="bg-img border rounded-lg" src="https://psziumetrhqiqfckluyr.supabase.co/storage/v1/object/sign/master-collection-1/cyclists/tadej-pogacar-1.avif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYXN0ZXItY29sbGVjdGlvbi0xL2N5Y2xpc3RzL3RhZGVqLXBvZ2FjYXItMS5hdmlmIiwiaWF0IjoxNzE1ODg0NzI2LCJleHAiOjE3NDc0MjA3MjZ9._APimoAatWcK0lWrhlFfH_b_LnSI5bD9H9z1RXxvbzQ&t=2024-05-16T18%3A38%3A46.641Z" alt="app card image" width={400} height={330} />
      <Card className="h-24">
        <CardHeader>
          <CardTitle className="flex justify-between items-center gap-2">
            <span>1</span>
            <div className="flex justify-end items-center gap-3">
              <CircleFlag className="w-6 h-6" countryCode="si" />
              <h2>Tadej Pogačar</h2>
            </div>
          </CardTitle>
          <CardDescription className="flex justify-end items-center">
            <p>UAE Team Emirates</p>
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
        <div className="text-xs text-muted-foreground">content goes here</div>
      </CardContent>
      <CardFooter></CardFooter> */}
      </Card>
    </div>
  );
}

export default AppCard;