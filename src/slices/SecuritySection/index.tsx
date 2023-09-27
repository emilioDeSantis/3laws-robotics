import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SecuritySection`.
 */
export type SecuritySectionProps =
  SliceComponentProps<Content.SecuritySectionSlice>;

/**
 * Component for "SecuritySection" Slices.
 */
const SecuritySection = ({ slice }: SecuritySectionProps): JSX.Element => {
  return (
    <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    style={{
        display: "flex",
        marginTop: "1.2rem",
    }}
    className="privacy-bullet-list"
>
    <div
        style={{
            marginRight: "3rem",
            minWidth: "12rem",
            fontWeight: 700,
            marginBottom: "0.8rem",
        }}
    >
        {slice.primary.title}
    </div>

    <div>
        <ul
            style={{
            }}
        >
            {slice.items.map((item, i) => (
                <li
                    key={i}
                    style={{
                        fontWeight: 300,
                        opacity: 0.7,
                        fontSize: "0.82rem",
                        marginBottom: "0.6rem",
                        lineHeight: "110%",
                    }}
                >
                    {item.paragraph}
                </li>
            ))}
        </ul>
    </div>
</section>
  );
};

export default SecuritySection;
