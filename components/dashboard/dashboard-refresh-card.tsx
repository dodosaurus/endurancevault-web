import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LogoutButton from "./logout-button"
import { logout } from "@/server/actions"

type Props = {
  lastStravaRefresh: Date;
  inAppSince: Date
}

export default function DashboardRefreshCard( { lastStravaRefresh, inAppSince }: Props) {
  const convertToBrowserTime = (date: Date) => {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toLocaleString("en-GB");
  }

  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>Info</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Last refresh at: {convertToBrowserTime(lastStravaRefresh)} <br />
          In app since: {convertToBrowserTime(inAppSince)}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <LogoutButton logout={logout} />
      </CardFooter>
    </Card>
  )
}
