import './_group.css';

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

export function Current() {
  return (
    <div className="nexhse-projects">
      <section className="nexhse-projects__section">
        <div className="nexhse-projects__inner">
          <header className="nexhse-projects__header">
            <div>
              <p className="nexhse-projects__eyebrow mono-label">PROOF OF WORK</p>
              <h1 className="nexhse-projects__title display">Real work. Real environments. Real outcomes.</h1>
            </div>
            <p className="nexhse-projects__intro">Case studies and project stories will be published here as content is approved for release.</p>
          </header>
          <div className="nexhse-projects__grid">
            <article className="nexhse-projects__feature">
              <img src="/__mockup/images/nexhse-field.jpg" alt="Safety team walking through a working agricultural environment" />
              <div className="nexhse-projects__feature-copy">
                <span className="mono-label" style={{ fontSize: 10, color: 'hsl(162 51% 91%)' }}>FEATURED CASE STUDY</span>
                <h2 className="display">Project stories are coming soon.</h2>
                <p>We will share authorised project details, context and outcomes here.</p>
              </div>
            </article>
            <aside className="nexhse-projects__side">
              <div>
                <div className="nexhse-projects__side-icon" aria-hidden="true">◈</div>
                <p className="nexhse-projects__eyebrow mono-label" style={{ marginTop: 64 }}>CONTENT DISCIPLINE</p>
                <h2>No invented claims.</h2>
                <p>Only verified clients, environments and outcomes will make it onto this page.</p>
              </div>
              <a className="nexhse-projects__side-link focus-ring" href="/">View projects <ArrowUpRight /></a>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}