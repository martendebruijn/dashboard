import { Button as RadixButton } from "@radix-ui/themes";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children }: Props) {
  return <RadixButton className={className}>{children}</RadixButton>;
}
