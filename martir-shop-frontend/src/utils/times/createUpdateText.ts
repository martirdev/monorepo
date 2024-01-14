import dayjs from 'dayjs';

import {LABELS} from './consts';

export const createTextCreateUpdate = (createAt: string | undefined, updateAt: string | undefined) => {
  const times = [];

  const createAtDayJs = dayjs(createAt);
  if (createAt && createAtDayJs.isValid()) {
    times.push(`${LABELS.CREATED_AT} ${createAtDayJs.format('DD.MM.YYYY')}`);
  }

  const updateAtDayJs = dayjs(updateAt);
  if (updateAt && createAt !== updateAt && updateAtDayJs.isValid()) {
    times.push(`${LABELS.UPDATED_AT} ${dayjs(updateAt).fromNow()}`);
  }

  return times.join(', ');
};
