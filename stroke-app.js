var PAGES=['p-home','p-tech','p-drills','p-workouts','p-race','p-mistakes','p-videos','p-tracker'];
var NAV_MAP={'p-home':'nb-home','p-tech':'nb-tech','p-drills':'nb-drills','p-workouts':'nb-work','p-race':'nb-race','p-tracker':'nb-track'};
var STORE_KEY='';
function initApp(key){
  STORE_KEY='swimCoach_'+key;
  buildLog();
  setTimeout(loadData,150);
  updateOnline();
  setTimeout(showInstallBanner,1500);
  if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('./sw.js').catch(function(){});});}
  var lastTap=0;
  document.addEventListener('touchend',function(e){var now=Date.now();if(now-lastTap<300&&e.target.closest('button,.hcard,.evb')){e.preventDefault();}lastTap=now;},{passive:false});
}
function goPage(pid,nbid){
  for(var i=0;i<PAGES.length;i++){var el=document.getElementById(PAGES[i]);if(el)el.className='page';}
  var t=document.getElementById(pid);if(t)t.className='page active';
  document.querySelectorAll('.nav-item').forEach(function(b){b.classList.remove('active');});
  var nb=nbid||NAV_MAP[pid];if(nb){var n=document.getElementById(nb);if(n)n.classList.add('active');}
  var sa=document.getElementById('scroll-area');if(sa)sa.scrollTop=0;
}
function toggleMenu(){document.getElementById('overflow-menu').classList.toggle('open');}
function closeMenu(){document.getElementById('overflow-menu').classList.remove('open');}
function showEv(id,btn){
  document.querySelectorAll('.evc').forEach(function(e){e.classList.remove('active');});
  document.querySelectorAll('.evb').forEach(function(b){b.classList.remove('active');});
  var el=document.getElementById(id);if(el)el.classList.add('active');
  if(btn)btn.classList.add('active');
}
function toggleDry(head){head.classList.toggle('open');head.nextElementSibling.classList.toggle('open');}
function toggleDay(head){head.classList.toggle('open');head.nextElementSibling.classList.toggle('open');}
function buildLog(){
  var tb=document.getElementById('log-body');if(!tb)return;
  for(var w=1;w<=6;w++){
    var tr=document.createElement('tr');
    tr.innerHTML='<td><strong>Wk '+w+'</strong></td>'
      +'<td><input placeholder="—" id="log'+w+'a" inputmode="numeric" autocomplete="off"></td>'
      +'<td><input placeholder="—" id="log'+w+'b" inputmode="numeric" autocomplete="off"></td>'
      +'<td><input placeholder="—" id="log'+w+'c" inputmode="numeric" autocomplete="off"></td>'
      +'<td><input placeholder="notes" id="log'+w+'d"></td>';
    tb.appendChild(tr);
  }
}
function getIds(){
  var ids=['t50b','t100b','t200b','t500b','t50g','t100g','t200g','t500g'];
  // backstroke / breaststroke / fly use different ids
  var alt=['tb1','tb2','tb3','tg1','tg2','tg3'];
  alt.forEach(function(id){if(document.getElementById(id))ids.push(id);});
  for(var w=1;w<=6;w++)['a','b','c','d'].forEach(function(s){ids.push('log'+w+s);});
  return ids;
}
function saveData(){
  try{var d={};getIds().forEach(function(id){var el=document.getElementById(id);if(el)d[id]=el.value;});localStorage.setItem(STORE_KEY,JSON.stringify(d));}catch(e){}
}
function loadData(){
  try{var raw=localStorage.getItem(STORE_KEY);if(!raw)return;var d=JSON.parse(raw);Object.keys(d).forEach(function(id){var el=document.getElementById(id);if(el)el.value=d[id];});}catch(e){}
}
document.addEventListener('input',function(e){var el=e.target;if(el&&(el.classList.contains('ti')||el.closest('.logt')))saveData();},true);
function updateOnline(){document.body.classList.toggle('offline',!navigator.onLine);}
window.addEventListener('online',updateOnline);
window.addEventListener('offline',updateOnline);
function showInstallBanner(){
  var isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent||'');
  var isStandalone=window.navigator.standalone===true;
  var dismissed;try{dismissed=localStorage.getItem('ibDismissed');}catch(e){}
  if(isIOS&&!isStandalone&&!dismissed){var b=document.getElementById('install-banner');if(b)b.classList.add('show');}
}
function dismissInstall(){
  var b=document.getElementById('install-banner');if(b)b.classList.remove('show');
  try{localStorage.setItem('ibDismissed','1');}catch(e){}
}
