import { resume } from '../data/resume';

export default function Hero() {
  return (
    <section style={styles.section}>
      <h1 style={styles.name}>{resume.name}</h1>
      <p style={styles.title}>{resume.title}</p>
      <p style={styles.location}>{resume.location}</p>
      <p style={styles.summary}>{resume.summary}</p>
      <div style={styles.actions}>
        <a href={`${import.meta.env.BASE_URL}Pratik_Sangle_Resume.pdf`} download style={styles.btn}>Download Resume</a>
        <a href="#contact" style={{ ...styles.btn, ...styles.outline }}>Contact Me</a>
      </div>
    </section>
  );
}

const styles = {
  section: { minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem', background: '#0f0f1a' },
  name: { fontSize: 'clamp(2rem, 6vw, 4rem)', margin: '0 0 0.5rem', color: '#e2e2e2' },
  title: { fontSize: '1.3rem', color: '#7c83fd', margin: '0 0 0.4rem' },
  location: { fontSize: '0.95rem', color: '#666', margin: '0 0 1rem' },
  summary: { maxWidth: '600px', color: '#a0a0c0', lineHeight: 1.7, marginBottom: '2rem' },
  actions: { display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' },
  btn: { padding: '0.75rem 1.75rem', borderRadius: '6px', background: '#7c83fd', color: '#fff', textDecoration: 'none', fontWeight: 600 },
  outline: { background: 'transparent', border: '2px solid #7c83fd', color: '#7c83fd' },
};
