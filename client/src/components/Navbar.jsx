import { resume } from '../data/resume';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <span style={styles.brand}>{resume.name}</span>
      <ul style={styles.links}>
        {['about', 'skills', 'experience', 'projects', 'contact'].map((s) => (
          <li key={s}>
            <a href={`#${s}`} style={styles.link}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#1a1a2e', position: 'sticky', top: 0, zIndex: 100 },
  brand: { fontWeight: 700, fontSize: '1.2rem', color: '#e2e2e2' },
  links: { display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 },
  link: { color: '#a0a0c0', textDecoration: 'none', fontSize: '0.95rem' },
};
