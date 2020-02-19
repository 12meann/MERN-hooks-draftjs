import React from "react";
import "../scss/newsletter.scss";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <h3>Subscribe to my Newsletter</h3>
      <p>
        Subscribe to our newsletter to be updated on my recent blogs, discounts,
        promos and get exclusive offers.
      </p>
      <form>
        <label htmlFor="email"></label>
        <input type="text" name="email" placeholder="Email Address" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default NewsLetter;
