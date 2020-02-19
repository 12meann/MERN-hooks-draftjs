import React from "react";

const HomeDashboard = () => {
  return (
    <section className="homeDashboard">
      <h2>Welcome to your Dashboard</h2>
      <div className="body">
        <p>
          You can add blogs and check messages that you received from the
          contact form.{" "}
        </p>
        <p>Your session login will expire in an hour for security purposes.</p>
        <p>
          Once you get out of this page, you can access it again by clicking the
          Admin link on the Footer of the website page.
        </p>
      </div>
    </section>
  );
};

export default HomeDashboard;
