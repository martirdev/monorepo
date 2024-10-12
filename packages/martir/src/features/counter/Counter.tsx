import { Button } from "@/shared/ui/components/button";
import { Input, InputProps } from "@/shared/ui/components/input";
import { ChangeEvent, useCallback } from "react";

type CounterProps = {
  value: number;
  onChange?: (value: number) => void;
} & Omit<InputProps, "onChange">;

export function Counter({ value, onChange, ...rest }: CounterProps) {
  const addValue = useCallback(() => {
    const rawValue = Number(value);
    const preparedValue = Number.isNaN(rawValue) ? 0 : rawValue;
    onChange?.(preparedValue + 1);
  }, [onChange, value]);

  const removeValue = useCallback(() => {
    const rawValue = Number(value);
    const preparedValue = Number.isNaN(rawValue) ? 0 : rawValue;
    onChange?.(preparedValue - 1);
  }, [onChange, value]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(Number.parseInt(e.target.value) || -0);
    },
    [onChange]
  );

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="icon" onClick={removeValue}>
        −
      </Button>
      <Input
        className="text-center w-[100px]"
        onChange={handleChange}
        value={value.toFixed(0)}
        inputMode="numeric"
        type="number"
        {...rest}
      />
      <Button variant="outline" size="icon" onClick={addValue}>
        +
      </Button>
    </div>
  );
}
