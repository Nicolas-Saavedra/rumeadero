import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import {
  CircleChevronDown,
  CircleChevronUp,
  CircleMinus,
  Users,
} from "lucide-react";
import { User } from "@/types";

interface UserStatistics {
  user: User;
}

export function UserStatistics({ user }: UserStatistics) {
  const [localStatistics, setLocalStatistics] = useState(user.statistics);

  function ChevronIcon({ increased }: { increased: number }) {
    switch (increased) {
      case 1:
        return <CircleChevronUp className="text-green-400" />;
      case 0:
        return <CircleMinus />;
      case -1:
        return <CircleChevronDown className="text-red-400" />;
    }
  }

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Estadisticas</CardTitle>
        <CardDescription>
          Para mirar tus ultimos cambios en el rumeadero
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Likes dados esta semana</CardTitle>
              <CardDescription>Que tanto amor repartiste</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row items-center gap-3">
                <h2 className="text-4xl bold">
                  {localStatistics.numberOfLikesThisWeek.value}
                </h2>
                <ChevronIcon
                  increased={localStatistics.numberOfLikesThisWeek.increase}
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Comentarios hechos en la semana</CardTitle>
              <CardDescription>Tu opinion es importante</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row items-center gap-3">
                <h2 className="text-4xl bold">
                  {localStatistics.numberOfCommentsThisWeek.value}
                </h2>
                <ChevronIcon
                  increased={localStatistics.numberOfCommentsThisWeek.increase}
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Grupos a los que eres parte</CardTitle>
              <CardDescription>Entre mas compañeros, mejor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-row items-center gap-3">
                <h2 className="text-4xl bold">
                  {localStatistics.numberOfGroupsPartOf}
                </h2>
                <Users />
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
