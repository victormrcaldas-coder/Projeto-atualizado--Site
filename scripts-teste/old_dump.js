const {JSDOM,VirtualConsole}=require('jsdom');const fs=require('fs');
const html=fs.readFileSync('/mnt/user-data/uploads/1791039168227_memotiva__3_.html','utf8');
const errs=[],logs=[];
const vc=new VirtualConsole();vc.on('jsdomError',e=>errs.push(String(e.message).slice(0,200)));vc.on('log',m=>logs.push(String(m).slice(0,160)));vc.on('warn',m=>logs.push('W '+String(m).slice(0,160)));
const dom=new JSDOM(html.replace(/<link[^>]*fonts[^>]*>/g,''),{runScripts:'dangerously',pretendToBeVisual:true,url:'http://localhost/',virtualConsole:vc,resources:undefined});
const w=dom.window;
w.fetch=()=>Promise.reject(new Error('no net'));
w.IntersectionObserver=class{observe(){}unobserve(){}disconnect(){}};w.ResizeObserver=class{observe(){}unobserve(){}disconnect(){}};
w.scrollTo=()=>{};
const E=x=>{try{return w.eval(x)}catch(e){return 'ERR '+e.message.slice(0,100)}};
setTimeout(()=>{
 const o={};
 o.errs=errs.slice(0,4);
 o.quotes=E('typeof QUOTES!=="undefined"?QUOTES.length:null');
 o.fns=['QUARENTENA','CURADORIA_RELATORIO','LACUNAS','F62_RELATORIO','F70_RELATORIO','F71_RELATORIO','F75_RELATORIA','F75_RELATORIO','MEMOTIVA_PENDENTES','ATRIBUICOES_VERIFICADAS','RESIDUAL'].map(n=>n+':'+E('typeof '+n));
 o.q0=E('JSON.stringify(Object.keys(QUOTES[0]))');
 const qa=E('(typeof QUARENTENA==="function")?JSON.stringify(QUARENTENA()).slice(0,600):null');
 o.quarentena=qa;
 o.logs=logs.slice(-6);
 
 const fs2=require('fs');
 fs2.writeFileSync('/tmp/hist/old_quarentena.json',E('JSON.stringify(QUARENTENA())'));
 fs2.writeFileSync('/tmp/hist/old_quotes.json',E('JSON.stringify(QUOTES.map(q=>({a:q.author,t:q.text,s:q.src,st:q.st,c:q.cat,qid:q.qid})))'));
 o.obras=E('typeof OBRAS!=="undefined"?Object.values(OBRAS).reduce((n,a)=>n+a.length,0):null');
 console.log(JSON.stringify(o,null,1));
 process.exit(0);
},7000);
