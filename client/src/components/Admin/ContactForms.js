import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "../../scss/mailsContact.scss";

const ContactForms = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get("/form");
        setLoading(false);
        setForms(res.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="contactFormLists">
      <h2>Contact Forms</h2>
      <table className="forms">
        <tbody id="details">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Event Type</th>
            <th>From</th>
            <th>To</th>
            <th>Hours Needed</th>
            <th>Sent date</th>
            <th className="message">Message</th>
          </tr>
          {forms
            ? forms.map(form => (
                <tr key={form._id}>
                  <td>{form.name}</td>
                  <td>{form.email}</td>
                  <td>{form.eventType}</td>
                  <td>
                    {form.fromDate
                      ? moment(form.fromDate.toString()).format("MMM Do YYYY")
                      : ""}
                  </td>
                  <td>
                    {form.toDate
                      ? moment(form.toDate.toString()).format("MMM Do YYYY")
                      : ""}
                  </td>
                  <td>{form.hoursNeeded}</td>
                  <td>
                    {form.sentDate
                      ? moment(form.sentDate.toString()).format("MMM Do YYYY")
                      : ""}
                  </td>
                  <td>{form.message}</td>
                </tr>
                // <li key={form._id}>
                //   <p>{moment(form.fromDate.toString()).calendar()}</p>
                //   <p>{moment(form.toDate.toString()).calendar()}</p>
                //   <p>{moment(form.sentDate.toString()).calendar()}</p>
                // </li>
              ))
            : null}
        </tbody>
      </table>
    </section>
  );
};

export default ContactForms;
