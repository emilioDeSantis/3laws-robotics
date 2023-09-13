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
                position: "relative",
            }}
        >
            <div
            className="timeline-year"
                style={{
                    lineHeight: "70%",
                    fontWeight: 900,
                }}
            >
                {slice.primary.year}
            </div>
            <div
            className="timeline-year-circle"
                style={{
                    top: "1.2rem",
                    borderRadius: "1000px",
                    background: "#fff",
                    position: "absolute",
                }}
            />
        </section>
    );
};

export default TimelineYear;
