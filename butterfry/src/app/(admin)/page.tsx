import { getUser } from "@/lib/external-api";
import { trpcNext } from "@/lib/trpc/server";
import { first } from "lodash";
import { redirect } from "next/navigation";

type AdminHomeProps = {
  searchParams: { invite?: string };
};

export default async function AdminHome({ searchParams }: AdminHomeProps) {
  const user = await getUser();
  let firstProjectId = first(user?.projects)?.projectId;

  if (searchParams.invite && user) {
    firstProjectId = await trpcNext().addUserByInvite.mutate({
      invite: searchParams.invite,
    });
  }

  return redirect(`/${firstProjectId}/products`);
}
