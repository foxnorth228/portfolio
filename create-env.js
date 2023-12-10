const fs = require('fs')
fs.writeFileSync('./.env', `SERVISE_ID=${process.env.SERVISE_ID}\n`);
fs.writeFileSync('./.env', `TEMPLATE_ID=${process.env.TEMPLATE_ID}\n`);
fs.writeFileSync('./.env', `PUBLIC_API_KEY=${process.env.PUBLIC_API_KEY}\n`);

if (isEnd) {
    total = arrPoses.length + '\n';
    for (let i = 0; i < arrPoses.length; ++i) {
        total += arrPoses[i] + ' ';
    }
    total = total.slice(0, -1);
}