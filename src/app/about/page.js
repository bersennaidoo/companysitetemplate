import React from "react";

export const metadata = {
  title: "About Deep Blue Diving Club",
  description: "The diving club",
};

function AboutPage() {
  return (
    <div id="bodycontent">
      <h2>About Us</h2>
      <p>
        <span className="fun">Deep Blue</span> is a group of diving enthusiasts based in the north-west
        Pretoria who meet up for diving trips in the summer months when the
        weather is good and the bacon rolls are flowing. We arrange weekends
        away as small groups to cut the costs of accommodation and travel, and
        to ensure that everyone gets a trustworthy dive buddy.
      </p>
      <p>
        Although we're based in the north-west, we don't stay on our own turf:
        past diving weekends have included trips up to Cape Flow in Cape town
        and to Durban's numerous wreck sites.
      </p>
      <p>
        When we're not diving, we often meet up in a local pub to talk about our
        recent adventures (<em>any</em> excuse, eh?).
      </p>
      <p>Or as our man Jon Doe would put it:</p>
      <blockquote className="fun">
        <p>
          "Happiness is a dip in the ocean followed by a pint or two of Old
          Speckled Hen. You can quote me on that!"
        </p>
        <p>
          "Join us for a weekend away at some of our favorite dive spots and you'll 
           soon be making new friends."
        </p>
        <p>
          "Anyway, about time I got on with some <em>proper</em> work!"
        </p>
      </blockquote>
    </div>
  );
}

export default AboutPage;
