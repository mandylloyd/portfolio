import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <p className="hero-eyebrow">Portfolio</p>
      <h2 id="hero-heading" className="hero-title pixel-reveal">
        Front-end development, accessibility, and modern JS.
      </h2>
      <p className="hero-text">
        I build accessible, component-driven interfaces using React, JavaScript,
        and modern CSS.
      </p>
      <p>Checkout my <Link to="/a11y-checklist">Accessibility Checklist for Developers &rarr;</Link></p>
      {/* <ul className="hero-keywords">
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS / Sass</li>
        <li>Accessibility</li>
      </ul> */}
    </section>
  );
};