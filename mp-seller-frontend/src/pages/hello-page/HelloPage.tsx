import { trpc } from "../../app";

function HelloPage() {
  const { data, isFetching } = trpc.example.useQuery(1);

  return <>{isFetching ? "Загрузка..." : JSON.stringify(data)}</>;
}

export default HelloPage;
