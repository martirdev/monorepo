export type ReleasesCardPropsType = {
  heading: string;
  paragraph: {
    link: string;
    date: string;
  };
  onClickBuild?: () => void;
  onClickRelease?: () => void;
  onClickDeploy?: () => void;
  onClickUnDeploy?: () => void;
};
