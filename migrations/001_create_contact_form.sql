-- Migration: Create ContactForm table
CREATE TABLE IF NOT EXISTS ContactForm (
  FormID INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT NOT NULL,
  Email TEXT NOT NULL,
  Phone TEXT NOT NULL,
  Description TEXT NOT NULL
);