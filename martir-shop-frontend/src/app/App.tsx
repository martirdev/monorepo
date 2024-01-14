import {QueryClientProvider} from '@tanstack/react-query';
import {App as AntApp, ConfigProvider} from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

import {Routing} from '_pages';

import {trpc, useTRPc} from '../shared/api/trpc';
import {ANTD_CONFIG} from './consts';

dayjs.locale('ru');
dayjs.extend(relativeTime);

function App() {
  const {trpcClient, queryClient} = useTRPc();

  return (
    <ConfigProvider theme={ANTD_CONFIG}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <AntApp style={{height: '100%'}}>
            <Routing />
          </AntApp>
        </QueryClientProvider>
      </trpc.Provider>
    </ConfigProvider>
  );
}

export {App};
