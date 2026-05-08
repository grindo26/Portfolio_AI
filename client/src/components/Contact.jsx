import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {['name', 'email'].map((field) => (
          <input
            key={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            required
            style={styles.input}
          />
        ))}
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ ...styles.input, resize: 'vertical' }}
        />
        <button type="submit" disabled={status === 'sending'} style={styles.btn}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'sent' && <p style={{ color: '#7c83fd' }}>Message sent!</p>}
        {status === 'error' && <p style={{ color: '#f87171' }}>Something went wrong. Try again.</p>}
      </form>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', maxWidth: '600px', margin: '0 auto' },
  heading: { textAlign: 'center', fontSize: '2rem', color: '#e2e2e2', marginBottom: '2.5rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #2a2a4a', background: '#1a1a2e', color: '#e2e2e2', fontSize: '1rem', outline: 'none' },
  btn: { padding: '0.85rem', borderRadius: '6px', background: '#7c83fd', color: '#fff', border: 'none', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' },
};
