import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TimelineTitle`.
 */
export type TimelineTitleProps =
  SliceComponentProps<Content.TimelineTitleSlice>;

/**
 * Component for "TimelineTitle" Slices.
 */
const TimelineTitle = ({ slice }: TimelineTitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        fontSize: '2.6rem',
        fontWeight: 900,
        lineHeight: '130%',
        color: "#ffffff",
        marginBottom: '3rem',
      }}
    >
      
      <PrismicRichText field={slice.primary.title} />
    </section>
  );
};

export default TimelineTitle;
