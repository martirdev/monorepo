import {Skeleton} from 'antd';
import {memo} from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import {trpc} from '_shared/api/trpc';

type ContentBlockPropsType = {
  id: string;
};

const ContentBlock = memo<ContentBlockPropsType>(function ContentBlock({id}) {
  const contentQuery = trpc.getContentById.useQuery(id);

  if (contentQuery.isLoading) {
    return <Skeleton />;
  }

  return (
    <Markdown rehypePlugins={[rehypeRaw]} className="prose prose-stone prose-invert max-w-none">
      {contentQuery.data}
    </Markdown>
  );
});

export {ContentBlock};
