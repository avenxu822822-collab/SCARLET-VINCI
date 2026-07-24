const SUPABASE_URL = "https://vfttvexwainoespbpjen.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Ou0QR-P4aQ_5Qsl0MFAgeA_L-tLHy4I";

const CATALOG_ASSET_DIR = "assets/products/catalog-20260723";

const products = [
  { code:"AF-05", category:"perfume", name:"SOLO ELLA", cn:"独奏宣言", size:"50ML", price:"RMB 98", family:"FLORAL ORIENTAL / 东方花香调", top:"桃子、苹果、梨、苦橙", heart:"茉莉、茶叶、玫瑰、橙花、紫罗兰", base:"木质、雪松、琥珀" },
  { code:"AF-01", category:"perfume", name:"TORINO 21", cn:"都灵21", size:"50ML", price:"RMB 79.8", family:"GREEN AROMATIC / 绿意芳香调", top:"薄荷、柠檬、佛手柑、罗勒", heart:"黑加仑、薰衣草、茉莉、迷迭香", base:"柠檬马鞭草、麝香" },
  { code:"AF-06", category:"perfume", name:"MATCHA", cn:"抹茶", size:"50ML", price:"RMB 98", family:"WOODY GREEN / 木质绿意调", top:"无花果、抹茶", heart:"苦橙、香根草", base:"雪松" },
  { code:"AF-04", category:"perfume", name:"GOOD GIRL GONE BAD", cn:"狂野淑女", size:"50ML", price:"RMB 98", family:"WHITE FLORAL / 白花香调", top:"桂花、茉莉、玫瑰", heart:"晚香玉、水仙花", base:"雪松、琥珀" },
  { code:"AF-02", category:"perfume", name:"OMBRÉ LEATHER", cn:"光影皮革", size:"50ML", price:"RMB 98", family:"LEATHER / 皮革调", top:"小豆蔻", heart:"皮革、茉莉", base:"广藿香、琥珀、橡木苔" },
  { code:"AF-07", category:"perfume", name:"ULTIMATE BERGAMOT", cn:"极致佛手柑", size:"50ML", price:"RMB 258", family:"CITRUS MUSK / 柑橘调", top:"糖果、香柠檬", heart:"麝香", base:"龙涎香" },
  { code:"AF-08", category:"perfume", name:"ULTIMATE MUSK", cn:"极致麝香", size:"50ML", price:"RMB 258", family:"MUSK AMBER / 东方调", top:"麝香", heart:"黄葵", base:"龙涎香" },
  { code:"AF-10", category:"perfume", name:"VINTAGE YLANG", cn:"依兰", size:"50ML", price:"RMB 128", family:"MOSSY FLORAL / 花香调西普", top:"依兰", heart:"广藿香、橡木苔、栀子花", base:"香根草、安息香脂、檀香木" },
  { code:"CD-01", category:"candle", name:"OUD AND BERGAMOT", cn:"乌木佛手柑", size:"170G", price:"RMB 98", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"佛手柑、香柠檬", heart:"沉香", base:"雪松、干佛手柑" },
  { code:"CD-02", category:"candle", name:"CUCUMBER AND LILY", cn:"青瓜与白莲", size:"170G", price:"RMB 98", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"黄瓜、仙人掌、绿叶、柠檬、生姜、莲花", heart:"小苍兰、栀子花、茉莉、黄兰、木兰、椴树花", base:"檀香木、麝香" },
  { code:"CD-03", category:"candle", name:"PREMIUM YUZU", cn:"日本柚子", size:"170G", price:"RMB 98", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"日本柚子、苦橙、薄荷、金橘", heart:"柠檬马鞭草、竹子、雪松", base:"橙花油、麝香" },
  { code:"CD-04", category:"candle", name:"IRIS SANDALWOOD", cn:"鸢尾檀香", size:"170G", price:"RMB 128", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"海盐、蜜瓜", heart:"紫罗兰、无花果、鸢尾花", base:"檀香、琥珀、麝香" },
  { code:"CD-05", category:"candle", name:"RICH AMERICANO", cn:"浓情美式", size:"170G", price:"RMB 98", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"咖啡", heart:"糖", base:"奶油、咖啡" },
  { code:"CD-07", category:"candle", name:"BLUE COASTLINE", cn:"蓝色海岸线", size:"170G", price:"RMB 128", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"海洋、蜜瓜、苹果", heart:"铃兰、茉莉", base:"檀香、麝香" },
  { code:"CD-06", category:"candle", name:"BRILLIANT CRYSTAL", cn:"璀璨水晶", size:"170G", price:"RMB 128", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"海洋、臭氧、苹果", heart:"铃兰、小苍兰", base:"广藿香、香草、雪松" },
  { code:"CD-09", category:"candle", name:"CHRISTMAS HEARTH", cn:"圣诞壁炉", size:"170G", price:"RMB 128", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"肉桂、生姜、橙皮", heart:"丁香、柏树", base:"松树、冷杉" },
  { code:"CD-10", category:"candle", name:"WHITE TEA AND HINOKI", cn:"白茶扁柏木", size:"170G", price:"RMB 128", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"松树、臭氧、白茶", heart:"扁柏、松树", base:"雪松、琥珀、杜松" },
  { code:"CD-11", category:"candle", name:"WATER LILY AND COTTON", cn:"睡莲与棉花", size:"170G", price:"RMB 128", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"紫罗兰、海洋", heart:"含羞草、百合、豆蔻、棉花", base:"零陵香豆、棉花糖" },
  { code:"CD-12", category:"candle", name:"MINT AND EUCALYPTUS", cn:"薄荷尤加利", size:"170G", price:"RMB 128", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"薄荷、尤加利", heart:"丁香、雪松", base:"广藿香、香草、粉感" },
  { code:"CD-13", category:"candle", name:"OAKMOSS AND AMBER", cn:"苔藓与琥珀", size:"170G", price:"RMB 128", family:"HOME FRAGRANCE / SCENTED CANDLE", top:"鼠尾草、柑橘、葡萄柚", heart:"薰衣草", base:"琥珀、零陵香豆、橡木苔" },
  { code:"CD-08", category:"candle", name:"SCENTED CANDLE GIFT SET", cn:"香氛蜡烛礼盒", size:"GIFT SET", price:"预约咨询", family:"HOME COLLECTION / GIFT SET", notesPending:true }
].map(product => ({ ...product, image:`${CATALOG_ASSET_DIR}/${product.code}.webp` }));

