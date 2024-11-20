import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { cn } from "@/shared/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxHeight?: number;
  minHeight?: number;
}

interface UseAutosizeTextAreaProps {
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  minHeight?: number;
  maxHeight?: number;
  triggerAutoSize: string;
}

export type AutosizeTextAreaRef = {
  textArea: HTMLTextAreaElement;
  maxHeight: number;
  minHeight: number;
};

export const useAutosizeTextArea = ({
  textAreaRef,
  triggerAutoSize,
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 0,
}: UseAutosizeTextAreaProps) => {
  const [init, setInit] = useState(true);
  useEffect(() => {
    // We need to reset the height momentarily to get the correct scrollHeight for the textarea
    const offsetBorder = 2;
    const textAreaElement = textAreaRef.current;
    if (textAreaElement) {
      if (init) {
        textAreaElement.style.minHeight = `${minHeight + offsetBorder}px`;
        if (maxHeight > minHeight) {
          textAreaElement.style.maxHeight = `${maxHeight}px`;
        }
        setInit(false);
      }
      textAreaElement.style.height = `${minHeight + offsetBorder}px`;
      const scrollHeight = textAreaElement.scrollHeight;
      if (scrollHeight > maxHeight) {
        textAreaElement.style.height = `${maxHeight}px`;
      } else {
        textAreaElement.style.height = `${scrollHeight + offsetBorder}px`;
      }
    }
  }, [textAreaRef.current, triggerAutoSize]);
};

const Textarea = forwardRef<AutosizeTextAreaRef, TextareaProps>(
  (
    {
      className,
      maxHeight = Number.MAX_SAFE_INTEGER,
      minHeight = 52,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const [triggerAutoSize, setTriggerAutoSize] = useState("");

    useAutosizeTextArea({
      textAreaRef,
      triggerAutoSize: triggerAutoSize,
      maxHeight,
      minHeight,
    });

    useImperativeHandle(ref, () => ({
      textArea: textAreaRef.current as HTMLTextAreaElement,
      focus: () => textAreaRef?.current?.focus(),
      maxHeight,
      minHeight,
    }));

    useEffect(() => {
      setTriggerAutoSize(value as string);
    }, [props?.defaultValue, value]);

    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        value={value}
        ref={textAreaRef}
        onChange={(e) => {
          setTriggerAutoSize(e.target.value);
          onChange?.(e);
        }}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
