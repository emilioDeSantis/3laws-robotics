import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogPostImage`.
 */
export type BlogPostImageProps =
    SliceComponentProps<Content.BlogPostImageSlice>;

/**
 * Component for "BlogPostImage" Slices.
 */
const BlogPostImage = ({ slice }: BlogPostImageProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div style={{ position: "relative", width: "100%", paddingBlock: '2rem', }}>
                <PrismicNextImage field={slice.primary.image} />
            </div>
        </section>
    );
};

export default BlogPostImage;
