import Clock from '@heroicons/react/outline/ClockIcon';
import dayjs from 'dayjs';
import {memo, useMemo} from 'react';

import {Avatar} from '_shared/avatar';
import {Button} from '_shared/button';
import {OutlinedCard} from '_shared/card-outlined';
import {cn} from '_utils/cn';
import {PERFORMERS_AND_DATA} from '_utils/mock';

import {TiketCardPropsType} from './types';

const TicketCard = memo<TiketCardPropsType>(function TicketCard({ticket}) {
  const isOldEnough = useMemo(
    () => dayjs(ticket.update_at, 'YYYY-MM-DDTHH:mm:ssZ').isBefore(dayjs().subtract(3, 'months')),
    [ticket.update_at]
  );

  return (
    <OutlinedCard className="w-[300px]">
      <div className="flex w-full gap-2">
        <Avatar
          src={PERFORMERS_AND_DATA[ticket.executor_id]?.image}
          alt={PERFORMERS_AND_DATA[ticket.executor_id]?.name}
          size="xsm"
        />
        <div className="flex w-0 flex-1 flex-col gap-2">
          <div className="flex items-center justify-between gap-1">
            <div className="flex w-0 flex-1 gap-1">
              {ticket.type && <div className="text-paragraph uppercase">[{ticket.type}]</div>}
              <div className="truncate text-bold">#{ticket.task_id}</div>
            </div>
            <div className="flex gap-1">
              <div className="text-small">{ticket.planned_sp ?? 0}</div>
              <Clock
                className={cn('aspect-square w-4', {
                  'text-danger-normal': isOldEnough
                })}
              />
            </div>
          </div>
          <div className="text-small">{ticket.name}</div>
        </div>
      </div>
      <div className="mt-2">
        {ticket.status_task === 'opened' && (
          <Button theme="warning">
            <div className="flex items-center gap-2">
              <div className="text-small">{`Открыт ${dayjs(ticket.update_at, 'YYYY-MM-DDTHH:mm:ssZ').fromNow()}`}</div>
            </div>
          </Button>
        )}
        {ticket.status_task === 'in-progress' && (
          <Button>
            <div className="flex items-center gap-2">
              <div className="text-small">{`В работе ${dayjs(
                ticket.update_at,
                'YYYY-MM-DDTHH:mm:ssZ'
              ).fromNow()}`}</div>
            </div>
          </Button>
        )}
        {ticket.status_task === 'in-review' && (
          <Button theme="warning">
            <div className="flex items-center gap-2">
              <div className="text-small">{`На проверке ${dayjs(
                ticket.update_at,
                'YYYY-MM-DDTHH:mm:ssZ'
              ).fromNow()}`}</div>
            </div>
          </Button>
        )}
        {ticket.status_task === 'done' && (
          <Button theme="success">
            <div className="flex items-center gap-2">
              <div className="text-small">{`Закрыт ${dayjs(ticket.update_at, 'YYYY-MM-DDTHH:mm:ssZ').fromNow()}`}</div>
            </div>
          </Button>
        )}
      </div>
    </OutlinedCard>
  );
});
export {TicketCard};
