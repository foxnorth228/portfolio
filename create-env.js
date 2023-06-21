const fs = require('fs')
fs.writeFileSync('./.env', `SERVISE_ID=${process.env.SERVISE_ID}\n`);
fs.writeFileSync('./.env', `TEMPLATE_ID=${process.env.TEMPLATE_ID}\n`);
fs.writeFileSync('./.env', `PUBLIC_API_KEY=${process.env.PUBLIC_API_KEY}\n`);
