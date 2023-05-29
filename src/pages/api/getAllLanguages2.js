import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const langs = await prisma.langauge.findMany();
        res.status(200).json(langs);
    } catch (error) {
        console.error('error',error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
