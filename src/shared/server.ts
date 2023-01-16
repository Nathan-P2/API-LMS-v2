import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();

const prisma = new PrismaClient();

app.use(cors());

app.use(express.json());

app.get('/teste', (req, res) => {
  return res.sendStatus(200);
});

app.listen(3000);
