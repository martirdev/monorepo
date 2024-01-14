import {MDXEditorProps} from '@mdxeditor/editor';

export type MDEditorPropsType = Omit<MDXEditorProps, 'markdown'> & {
  className?: string;
};