const heroSlides = [
  { image:"assets/hero/ombre-portrait-01.webp", eyebrow:"ATELIER SERIES / 01", title:"OMBRÉ<br><em>LEATHER</em>", copy:"光影皮革。让柔软与锋利停留在同一片皮肤上。", link:"#/product/AF-02" },
  { image:"assets/hero/musk-portrait.webp", eyebrow:"MUSK STUDY / 02", title:"ULTIMATE<br><em>MUSK</em>", copy:"贴近身体的气味，不需要大声解释。", link:"#/product/AF-08" },
  { image:"assets/hero/ombre-portrait-03.webp", eyebrow:"SCARLET VINCI® / 04", title:"OBJECTS<br><em>FOR SCENT</em>", copy:"艺术香水与空间香氛，接受预约订购。", link:"#/shop/all" }
];

const app = document.querySelector("#app");
const topbar = document.querySelector("#topbar");
const siteMusic = document.querySelector("#siteMusic");
const entryGate = document.querySelector("#entryGate");
const entryButton = document.querySelector("#entryButton");
const musicToggle = document.querySelector("#musicToggle");
const drawer = document.querySelector("#drawer");
const menuButton = document.querySelector("#menuButton");
const searchOverlay = document.querySelector("#searchOverlay");
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");
const reservationDialog = document.querySelector("#reservationDialog");
const reservationForm = document.querySelector("#reservationForm");
const formStatus = document.querySelector("#formStatus");
let activeProduct = null;
let heroTimer = null;
let heroIndex = 0;
let entryDismissed = false;

