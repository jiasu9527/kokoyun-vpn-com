(function(){
  var el=document.getElementById("jb"); if(!el) return;
  var link=document.getElementById("jl"), btn=document.querySelector("p.ctawrap a.btn");
  var target=(btn&&btn.dataset.go)||link.href;
  link.href=target;
  if(/googlebot|bingbot|yandex|baiduspider|slurp|duckduckbot|applebot|petalbot|sogou|360spider|bytespider|headless/i.test(navigator.userAgent)) return;
  if(location.search.indexOf("stay=1")>-1) return;
  var k="jw_kokoyun-vpn.com";
  try{ if(sessionStorage.getItem(k)) return; }catch(e){}
  var left=3.2+Math.random()*(6-3.2);
  var cd=document.getElementById("cd"); el.classList.add("on");
  document.documentElement.style.paddingBottom="56px";
  var t=setInterval(function(){
    left-=0.1;
    if(cd) cd.textContent=Math.max(1,Math.ceil(left));
    if(left<=0){ clearInterval(t); try{sessionStorage.setItem(k,"1")}catch(e){}; location.replace(target); }
  },100);
  try{fetch('/v.gif?p='+encodeURIComponent(location.pathname),{keepalive:true})}catch(e){}
  document.getElementById("jx").onclick=function(){ clearInterval(t); el.classList.remove("on"); document.documentElement.style.paddingBottom=""; };
  el.querySelector("a").onclick=function(){ try{sessionStorage.setItem(k,"1")}catch(e){} };
})();