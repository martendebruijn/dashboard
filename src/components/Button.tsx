interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children }: Props) {
  return <button className={className}>{children}</button>;
}
