document.querySelectorAll('.placeholder').forEach(b=>b.addEventListener('click',()=>alert('Chart link coming soon.')));
const copy=document.getElementById('copyCA');
if(copy) copy.addEventListener('click', async ()=>{
  const ca=document.getElementById('ca').textContent;
  await navigator.clipboard.writeText(ca);
  const old=copy.textContent; copy.textContent='Copied!';
  setTimeout(()=>copy.textContent=old,1400);
});
