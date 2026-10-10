export default function Footer({ c }) {
  return (
    <footer className="footer-v3">
      <a className="brand-v3" href="#home">
        DF<span>/</span>DEV
      </a>

      <p>{c.footer}</p>

      <div>
        <a
          href="https://github.com/dawiditwork"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/dawid-f-978307425/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>

        <a href="#home">
          {c.backTop} ↑
        </a>
      </div>
    </footer>
  );
}