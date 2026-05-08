const express = require('express');
const router = express.Router();

// POST /api/contact
// TODO: wire up nodemailer with SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_EMAIL env vars
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  // placeholder — replace with nodemailer send logic
  console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Message received.' });
});

module.exports = router;
