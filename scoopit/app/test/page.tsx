import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  let { data: users, error } = await supabase.from("users").select("firstName");

  return (
    <ul className="my-auto text-foreground">
      {users?.map((user) => (
        <li>{user.firstName}</li>
      ))}
    </ul>
  );
}
