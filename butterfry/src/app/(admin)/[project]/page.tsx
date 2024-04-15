import { getUser } from "@/lib/external-api";
import { first } from "lodash";
import { redirect } from "next/navigation";

export default async function Project() {
  const user = await getUser();
  const firstProjectId = first(user.projects)?.projectId;
  return redirect(`/${firstProjectId}/products`);
}
