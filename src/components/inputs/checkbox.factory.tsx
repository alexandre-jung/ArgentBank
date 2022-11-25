import { SyntheticEvent, useMemo, useRef, useState } from 'react';

type OmitProps =
  'id' |
  'checked' |
  'type' |
  'onChange' |
  'placeholder' |
  'value' |
  'defaultValue' |
  'defaultChecked'

type CheckboxProps = Omit<JSX.IntrinsicElements['input'], OmitProps>

interface CheckboxFactoryParams {
  id: string;
  setValue: (value: boolean) => void;
  valueRef: React.MutableRefObject<boolean>;
}

function checkboxFactory ({ id, setValue, valueRef }: CheckboxFactoryParams) {
  return function Input (props: CheckboxProps) {
    const handleValueChange = (ev: SyntheticEvent<HTMLInputElement>) => {
      setValue(ev.currentTarget.checked);
    };

    return <input
      id={id}
      checked={valueRef.current}
      onChange={handleValueChange}
      type="checkbox"
      {...props}
    />;
  };
}

interface UseCheckboxFactoryParams {
  id: string;
  initialValue: boolean;
}

export function useCheckboxFactory ({ id, initialValue }: UseCheckboxFactoryParams) {
  const [isChecked, setIsChecked] = useState(initialValue);

  // Keep an always up-to-date ref to the value.
  const valueRef = useRef(isChecked);
  valueRef.current = isChecked;

  const generateCheckboxComponent = () => checkboxFactory({
    id,
    setValue: setIsChecked,
    valueRef,
  });

  const Checkbox = useMemo(
    generateCheckboxComponent,
    [id],
  );

  return useMemo(() => ({
    Checkbox,
    setValue: setIsChecked,
    isChecked () {
      return valueRef.current;
    },
  }), [Checkbox]);
}
