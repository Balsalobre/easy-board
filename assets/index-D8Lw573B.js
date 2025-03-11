(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div id="board-container">
    <div id="date-display"></div>
    <div id="controls">
      <label for="fontSize">Tamaño:</label>
      <select id="fontSize">
        <option value="3rem">Pequeño</option>
        <option value="6rem" selected>Mediano</option>
        <option value="9rem">Grande</option>
      </select>

      <label for="fontWeight">Grosor:</label>
      <select id="fontWeight">
        <option value="400">Normal</option>
        <option value="700" selected>Negrita</option>
      </select>
      
      <label for="chalkColor">Color:</label>
      <select id="chalkColor">
        <option value="rgba(255, 255, 255, 0.9)" selected>Blanco</option>
        <option value="rgba(255, 235, 59, 0.9)">Amarillo</option>
        <option value="rgba(255, 171, 145, 0.9)">Rosa</option>
        <option value="rgba(129, 212, 250, 0.9)">Azul</option>
      </select>
    </div>
    <div id="board" contenteditable="true">
      ¡Hola mundo!
    </div>
  </div>
`;const s=document.getElementById("fontSize"),d=document.getElementById("fontWeight"),i=document.getElementById("chalkColor"),a=document.getElementById("board"),p=document.getElementById("date-display");function u(){const o=new Date,n={weekday:"long",year:"numeric",month:"long",day:"numeric"},r=o.toLocaleDateString("es-ES",n),l=r.charAt(0).toUpperCase()+r.slice(1);p.textContent=l}u();setInterval(()=>{const o=new Date;o.getHours()===0&&o.getMinutes()===1&&u()},6e4);s.addEventListener("change",()=>{a.style.fontSize=s.value});d.addEventListener("change",()=>{a.style.fontWeight=d.value});i.addEventListener("change",()=>{a.style.color=i.value;const o=i.value.replace("0.9","0.6"),n=i.value.replace("0.9","0.3");a.style.textShadow=`0 0 2px ${o}, 0 0 4px ${n}`});
