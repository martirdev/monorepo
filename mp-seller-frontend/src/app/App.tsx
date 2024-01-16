import {QueryClientProvider} from '@tanstack/react-query';

import {trpc, useTRPc} from '_shared/api/trpc';

import {Routing} from '../pages';

function App() {
    const {queryClient, trpcClient} = useTRPc();

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <Routing />
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default App;
