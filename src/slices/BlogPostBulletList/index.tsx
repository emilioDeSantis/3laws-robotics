import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogPostBulletList`.
 */
export type BlogPostBulletListProps =
    SliceComponentProps<Content.BlogPostBulletListSlice>;

/**
 * Component for "BlogPostBulletList" Slices.
 */
const BlogPostBulletList = ({
    slice,
}: BlogPostBulletListProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <ul
                style={{
                    listStyleType: "circle",
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: '3rem',
                    gap: '1rem',
                }}
            >
                {slice.items.map((item, index) => (
                    <li key={index}>
                        <span
                            style={{ fontWeight: 900, display: "inline-block" }}
                        >
                            <PrismicRichText field={item.title} />
                        </span>
                        <span
                            style={{ display: "inline-block", fontWeight: 900 }}
                        >
                            :&nbsp;
                        </span>
                        <span style={{ display: "inline-block" }}>
                            <PrismicRichText field={item.text} />
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BlogPostBulletList;
