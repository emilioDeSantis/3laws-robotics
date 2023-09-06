import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TimelineParagraph`.
 */
export type TimelineParagraphProps =
    SliceComponentProps<Content.TimelineParagraphSlice>;

/**
 * Component for "TimelineParagraph" Slices.
 */
const TimelineParagraph = ({ slice }: TimelineParagraphProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
            style={{
                lineHeight: "200%",
                fontWeight: 300,
                fontSize: "0.96rem",
                color: "#dddddd",
            }}
        >
            <PrismicRichText field={slice.primary.text} />
        </section>
    );
};

export default TimelineParagraph;
