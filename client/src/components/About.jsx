import { resume } from '../data/resume';

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>{resume.summary}</p>
      <div style={styles.links}>
        <a href={resume.linkedin} target="_blank" rel="noreferrer" style={styles.link}>LinkedIn</a>
        <a href={`mailto:${resume.email}`} style={styles.link}>{resume.email}</a>
        <a href={`tel:${resume.phone}`} style={styles.link}>{resume.phone}</a>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', maxWidth: '750px', margin: '0 auto', textAlign: 'center' },
  heading: { fontSize: '2rem', color: '#e2e2e2', marginBottom: '1.5rem' },
  text: { color: '#a0a0c0', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' },
  links: { display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' },
  link: { color: '#7c83fd', textDecoration: 'none', fontWeight: 600 },
};
