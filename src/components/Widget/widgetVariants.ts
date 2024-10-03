import { cva, type VariantProps } from "class-variance-authority";

export const widget = cva(
  ["p-4 rounded-md shadow inline-block overflow-hidden"],
  {
    variants: {
      size: {
        small: "w-40 h-20",
        base: "w-40 h-40",
        large: "w-52 h-52",
        extraLarge: "w-96 h-60",
      },
    },
    defaultVariants: {
      size: "base",
    },
  },
);

export type WidgetVariants = VariantProps<typeof widget>;
