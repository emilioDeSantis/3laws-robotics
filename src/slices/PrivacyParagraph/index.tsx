import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PrivacyParagragh`.
 */
export type PrivacyParagraghProps =
  SliceComponentProps<Content.PrivacyParagraghSlice>;

/**
 * Component for "PrivacyParagragh" Slices.
 */
const PrivacyParagragh = ({ slice }: PrivacyParagraghProps): JSX.Element => {
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

export default PrivacyParagragh;
