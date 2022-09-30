import { ReactComponent as User } from '@assets/user.svg';
import { ReactComponent as SignOut } from '@assets/sign-out.svg';

const ICONS = {
  user: User,
  'sign-out': SignOut,
} as const;

export type IconProps = {
  name: keyof typeof ICONS;
  size?: number;
} & Omit<
  JSX.IntrinsicElements['svg'],
  'width' | 'height' | 'fill' | 'children'
>;

function Icon({ name, size = 24, className = '', ...otherProps }: IconProps) {
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

export default Icon;
