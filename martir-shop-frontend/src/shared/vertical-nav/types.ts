import {Icons} from '_shared/consts';

type Link = {
  to: string;
  label: string;
  icon?: keyof typeof Icons;
};

export type GroupType = {
  name: string;
  links: Array<Link>;
};

export type GroupsType = Array<GroupType>;

export type VerticalNavPropsType = {
  groups: GroupsType;
  className?: string;
  search?: string;
};
