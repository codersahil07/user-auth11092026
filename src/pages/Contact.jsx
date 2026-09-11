import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="inner-page">
      <div className="container-fluid px-3 px-lg-5">
        <section className="inner-hero contact-hero">
          <div className="eyebrow"><span></span> CONTACT</div>
          <h1>Let's start a<br /><em>conversation.</em></h1>
          <p>Have a question or need a hand? Our team is ready to help.</p>
        </section>

        <section className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item"><span><i className="bi bi-envelope"></i></span><div><small>Email us</small><strong>hello@novaadmin.demo</strong></div></div>
            <div className="contact-info-item"><span><i className="bi bi-telephone"></i></span><div><small>Call us</small><strong>+91 98765 43210</strong></div></div>
            <div className="contact-info-item"><span><i className="bi bi-geo-alt"></i></span><div><small>Visit us</small><strong>New Delhi, India</strong></div></div>
            <div className="contact-note"><i className="bi bi-clock"></i><p>We typically respond within one business day.</p></div>
          </div>

          <div className="contact-form-card">
            {submitted && <div className="success-alert"><i className="bi bi-check-circle"></i> Message sent successfully.</div>}
            <div className="panel-head"><div><h3>Send us a message</h3><p>Tell us how we can help.</p></div></div>
            <form onSubmit={submit}>
              <div className="form-two">
                <div className="field-group"><label htmlFor="name">Name *</label><input id="name" name="name" value={form.name} onChange={update} placeholder="Your name" required /></div>
                <div className="field-group"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required /></div>
              </div>
              <div className="field-group"><label htmlFor="phone">Phone</label><input id="phone" name="phone" value={form.phone} onChange={update} placeholder="+91 00000 00000" /></div>
              <div className="field-group"><label htmlFor="message">Message *</label><textarea id="message" name="message" value={form.message} onChange={update} rows="5" placeholder="How can we help?" required></textarea></div>
              <button className="primary-btn form-submit" type="submit">Send Message <i className="bi bi-arrow-up-right"></i></button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;