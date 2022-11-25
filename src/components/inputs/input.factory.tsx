import { SyntheticEvent, useMemo, useRef, useState } from 'react';

type OmitProps =
  'id' |
  'onChange' |
  'placeholder' |
  'value' |
  'defaultValue' |
  'defaultChecked'

interface InputProps extends Omit<JSX.IntrinsicElements['input'], OmitProps> {
  placeholder?: string | null;
}

interface InputFactoryParams {
  id: string;
  setValue: (value: string) => void;
  valueRef: React.MutableRefObject<string>;
}

function inputFactory ({ id, setValue, valueRef }: InputFactoryParams) {
  return function Input ({ placeholder, ...props }: InputProps) {
    const handleValueChange = (ev: SyntheticEvent<HTMLInputElement>) => {
      setValue(ev.currentTarget.value);
    };

    return <input
      id={id}
      value={valueRef.current}
      onChange={handleValueChange}
      placeholder={placeholder ?? ''}
      {...props}
    />;
  };
}

interface UseInputFactoryParams {
  id: string;
  initialValue: string;
}

export function useInputFactory ({ id, initialValue }: UseInputFactoryParams) {
  const [value, setValue] = useState(initialValue);

  // Keep an always up-to-date ref to the value.
  const valueRef = useRef(value);
  valueRef.current = value;

  const generateInputComponent = () => inputFactory({
    id,
    setValue,
    valueRef,
  });

  const Input = useMemo(
    generateInputComponent,
    [id],
  );

  return useMemo(() => ({
    Input,
    setValue,
    getValue: () => valueRef.current,
  }), [Input]);
}
