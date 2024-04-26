import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { convertMetersToKilometersForUI, convertSecondsToReadableTime } from "@/lib/utils";
import { Activity, User } from "@prisma/client";

type Props = {
  user: User;
  activities: Activity[];
};

export default async function DashboardTable({ user, activities }: Props) {
  const isActivityNew = (id: number) => {
    return user.newActivityIds.includes(id);
  };

  const bgBasedOnActivityAge = (activity: Activity): string => {
    //must be between newest ids and at least 24 hours from loadin
    if (isActivityNew(activity.id) && activity.inSystemSince > new Date(Date.now() - 24 * 60 * 60 * 1000)) {
      return "bg-orange-50";
    }
    //must be loaded to system in last 7 days
    if (activity.inSystemSince > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) {
      return "bg-green-50";
    }

    //default is loaded from component itself
    return "";
  };

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Your activities</CardTitle>
        <CardDescription className="flex flex-col gap-2 items-start justify-center">
          <span>
            Latest recorded activities. Activity must be public, done later than you first register here and need to be
            type of Ride or Run.
          </span>
          <section className="flex gap-2 font-medium">
            <span className="bg-orange-50">New activities</span>
            <span className="bg-green-50">Added in last 7 days</span>
          </section>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="table-cell">Distance</TableHead>
              <TableHead className="hidden sm:table-cell">Duration</TableHead>
              <TableHead className="hidden md:table-cell">Location country</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No activities found yet. Go out and earn your coins :)
                </TableCell>
              </TableRow>
            )}
            {activities.length > 0 &&
              activities.map((activity) => (
                <TableRow key={activity.id} className={bgBasedOnActivityAge(activity)}>
                  <TableCell>
                    <div className="font-medium">{activity.name}</div>
                    <div className="text-sm text-muted-foreground">{activity.type}</div>
                  </TableCell>
                  <TableCell className="table-cell">{convertMetersToKilometersForUI(activity.distance)} km</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {convertSecondsToReadableTime(activity.movingTime)}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      {activity.locationCountry}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(activity.startDate).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