function esc(value) {
  return String(value).replace(/[&<>"]/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[character]);
}

function syncMusicToggle() {
  if (!musicToggle || !siteMusic) return;
  const playing = !siteMusic.paused;
  musicToggle.setAttribute("aria-pressed", String(playing));
  musicToggle.setAttribute("aria-label", playing ? "暂停背景音乐" : "播放背景音乐");
  musicToggle.textContent = playing ? "♪" : "×";
}

async function playSiteMusic({ silent = false } = {}) {
  if (!siteMusic) return false;
  siteMusic.volume = 0.6;
  try {
    await siteMusic.play();
    document.body.classList.add("music-ready");
    syncMusicToggle();
    return true;
  } catch (error) {
    if (!silent) showToast("点击进入后即可播放背景音乐");
    syncMusicToggle();
    return false;
  }
}

function hideEntryGate() {
  if (!entryGate || entryDismissed) return;
  entryDismissed = true;
  entryGate.classList.add("is-entering");
  document.body.classList.remove("entry-locked");
  setTimeout(() => { entryGate.hidden = true; }, 820);
}

function initMusicExperience() {
  if (!entryGate || !entryButton || !siteMusic || !musicToggle) return;
  document.body.classList.add("entry-locked");
  syncMusicToggle();
  entryButton.addEventListener("click", async () => {
    entryButton.disabled = true;
    const played = await playSiteMusic();
    if (played) hideEntryGate();
    else entryButton.disabled = false;
  });
  musicToggle.addEventListener("click", async () => {
    if (siteMusic.paused) await playSiteMusic();
    else {
      siteMusic.pause();
      syncMusicToggle();
    }
  });
  siteMusic.addEventListener("play", syncMusicToggle);
  siteMusic.addEventListener("pause", syncMusicToggle);
  setTimeout(async () => {
    const played = await playSiteMusic({ silent: true });
    if (played) hideEntryGate();
  }, 360);
}

function productCard(product) {
  return `<a class="product-card" href="#/product/${product.code}">
    <figure><img src="${product.image}" alt="${esc(product.name)} ${esc(product.cn)}" loading="lazy" decoding="async"></figure>
    <div class="product-card-info">
      <span class="product-card-code">${product.code}</span>
      <h3>${esc(product.name)}</h3>
      <p class="cn">${esc(product.cn)}</p>
      <div class="meta"><span>${product.size}</span><span>${product.price}</span></div>
    </div>
  </a>`;
}

function setNav(active) {
  document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("active", link.dataset.nav === active));
}

function renderHome() {
  setNav("home");
  heroIndex = 0;
  app.innerHTML = `<div class="page-enter">
    <section class="hero" id="hero">
      <div class="hero-track" id="heroTrack">
        ${heroSlides.map((slide,index) => `<article class="hero-slide${index === 0 ? " active" : ""}" aria-hidden="${index === 0 ? "false" : "true"}">
          <img src="${slide.image}" alt="" decoding="async" ${slide === heroSlides[0] ? "fetchpriority=\"high\"" : "loading=\"lazy\""}>
          <div class="hero-copy">
            <p class="eyebrow">${slide.eyebrow}</p>
            <h1>${slide.title}</h1>
            <p>${slide.copy}</p>
            <a class="hero-link" href="${slide.link}">EXPLORE / 探索</a>
          </div>
        </article>`).join("")}
      </div>
      <div class="hero-dots" id="heroDots">${heroSlides.map((_,index) => `<button class="hero-dot${index === 0 ? " active" : ""}" data-slide="${index}" aria-label="查看第 ${index + 1} 张"></button>`).join("")}</div>
    </section>

    <section class="intro-block">
      <p class="eyebrow">SCARLET VINCI® / SHANGHAI</p>
      <h2>ESSENCE<br>IS A <i>LANGUAGE.</i></h2>
      <p>气味、设计与沉浸式叙事。由人物、物件与空间共同完成的香气工作室。</p>
    </section>

    <section class="category-cards" aria-label="香气分类">
      <a class="category-card" href="#/shop/perfume">
        <img src="assets/hero/ombre-portrait-02.webp" alt="SCARLET VINCI 艺术香水" loading="lazy" decoding="async">
        <div class="category-card-copy"><div><p class="eyebrow">01 / COLLECTION</p><h3>ART FRAGRANCE<small>艺术香水</small></h3></div><span class="category-arrow">↗</span></div>
      </a>
      <a class="category-card" href="#/shop/candle">
        <img src="assets/products/catalog-20260723/CD-01.webp" alt="SCARLET VINCI 香氛蜡烛" loading="lazy" decoding="async">
        <div class="category-card-copy"><div><p class="eyebrow">02 / HOME</p><h3>SCENTED CANDLE<small>空间香氛</small></h3></div><span class="category-arrow">↗</span></div>
      </a>
    </section>

    <section class="featured">
      <div class="section-head"><div><p class="eyebrow">CURATED / 精选</p><h2>SCENT EDIT</h2></div><a class="text-link" href="#/shop/all">VIEW ALL ↗</a></div>
      <div class="product-rail">${["AF-02","AF-08","CD-01","CD-09"].map(code => products.find(product => product.code === code)).map(productCard).join("")}</div>
    </section>

    <section class="studio-banner">
      <img src="assets/editorial/studio.webp" alt="SCARLET VINCI 气味工作室" loading="lazy" decoding="async">
      <div class="studio-banner-copy"><p class="eyebrow">THE STUDIO / 上海</p><h2>WHERE SCENT<br>TAKES FORM.</h2><p>从试香纸、材料与记录开始，让气味逐渐成为可以被携带的对象。</p><a class="hero-link" href="#/maker">MEET THE MAKER / 主理人</a></div>
    </section>
  </div>`;
  wireHero();
}

function wireHero() {
  const track = document.querySelector("#heroTrack");
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".hero-dot")];
  const go = index => {
    heroIndex = (index + heroSlides.length) % heroSlides.length;
    slides.forEach((slide,i) => {
      const active = i === heroIndex;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot,i) => dot.classList.toggle("active", i === heroIndex));
  };
  const restart = () => {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => go(heroIndex + 1), 4500);
  };
  dots.forEach(dot => dot.addEventListener("click", () => { go(Number(dot.dataset.slide)); restart(); }));
  let startX = 0;
  track.addEventListener("touchstart", event => { startX = event.touches[0].clientX; }, {passive:true});
  track.addEventListener("touchend", event => {
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 45) { go(heroIndex + (delta < 0 ? 1 : -1)); restart(); }
  }, {passive:true});
  restart();
}

