import { ReactComponent as User } from 'assets/user.svg';
import { ReactComponent as SignOut } from 'assets/sign-out.svg';
import { ReactComponent as Eye } from 'assets/eye.svg';
import { ReactComponent as EyeHidden } from 'assets/eye-hidden.svg';

const ICONS = {
  user: User,
  'sign-out': SignOut,
  eye: Eye,
  'eye-hidden': EyeHidden,
} as const;

export type IconProps = {
  name: keyof typeof ICONS;
  size?: number;
} & Omit<JSX.IntrinsicElements['svg'],
  'width' | 'height' | 'fill' | 'children'>;

export function Icon ({ name, size = 24, className = '', ...otherProps }: IconProps) {
  const SvgComponent = ICONS[name];

  return (
    <SvgComponent
      className={className}
      width={size}
      height={size}
      fill="currentColor"
      {...otherProps}
    />
  );
}
