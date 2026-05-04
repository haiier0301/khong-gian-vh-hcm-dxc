const sources = [
  {
    name: "hochiminh.vn",
    type: "Tin tức - Tư liệu chính thống",
    description:
      "Kho bài viết, ảnh, audio, video và chuyên mục học tập, làm theo Bác.",
    url: "https://hochiminh.vn/",
    action: "Truy cập nguồn",
    tags: ["tin tức", "tư liệu", "audio", "video", "học tập"],
  },
  {
    name: "hochiminh.vn/bao-tang-3d",
    type: "Không gian 3D",
    description:
      "Danh sách bảo tàng và khu di tích 3D để tham quan trực tuyến theo địa điểm.",
    url: "https://hochiminh.vn/bao-tang-3d",
    action: "Tham quan 3D",
    tags: ["3D", "bảo tàng", "di tích"],
  },
  {
    name: "stbook.vn",
    type: "Sách điện tử",
    description:
      "Nền tảng sách điện tử của NXB Chính trị quốc gia Sự thật, phù hợp điều hướng đọc sách chính thống.",
    url: "https://stbook.vn/",
    action: "Mở stbook",
    tags: ["ebook", "sách", "NXB"],
  },
  {
    name: "thuviencoso.vn",
    type: "Thư viện sách cơ sở",
    description:
      "Danh mục sách chủ đề Chủ tịch Hồ Chí Minh, có liên kết đến trang chi tiết từng sách.",
    url: "https://thuviencoso.vn/BookStore.aspx?colid=26",
    action: "Mở danh mục",
    tags: ["thư viện", "sách", "chủ tịch Hồ Chí Minh"],
  },
  {
    name: "sachweb.com",
    type: "Sách trình bày online",
    description:
      "Nguồn sách dạng flipbook bổ sung cho chuyên đề học tập và truyền thông.",
    url: "https://sachweb.com/publish/nhungtamguongbinhdi_t5_id3430/nhungtamguongbinhdi_t5_id3430.aspx",
    action: "Mở sách web",
    tags: ["flipbook", "chuyên đề"],
  },
];

const documentsData = [
  {
    title: "Làm theo gương Bác Hồ",
    category: "Tin tức",
    source: "hochiminh.vn",
    date: "Cập nhật gần đây",
    url: "https://hochiminh.vn/hoc-va-lam-theo-bac/lam-theo-guong-bac-ho.html",
  },
  {
    title: "Tư liệu video: Việt Nam Hồ Chí Minh giữ trọn một con đường",
    category: "Video",
    source: "hochiminh.vn",
    date: "Tư liệu",
    url: "https://hochiminh.vn/tu-lieu-video/viet-nam-ho-chi-minh-giu-tron-mot-con-duong.html",
  },
  {
    title: "Tư liệu audio: Tuyên ngôn độc lập 2/9/1945",
    category: "Audio",
    source: "hochiminh.vn",
    date: "Tư liệu",
    url: "https://hochiminh.vn/audio/ho-chi-minh-chu-tich-lam-thoi-nuoc-viet-nam-dan-chu-cong-hoa-doc-ban-tuyen-ngon-doc-lap-ngay-2-9-1945-tai-quang-truong-1",
  },
  {
    title: "Tư liệu ảnh Chủ tịch Hồ Chí Minh với quốc tế",
    category: "Ảnh",
    source: "hochiminh.vn",
    date: "Tư liệu",
    url: "https://hochiminh.vn/tu-lieu-anh/tu-lieu-anh-chu-tich-ho-chi-minh-voi-quoc-te.html",
  },
  {
    title: "Chủ tịch Hồ Chí Minh đi bầu cử Quốc hội",
    category: "Tin tức",
    source: "hochiminh.vn",
    date: "Chuyên mục tư tưởng",
    url: "https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/chu-tich-ho-chi-minh-di-bau-cu-quoc-hoi.html",
  },
  {
    title: "Học Bác mỗi ngày: Cả nước sẵn sàng cho ngày hội lớn",
    category: "Video",
    source: "hochiminh.vn",
    date: "Da phương tiện",
    url: "https://hochiminh.vn/da-phuong-tien/video/hoc-bac-moi-ngay-ca-nuoc-san-sang-cho-ngay-hoi-lon.html",
  },
];

