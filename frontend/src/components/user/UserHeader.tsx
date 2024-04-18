import { Card } from "@/components/ui/Card";
import { toFileURL } from "@/lib/utils";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import { PublicUser } from "@/types";
import { LogOut } from "lucide-react";
import { logOutCurentUser } from "@/services/userService";
import { useNavigate } from "react-router-dom";
import { useCurrentUserSetter } from "@/stores/userSlice";

dayjs.extend(duration);
dayjs.extend(relativeTime);

interface UserHeaderProps {
  user: PublicUser;
}

export function UserHeader({ user }: UserHeaderProps) {
  const navigate = useNavigate();
  const setCurrentUser = useCurrentUserSetter();
  function logOut() {
    navigate("/");
    logOutCurentUser();
    setCurrentUser(null);
  }
  return (
    user && (
      <div className="flex w-full mt-8">
        <Card className="flex justify-between items-center min-h-52 w-full">
          <div className="flex items-center flex-row">
            <div className="flex items-center justify-center size-32 ml-16 bg-white z-10 rounded-full border-2 overflow-hidden">
              <img src={toFileURL(user.id, user?.avatar)} alt="" />
            </div>
            <div className="flex flex-col items-center ml-12">
              <span className="text-left w-full text-3xl font-bold">
                @{user.username}
              </span>
              <span className="text-left w-full italic text-stone-400">
                {formatSinceCreatedUser(user.created)}
              </span>
            </div>
          </div>
          <button
            className="flex items-center mr-16 hover:text-red-400 duration-300"
            onClick={logOut}
          >
            <LogOut className="size-10" />
          </button>
        </Card>
      </div>
    )
  );
}

function formatSinceCreatedUser(dateAsString: string) {
  const date = dayjs(dateAsString);
  const millisSince = dayjs(new Date()).diff(date);
  const duration = dayjs.duration({ milliseconds: millisSince });
  return "Miembro desde hace " + duration.locale("es").humanize();
}
