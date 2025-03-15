import React from "react";
import PricingCards from "@/src/components/Pricing/PricingCards";

const Pricing = () => {

    return (
        <section
            className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>

            <PricingCards/>

        </section>
    );
};

export default Pricing;

