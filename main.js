const $ = (id) => document.getElementById(id);

function authorsHtml(authors) {
  return authors.replace(new RegExp(`${ME}(\\*?)`, "g"), `<b class="me">${ME}$1</b>`);
}

function linksHtml(links) {
  return Object.entries(links || {})
    .map(([label, url]) => `<a class="tag-link" href="${url}">${label}</a>`)
    .join("");
}

function entryHtml(p) {
  const thumb = p.thumb
    ? `<a class="thumb" href="${Object.values(p.links)[0] || "#"}"><img src="assets/thumbs/${p.thumb}" alt="" loading="lazy" onerror="this.parentNode.remove()"></a>`
    : "";
  const badge = p.badge ? `<span class="badge">${p.venue} ${p.badge}</span>` : "";
  const tags = (p.tags || []).map((t) => `<span class="topic">${t}</span>`).join("");
  return `
    <article class="pub ${p.thumb ? "" : "no-thumb"}" data-tags="${(p.tags || []).join("|")}">
      ${thumb}
      <div class="pub-body">
        <div class="pub-title">${p.title}</div>
        <div class="pub-authors">${authorsHtml(p.authors)}</div>
        <div class="pub-venue"><span class="venue">${p.venue}</span>${badge}</div>
        <div class="pub-links">${linksHtml(p.links)}${tags}</div>
      </div>
    </article>`;
}

function renderPubs(filter) {
  $("pub-list").innerHTML = PUBS.filter((p) => filter === "All" || p.tags.includes(filter))
    .map(entryHtml)
    .join("");
  document.querySelectorAll("#pub-filters button").forEach((b) => {
    b.classList.toggle("active", b.textContent === filter);
  });
}

function rowHtml(e) {
  return `
    <div class="row">
      <div class="row-main">
        <div class="row-org">${e.org}${e.place ? `<span class="muted">, ${e.place}</span>` : ""}</div>
        <div>${e.role}</div>
        <div class="muted">${e.detail || ""}</div>
      </div>
      <div class="date">${e.date}</div>
    </div>`;
}

$("news-list").innerHTML = NEWS.map((n) => `<li><span class="date">${n.date}</span><span>${n.text}</span></li>`).join("");
$("pub-filters").innerHTML = ["All", ...TAGS].map((t) => `<button type="button">${t}</button>`).join("");
$("pub-filters").addEventListener("click", (ev) => {
  if (ev.target.tagName === "BUTTON") renderPubs(ev.target.textContent);
});
renderPubs("All");
$("tut-list").innerHTML = TUTORIALS.map((t) => entryHtml({ ...t, tags: [] })).join("");
$("exp-list").innerHTML = EXPERIENCE.map(rowHtml).join("");
$("edu-list").innerHTML = EDUCATION.map(rowHtml).join("");
$("honor-list").innerHTML = HONORS.map((h) => `<li>${h.text} <span class="date">${h.date}</span></li>`).join("");
$("updated").textContent = UPDATED;
