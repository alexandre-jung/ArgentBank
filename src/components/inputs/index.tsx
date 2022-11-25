import { useMemo, useState } from 'react';
import { useCheckboxFactory } from 'components/inputs/checkbox.factory';
import { useInputFactory } from 'components/inputs/input.factory';
import { useLabelFactory } from 'components/inputs/label.factory';
import { useRandomId } from 'components/inputs/utils';

export function useInputWithLabel ({
  id,
  initialValue = '',
}: {
  id?: string,
  initialValue?: string
} = {}) {
  const randomId = useRandomId();
  const actualId = id ?? randomId;

  const Input = useInputFactory({
    id: actualId,
    initialValue,
  });

  const Label = useLabelFactory({
    id: actualId,
  });

  return useMemo(() => ({
    ...Input,
    Label,
    id: actualId,
  }), [Input, Label, actualId]);
}

export function useCheckboxWithLabel ({
  id,
  initialValue = false,
}: {
  id?: string,
  initialValue?: boolean
} = {}) {
  const randomId = useRandomId();
  const actualId = id ?? randomId;

  const Input = useCheckboxFactory({
    id: actualId,
    initialValue,
  });

  const Label = useLabelFactory({
    id: actualId,
  });

  return useMemo(() => ({
    ...Input,
    Label,
    id: actualId,
  }), [Input, Label, actualId]);
}

export function usePasswordToggle (initialIsVisible = false) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);

  return {
    inputProps: { type: isVisible ? 'text' : 'password' },
    toggleProps: {
      onClick: () => {
        setIsVisible(previous => !previous);
      },
    },
    isVisible,
  };
}
