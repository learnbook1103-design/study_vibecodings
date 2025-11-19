// ===== 프롬프트 초기 데이터 =====
const initialPrompts = [
  {
    id: "cinematic_portrait_01",
    title: "시네마틱 인물 포트레이트",
    category: "image_prompt",
    tags: ["cinematic", "portrait", "soft light"],
    thumbnail:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    shortDescription:
      "부드러운 사이드 라이트와 얕은 심도의 시네마틱 인물 샷.",
    model: "예: SDXL / Midjourney v6",
    fullPrompt:
      "인물의 표정, 조명, 색감, 배경, 카메라 렌즈, 조리개 등을 구체적으로 서술하는 영어/한국어 프롬프트 전문이 들어갈 자리입니다.\n예: soft cinematic lighting, 85mm lens, f1.4, shallow depth of field, subtle film grain...",
    notes:
      "광원 위치, 얼굴 그림자 분위기, 배경 보케 크기를 여러 번 테스트한 기록 등을 남길 수 있습니다."
  },
  {
    id: "shorts_script_01",
    title: "커피가 아침에 더 맛있는 과학",
    category: "shorts_script",
    tags: ["shorts", "science", "coffee"],
    thumbnail:
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80",
    shortDescription: "45초 분량의 과학 설명형 쇼츠 스크립트 프롬프트.",
    model: "예: GPT 계열 LLM",
    fullPrompt:
      "아침에 마시는 커피가 왜 더 맛있게 느껴지는지 과학적으로 설명해주는 45초 분량의 쇼츠 스크립트를 만들어줘.\n인트로는 강한 후킹 문장으로 시작하고, 중간에는 핵심 원리 2~3개를 짧게 설명해줘.\n마지막은 위트 있는 한 줄로 마무리해줘. 한국어로, 말하듯이 자연스럽게 작성해줘.",
    notes:
      "후킹 문장을 여러 버전으로 생성해서 실제 쇼츠에서 A/B 테스트를 해볼 수 있습니다."
  },
  {
    id: "cosmetic_ad_01",
    title: "미백·주름개선 기능성 화장품 광고 카피",
    category: "product_ad",
    tags: ["cosmetics", "ad copy", "legal-safe"],
    thumbnail:
      "https://images.unsplash.com/photo-1612810432633-96f64dc8ccb6?auto=format&fit=crop&w=900&q=80",
    shortDescription: "표시·광고법을 고려한 안전한 화장품 광고 프롬프트.",
    model: "예: GPT 계열 LLM",
    fullPrompt:
      "미백·주름개선 기능성 화장품을 홍보하는 15초 분량 쇼츠용 카피를 작성해줘.\n과장 표현과 의약품 오인 표현은 모두 피하고, 화장품법과 표시·광고법을 준수하는 문장만 사용해.\n주요 USP는 저자극, 데일리 케어, 촉촉한 사용감이야.\n구체적인 효과 단정 표현은 피하고, 완곡한 표현을 사용해줘.",
    notes:
      "실제 사용 문구를 선택할 때 어떤 기준(법적 리스크, 브랜딩 톤 등)을 고려했는지 기록해 둘 수 있습니다."
  },
  {
    id: "hamster_character_01",
    title: "정서불안 햄스터 캐릭터 콘셉트",
    category: "character_concept",
    tags: ["character", "hamster", "youtube"],
    thumbnail:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80",
    shortDescription: "정서불안 캐릭터 유튜브용 햄스터 콘셉트 프롬프트.",
    model: "예: GPT 계열 LLM + 이미지 생성 모델",
    fullPrompt:
      "정서불안을 겪는 햄스터 캐릭터를 설정해줘.\n이름, 말투, 특징적인 행동, 좋아하는 것/싫어하는 것, 시청자가 공감할 수 있는 포인트를 구체적으로 정리해줘.\n유튜브 쇼츠 채널용 캐릭터라서, 짧은 에피소드로 풀기 좋은 설정 중심으로.",
    notes:
      "이 캐릭터를 기반으로 어떤 유형의 콘텐츠(상황극, 일기, 심리 상담 등)를 만들 수 있을지 브레인스토밍할 수 있습니다."
  }
];

// ===== 상태 관리 =====
const STORAGE_KEY = "prompt_ui_studio_prompts";

let prompts = [];

// 관리자 로그인 상태
let isAdminLoggedIn = false;
const ADMIN_PASSWORD = "prompt1234"; // 여기 비밀번호 네가 쓸 값으로 변경해도 됨
const ADMIN_LOGIN_KEY = "prompt_ui_studio_admin_logged";

// 현재 필터/편집 상태
let currentCategory = "all";
let editingId = null;

// ===== 유틸: 로컬스토리지 =====
function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Storage load error:", e);
    return null;
  }
}

