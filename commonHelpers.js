import{a as h}from"./assets/vendor-34f890c2.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=document.querySelector(".btn-connect"),f=document.querySelector(".mdl_box"),c=document.querySelector(".mdl_content"),b=document.querySelector(".close"),a=document.querySelector(".username"),L=document.querySelector(".but_submit"),r=document.querySelector(".phone"),v=document.querySelector(".forma_for_connect");document.querySelector("label-inpt");const S="6077606622:AAG6g12itzLvnsQfazmk9-oBfkHb1kflQYk";let _=-0xe950ad50ec;v.addEventListener("submit",async n=>{n.preventDefault(),d(),m();async function i(y){await h.post(`https://api.telegram.org/bot${S}/sendMessage`,{chat_id:_,text:y}).then(u=>{k(),u.status}).catch(u=>{q(),console.error("Error in sending sms:",u)})}const o=new FormData(document.querySelector(".forma_for_connect")),l=o.get("username"),e=o.get("phone"),t=o.get("education"),s=o.get("comment"),p=`
            Нова заявка:
    1) Им'я: ${l};
    2) Телефон: ${e};
    3) Формат навчання: ${t};
    4) Коментар: ${s.split("").length>0?s:"Without comments"};
        `;i(p)});async function d(){a.value.trim()===""?a.classList.add("red"):a.classList.remove("red")}async function m(){r.value.trim()===""||!r.value.trim().includes("+")||r.value.trim().split("").length<12?r.classList.add("red"):r.classList.remove("red")}async function k(){let n=`
                <h2 class="title_feedback">See you soon!</h2>
                <p class="text_feedback">Ваші дані були успішно відправлені. Будь ласка, очікуйте: я зв'яжуся з Вами якнайшвидше для обговорення деталей.</p>`;c.innerHTML=n,c.style.flexDirection="column",c.style.gap="24px"}async function q(){let n=`
                <h2 class="title_feedback">Error</h2>
                <p class="text_feedback">На жаль, на сайті сталася помилка і Ваші дані не<br>були відправлені. Спробуйте, будь ласка, пізніше.</p>`;c.innerHTML=n,c.style.flexDirection="column",c.style.gap="24px"}g.addEventListener("click",function(){f.style.display="block"});b.addEventListener("click",function(){f.style.display="none"});a.addEventListener("input",n=>{d()});r.addEventListener("input",n=>{m()});L.addEventListener("click",n=>{d(),m()});
//# sourceMappingURL=commonHelpers.js.map