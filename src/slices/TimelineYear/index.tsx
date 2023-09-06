import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TimelineYear`.
 */
export type TimelineYearProps = SliceComponentProps<Content.TimelineYearSlice>;

/**
 * Component for "TimelineYear" Slices.
 */
const TimelineYear = ({ slice }: TimelineYearProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        height: 0,
        position: 'relative',
      }}
    >
    <div style={{
      marginLeft: '-24rem',
      fontSize: "5rem",
      lineHeight: "70%",
      fontWeight: 900,
    }}>{slice.primary.year}</div>
    <div style={{
      top: '1.2rem',
      marginLeft: '-62px',
      borderRadius: "1000px",
      background: "#fff",
      height: "20px",
      width: "20px",
      position: 'absolute',
    }}/>
    </section>
  );
};

export default TimelineYear;
