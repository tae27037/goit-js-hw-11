import{a as d,S as m,i}from"./assets/vendor-Cq7ZUixy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const g="53479678-bd84db524e397b690847497a1",y="https://pixabay.com/api/";function h(a){return d.get(y,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>(console.log("Pixabay data:",t.data),t.data)).catch(t=>{throw console.error("HTTP error:",t),t})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const t=a.map(({webformatURL:o,largeImageURL:n,tags:e,likes:s,views:r,comments:u,downloads:f})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img class="gallery-image" src="${o}" alt="${e}" />
  </a>

  <div class="info">
    <p class="info-item">
      <span class="info-label">Likes</span>
      <span class="info-value">${s}</span>
    </p>
    <p class="info-item">
      <span class="info-label">Views</span>
      <span class="info-value">${r}</span>
    </p>
    <p class="info-item">
      <span class="info-label">Comments</span>
      <span class="info-value">${u}</span>
    </p>
    <p class="info-item">
      <span class="info-label">Downloads</span>
      <span class="info-value">${f}</span>
    </p>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()}function v(){l.innerHTML=""}function S(){c.classList.add("is-visible")}function q(){c.classList.remove("is-visible")}const p=document.querySelector(".form"),w=p.elements["search-text"];p.addEventListener("submit",P);function P(a){a.preventDefault();const t=w.value.trim();if(!t){i.warning({message:"Please enter a search query!",position:"topRight"});return}v(),S(),h(t).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, nothing was found!",position:"topRight"});return}L(o.hits)}).catch(()=>{i.error({message:"Request error. Try again.",position:"topRight"})}).finally(()=>{q()})}
//# sourceMappingURL=index.js.map
