import { resume } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {resume.projects.map((p) => (
          <div key={p.name} style={styles.card}>
            <h3 style={styles.name}>{p.name}</h3>
            <p style={styles.desc}>{p.description}</p>
            <div style={styles.tags}>
              {p.tech.map((t) => <span key={t} style={styles.tag}>{t}</span>)}
            </div>
            <div style={styles.cardLinks}>
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={styles.link}>GitHub</a>}
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" style={styles.link}>Live</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', background: '#0f0f1a' },
  heading: { textAlign: 'center', fontSize: '2rem', color: '#e2e2e2', marginBottom: '3rem' },
  grid: { display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' },
  card: { background: '#1a1a2e', borderRadius: '10px', padding: '1.75rem', maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  name: { color: '#e2e2e2', margin: 0 },
  desc: { color: '#a0a0c0', lineHeight: 1.6, margin: 0 },
  tags: { display: 'flex', gap: '0.5rem', flexWrap: 'wrap' },
  tag: { background: '#2a2a4a', color: '#7c83fd', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' },
  cardLinks: { display: 'flex', gap: '1rem', marginTop: 'auto' },
  link: { color: '#7c83fd', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' },
};
