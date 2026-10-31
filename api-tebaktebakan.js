const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const DB_FILE = path.join(__dirname, 'soal-tebaktebakan.json');

function loadSoal() {
  try {
    if (!fs.existsSync(DB_FILE)) return [];
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch { return []; }
}

app.get('/', (req, res) => {
  res.send('API TEBAK-TEBAKAN NOCTRYXZ PERMANEN ON');
});

app.get('/tebaktebakan', (req, res) => {
  const soal = loadSoal();
  if (soal.length === 0) return res.json({ soal: "Soal habis", jawaban: "habis" });
  const random = soal[Math.floor(Math.random() * soal.length)];
  res.json(random);
});

app.get('/all', (req, res) => {
  res.json(loadSoal());
});

app.listen(PORT, () => {
  console.log(`API TEBAK-TEBAKAN Jalan di port ${PORT}`);
});