import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
import mysql from "mysql2"; // ✅ pastikan install: npm install mysql2

const app = express();
const PORT = 3000;

// Untuk path di ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Folder public (untuk index.html)
app.use(express.static(path.join(__dirname, "public")));

// ✅ Konfigurasi koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rifqy2004_", // sesuaikan
  database: "PraktikumToken", // sesuaikan
});

// Cek koneksi database
db.connect((err) => {
  if (err) {
    console.error("❌ Gagal konek ke database:", err.message);
  } else {
    console.log("✅ Terhubung ke database PraktikumToken");
  }
});