function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prompts));
  } catch (e) {
    console.warn("Storage save error:", e);
  }
}

// ===== 초기화 =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("[INIT] DOMContentLoaded");

  // 관리자 로그인 상태 복원
  const storedAdmin = localStorage.getItem(ADMIN_LOGIN_KEY);
  isAdminLoggedIn = storedAdmin === "true";
  console.log("[INIT] isAdminLoggedIn:", isAdminLoggedIn);

  // 데이터 로딩
  const stored = loadFromStorage();
  prompts =
    stored && Array.isArray(stored) && stored.length > 0
      ? stored
      : initialPrompts.slice();

  // 초기 렌더링
  renderGallery();
  renderAdminTable();
  updateVisibleCount();

  // 이벤트 바인딩
  setupThemeToggle();
  setupViewToggle();
  setupCategoryFilter();
  setupPromptForm();
  setupAdminLogin();
});

// ===== 테마 토글 =====
function setupThemeToggle() {
  const buttons = document.querySelectorAll(".theme-toggle [data-theme]");
  const body = document.body;

  const savedTheme = localStorage.getItem("prompt_ui_studio_theme");
  if (savedTheme === "light") {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === "light");
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      if (theme === "light") {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
      } else {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
      }
      buttons.forEach((b) => b.classList.toggle("active", b === btn));
      localStorage.setItem("prompt_ui_studio_theme", theme);
    });
  });
}

// ===== 공용 화면 전환 함수 =====
function switchView(view) {
  const navButtons = document.querySelectorAll('[data-view]');
  const gallerySections = document.querySelectorAll(".view-gallery-section");
  const adminSection = document.getElementById("admin-panel");

  console.log("[switchView] view =", view);

  // 네비게이션 활성 상태 변경
  navButtons.forEach((b) => {
    b.classList.toggle("active", b.dataset.view === view);
  });

  if (!adminSection) {
    console.warn("[switchView] #admin-panel not found");
    return;
  }

  if (view === "gallery") {
    gallerySections.forEach((sec) => sec.classList.remove("d-none"));
    adminSection.classList.add("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (view === "admin") {
    gallerySections.forEach((sec) => sec.classList.add("d-none"));
    adminSection.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ===== 메인 뷰 토글 (Gallery / Admin) =====
function setupViewToggle() {
  const navButtons = document.querySelectorAll('[data-view]');
  console.log("[setupViewToggle] navButtons:", navButtons.length);

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view || "gallery";
      console.log("[Nav Click] view =", view, "isAdminLoggedIn =", isAdminLoggedIn);

      // 🔒 Admin 뷰는 로그인 상태 먼저 체크
      if (view === "admin" && !isAdminLoggedIn) {
        const loginModalEl = document.getElementById("adminLoginModal");
        if (loginModalEl) {
          const loginModal = bootstrap.Modal.getOrCreateInstance(loginModalEl);
          loginModal.show();
        } else {
          console.warn("[setupViewToggle] #adminLoginModal not found");
        }
        return; // 로그인 안 된 상태에선 화면 전환 안 함
      }

      // 로그인 되어 있거나 gallery라면, 화면 전환
      switchView(view);
    });
  });
}

// ===== 카테고리 필터 =====
function setupCategoryFilter() {
  const buttons = document.querySelectorAll("[data-category]");
  const label = document.getElementById("current-category-label");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.category;

      buttons.forEach((b) => b.classList.toggle("active", b === btn));

      label.textContent = btn.textContent.trim() || "전체";

      renderGallery();
      updateVisibleCount();
    });
  });
}

// ===== 갤러리 렌더링 =====
function renderGallery() {
  const container = document.getElementById("gallery-row");
  if (!container) {
    console.warn("[renderGallery] #gallery-row not found");
    return;
  }
  container.innerHTML = "";

  const filtered = prompts.filter((p) =>
    currentCategory === "all" ? true : p.category === currentCategory
  );

  filtered.forEach((prompt) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    col.innerHTML = `
      <article class="card prompt-card h-100" data-id="${prompt.id}">
        <div class="ratio ratio-4x3 card-img-top overflow-hidden">
          <img
            src="${prompt.thumbnail}"
            alt="${prompt.title}"
            class="object-fit-cover w-100 h-100"
          >
        </div>
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge ${categoryBadgeClass(prompt.category)} small">
              ${categoryLabel(prompt.category)}
            </span>
            <span class="small text-muted">${prompt.category}</span>
          </div>
          <h3 class="card-title h6 mb-2">${prompt.title}</h3>
          <p class="card-text small text-muted mb-3">
            ${prompt.shortDescription}
          </p>
          <div class="mt-auto d-flex flex-wrap gap-1 mb-3">
            ${(prompt.tags || [])
              .map(
                (tag) =>
                  `<span class="badge rounded-pill bg-dark-subtle text-body-secondary">${tag}</span>`
              )
              .join("")}
          </div>
          <button class="btn btn-sm btn-outline-primary w-100 mt-auto view-detail-btn">
            상세 보기
          </button>
        </div>
      </article>
    `;

    container.appendChild(col);

    const card = col.querySelector(".prompt-card");
    const btnView = col.querySelector(".view-detail-btn");
    btnView.addEventListener("click", (e) => {
      e.stopPropagation();
      openDetailModal(prompt.id);
    });
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("view-detail-btn")) {
        openDetailModal(prompt.id);
      }
    });
  });
}

