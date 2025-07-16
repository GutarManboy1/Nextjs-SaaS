import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start your Learning Journey</div>
      <h2 className="text-3xl font-bold">
        Create and Nuture your Learning Companion
      </h2>
      <p>
        Start your learning journey with our companion and unlock a world of
        knowledge
      </p>
      <Image src="images/cta.svg" alt="cta" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Create a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
