import {$createHeadingNode, $createQuoteNode} from '@lexical/rich-text';
import {corePluginHooks, useHasPlugin} from '@mdxeditor/editor';
import {Select} from 'antd';
import {$createParagraphNode} from 'lexical';
import {useCallback} from 'react';

const TEXT_TYPE_OPTIONS = [
  {label: 'Параграф', value: 'paragraph'},
  {label: 'Цитата', value: 'quote'},
  {label: 'Заголовок 1', value: 'h1'},
  {label: 'Заголовок 2', value: 'h2'},
  {label: 'Заголовок 3', value: 'h3'},
  {label: 'Заголовок 4', value: 'h4'},
  {label: 'Заголовок 5', value: 'h5'},
  {label: 'Заголовок 6', value: 'h6'}
];

const isHeadings = (type: string): type is 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' => /^h[1-6]$/.test(type);

const BlockTypeSelect = () => {
  const convertSelectionToNode = corePluginHooks.usePublisher('convertSelectionToNode');
  const [currentBlockType] = corePluginHooks.useEmitterValues('currentBlockType');
  const hasQuote = useHasPlugin('quote');
  const hasHeadings = useHasPlugin('headings');

  if (!hasQuote || !hasHeadings) {
    throw new Error('Must use with quote and headings plugins');
  }

  const handleChangeType = useCallback(
    (blockType: string) => {
      if (blockType === 'quote') {
        convertSelectionToNode(() => $createQuoteNode());
        return;
      }
      if (blockType === 'paragraph') {
        convertSelectionToNode(() => $createParagraphNode());
        return;
      }
      if (isHeadings(blockType)) {
        convertSelectionToNode(() => $createHeadingNode(blockType));
        return;
      }
      throw new Error(`Unknown block type: ${blockType}`);
    },
    [convertSelectionToNode]
  );

  return (
    <Select
      value={currentBlockType || 'paragraph'}
      options={TEXT_TYPE_OPTIONS}
      className="w-[200px]"
      onChange={handleChangeType}
    />
  );
};

export {BlockTypeSelect};
