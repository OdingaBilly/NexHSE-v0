import './_group.css';

export function Current() {
  return (
    <div className="nexhse-contact">
      <section className="nexhse-contact__section">
        <div className="nexhse-contact__inner">
          <div>
            <p className="nexhse-contact__eyebrow mono-label">START A CONVERSATION</p>
            <h1 className="nexhse-contact__title display">Let’s build a safer workplace.</h1>
            <p className="nexhse-contact__text">
              Whether you are strengthening an existing safety programme or building one from the ground up,
              NexHSE is ready to work alongside your team.
            </p>
          </div>
          <div className="nexhse-contact__actions">
            <a className="nexhse-contact__button" href="/">Request a quote <span aria-hidden="true">↗</span></a>
            <a className="nexhse-contact__button nexhse-contact__button--outline" href="/">Book a consultation <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}