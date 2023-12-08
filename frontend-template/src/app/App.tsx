import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { client, trpc } from "./trpc";
import { Routing } from "../pages";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => client);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Routing />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
