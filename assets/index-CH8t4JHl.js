(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
<div id="controls">
<label for="fontSize">Tamaño:</label>
<select id="fontSize">
  <option value="1.5rem">Pequeño</option>
  <option value="2rem">Mediano</option>
  <option value="3rem" selected>Muy Grande</option>
</select>

<label for="fontWeight">Grosor:</label>
<select id="fontWeight">
  <option value="400">Normal</option>
  <option value="700" selected>Negrita</option>
</select>
</div>
<div id="board" contenteditable="true">
¡Escribe en la pizarra!
</div>

`;const i=document.getElementById("fontSize"),l=document.getElementById("fontWeight"),c=document.getElementById("board");i.addEventListener("change",()=>{c.style.fontSize=i.value});l.addEventListener("change",()=>{c.style.fontWeight=l.value});
