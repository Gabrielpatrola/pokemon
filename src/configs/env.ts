import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3333;

export const DB_CONFIG = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export const isTest = process.env.NODE_ENV === 'test';
