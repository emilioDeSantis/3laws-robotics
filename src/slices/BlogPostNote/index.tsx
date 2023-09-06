import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogPostNote`.
 */
export type BlogPostNoteProps = SliceComponentProps<Content.BlogPostNoteSlice>;

/**
 * Component for "BlogPostNote" Slices.
 */
const BlogPostNote = ({ slice }: BlogPostNoteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        alignSelf: 'center',
        fontStyle: 'italic',
      }}
    >

      <PrismicRichText field={slice.primary.text} />
    </section>
  );
};

export default BlogPostNote;
