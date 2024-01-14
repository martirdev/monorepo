/* eslint-disable @typescript-eslint/no-explicit-any */
import {omit} from 'lodash';
import {useCallback, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

export const useQuery = <P extends Record<string, (val: string | null) => any>>(parsers: P | undefined) => {
  const [params, setQuery] = useSearchParams();

  const keys = useMemo(() => Object.keys(parsers), [parsers]);
  const values = useMemo(
    () =>
      keys.reduce<{[K in keyof P]: ReturnType<P[K]>}>((acc, key: keyof P) => {
        acc[key] = parsers[key]?.(params.get(key.toString()));
        return acc;
      }, {} as any),
    [keys, params, parsers]
  );

  const mergeParams = useCallback(
    (params: Record<string, unknown>) =>
      setQuery(prev => {
        const objectParams = Object.fromEntries(prev);
        return Object.assign({}, objectParams, params);
      }),
    [setQuery]
  );
  const removeParams = useCallback(
    (params: string[]) =>
      setQuery(prev => {
        const objectParams = Object.fromEntries(prev);
        return Object.assign({}, omit(objectParams, params));
      }),
    [setQuery]
  );

  return {values, mergeParams, removeParams};
};

export const stringParser = (value: undefined | string) => value;
