import {
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertTable,
  ListsToggle,
  MDXEditor,
  MDXEditorMethods,
  Separator,
  UndoRedo,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin
} from '@mdxeditor/editor';
import {useEffect, useRef} from 'react';

import {cn} from '_utils/cn';

import {BlockTypeSelect} from './BlockTypeSelect';
import {MDEditorPropsType} from './types';

const plugins = [
  headingsPlugin(),
  quotePlugin(),
  tablePlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  listsPlugin(),
  thematicBreakPlugin(),
  toolbarPlugin({
    toolbarContents: () => (
      <>
        <UndoRedo />
        <Separator />
        <BlockTypeSelect />
        <Separator />
        <BoldItalicUnderlineToggles />
        <ListsToggle />
        <InsertTable />
        <Separator />
        <CreateLink />
      </>
    )
  })
];

const MDEditor = function MDEditor({className, value, ...props}: MDEditorPropsType) {
  const ref = useRef<MDXEditorMethods>(null);

  useEffect(() => {
    ref.current?.setMarkdown(value ?? '');
  }, [!!value]);

  return (
    <MDXEditor
      {...props}
      plugins={plugins}
      className={cn('dark-theme prose prose-stone prose-invert', {[className]: !!className})}
      markdown={typeof value === 'string' ? value : ''}
      ref={ref}
    />
  );
};

export {MDEditor};