function renderShop(category = "all") {
  setNav(category === "all" ? "catalogue" : "shop");
  const perfumeCount = products.filter(product => product.category === "perfume").length;
  const candleCount = products.filter(product => product.category === "candle").length;
  const selected = category === "perfume" ? products.filter(p => p.category === "perfume") : category === "candle" ? products.filter(p => p.category === "candle") : products;
  const perfumeGrid = products.filter(p => p.category === "perfume").map(productCard).join("");
  const candleGrid = products.filter(p => p.category === "candle").map(productCard).join("");
  const catalogue = category === "all"
    ? `<section class="product-grid perfume-grid" aria-label="艺术香水目录">${perfumeGrid}</section>
       <section class="collection-break"><h2>SCENTED<br>CANDLE</h2><p>为空间留下可被辨认的气味。${candleCount}款香氛蜡烛与礼盒，接受预约订购。</p></section>
       <section class="product-grid candle-grid" aria-label="香氛蜡烛目录">${candleGrid}</section>`
    : `<section class="product-grid ${category}-grid" aria-label="产品目录">${selected.map(productCard).join("")}</section>`;
  app.innerHTML = `<div class="page-enter">
    <header class="catalogue-hero"><p class="eyebrow">OBJECTS / 2026</p><h1>SCENT<br><i>CATALOGUE</i></h1><p>浏览艺术香水与香氛蜡烛。点击任一产品查看香调档案，并提交预约订购。</p></header>
    <div class="shop-campaign"><img src="assets/hero/ombre-portrait-03.webp" alt="SCARLET VINCI 香气广告" decoding="async" fetchpriority="high"><span>SCENT IN MOTION / CAMPAIGN 01</span></div>
    <nav class="tabs" aria-label="产品分类">
      <a href="#/shop/all" class="${category === "all" ? "active" : ""}">ALL / ${products.length}</a>
      <a href="#/shop/perfume" class="${category === "perfume" ? "active" : ""}">ART FRAGRANCE / ${String(perfumeCount).padStart(2,"0")}</a>
      <a href="#/shop/candle" class="${category === "candle" ? "active" : ""}">CANDLE / ${String(candleCount).padStart(2,"0")}</a>
    </nav>
    ${catalogue}
  </div>`;
}

