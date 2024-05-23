import React from "react";

export const metadata = {
  title: "Contact Us at Deep Blue Diving Club",
  description: "The diving club",
};

function ContactPage() {
  return (
    <div id="bodycontent">
      <h2>Contact Us</h2>
      <p>
        To find out more, contact Club Secretary Jon Doe on 0113221111 or&nbsp;
        <a href="mailto:jon@deepblue.net">email: jon@deepblue.net</a>
      </p>
    </div>
  );
}

export default ContactPage;
