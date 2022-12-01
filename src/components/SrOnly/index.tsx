interface SrOnlyProps {
  children: React.ReactNode;
}

export function SrOnly ({ children }: SrOnlyProps) {
  return <p className="sr-only">{children}</p>;
}
