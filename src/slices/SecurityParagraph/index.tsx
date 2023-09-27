import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SecurityParagragh`.
 */
export type SecurityParagraghProps =
  SliceComponentProps<Content.SecurityParagraghSlice>;

/**
 * Component for "SecurityParagragh" Slices.
 */
const SecurityParagragh = ({ slice }: SecurityParagraghProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        fontSize: '0.9rem',
        fontWeight: 300,
        lineHeight: '120%',
        opacity: 0.8,
      }}
    >
      {slice.primary.text}
    </section>
  );
};

export default SecurityParagragh;
