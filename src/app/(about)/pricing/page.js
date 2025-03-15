import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";
import Pricing from "@/src/components/Pricing/Pricing";
import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";


export const metadata = {
  title: "Pricing",
  description: `Prices`,
};


export default function PricingPage() {
    return (
        <>
            <div>
                <Pricing />
            </div>

        </>
    );
}
