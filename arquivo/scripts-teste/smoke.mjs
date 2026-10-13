import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
const exe = await chromium.executablePath();
console.log('exe', exe);
const b = await pw.launch({ executablePath: exe, args: chromium.args, headless: true });
const p = await b.newPage();
await p.setContent('<h1 id=x>ok</h1>');
console.log(await p.textContent('#x'), await b.version());
await b.close();
