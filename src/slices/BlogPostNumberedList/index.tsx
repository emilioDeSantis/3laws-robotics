import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogPostNumberedList`.
 */
export type BlogPostNumberedListProps =
  SliceComponentProps<Content.BlogPostNumberedListSlice>;

/**
 * Component for "BlogPostNumberedList" Slices.
 */
const BlogPostNumberedList = ({
  slice,
}: BlogPostNumberedListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_post_numbered_list (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default BlogPostNumberedList;
