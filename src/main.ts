import "./style.css";
import { content, speakers, type Lang } from "./content";

const app = document.getElementById("app")!;

function getLang(): Lang {
  const url = new URLSearchParams(location.search).get("lang");
  if (url === "ka" || url === "en") return url;
  const saved = localStorage.getItem("wt-lang");
  if (saved === "ka" || saved === "en") return saved;
  return "ka";
}

let lang: Lang = getLang();

const list = (items: string[], cls: string) =>
  `<ul class="${cls}">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

const marquee = () => {
  const img = `<img src="/img/logo-strip-black.png" alt="" loading="lazy" />`;
  return `<div class="marquee" aria-hidden="true"><div class="track">${img.repeat(8)}</div></div>`;
};

function render() {
  const t = content[lang];
  document.documentElement.lang = lang;
  document.title =
    lang === "ka"
      ? "Welcome Tbilisi — 23-24-25 ოქტომბერი, 2026"
      : "Welcome Tbilisi — 23-24-25 October, 2026";

  app.innerHTML = `
  <header class="site-head" id="siteHead">
    <a class="brand" href="#top" aria-label="Welcome Tbilisi">
      <img class="b-white" src="/img/logo-h-white.png" alt="" />
      <img class="b-black" src="/img/logo-h-black.png" alt="Welcome Tbilisi" />
    </a>
    <button class="lang-btn" id="langBtn">${t.nav.lang}</button>
  </header>

  <section class="hero" id="top">
    <div class="hero-bg"></div>
    <div class="hero-inner">
      <img class="hero-logo" src="/img/logo-v-white.png" alt="Welcome Tbilisi" />
      <span class="rule"></span>
      <div class="hero-meta">
        <div class="hero-dates">${t.hero.dates}</div>
        <div class="hero-venue">${t.hero.address} · ${t.hero.venue}</div>
      </div>
    </div>
    <div class="hero-scroll" aria-hidden="true"><span class="line"></span></div>
  </section>

  <section class="mission">
    <div class="wrap">
      <img class="wordmark" src="/img/logo-stack-black.png" alt="Welcome Tbilisi" data-reveal />
      <p data-reveal style="--d:.12s">${t.mission.text}</p>
    </div>
  </section>

  <section class="facts">
    <div class="wrap facts-grid">
      <div class="fact-date" data-reveal="left">
        <div class="heading">${t.hero.dates}</div>
        <p>${t.hero.address}<br/>${t.hero.venue}</p>
        <div class="fact-visitors">
          <div class="big-num"><span data-count="${t.facts.visitorsValue}">0</span><span class="sfx">${t.facts.visitorsSuffix}</span></div>
          <div class="label">${t.facts.visitorsLabel}</div>
        </div>
      </div>
      <div class="supporters" data-reveal="right">
        <h3 class="heading">${t.facts.supportersTitle}</h3>
        ${list(t.facts.supporters, "sup")}
        <div class="sup-logos">
          <img src="/img/sup-mayor.png" alt="${t.facts.supporters[0]}" loading="lazy" />
          <img src="/img/sup-coat.png" alt="${t.facts.supporters[2]}" loading="lazy" />
          <img src="/img/sup-georgia.png" alt="${t.facts.supporters[3]}" loading="lazy" />
          <img src="/img/sup-creative.png" alt="${t.facts.supporters[1]}" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <section class="concept">
    <div class="wrap">
      <div class="concept-top">
        <div class="txt">
          <span class="kicker">Welcome Tbilisi</span>
          <h2 class="heading" data-reveal>${t.concept.title}</h2>
          <p class="lead" data-reveal style="--d:.1s">${t.concept.lead}</p>
          <p class="side" data-reveal style="--d:.18s">${t.concept.side}</p>
        </div>
        <figure class="frame" data-reveal="right">
          <img src="/img/facade.jpg" alt="Tbilisi City Assembly" loading="lazy" />
        </figure>
      </div>

      <div class="spaces">
        <figure class="frame" data-reveal="left">
          <img src="/img/atrium-wide.jpg" alt="Atrium" loading="lazy" />
        </figure>
        <div>
          <h3 class="heading" data-reveal>${t.concept.spacesTitle}</h3>
          <p class="fl" data-reveal style="--d:.08s">${t.concept.formatsLabel}</p>
          <ol class="formats">
            ${t.concept.formats.map((f, i) => `<li data-reveal style="--d:${0.1 + i * 0.07}s">${f}</li>`).join("")}
          </ol>
        </div>
      </div>

      <div class="stats">
        ${t.concept.stats
          .map(
            (s, i) => `
        <div class="stat" data-reveal style="--d:${i * 0.1}s">
          <div class="n"><span data-count="${s.value}">0</span>${s.suffix}</div>
          <div class="l">${s.label}</div>
        </div>`
          )
          .join("")}
      </div>

      <div class="concept-cards">
        <div class="card" data-reveal>${t.concept.experts}</div>
        <div class="card" data-reveal style="--d:.12s">${t.concept.access}</div>
      </div>
    </div>
  </section>

  ${marquee()}

  <section class="campaign">
    <div class="wrap">
      <div class="split">
        <div>
          <span class="kicker">PR & Media</span>
          <h2 class="heading" data-reveal>${t.campaign.title}</h2>
          <p class="lead" data-reveal style="--d:.1s">${t.campaign.lead}</p>
        </div>
        <ul class="chan">
          ${t.campaign.items.map((i, n) => `<li data-reveal style="--d:${n * 0.07}s">${i}</li>`).join("")}
        </ul>
      </div>
      <p class="goal" data-reveal><b>${t.campaign.goal}</b></p>
    </div>
  </section>

  <section class="gala dark">
    <div class="wrap gala-grid">
      <div>
        <span class="kicker">Gala</span>
        <h2 class="heading" data-reveal>${t.gala.title}</h2>
        <p class="lead" data-reveal style="--d:.08s">${t.gala.lead}</p>
        <p style="margin-top:26px" data-reveal>${t.gala.invitedTitle}</p>
        <ul class="inv">
          ${t.gala.invited.map((i, n) => `<li data-reveal style="--d:${n * 0.07}s">${i}</li>`).join("")}
        </ul>
        <p class="outro" data-reveal>${t.gala.outro}</p>
      </div>
      <figure data-reveal="right"><img src="/img/gala.jpg" alt="Gala dinner" loading="lazy" /></figure>
    </div>
  </section>

  <section class="unique">
    <div class="wrap">
      <span class="kicker">${t.unique.kicker}</span>
      <h2 class="heading" data-reveal>${t.unique.title}</h2>
      <div class="u-grid">
        <div>
          <ol class="pillars">
            ${t.unique.pillars.map((p, i) => `<li data-reveal style="--d:${i * 0.09}s">${p}</li>`).join("")}
          </ol>
          <p class="u-text" data-reveal>${t.unique.text}</p>
        </div>
        <figure class="u-photo frame" data-reveal="right">
          <img src="/img/atrium-1.jpg" alt="Tbilisi" loading="lazy" />
        </figure>
      </div>
    </div>
  </section>

  <section class="modern">
    <div class="wrap">
      <span class="kicker">01 — ${lang === "ka" ? "თანამედროვე ევროპული ქალაქი" : "A modern European city"}</span>
      <h2 class="heading" data-reveal>${t.modern.title}</h2>
      <div class="display" data-reveal>${t.modern.display}</div>
      <img class="pano" src="/img/modern-2.jpg" alt="Modern Tbilisi" loading="lazy" data-reveal />
      <div class="cols">
        <p data-reveal>${t.modern.text1}</p>
        <p data-reveal style="--d:.12s">${t.modern.text2}</p>
      </div>
    </div>
  </section>

  <section class="tourist">
    <div class="wrap">
      <span class="kicker">02 — ${lang === "ka" ? "ტურიზმი" : "Tourism"}</span>
      <h2 class="heading" data-reveal>${t.tourist.title}</h2>
      <p class="lead" data-reveal style="--d:.1s">${t.tourist.intro}</p>

      <div class="mosaic">
        <figure class="tall" data-reveal><img src="/img/kartlis-deda.jpg" alt="Kartlis Deda" loading="lazy" /></figure>
        <figure class="sm" data-reveal style="--d:.1s"><img src="/img/oldtown.jpg" alt="Old Tbilisi" loading="lazy" /></figure>
        <figure class="sm" data-reveal style="--d:.18s"><img src="/img/frida.jpg" alt="Tbilisi street art" loading="lazy" /></figure>
      </div>

      <div class="t-grid">
        <div class="showcase" data-reveal="left">
          <p class="sl">${t.tourist.showcaseLabel}</p>
          ${list(t.tourist.showcase, "")}
          <p class="expo"><b>${t.tourist.expo}</b></p>
        </div>
        <div class="quote" data-reveal="right">${t.tourist.strategic}</div>
      </div>

      <div class="edu">
        <h3 class="heading" data-reveal>${t.tourist.eduTitle}</h3>
        <p data-reveal>${t.tourist.edu1}</p>
        <p data-reveal style="--d:.12s">${t.tourist.edu2}</p>
      </div>
    </div>
  </section>

  <section class="film dark">
    <div class="wrap">
      <span class="kicker">03 — ${lang === "ka" ? "კინო" : "Film"}</span>
      <h2 class="heading" data-reveal>${t.film.title}</h2>
      <div class="f-grid">
        <figure class="tower" data-reveal="left"><img src="/img/tower.jpg" alt="Tbilisi architecture" loading="lazy" /></figure>
        <div class="txts">
          <p data-reveal>${t.film.text1}</p>
          <p data-reveal style="--d:.12s">${t.film.text2}</p>
        </div>
      </div>
      <figure class="wide" data-reveal><img src="/img/film-car.jpg" alt="Filming in Tbilisi — Freedom Square" loading="lazy" /></figure>
    </div>
  </section>

  <section class="gastro">
    <div class="wrap g-grid">
      <div>
        <span class="kicker">04 — ${lang === "ka" ? "გასტრონომია" : "Gastronomy"}</span>
        <h2 class="heading" data-reveal>${t.gastro.title}</h2>
        <p data-reveal style="--d:.08s">${t.gastro.text1}</p>
        <p data-reveal style="--d:.16s">${t.gastro.text2}</p>
      </div>
      <figure class="frame" data-reveal="right"><img src="/img/food.jpg" alt="Georgian cuisine" loading="lazy" /></figure>
    </div>
  </section>

  <section class="forum">
    <div class="wrap">
      <img class="wordmark" src="/img/logo-stack-black.png" alt="Welcome Tbilisi" data-reveal />
      <div class="sub" data-reveal style="--d:.08s">${t.forum.subtitle}</div>
      <p class="unites" data-reveal style="--d:.14s">${t.forum.unites}</p>
      <p class="goal" data-reveal style="--d:.2s"><b>${t.forum.goal}</b></p>
    </div>
  </section>

  <section class="partners">
    <img class="bg" src="/img/partners.jpg" alt="" loading="lazy" />
    <div class="overlay">
      <div class="card" data-reveal="right">
        <h2 class="heading">${t.partners.title}</h2>
        <p>${t.partners.lead}</p>
        ${list(t.partners.list, "")}
        <p class="outro">${t.partners.outro}</p>
      </div>
    </div>
  </section>

  <section class="economy">
    <div class="wrap e-grid">
      <figure class="frame" data-reveal="left"><img src="/img/tourists.jpg" alt="Tourists in Tbilisi" loading="lazy" /></figure>
      <div>
        <span class="kicker">${lang === "ka" ? "ეფექტი" : "Impact"}</span>
        <h2 class="heading" data-reveal>${t.economy.title}</h2>
        <p data-reveal style="--d:.08s">${t.economy.lead}</p>
        <ul class="list-plus" style="margin-top:18px">
          ${t.economy.list.map((i, n) => `<li data-reveal style="--d:${0.1 + n * 0.07}s">${i}</li>`).join("")}
        </ul>
      </div>
    </div>
  </section>

  <section class="urban">
    <div class="wrap">
      <span class="kicker">${lang === "ka" ? "განვითარება" : "Development"}</span>
      <h2 class="heading" data-reveal>${t.urban.title}</h2>
      <p class="lead" data-reveal style="--d:.1s">${t.urban.lead}</p>
      <div class="renders">
        <figure class="span2" data-reveal><img src="/img/dev-4.jpg" alt="" loading="lazy" /></figure>
        <figure data-reveal style="--d:.1s"><img src="/img/dev-1.jpg" alt="" loading="lazy" /></figure>
        <figure data-reveal style="--d:.14s"><img src="/img/dev-2.jpg" alt="" loading="lazy" /></figure>
        <figure data-reveal style="--d:.2s"><img src="/img/dev-3.jpg" alt="" loading="lazy" /></figure>
        <figure data-reveal style="--d:.26s"><img src="/img/modern-1.jpg" alt="" loading="lazy" /></figure>
      </div>
      <div class="u2">
        <p data-reveal><b>${t.urban.listLead}</b></p>
        <ul class="list-plus">
          ${t.urban.list.map((i, n) => `<li data-reveal style="--d:${n * 0.07}s">${i}</li>`).join("")}
        </ul>
      </div>
    </div>
  </section>

  <section class="business">
    <div class="wrap split">
      <div>
        <span class="kicker">B2B</span>
        <h2 class="heading" data-reveal>${t.business.title}</h2>
        <p data-reveal style="--d:.1s">${t.business.lead}</p>
      </div>
      <ul class="list-plus">
        ${t.business.list.map((i, n) => `<li data-reveal style="--d:${n * 0.07}s">${i}</li>`).join("")}
      </ul>
    </div>
  </section>

  <section class="pr">
    <div class="wrap">
      <span class="kicker">${lang === "ka" ? "კომუნიკაცია" : "Communication"}</span>
      <h2 class="heading" data-reveal>${t.pr.title}</h2>
      <div class="cols">
        <div class="col" data-reveal>
          <h3 class="heading">${t.pr.prTitle}</h3>
          ${list(t.pr.prList, "chan")}
        </div>
        <div class="col" data-reveal style="--d:.12s">
          <h3 class="heading">${t.pr.emailTitle}</h3>
          ${list(t.pr.emailList, "chan")}
        </div>
      </div>
    </div>
  </section>

  <section class="speakers-sec">
    <div class="wrap">
      <span class="kicker">Speakers</span>
      <h2 class="heading" data-reveal>${t.speakers.title}</h2>
      <div class="speakers-grid">
        ${speakers
          .map(
            (s, i) => `
        <div class="spk" data-reveal style="--d:${(i % 5) * 0.08}s">
          <img src="/${s.img}" alt="${s.name}" loading="lazy" />
          <div class="nm">${s.name}</div>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>

  ${marquee()}

  <section class="finale">
    <img class="watermark" src="/img/logo-figure.png" alt="" aria-hidden="true" />
    <div class="wrap">
      <img class="logo" src="/img/logo-h-black.png" alt="Welcome Tbilisi" data-reveal />
      <h2 class="heading thanks" data-reveal style="--d:.1s">${t.finale.thanks}</h2>
      <p class="dates" data-reveal style="--d:.18s">${t.finale.dates}</p>
    </div>
    <footer class="footer">
      <span>WELCOME TBILISI © 2026</span>
      <span>${t.hero.dates} · ${t.hero.venue}</span>
    </footer>
  </section>
  `;

  bind();
}

/* ---------- behaviours ---------- */

function bind() {
  // language toggle
  document.getElementById("langBtn")!.addEventListener("click", () => {
    lang = lang === "ka" ? "en" : "ka";
    localStorage.setItem("wt-lang", lang);
    app.classList.add("swap");
    setTimeout(() => {
      const y = window.scrollY;
      render();
      window.scrollTo(0, y);
      requestAnimationFrame(() => app.classList.remove("swap"));
    }, 280);
  });

  // header state
  const head = document.getElementById("siteHead")!;
  const onScroll = () => head.classList.toggle("solid", window.scrollY > window.innerHeight * 0.72);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

  // animated counters
  const co = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        co.unobserve(e.target);
        const el = e.target as HTMLElement;
        const target = Number(el.dataset.count);
        const dur = 1600;
        const t0 = performance.now();
        const fmt = (n: number) =>
          target >= 1000 ? Math.round(n).toLocaleString("en").replace(/,/g, " ") : String(Math.round(n));
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(target * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => co.observe(el));
}

render();
