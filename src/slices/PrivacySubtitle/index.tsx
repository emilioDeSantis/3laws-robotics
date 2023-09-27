import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PrivacySubtitle`.
 */
export type PrivacySubtitleProps =
  SliceComponentProps<Content.PrivacySubtitleSlice>;

/**
 * Component for "PrivacySubtitle" Slices.
 */
const PrivacySubtitle = ({ slice }: PrivacySubtitleProps): JSX.Element => {
  return (
    <h2
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{
        fontSize: '1.8rem',
        fontWeight: 700,
        marginTop: '1.2rem',
    }}
    >
      {slice.primary.subtitle}
    </h2>
  );
};

export default PrivacySubtitle;
