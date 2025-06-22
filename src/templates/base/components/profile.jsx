import { CircleUserRound } from "lucide-react";
import { Avatar } from "../../../components/avatar/avartar";
import { useSelector } from "react-redux";

export function Profile() {
  const user = useSelector((store) => {
    return store.userReducer.user;
  });
  return (
    <div className="flex gap-4 pr-4 justify-between items-center">
      <p className="text-white">{user.hoTen}</p>
      <Avatar>
        <CircleUserRound className="text-white" />
      </Avatar>
    </div>
  );
}
