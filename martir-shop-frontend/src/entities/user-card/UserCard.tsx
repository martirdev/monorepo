import {memo} from 'react';

import {Avatar} from '_shared/avatar';
import {USER} from '_utils/mock';

const makeFullName = (firstName: string, secondName: string) => `${secondName} ${firstName}`;

const UserCard = memo(function UserCard() {
  const {second_name, first_name, tg_login, avatar_url} = USER; // Todo подтягивать данные из бэка
  const fullName = makeFullName(first_name, second_name);

  return (
    <div className="flex gap-4 text-common-white">
      <Avatar src={avatar_url} alt={fullName} />
      <div className="hidden h-full flex-col gap-1 lg:flex">
        <div className="text-bold">{fullName}</div>
        <div className="text-small">{tg_login}</div>
      </div>
    </div>
  );
});

export {UserCard};