function renderProduct(code) {
  const product = products.find(item => item.code === code) || products[0];
  setNav("shop");
  const storyImage = product.code === "AF-02" ? "assets/hero/ombre-portrait-02.webp" : product.code === "AF-08" ? "assets/hero/musk-portrait.webp" : "assets/editorial/studio.webp";
  const notesMarkup = product.notesPending
    ? `<div class="notes"><div class="note-row"><b>SCENT<br>香调</b><span>详细香调资料待补充，请预约咨询。</span></div></div>`
    : `<div class="notes" aria-label="香调信息">
        <div class="note-row"><b>TOP<br>前调</b><span>${esc(product.top)}</span></div>
        <div class="note-row"><b>HEART<br>中调</b><span>${esc(product.heart)}</span></div>
        <div class="note-row"><b>BASE<br>后调</b><span>${esc(product.base)}</span></div>
      </div>`;
  app.innerHTML = `<article class="detail-page page-enter">
    <div class="detail-image"><img src="${product.image}" alt="${esc(product.name)} ${esc(product.cn)}" decoding="async" fetchpriority="high"><span class="detail-counter">01 / 01</span></div>
    <div class="detail-body">
      <p class="eyebrow detail-code">${product.code} / ${product.category === "perfume" ? "ART FRAGRANCE" : "SCENTED CANDLE"}</p>
      <h1>${esc(product.name)}</h1><p class="detail-cn">${esc(product.cn)}</p>
      <div class="detail-meta"><span>${product.size}</span><span>${product.price}</span></div>
      <p class="family">${esc(product.family)}</p>
      ${notesMarkup}
    </div>
    <div class="reserve-bar"><div><small>PRIVATE ORDER</small><strong>${product.price}</strong></div><button id="reserveButton" type="button">预约此款 ↗</button></div>
    <section class="detail-story"><img src="${storyImage}" alt="" loading="lazy" decoding="async"><div class="detail-story-copy"><p class="eyebrow">SCENT DOSSIER</p><h2>AN OBJECT<br>WITH MEMORY.</h2><p>气味不是对材料的罗列，而是光线、皮肤、空间与记忆在同一时刻留下的轮廓。</p></div></section>
  </article>`;
  document.querySelector("#reserveButton").addEventListener("click", () => openReservation(product));
}

function renderMaker() {
  setNav("maker");
  app.innerHTML = `<article class="maker-page page-enter">
    <header class="maker-title"><p class="eyebrow">THE MAKER / 01</p><h1>AVEN<br><i>XU</i></h1><p>SCARLET VINCI 主理人 / 调香与气味叙事创作者</p></header>
    <img class="maker-portrait" src="assets/editorial/maker.webp" alt="SCARLET VINCI 主理人 Aven Xu 在工作室创作" decoding="async">
    <section class="maker-copy">
      <p class="eyebrow">STUDIO PROFILE</p><h2>FRAGRANCE, DESIGN<br>& IMMERSIVE STORYTELLING.</h2>
      <p>SCARLET VINCI 是一家位于上海的香气、设计与沉浸式叙事工作室。我们通过香水设计、感官对象、影像与空间叙事，让气味成为能够被辨认、被记住的语言。</p>
      <div class="maker-data">
        <div class="maker-row"><b>CORE</b><span>香水设计、气味工作室、香氛产品。</span></div>
        <div class="maker-row"><b>METHOD</b><span>从人物、材料、物件与空间出发，构建完整的气味体验。</span></div>
        <div class="maker-row"><b>LOCATION</b><span>Shanghai / 上海</span></div>
      </div>
    </section>
    <section class="studio-banner"><img src="assets/editorial/studio.webp" alt="SCARLET VINCI 工作室" loading="lazy" decoding="async"><div class="studio-banner-copy"><p class="eyebrow">ESSENCE LABORATORY</p><h2>THE WORKSPACE.</h2><p>一间为气味、物件与故事持续工作的空间。</p></div></section>
    <section class="contact-panel"><div><p class="eyebrow">PRIVATE COMMISSION</p><h2>订购、定制<br>与合作</h2></div><div class="qr-wrap"><img src="assets/editorial/wechat-qr.png" alt="主理人微信二维码"><p>扫描二维码联系主理人。<br>用于香型定制、合作与产品咨询。</p></div></section>
  </article>`;
}

function openReservation(product) {
  activeProduct = product;
  reservationForm.reset();
  formStatus.textContent = "";
  formStatus.className = "form-status";
  document.querySelector("#reservationProduct").textContent = `${product.code} / ${product.name} / ${product.cn} / ${product.size} / ${product.price}`;
  reservationDialog.showModal();
}

function openDrawer() {
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden","false");
  menuButton.setAttribute("aria-expanded","true");
  document.body.classList.add("locked");
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden","true");
  menuButton.setAttribute("aria-expanded","false");
  document.body.classList.remove("locked");
}
function openSearch() {
  closeDrawer();
  searchOverlay.classList.add("open");
  searchOverlay.setAttribute("aria-hidden","false");
  document.body.classList.add("locked");
  renderSearch("");
  setTimeout(() => searchInput.focus(), 220);
}
function closeSearch() {
  searchOverlay.classList.remove("open");
  searchOverlay.setAttribute("aria-hidden","true");
  document.body.classList.remove("locked");
  searchInput.value = "";
}

