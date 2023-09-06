import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TimelineSubTitle`.
 */
export type TimelineSubTitleProps =
  SliceComponentProps<Content.TimelineSubTitleSlice>;

/**
 * Component for "TimelineSubTitle" Slices.
 */
const TimelineSubTitle = ({ slice }: TimelineSubTitleProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        fontSize: '1.6rem',
        color: '#ffffff',
        fontWeight: 700,
        marginTop: '3rem',
        marginBottom: '1rem',
        lineHeight: '130%',
      }}
    >
      <PrismicRichText field={slice.primary.subtitle} />
    </section>
  );
};

export default TimelineSubTitle;
