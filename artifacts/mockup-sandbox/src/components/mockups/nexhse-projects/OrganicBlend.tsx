import './_group.css';
import './OrganicBlend.css';

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export function OrganicBlend() {
  return (
    <div className="nexhse-projects organic-blend">
      <section className="organic-blend__section">
        <div className="organic-blend__wash" aria-hidden="true">
          <span className="organic-blend__shape organic-blend__shape--cyan" />
          <span className="organic-blend__shape organic-blend__shape--lime" />
          <span className="organic-blend__shape organic-blend__shape--mint" />
          <span className="organic-blend__shape organic-blend__shape--olive" />
          <span className="organic-blend__shape organic-blend__shape--cream" />
        </div>
        <div className="organic-blend__inner">
          <header className="organic-blend__header">
            <div>
              <p className="organic-blend__eyebrow mono-label">PROOF OF WORK</p>
              <h1 className="organic-blend__title display">Real work. Real environments. Real outcomes.</h1>
            </div>
            <p className="organic-blend__intro">Case studies and project stories will be published here as content is approved for release.</p>
          </header>
          <div className="organic-blend__grid">
            <article className="organic-blend__feature">
              <div className="organic-blend__feature-image">
                <img src="/__mockup/images/nexhse-field.jpg" alt="Safety team walking through a working agricultural environment" />
                <div className="organic-blend__image-shade" />
              </div>
              <div className="organic-blend__feature-copy">
                <span className="mono-label">FEATURED CASE STUDY</span>
                <h2 className="display">Project stories are coming soon.</h2>
                <p>We will share authorised project details, context and outcomes here.</p>
              </div>
            </article>
            <aside className="organic-blend__side">
              <div>
                <div className="organic-blend__side-icon" aria-hidden="true">◈</div>
                <p className="organic-blend__eyebrow mono-label">CONTENT DISCIPLINE</p>
                <h2>No invented claims.</h2>
                <p>Only verified clients, environments and outcomes will make it onto this page.</p>
              </div>
              <a className="organic-blend__link focus-ring" href="/">View projects <ArrowUpRight /></a>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}