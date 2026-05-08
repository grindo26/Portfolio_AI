import { resume } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>
      <div style={styles.grid}>
        {resume.skills.map((group) => (
          <div key={group.category} style={styles.card}>
            <h3 style={styles.category}>{group.category}</h3>
            <ul style={styles.list}>
              {group.items.map((item) => (
                <li key={item} style={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', background: '#0f0f1a' },
  heading: { textAlign: 'center', fontSize: '2rem', color: '#e2e2e2', marginBottom: '3rem' },
  grid: { display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '900px', margin: '0 auto' },
  card: { background: '#1a1a2e', borderRadius: '8px', padding: '1.5rem 2rem', minWidth: '180px' },
  category: { color: '#7c83fd', marginBottom: '1rem', fontSize: '1rem' },
  list: { listStyle: 'none', padding: 0, margin: 0 },
  item: { color: '#a0a0c0', padding: '0.3rem 0', fontSize: '0.95rem' },
};
