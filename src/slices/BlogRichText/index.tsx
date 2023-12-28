import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogRichText`.
 */
export type BlogRichTextProps = SliceComponentProps<Content.BlogRichTextSlice>;

/**
 * Component for "BlogRichText" Slices.
 */
const BlogRichText = ({ slice }: BlogRichTextProps): JSX.Element => {
  return (
    <section className="blog">
    <PrismicRichText field={slice.primary.text} />
    </section>);
};

export default BlogRichText;
