export type PrintFunc = (str: string, ...rest: string[]) => void;

export enum LogPrefix {
  Outgoing = "-->",
  Incoming = "<--",
  Error = "xxx",
}
