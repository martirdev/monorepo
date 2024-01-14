/* eslint-disable @typescript-eslint/no-explicit-any */
import {Formik, FormikConfig, FormikValues} from 'formik';
import {useCallback} from 'react';

type Flatten<T extends object> = object extends T
  ? object
  : {
      [K in keyof T]-?: (
        x: NonNullable<T[K]> extends infer V
          ? V extends object
            ? V extends readonly any[]
              ? Pick<T, K>
              : Flatten<V> extends infer FV
              ? {
                  [P in keyof FV as `${Extract<K, string | number>}.${Extract<P, string | number>}`]: FV[P];
                }
              : never
            : Pick<T, K>
          : never
      ) => void;
    } extends Record<keyof T, (y: infer O) => void>
  ? O extends infer _U
    ? {[K in keyof O]: O[K]}
    : never
  : never;

export type Model<Type> = string & {
  _res: Type;
};

export function getNamePath<Obj extends {}>() {
  return function <T extends keyof Obj>(val: T) {
    return val as Model<Obj[T]>;
  };
}

export function convertPathToName<T>(value: T) {
  return value as string;
}

export function useForm<Values extends FormikValues = FormikValues, ExtraProps = {}>(initialValues: Values) {
  type Paths = Flatten<Values>;

  const getNameForm = useCallback(function getNameForm<T extends keyof Paths>(val: T) {
    return getNamePath<Paths>()<T>(val);
  }, []);

  const Form = useCallback(
    (props: Omit<FormikConfig<Values> & ExtraProps, 'initialValues'>) => {
      return <Formik {...props} initialValues={initialValues} />;
    },
    [initialValues]
  );

  return {
    getName: getNameForm,
    Form
  };
}