function categoryLabel(cat) {
  switch (cat) {
    case "image_prompt":
      return "이미지 생성";
    case "shorts_script":
      return "쇼츠 스크립트";
    case "product_ad":
      return "제품 광고";
    case "character_concept":
      return "캐릭터 콘셉트";
    case "experiment":
      return "실험 / 연구";
    default:
      return cat;
  }
}

function categoryBadgeClass(cat) {
  switch (cat) {
    case "image_prompt":
      return "bg-primary-subtle text-primary-emphasis";
    case "shorts_script":
      return "bg-success-subtle text-success-emphasis";
    case "product_ad":
      return "bg-warning-subtle text-warning-emphasis";
    case "character_concept":
      return "bg-info-subtle text-info-emphasis";
    case "experiment":
      return "bg-secondary-subtle text-secondary-emphasis";
    default:
      return "bg-secondary-subtle text-secondary-emphasis";
  }
}

function updateVisibleCount() {
  const countEl = document.getElementById("visible-count");
  if (!countEl) return;

  const filtered = prompts.filter((p) =>
    currentCategory === "all" ? true : p.category === currentCategory
  );
  countEl.textContent = filtered.length.toString();
}

// ===== 모달 =====
let modalInstance = null;

function openDetailModal(id) {
  const prompt = prompts.find((p) => p.id === id);
  if (!prompt) return;

  const modalEl = document.getElementById("promptDetailModal");
  if (!modalEl) {
    console.warn("[openDetailModal] #promptDetailModal not found");
    return;
  }
  if (!modalInstance) {
    modalInstance = new bootstrap.Modal(modalEl);
  }

  document.getElementById("modal-title").textContent = prompt.title;
  document.getElementById("modal-thumbnail").src = prompt.thumbnail;
  document.getElementById("modal-thumbnail").alt = prompt.title;
  document.getElementById("modal-category-badge").textContent = categoryLabel(
    prompt.category
  );
  document.getElementById("modal-category-badge").className =
    "badge " + categoryBadgeClass(prompt.category);

  document.getElementById("modal-tags").textContent =
    (prompt.tags || []).length > 0 ? "#" + prompt.tags.join(" #") : "";

  document.getElementById("modal-model").textContent = prompt.model || "";
  document.getElementById("modal-short-description").textContent =
    prompt.shortDescription || "";
  document.getElementById("modal-full-prompt").textContent =
    prompt.fullPrompt || "";
  document.getElementById("modal-notes").textContent = prompt.notes || "";

  modalInstance.show();
}

// ===== Admin: 테이블 렌더링 =====
function renderAdminTable() {
  const tbody = document.getElementById("admin-table-body");
  if (!tbody) {
    console.warn("[renderAdminTable] #admin-table-body not found");
    return;
  }

  tbody.innerHTML = "";

  prompts.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="small text-truncate" style="max-width: 130px;">${p.id}</td>
      <td class="small text-truncate" style="max-width: 160px;">${p.title}</td>
      <td class="small">${categoryLabel(p.category)}</td>
      <td class="small text-truncate" style="max-width: 180px;">
        ${p.shortDescription}
      </td>
      <td class="text-end">
        <button class="btn btn-link btn-sm p-0 me-2 text-decoration-none" data-action="edit" data-id="${
          p.id
        }">편집</button>
        <button class="btn btn-link btn-sm p-0 text-danger text-decoration-none" data-action="delete" data-id="${
          p.id
        }">삭제</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll("button[data-action]").forEach((btn) => {
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    if (action === "edit") {
      btn.addEventListener("click", () => fillFormForEdit(id));
    } else if (action === "delete") {
      btn.addEventListener("click", () => deletePrompt(id));
    }
  });
}

