import { User } from "@prisma/client";

interface UserProp {
  user: any;
}

export default function UserCard(prop: UserProp) {
  return <h1>{prop.user.name}</h1>;
}
