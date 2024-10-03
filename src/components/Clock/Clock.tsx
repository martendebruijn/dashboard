import { useClock } from "./useClock";
import { Widget } from "@components/Widget";

export default function Clock() {
  const { time } = useClock();

  return (
    <Widget size="small">
      <div className="grid h-full text-2xl font-semibold place-content-center">
        <time dateTime={time.toISOString()}>{time.toLocaleTimeString()}</time>
      </div>
    </Widget>
  );
}
