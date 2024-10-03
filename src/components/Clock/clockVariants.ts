import { cva, type VariantProps } from "class-variance-authority";

export const clock = cva([""], {
  variants: {},
  defaultVariants: {},
});

export type ClockVariants = VariantProps<typeof clock>;
