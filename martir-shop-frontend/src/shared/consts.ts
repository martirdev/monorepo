import ClipboardIcon from '@heroicons/react/outline/ClipboardIcon';
import CloudIcon from '@heroicons/react/outline/CloudIcon';
import NewspaperIcon from '@heroicons/react/outline/NewspaperIcon';
import ShieldCheckIcon from '@heroicons/react/outline/ShieldCheckIcon';
import TableIcon from '@heroicons/react/outline/TableIcon';
import TagIcon from '@heroicons/react/outline/TagIcon';
import UserIcon from '@heroicons/react/outline/UserIcon';
import {assign} from 'lodash';

import {CITIES} from './cities';

export const Icons = {
  Clothes: TagIcon,
  Orders: ClipboardIcon,
  TaskBoard: TableIcon,
  Release: CloudIcon,
  Users: UserIcon,
  Permissions: ShieldCheckIcon,
  Content: NewspaperIcon
};

export const CITIES_OPTIONS = CITIES.map(city => assign({label: city.ru_name, value: city.ru_name}, city));
