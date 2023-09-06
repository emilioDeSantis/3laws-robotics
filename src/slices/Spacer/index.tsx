import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TimelineSpacer`.
 */
export type TimelineSpacerProps =
  SliceComponentProps<Content.TimelineSpacerSlice>;

/**
 * Component for "TimelineSpacer" Slices.
 */
const TimelineSpacer = ({ slice }: TimelineSpacerProps): JSX.Element => {
  let d = '50px'
  if (slice.primary.size == 'medium') {
    d = '150px'
  } else if (slice.primary.size == 'large') {
    d = '300px'
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div style={{
height: d,
width: d,
      }}/>
    </section>
  );
};

export default TimelineSpacer;
