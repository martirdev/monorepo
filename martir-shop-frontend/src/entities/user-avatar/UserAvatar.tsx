import {memo} from 'react';

import {Avatar} from '_shared/avatar';
import {USER} from '_utils/mock';

const makeFullName = (firstName: string, secondName: string) => `${secondName} ${firstName}`;

const UserAvatar = memo(function UserAvatar() {
  const {second_name, first_name, avatar_url} = USER; // Todo подтягивать данные из бэка
  const fullName = makeFullName(first_name, second_name);

  return <Avatar src={avatar_url} alt={fullName} size="sm" />;
});

export {UserAvatar};
