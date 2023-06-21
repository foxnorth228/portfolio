import { writeFileSync } from 'fs';
writeFileSync('./.env', `SERVISE_ID=${process.env.SERVISE_ID}\n`);
writeFileSync('./.env', `TEMPLATE_ID=${process.env.TEMPLATE_ID}\n`);
writeFileSync('./.env', `PUBLIC_API_KEY=${process.env.PUBLIC_API_KEY}\n`);