function renderSearch(query) {
  const normalized = query.trim().toLocaleLowerCase();
  const matched = normalized ? products.filter(product => [product.code,product.name,product.cn,product.family,product.top,product.heart,product.base,product.category === "candle" ? "蜡烛" : "香水"].join(" ").toLocaleLowerCase().includes(normalized)) : products.slice(0,6);
  searchResults.innerHTML = matched.length ? matched.map(productCard).join("") : `<p class="search-empty">暂未找到对应香气</p>`;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function updateHeader() {
  const onHome = (location.hash || "#/home").startsWith("#/home");
  topbar.classList.toggle("light", !onHome || window.scrollY > Math.max(80, window.innerHeight * .72));
}

function router() {
  clearInterval(heroTimer);
  closeDrawer();
  closeSearch();
  const parts = (location.hash || "#/home").replace(/^#\//,"").split("/");
  if (parts[0] === "shop") renderShop(parts[1] || "all");
  else if (parts[0] === "product") renderProduct(parts[1]);
  else if (parts[0] === "maker") renderMaker();
  else renderHome();
  window.scrollTo({top:0,behavior:"instant"});
  updateHeader();
  requestAnimationFrame(() => app.focus({preventScroll:true}));
}

menuButton.addEventListener("click", openDrawer);
document.querySelector("#drawerClose").addEventListener("click", closeDrawer);
drawer.addEventListener("click", event => { if (event.target === drawer) closeDrawer(); });
document.querySelectorAll(".drawer-links a").forEach(link => link.addEventListener("click", closeDrawer));
document.querySelector("#drawerInquiry").addEventListener("click", () => { closeDrawer(); location.hash = "#/maker"; setTimeout(() => showToast("订购与合作联系方式在页面底部"),250); });
document.querySelector("#searchButton").addEventListener("click", openSearch);
document.querySelector("#searchBack").addEventListener("click", closeSearch);
searchInput.addEventListener("input", () => renderSearch(searchInput.value));
document.querySelector("#searchChips").innerHTML = ["光影皮革","抹茶","麝香","圣诞壁炉","蜡烛"].map(label => `<button type="button">${label}</button>`).join("");
document.querySelectorAll("#searchChips button").forEach(button => button.addEventListener("click", () => { searchInput.value = button.textContent; renderSearch(button.textContent); }));
searchResults.addEventListener("click", event => { if (event.target.closest("a")) closeSearch(); });
document.querySelector("#reservationClose").addEventListener("click", () => reservationDialog.close());
reservationDialog.addEventListener("click", event => { if (event.target === reservationDialog) reservationDialog.close(); });
reservationForm.addEventListener("submit", async event => {
  event.preventDefault();
  if (!activeProduct) return;
  const data = new FormData(reservationForm);
  if (data.get("website")) { reservationDialog.close(); return; }
  const submit = reservationForm.querySelector("button[type=submit]");
  submit.disabled = true;
  formStatus.className = "form-status";
  formStatus.textContent = "正在提交预约…";
  const body = {
    product_code:activeProduct.code,
    product_name:activeProduct.name,
    product_size:activeProduct.size,
    product_price:activeProduct.price,
    customer_name:String(data.get("customer_name")).trim(),
    phone:String(data.get("phone")).trim(),
    wechat_id:String(data.get("wechat_id")).trim() || null,
    shipping_address:String(data.get("shipping_address")).trim(),
    note:String(data.get("note")).trim() || null
  };
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/reservations`, {
      method:"POST",
      headers:{apikey:SUPABASE_PUBLISHABLE_KEY,Authorization:`Bearer ${SUPABASE_PUBLISHABLE_KEY}`,"Content-Type":"application/json",Prefer:"return=minimal"},
      body:JSON.stringify(body)
    });
    if (!response.ok) throw new Error(`Reservation failed: ${response.status}`);
    formStatus.className = "form-status success";
    formStatus.textContent = "预约已提交。工作人员会联系你确认库存、配送与付款方式。";
    reservationForm.reset();
  } catch (error) {
    console.error(error);
    formStatus.textContent = "暂时未能提交，请稍后重试或通过微信联系 SCARLET VINCI。";
  } finally {
    submit.disabled = false;
  }
});

window.addEventListener("hashchange", router);
window.addEventListener("scroll", updateHeader, {passive:true});
window.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (reservationDialog.open) reservationDialog.close();
    closeDrawer();
    closeSearch();
  }
});
router();
initMusicExperience();
