import { resume } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>
      <div style={styles.timeline}>
        {resume.experience.map((job) => (
          <div key={job.company + job.role} style={styles.item}>
            <div style={styles.header}>
              <div>
                <span style={styles.role}>{job.role}</span>
                <span style={styles.company}> @ {job.company}</span>
              </div>
              <div style={styles.meta}>
                <span style={styles.dates}>{job.dates}</span>
                <span style={styles.location}>{job.location}</span>
              </div>
            </div>
            <div style={styles.tags}>
              {job.tech.map((t) => <span key={t} style={styles.tag}>{t}</span>)}
            </div>
            <ul style={styles.bullets}>
              {job.bullets.map((b, i) => <li key={i} style={styles.bullet}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div style={styles.education}>
        <h3 style={styles.subheading}>Education</h3>
        {resume.education.map((ed) => (
          <div key={ed.school} style={styles.edItem}>
            <div style={styles.edHeader}>
              <div>
                <strong style={{ color: '#e2e2e2' }}>{ed.degree}</strong>
                <span style={styles.edSchool}> — {ed.school}</span>
              </div>
              <div style={styles.meta}>
                <span style={styles.dates}>{ed.dates}</span>
                <span style={styles.location}>{ed.location}</span>
              </div>
            </div>
            <p style={styles.edMeta}>GPA: {ed.gpa} &nbsp;|&nbsp; {ed.coursework}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', maxWidth: '860px', margin: '0 auto' },
  heading: { fontSize: '2rem', color: '#e2e2e2', marginBottom: '2.5rem', textAlign: 'center' },
  timeline: { display: 'flex', flexDirection: 'column', gap: '2.5rem' },
  item: { borderLeft: '3px solid #7c83fd', paddingLeft: '1.5rem' },
  header: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' },
  role: { color: '#e2e2e2', fontWeight: 700, fontSize: '1.05rem' },
  company: { color: '#7c83fd' },
  meta: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' },
  dates: { color: '#a0a0c0', fontSize: '0.9rem' },
  location: { color: '#555', fontSize: '0.85rem' },
  tags: { display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.75rem' },
  tag: { background: '#2a2a4a', color: '#7c83fd', padding: '0.15rem 0.55rem', borderRadius: '4px', fontSize: '0.78rem' },
  bullets: { paddingLeft: '1.1rem', margin: 0 },
  bullet: { color: '#a0a0c0', marginBottom: '0.4rem', lineHeight: 1.65 },
  education: { marginTop: '4rem' },
  subheading: { color: '#e2e2e2', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' },
  edItem: { marginBottom: '1.5rem', borderLeft: '3px solid #7c83fd', paddingLeft: '1.5rem' },
  edHeader: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' },
  edSchool: { color: '#a0a0c0' },
  edMeta: { color: '#666', fontSize: '0.88rem', margin: 0 },
};
