const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
/* Task tag badge */
const tag=document.createElement('div');tag.id='tag';
tag.innerHTML='<b>Task Tags</b><div id="tt">Hover over a feature to see its task</div><button id="tg">Turn OFF</button>';document.body.append(tag);
let on=true;const tt=$('#tt'),dflt='Hover over a feature to see its task';
$('#tg').onclick=()=>{on=!on;$('#tg').textContent=on?'Turn OFF':'Turn ON';tt.textContent=on?dflt:'Tags are off'};
document.addEventListener('mouseover',e=>{if(!on)return;const t=e.target.closest('[data-task]');tt.innerHTML=t?'<b>'+t.dataset.task+'</b>':dflt});
/* tabs + slider */
$$('[data-tab]').forEach(b=>b.onclick=()=>{$$('.tab').forEach(t=>t.classList.remove('on'));$('#'+b.dataset.tab).classList.add('on')});
const sl=$$('.slide');if(sl.length){let i=0;setInterval(()=>{sl[i].classList.remove('on');i=(i+1)%sl.length;sl[i].classList.add('on')},4000)}
/* Task 38 / 39 galleries (keydown) */
const ci=$('#ci'),ti=$('#ti'),img=s=>'https://picsum.photos/seed/'+s+'/900/420';
if(ci){const L=[['tower','Technology Tower'],['mgr','Dr. M.G.R Block'],['gandhi','Gandhi Block'],['pearl','Pearl Research Park']];let i=0;
 const sh=()=>{ci.src='images/'+L[i][0]+'.jpg';$('#cm').textContent=''};sh();
 document.addEventListener('keydown',e=>{if(e.key=='ArrowRight'){i=(i+1)%L.length;sh()}else if(e.key=='ArrowLeft'){i=(i-1+L.length)%L.length;sh()}else if(e.key=='Enter')$('#cm').textContent='Image Selected: '+L[i][1]})}
if(ti){const L=[['Golden Temple','goldentemple'],['Vellore Fort','vellorefort']];let i=0;
 const sh=()=>{ti.src='images/'+L[i][1]+'.jpg';$('#tm').textContent='';$('#tc').textContent='Photo '+(i+1)+' of '+L.length+' | N = next, P = previous, Space = show name'};sh();
 const go=d=>{i=(i+d+L.length)%L.length;sh()};$('#tn').onclick=()=>go(1);$('#tp').onclick=()=>go(-1);
 document.addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(k=='n')go(1);else if(k=='p')go(-1);else if(e.key==' '){e.preventDefault();$('#tm').textContent='Destination: '+L[i][0]}})}
/* Tasks 25 + 26: empty-field check, errors beside the box */
function chk(f,o,tbl){let ok=1,rows='',seen={};
 [...f.elements].forEach(el=>{const n=el.name;if(!n||seen[n]||/button|submit|reset|hidden/.test(el.type)||el.dataset.opt!=undefined)return;seen[n]=1;
  const c=el.type=='radio'?f.querySelector('[name='+n+']:checked'):el,v=c?c.value:'',w=el.closest('.f');
  const s=w.querySelector('.err')||w.appendChild(Object.assign(document.createElement('span'),{className:'err'}));
  s.textContent=v?'':'This field is required';if(!v)ok=0;rows+='<tr><th>'+n+'</th><td>'+v+'</td></tr>'});
 o.innerHTML=ok?(tbl?'<table class="t">'+rows+'</table>':'<span class="ok">Login successful</span>'):'<span class="err">Please fill in all required fields.</span>';return false}
/* Task 27 regex registration */
if($('#sf'))$('#sf').onsubmit=e=>{e.preventDefault();const f=e.target;let ok=1;const set=(id,m)=>{$('#'+id).textContent=m;if(m)ok=0};
 set('e1',/^[A-Za-z ]+$/.test(f.sn.value)?'':'Name can contain only alphabets and spaces');
 set('e2',/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(f.se.value)?'':'Enter a valid email address');
 set('e3',f.sg.value?'':'Select a gender');
 set('e4',f.querySelector('[name=sk]:checked')?'':'Select at least one skill');
 $('#so').textContent=ok?'Registration Successful':''};
