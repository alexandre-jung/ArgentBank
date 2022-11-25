import { useMemo } from 'react';

type OmitProps = 'htmlFor'

type LabelProps = Omit<JSX.IntrinsicElements['label'], OmitProps>

interface LabelFactoryParams {
  id: string;
}

function labelFactory ({ id }: LabelFactoryParams) {
  return function Label (props: LabelProps) {
    return <label
      htmlFor={id}
      {...props}
    />;
  };
}

export function useLabelFactory ({ id }: LabelFactoryParams) {
  const generateLabelComponent = () => labelFactory({ id });

  return useMemo(
    generateLabelComponent,
    [id],
  );
}
