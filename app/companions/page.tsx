import { recentSessions } from "@/constants";
import CompanionCard from "@/components/CompanionCard";
import React from "react";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const page = () => {
  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      <section className="companions-grid">
        {recentSessions.map(({ id, name, topic, subject, duration, color }) => (
          <CompanionCard
            key={id}
            id={id}
            name={name}
            topic={topic}
            subject={subject}
            duration={duration}
            color={color}
          />
        ))}
      </section>
    </main>
  );
};

export default page;