/* Task 28 course registration */
if($('#cf'))$('#cf').onsubmit=e=>{e.preventDefault();const f=e.target,n=f.cn.value;
 if(!/^[A-Za-z ]+$/.test(n)){$('#ce').textContent='Name can contain only alphabets and spaces';$('#co').innerHTML='';return}
 $('#ce').textContent='';$('#co').innerHTML='<table class="t"><tr><th>Name</th><td>'+n+'</td></tr><tr><th>Department</th><td>'+f.cd.value+'</td></tr><tr><th>Languages</th><td>'+[...f.cl.selectedOptions].map(o=>o.value).join(', ')+'</td></tr></table>'};
/* Task 37 exam registration */
$$('.opt').forEach(o=>o.onclick=()=>{$$('.opt').forEach(x=>x.classList.remove('sel'));o.classList.add('sel')});
function subExam(){const s=$('.opt.sel');$('#xo').innerHTML=s?'<span class="ok">Registration Submitted Successfully: '+s.dataset.n+' on '+$('#xd').value+'</span>':'<span class="err">Select an exam first.</span>'}
const xb=$('#xb');if(xb){xb.onmouseover=()=>xb.style.boxShadow='0 0 0 4px #12307a55';xb.onmouseout=()=>xb.style.boxShadow='';xb.onclick=subExam;
 document.addEventListener('keydown',e=>{if(e.key=='Enter'&&$('#exam').classList.contains('on')&&e.target.tagName!='BUTTON'){e.preventDefault();subExam()}})}
/* Tasks 29-33 mouse events */
const hov=(sel,out,fn)=>$$(sel).forEach(s=>{s.onmouseover=()=>{s.classList.add('lit');$(out).textContent=s.dataset.m};s.onmouseout=()=>{s.classList.remove('lit');$(out).textContent=''}});
if($('#box')){const b=$('#box');b.onclick=()=>b.style.background='#'+Math.random().toString(16).slice(2,8).padEnd(6,'a');b.onmouseover=()=>$('#bm').textContent='Mouse is over the box';b.onmouseout=()=>$('#bm').textContent='';
 hov('.sig','#sm');hov('.wp','#wm');
 const w=$('#wb');w.onmouseover=()=>$('#wt').textContent='Welcome to VIT!';w.onmouseout=()=>$('#wt').textContent='Hover over the button'}
/* Task 34 student search */
if($('#ss'))$('#ss').onkeydown=e=>{const m=$('#sk');$('#sk').textContent='Key pressed: '+e.key;if(e.key=='Enter')$('#sm2').textContent='Searching for student…';if(e.key=='Escape'){e.target.value='';$('#sk').textContent='';$('#sm2').textContent=''}};
/* Task 35 ATM */
if($('#pin'))$('#pin').onkeydown=e=>{const m=$('#pm');if(e.key=='Enter'){m.innerHTML='<span class="ok">PIN Submitted Successfully</span>';return}
 if(e.key.length==1&&!/\d/.test(e.key)){e.preventDefault();m.innerHTML='<span class="err">Warning: numbers only</span>'}else if(e.key.length==1)m.textContent='PIN Entry Started'};
/* Task 36 product search */
if($('#ps')){const p=$('#ps');p.oninput=()=>{$('#pr').textContent=p.value;p.style.background=p.value?'#fff6dc':''};p.onkeydown=e=>{if(e.key=='Enter')$('#pr').textContent='Searching for: '+p.value}}
/* Task 30 product cards */
$$('.pc').forEach(c=>{const i=c.querySelector('img'),d=c.querySelector('.pi');i.onmouseover=()=>{i.classList.add('hov');d.textContent=c.dataset.info};i.onmouseout=()=>{i.classList.remove('hov');d.textContent=''};
 c.querySelector('button').onclick=()=>c.querySelector('.pd').textContent='Price: '+c.dataset.price+' | '+c.dataset.stock});
/* Task 24 checkout */
if($('#ck')){$('#ck').onsubmit=e=>{e.preventDefault();$('#ko').innerHTML='<span class="ok">Order placed successfully. Total paid on delivery/online: ₹1,597</span>'};$('#kc').onclick=()=>{$('#ck').reset();$('#ko').textContent='Order cancelled.'}}