const books = [
  {
    title: "Bác Hồ trong trái tim những người bạn quốc tế",
    platform: "thuviencoso.vn",
    author: "Bùi Phúc Hải (Sưu tầm, tổ chức biên soạn)",
    url: "https://thuviencoso.vn/ViewBook.aspx?eid=702",
  },
  {
    title: "Hồ Chí Minh về chống quan liêu, tham nhũng, tiêu cực",
    platform: "thuviencoso.vn",
    author: "Phạm Minh Tuấn (Chủ biên)",
    url: "https://thuviencoso.vn/ViewBook.aspx?eid=676",
  },
  {
    title: "Tư tưởng Hồ Chí Minh về văn hóa",
    platform: "thuviencoso.vn",
    author: "Hội đồng chỉ đạo xuất bản sách xã, phường, thị trấn",
    url: "https://thuviencoso.vn/ViewBook.aspx?eid=664",
  },
  {
    title: "Bác Hồ của chúng em",
    platform: "thuviencoso.vn",
    author: "Hội đồng chỉ đạo xuất bản sách xã, phường, thị trấn",
    url: "https://thuviencoso.vn/ViewBook.aspx?eid=667",
  },
  {
    title: "Kho sách điện tử NXB Chính trị quốc gia Sự thật",
    platform: "stbook.vn",
    author: "Nhiều tác giả",
    url: "https://stbook.vn/",
  },
  {
    title: "Những tấm gương bình dị",
    platform: "sachweb.com",
    author: "Ấn phẩm sách trực tuyến",
    url: "https://sachweb.com/publish/nhungtamguongbinhdi_t5_id3430/nhungtamguongbinhdi_t5_id3430.aspx",
  },
];

const museums = [
  {
    name: "Bảo tàng Hồ Chí Minh",
    region: "Toàn quốc",
    url: "https://baotang.hochiminh.vn/",
  },
  {
    name: "Khu di tích Bến Nhà Rồng",
    region: "TP.HCM",
    url: "https://bennharong.hochiminh.vn/",
  },
  {
    name: "Khu di tích Pác Bó",
    region: "Cao Bằng",
    url: "https://pacbo.hochiminh.vn/",
  },
  {
    name: "Khu di tích Làng Sen Kim Liên",
    region: "Nghệ An",
    url: "https://langsenkimlien.hochiminh.vn/",
  },
  {
    name: "Khu di tích Đá Chông (K9)",
    region: "Hà Nội",
    url: "https://k9dachong.hochiminh.vn/",
  },
  {
    name: "Khu di tích Tân Trào - Tuyên Quang",
    region: "Tuyên Quang",
    url: "https://tantrao.hochiminh.vn/",
  },
  {
    name: "Bảo tàng Hồ Chí Minh - Thừa Thiên Huế",
    region: "Thừa Thiên Huế",
    url: "https://baotanghcmtthue.hochiminh.vn/",
  },
  {
    name: "Bảo tàng Hồ Chí Minh - Chi nhánh Cần Thơ",
    region: "Cần Thơ",
    url: "https://cantho.hochiminh.vn/",
  },
];

const roadmap = [
  {
    phase: "Giai đoạn 1 (2 tuần)",
    name: "Nền tảng cổng thông tin",
    detail: "Hoàn thiện giao diện, cấu trúc trang, tích hợp liên kết nguồn và tìm kiếm cơ bản.",
  },
  {
    phase: "Giai đoạn 2 (2 tuần)",
    name: "Chuẩn hóa nội dung",
    detail: "Biên tập metadata, phân nhóm chủ đề và chuẩn hóa chính sách dẫn nguồn.",
  },
  {
    phase: "Giai đoạn 3 (2 tuần)",
    name: "Khai thác dữ liệu tự động",
    detail: "Kết nối RSS/API chính thức (nếu có), thêm quy trình kiểm duyệt trước khi xuất bản.",
  },
];

const contacts = [
  {
    unit: "hochiminh.vn",
    role: "Nguồn tư liệu, bài viết, multimedia",
    url: "https://hochiminh.vn/",
  },
  {
    unit: "stbook.vn",
    role: "Nguồn sách điện tử chính thống",
    url: "https://stbook.vn/",
  },
  {
    unit: "thuviencoso.vn",
    role: "Danh mục sách cơ sở theo chuyên đề",
    url: "https://thuviencoso.vn/BookStore.aspx?colid=26",
  },
];

function byKeyword(item, keyword, keys) {
  if (!keyword) return true;
  const value = keys.map((k) => String(item[k] || "")).join(" ").toLowerCase();
  return value.includes(keyword.toLowerCase());
}

function setCount(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = String(value);
  }
}

function renderSources(items) {
  const grid = document.getElementById("source-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <span class="badge">${item.type}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="actions">
          <a class="btn primary" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.action}</a>
        </div>
      </article>
    `,
    )
    .join("");
  setCount("source-count", items.length);
}

function renderDocuments(items) {
  const grid = document.getElementById("documents-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <span class="badge">${item.category}</span>
        <h3>${item.title}</h3>
        <p class="meta">Nguồn: ${item.source} - ${item.date}</p>
        <div class="actions">
          <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Xem nội dung</a>
        </div>
      </article>
    `,
    )
    .join("");
  setCount("documents-count", items.length);
}

