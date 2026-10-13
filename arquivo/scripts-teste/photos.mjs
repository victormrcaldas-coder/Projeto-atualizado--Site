import chromium from '@sparticuz/chromium';
import { chromium as pw } from 'playwright-core';
import fs from 'fs';
const port=process.argv[2]; const exe=await chromium.executablePath();
const b=await pw.launch({executablePath:exe,args:chromium.args,headless:true});
const page=await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
const local404=new Set(), ext={};
page.on('response',r=>{ if(r.status()>=400) local404.add(new URL(r.url()).pathname); });
await page.route('**/*',r=>{const u=r.request().url(); if(u.startsWith('http://127.0.0.1')) return r.continue(); const h=new URL(u).host; ext[h]=(ext[h]||0)+1; return r.abort();});
await page.goto(`http://127.0.0.1:${port}/${process.argv[3]||'index.html'}`,{waitUntil:'load'});
await page.waitForFunction(()=>typeof QUOTES!=='undefined'&&QUOTES.length>2000,null,{timeout:60000});
await page.waitForTimeout(8000);
const d=await page.evaluate(()=>{
  const nomes=[...AUTOR_INDEX.keys()];
  const com=nomes.filter(n=>!!photoInfo(n)), sem=nomes.filter(n=>!photoInfo(n));
  const entradas=Object.keys(PHOTOS).length;
  const stories=STORIES.map(s=>({id:s.id,autor:s.author,photo:s.photo||null,temPhotoInfo:!!photoInfo(s.author)}));
  const semComFrases=sem.map(n=>({n,frases:QUOTES.filter(q=>q.author===n).length}));
  return {autores:nomes.length,comFoto:com.length,semFoto:sem.length,entradasPHOTOS:entradas,stories:stories.length,storiesSemFoto:stories.filter(s=>!s.photo&&!s.temPhotoInfo).length,
    semFotoTop:semComFrases.sort((a,b)=>b.frases-a.frases).slice(0,15), comFotoLista:com, storiesSem:stories.filter(s=>!s.photo&&!s.temPhotoInfo).map(s=>s.autor)};
});
// percorre páginas principais para disparar imagens preguiçosas
for (const v of ['home','explorar','autores','historias']) { await page.evaluate((v)=>{try{navigateTo(v)}catch(e){}},v); await page.waitForTimeout(1500); await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight)); await page.waitForTimeout(800); }
console.log(JSON.stringify({d:{...d,comFotoLista:d.comFotoLista.length,storiesSem:d.storiesSem.slice(0,40)},local404:[...local404].length,exemplos:[...local404].slice(0,6),ext}));
fs.writeFileSync('/tmp/t/photos.json',JSON.stringify({d,local404:[...local404]}));
await b.close();
