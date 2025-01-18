import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { 
  PrismicRichText, 
  PrismicText, 
  SliceComponentProps 
} from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";




/**
 * Props for `Heros`.
 */
export type HerosProps = SliceComponentProps<Content.HerosSlice>;

/**
 * Component for "Heros" Slices.
 */
const Heros = ({ slice }: HerosProps): JSX.Element => {
  console.log(slice)
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <AnimatedContent slice={slice}/>
    </Bounded>
  );
};

export default Heros;
