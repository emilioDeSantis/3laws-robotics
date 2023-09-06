import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogPostSubTitle`.
 */
export type BlogPostSubTitleProps =
  SliceComponentProps<Content.BlogPostSubTitleSlice>;

/**
 * Component for "BlogPostSubTitle" Slices.
 */
const BlogPostSubTitle = ({ slice }: BlogPostSubTitleProps): JSX.Element => {
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
      <>{slice.primary.title}</>
    </section>
  );
};

export default BlogPostSubTitle;
