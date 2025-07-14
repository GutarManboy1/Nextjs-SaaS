import React from "react";

import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl">Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id={"1"}
          name={"Neura the Brainy Explorer"}
          topic={"Neural Network of the Brain"}
          subject={"science"}
          duration={45}
          color={"#ffda6e"}
        />

        <CompanionCard
          id={"2"}
          name={"Muchambo the Physics Freak"}
          topic={"How our Universe Works"}
          subject={"science"}
          duration={30}
          color={"#E5D0FF"}
        />

        <CompanionCard
          id={"3"}
          name={"Mambo the Math Wizard"}
          topic={"Unfuck your Math"}
          subject={"maths"}
          duration={25}
          color={"#bde7ff"}
        />
      </section>

      <section className="home-section">
        <CompanionsList title="Recent Sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