function renderBooks(items) {
  const grid = document.getElementById("books-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <span class="badge success">${item.platform}</span>
        <h3>${item.title}</h3>
        <p>${item.author}</p>
        <div class="actions">
          <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Đọc/Chi tiết</a>
        </div>
      </article>
    `,
    )
    .join("");
  setCount("books-count", items.length);
}

function renderMuseums(items) {
  const grid = document.getElementById("museums-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <span class="badge">${item.region}</span>
        <h3>${item.name}</h3>
        <div class="actions">
          <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Tham quan ngay</a>
        </div>
      </article>
    `,
    )
    .join("");
  setCount("museums-count", items.length);
}

function renderRoadmap(items) {
  const container = document.getElementById("roadmap-list");
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
      <div class="timeline-item">
        <p class="kpi">${item.phase}</p>
        <h3>${item.name}</h3>
        <p class="muted">${item.detail}</p>
      </div>
    `,
    )
    .join("");
}

function renderContacts(items) {
  const grid = document.getElementById("contacts-grid");
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <h3>${item.unit}</h3>
        <p>${item.role}</p>
        <div class="actions">
          <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Mở nguồn</a>
        </div>
      </article>
    `,
    )
    .join("");
}

function setupFilters() {
  const sourceSearch = document.getElementById("source-search");
  if (sourceSearch) {
    sourceSearch.addEventListener("input", (event) => {
      const filtered = sources.filter((item) =>
        byKeyword(item, event.target.value, ["name", "type", "description", "tags"]),
      );
      renderSources(filtered);
    });
  }

  const docSearch = document.getElementById("document-search");
  const docCategory = document.getElementById("document-category");
  if (docSearch || docCategory) {
    const filterDocs = () => {
      const q = docSearch ? docSearch.value : "";
      const c = docCategory ? docCategory.value : "";
      const filtered = documentsData.filter(
        (item) =>
          byKeyword(item, q, ["title", "source", "category"]) &&
          (c === "all" || item.category === c),
      );
      renderDocuments(filtered);
    };
    if (docSearch) docSearch.addEventListener("input", filterDocs);
    if (docCategory) docCategory.addEventListener("change", filterDocs);
  }

  const bookSearch = document.getElementById("book-search");
  const bookPlatform = document.getElementById("book-platform");
  if (bookSearch || bookPlatform) {
    const filterBooks = () => {
      const q = bookSearch ? bookSearch.value : "";
      const p = bookPlatform ? bookPlatform.value : "";
      const filtered = books.filter(
        (item) =>
          byKeyword(item, q, ["title", "author", "platform"]) &&
          (p === "all" || item.platform === p),
      );
      renderBooks(filtered);
    };
    if (bookSearch) bookSearch.addEventListener("input", filterBooks);
    if (bookPlatform) bookPlatform.addEventListener("change", filterBooks);
  }

  const museumSearch = document.getElementById("museum-search");
  if (museumSearch) {
    museumSearch.addEventListener("input", (event) => {
      const filtered = museums.filter((item) =>
        byKeyword(item, event.target.value, ["name", "region"]),
      );
      renderMuseums(filtered);
    });
  }
}

function setupStats() {
  setCount("stat-sources", sources.length);
  setCount("stat-docs", documentsData.length);
  setCount("stat-books", books.length);
  setCount("stat-museums", museums.length);
}

function setupYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setupFeatured() {
  const featuredDocs = document.getElementById("featured-documents");
  if (featuredDocs) {
    featuredDocs.innerHTML = documentsData
      .slice(0, 3)
      .map(
        (item) => `
        <article class="card">
          <span class="badge">${item.category}</span>
          <h3>${item.title}</h3>
          <p class="meta">Nguồn: ${item.source}</p>
          <div class="actions">
            <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Xem nội dung</a>
          </div>
        </article>
      `,
      )
      .join("");
  }
  const featuredBooks = document.getElementById("featured-books");
  if (featuredBooks) {
    featuredBooks.innerHTML = books
      .slice(0, 3)
      .map(
        (item) => `
        <article class="card">
          <span class="badge success">${item.platform}</span>
          <h3>${item.title}</h3>
          <p>${item.author}</p>
          <div class="actions">
            <a class="btn secondary" href="${item.url}" target="_blank" rel="noopener noreferrer">Xem sách</a>
          </div>
        </article>
      `,
      )
      .join("");
  }
}

function init() {
  renderSources(sources);
  renderDocuments(documentsData);
  renderBooks(books);
  renderMuseums(museums);
  renderRoadmap(roadmap);
  renderContacts(contacts);
  setupFilters();
  setupStats();
  setupFeatured();
  setupYear();
}

init();
