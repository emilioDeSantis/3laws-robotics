import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useEffect } from "react";

/**
 * Props for `BlogPostParagraph`.
 */
export type BlogPostParagraphProps =
    SliceComponentProps<Content.BlogPostParagraphSlice>;

/**
 * Component for "BlogPostParagraph" Slices.
 */
const BlogPostParagraph = ({ slice }: BlogPostParagraphProps): JSX.Element => {


    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        ><PrismicRichText field={slice.primary.text} />
        </section>
    );
};

export default BlogPostParagraph;