// ===== Admin: 폼 처리 =====
function setupPromptForm() {
  const form = document.getElementById("prompt-form");
  const btnSave = document.getElementById("btn-save");
  const btnUpdate = document.getElementById("btn-update");
  const btnReset = document.getElementById("btn-reset-form");

  if (!form) {
    console.warn("[setupPromptForm] #prompt-form not found");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = getFormData();
    if (!data) return;

    prompts.push(data);
    saveToStorage();
    renderGallery();
    renderAdminTable();
    updateVisibleCount();
    form.reset();
  });

  if (btnUpdate) {
    btnUpdate.addEventListener("click", () => {
      const data = getFormData();
      if (!data || !editingId) return;

      const index = prompts.findIndex((p) => p.id === editingId);
      if (index !== -1) {
        prompts[index] = { ...prompts[index], ...data, id: editingId };
        saveToStorage();
        renderGallery();
        renderAdminTable();
        updateVisibleCount();
        resetFormState();
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      resetFormState();
    });
  }
}

function getFormData() {
  const idEl = document.getElementById("field-id");
  const titleEl = document.getElementById("field-title");
  const categoryEl = document.getElementById("field-category");
  const thumbnailEl = document.getElementById("field-thumbnail");
  const shortDescEl = document.getElementById("field-short-description");
  const fullPromptEl = document.getElementById("field-full-prompt");

  const id = idEl.value.trim();
  const title = titleEl.value.trim();
  const category = categoryEl.value;
  const thumb = thumbnailEl.value.trim();
  const shortDesc = shortDescEl.value.trim();
  const fullPrompt = fullPromptEl.value.trim();

  if (!id || !title) {
    alert("ID와 제목은 필수입니다.");
    return null;
  }

  if (!editingId) {
    const exists = prompts.some((p) => p.id === id);
    if (exists) {
      alert("이미 존재하는 ID입니다. 다른 ID를 사용해주세요.");
      return null;
    }
  }

  return {
    id,
    title,
    category,
    thumbnail: thumb || "https://via.placeholder.com/900x600?text=Thumbnail",
    shortDescription: shortDesc || "(설명이 아직 없습니다.)",
    model: "",
    tags: [],
    fullPrompt: fullPrompt || "",
    notes: ""
  };
}

function fillFormForEdit(id) {
  const p = prompts.find((item) => item.id === id);
  if (!p) return;

  editingId = id;

  document.getElementById("field-id").value = p.id;
  document.getElementById("field-title").value = p.title;
  document.getElementById("field-category").value = p.category;
  document.getElementById("field-thumbnail").value = p.thumbnail;
  document.getElementById("field-short-description").value = p.shortDescription;
  document.getElementById("field-full-prompt").value = p.fullPrompt;

  document.getElementById("btn-save").classList.add("d-none");
  document.getElementById("btn-update").classList.remove("d-none");
}

function resetFormState() {
  const form = document.getElementById("prompt-form");
  if (form) form.reset();
  editingId = null;
  const btnSave = document.getElementById("btn-save");
  const btnUpdate = document.getElementById("btn-update");
  if (btnSave) btnSave.classList.remove("d-none");
  if (btnUpdate) btnUpdate.classList.add("d-none");
}

function deletePrompt(id) {
  const p = prompts.find((item) => item.id === id);
  if (!p) return;

  if (!confirm(`정말 삭제할까요?\n\n${p.title} (${p.id})`)) return;

  prompts = prompts.filter((item) => item.id !== id);
  saveToStorage();
  renderGallery();
  renderAdminTable();
  updateVisibleCount();
}

// ===== Admin 로그인 처리 =====
function setupAdminLogin() {
  const form = document.getElementById("admin-login-form");
  const passwordInput = document.getElementById("admin-password");
  const errorText = document.getElementById("admin-login-error");
  const loginModalEl = document.getElementById("adminLoginModal");

  if (!form || !passwordInput || !loginModalEl) {
    console.warn("[setupAdminLogin] elements not found", form, passwordInput, loginModalEl);
    return;
  }

  const loginModal = bootstrap.Modal.getOrCreateInstance(loginModalEl);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const value = passwordInput.value.trim();

    console.log("[Admin Login] try value:", value);

    if (value === ADMIN_PASSWORD) {
      console.log("[Admin Login] success");
      isAdminLoggedIn = true;
      localStorage.setItem(ADMIN_LOGIN_KEY, "true");
      if (errorText) errorText.classList.add("d-none");
      passwordInput.value = "";

      loginModal.hide();

      // 바로 Admin 화면으로 전환
      switchView("admin");
    } else {
      console.log("[Admin Login] failed");
      if (errorText) {
        errorText.classList.remove("d-none");
      } else {
        alert("비밀번호가 올바르지 않습니다.");
      }
    }
  });

  loginModalEl.addEventListener("show.bs.modal", () => {
    if (errorText) errorText.classList.add("d-none");
    passwordInput.value = "";
    setTimeout(() => passwordInput.focus(), 150);
  });
}
