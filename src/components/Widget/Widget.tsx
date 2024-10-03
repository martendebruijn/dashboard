import clsx from "clsx";
import { widget, type WidgetVariants } from "./widgetVariants";

interface Props extends WidgetVariants {
  children: React.ReactNode;
}

export default function Widget({ children, size }: Props) {
  return (
    <article className={clsx(widget({ size }), "bg-primary-100")}>
      {children}
    </article>
  );
}
