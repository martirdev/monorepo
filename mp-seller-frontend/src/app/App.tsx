import { QueryClientProvider } from "@tanstack/react-query";
import { Routing } from "../pages";
import { trpc, useTRPc } from "../shared/api/trpc";

function App() {
  const { queryClient, trpcClient } = useTRPc();

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
