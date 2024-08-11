import { Effect } from "effect";

export const logEffectError = <T extends string>(error: { _tag: T }) => {
  console.error(error);
  return Effect.succeed({ code: error._tag });
};
