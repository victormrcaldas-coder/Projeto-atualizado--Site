const {JSDOM,VirtualConsole}=require('jsdom');const fs=require('fs');
const repo=process.argv[2]; const mode=process.argv[3]||'stats';
let html=fs.readFileSync(repo+'/Código.html','utf8');
const js=fs.readFileSync(repo+'/memotiva.js','utf8');
html=html.replace(/<link rel="stylesheet"[^>]*>/g,'').replace(/<script src="assets\/js\/memotiva.js"><\/script>/,'');
const errs=[];const logs=[];
const vc=new VirtualConsole();vc.on('jsdomError',e=>errs.push(String(e.message).slice(0,200)));vc.on('log',m=>logs.push(String(m)));vc.on('warn',m=>logs.push('WARN '+m));
const dom=new JSDOM(html,{runScripts:'dangerously',pretendToBeVisual:true,url:'http://localhost/',virtualConsole:vc});
const w=dom.window;
w.fetch=()=>Promise.reject(new Error('no net'));
w.IntersectionObserver=class{observe(){}unobserve(){}disconnect(){}};
w.ResizeObserver=class{observe(){}unobserve(){}disconnect(){}};
w.matchMedia=w.matchMedia||(()=>({matches:false,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}}));
w.scrollTo=()=>{};
try{ const sc=w.document.createElement('script'); sc.textContent=js; w.document.body.appendChild(sc); }catch(e){ errs.push('EVAL '+e.message); }
const E=x=>{try{return w.eval(x)}catch(e){return 'ERR '+e.message.slice(0,80)}};
setTimeout(()=>{
  const out={frases:E('QUOTES.length'),autores:E('AUTOR_INDEX.size'),lacunas:E('LACUNAS().length'),pend:E('MEMOTIVA_PENDENTES().length'),erros:errs.length,errs:errs.slice(0,5)};
  out.qidDup=E('(()=>{const s=new Set();let d=0;QUOTES.forEach(q=>{if(s.has(q.qid))d++;s.add(q.qid)});return d})()');
  out.qidInconsist=E('(()=>{let n=0;QUOTES.forEach(q=>{const x=QUOTE_POR_QID[q.qid];if(!(x===q||(typeof x==="number"&&QUOTES[x]===q)))n++});return n})()');
  out.f99=logs.filter(l=>/Fase 99|Fase 9[0-9]/.test(l)).slice(-4);
  out.home=E('document.getElementById("statQuotes").textContent+" / "+document.getElementById("statAuthors").textContent');out.f75=E('typeof F75_RELATORIO==="function"?JSON.stringify(F75_RELATORIO()).slice(0,200):null');
  if(mode==='csv'){const r=E('CURADORIA_EXPORT_CSV(false)');fs.writeFileSync('/tmp/t/csv.json',JSON.stringify(r));out.csvType=typeof r;out.csvKeys=r&&typeof r==='object'?Object.keys(r):null;}
  if(mode==='dump'){fs.writeFileSync('/tmp/t/quotes.json',E('JSON.stringify(QUOTES.map(q=>({a:q.author,t:q.text,s:q.src,st:q.st,c:q.cat,qid:q.qid})))'));}
  console.log(JSON.stringify(out,null,1));process.exit(0);
},6000);
