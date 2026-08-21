/* ==========================================================================
   KONFIGURASI — ubah nilai di bawah ini sesuai kebutuhan Anda
   ========================================================================== */

// Nomor WhatsApp tujuan konsultasi. Format: kode negara tanpa "+" atau "0" di depan.
// Contoh nomor Indonesia 0812-3456-7890 -> "6281234567890"
const WHATSAPP_NUMBER = "6283844374637"; // TODO: ganti dengan nomor WA admin/CS Anda

// Pesan default yang otomatis terisi saat pengunjung klik tombol konsultasi
const WHATSAPP_MESSAGE =
  "Halo Echobriq, saya ingin konsultasi mengenai pembuatan briket sekam padi.";

/* ==========================================================================
   TERAPKAN LINK WHATSAPP KE SEMUA TOMBOL KONSULTASI
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  document.querySelectorAll(".wa-consult-btn").forEach((btn) => {
    btn.setAttribute("href", waUrl);
  });
});

/* ==========================================================================
   MOBILE NAVIGATION TOGGLE
   ========================================================================== */
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.className = mobileMenu.classList.contains("hidden")
    ? "fa-solid fa-bars"
    : "fa-solid fa-xmark";
});

// Tutup menu mobile saat salah satu link nav diklik
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuIcon.className = "fa-solid fa-bars";
  });
});

/* ==========================================================================
   NAVBAR SHADOW ON SCROLL
   ========================================================================== */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }
});

/* ==========================================================================
   DETAIL TUTORIAL — data lengkap tiap langkah + modal
   ========================================================================== */
const stepDetails = {
  1: {
    title: "Persiapan & Pengumpulan Sekam",
    materials: [
      "Sekam padi kering (± 10-15 kg untuk uji coba awal)",
      "Terpal/alas untuk menampung sekam",
    ],
    tools: ["Karung/goni penampung", "Ayakan kasar (saringan)", "Sekop kecil"],
    steps: [
      "Ambil sekam padi segar dari penggilingan padi (rice mill) terdekat, usahakan yang masih kering dan belum tercampur tanah.",
      "Ayak sekam menggunakan saringan kasar untuk memisahkan kotoran, kerikil, dan gabah yang masih tercampur.",
      "Jemur ulang sekam selama 3-4 jam apabila terasa lembap, sebelum masuk ke tahap karbonisasi.",
      "Simpan sekam yang sudah bersih di tempat kering dan tidak lembap agar tidak berjamur sebelum diproses.",
    ],
    tips: "Hindari sekam yang sudah bercampur air hujan atau lumpur karena akan memperlambat proses pengarangan dan menurunkan kualitas briket.",
  },
  2: {
    title: "Proses Pengarangan (Karbonisasi)",
    materials: [
      "Sekam padi kering hasil tahap 1",
      "Kayu bakar/kertas untuk penyulut api",
    ],
    tools: [
      "Drum/tong karbonisasi (drum kiln)",
      "Cerobong asap",
      "Sarung tangan tahan panas",
      "Sekop besi",
    ],
    steps: [
      "Nyalakan api kecil di dasar cerobong drum karbonisasi menggunakan kayu/kertas.",
      "Masukkan sekam padi sedikit demi sedikit menutupi area pembakaran, biarkan asap putih keluar dari cerobong.",
      "Tambahkan sekam secara bertahap ke seluruh permukaan drum sambil menjaga agar api tidak menyala besar (proses ini berlangsung tanpa oksigen berlebih/pembakaran tidak sempurna).",
      "Setelah 2-3 jam, seluruh sekam akan berubah warna menjadi hitam pekat (arang sekam/sekam bakar).",
      "Padamkan proses dengan menyiram sedikit air atau menutup rapat drum untuk menghentikan pembakaran, lalu biarkan dingin.",
    ],
    tips: "Jangan biarkan sekam terus terbakar hingga menjadi abu putih — itu tandanya bahan bakunya rusak dan nilai kalornya hilang. Selalu lakukan proses ini di area terbuka dengan ventilasi baik.",
  },
  3: {
    title: "Pembuatan Perekat Molase",
    materials: [
      "Tepung tapioka/kanji (± 1 kg per 10 kg arang)",
      "Molase/tetes tebu (± 0,5-1 liter)",
      "Air bersih secukupnya",
    ],
    tools: ["Panci/wajan pemanas", "Kompor", "Pengaduk kayu"],
    steps: [
      "Larutkan tepung tapioka dengan air dingin terlebih dahulu hingga tidak menggumpal.",
      "Panaskan larutan tapioka di atas kompor dengan api kecil sambil terus diaduk.",
      "Tambahkan molase secara perlahan ke dalam larutan tapioka yang mulai mengental.",
      "Terus aduk hingga terbentuk adonan lem yang kental, licin, dan tidak menggumpal.",
      "Angkat dan diamkan hingga suhu adonan sedikit turun sebelum dicampurkan ke arang sekam.",
    ],
    tips: "Gunakan rasio adonan perekat sekitar 5-10% dari total berat arang sekam. Terlalu banyak perekat membuat briket lama kering, terlalu sedikit membuat briket mudah hancur.",
  },
  4: {
    title: "Pencampuran & Pencetakan",
    materials: [
      "Arang sekam halus (hasil tahap 2)",
      "Adonan perekat molase (hasil tahap 3)",
    ],
    tools: [
      "Wadah pencampur besar/ember",
      "Cetakan briket (pipa PVC/cetakan hidrolik)",
      "Alat press/dongkrak manual",
    ],
    steps: [
      "Tumbuk atau giling arang sekam hingga halus dan seragam ukurannya.",
      "Campurkan arang halus dengan adonan perekat molase sedikit demi sedikit sambil diaduk merata.",
      "Pastikan campuran memiliki tekstur seperti pasta lembab yang mudah dipadatkan tapi tidak terlalu basah.",
      "Masukkan campuran ke dalam cetakan briket (bentuk silinder, kubus, atau sarang tawon sesuai kebutuhan).",
      "Tekan menggunakan alat press/dongkrak hingga briket padat dan kompak, lalu keluarkan dari cetakan.",
    ],
    tips: "Semakin padat hasil pencetakan, semakin lama briket akan menyala dan semakin tahan lama daya bakarnya.",
  },
  5: {
    title: "Pengeringan & Uji Coba",
    materials: ["Briket basah hasil cetakan (tahap 4)"],
    tools: [
      "Rak/alas penjemuran",
      "Oven pengering (opsional)",
      "Area terbuka berpanas matahari",
    ],
    steps: [
      "Susun briket basah di atas rak/alas penjemuran dengan jarak antar briket agar sirkulasi udara lancar.",
      "Jemur di bawah sinar matahari langsung selama 2-3 hari hingga kadar air di bawah 8%, atau gunakan oven pengering pada suhu 60°C selama 6-10 jam.",
      "Balik briket setiap beberapa jam sekali agar pengeringan merata di semua sisi.",
      "Setelah kering sempurna (briket terasa keras dan ringan), lakukan uji nyala api pada satu sampel briket.",
      "Jika briket menyala stabil dengan bara merah-biru dan minim asap, briket siap dikemas dan digunakan.",
    ],
    tips: "Briket yang belum kering sempurna akan sulit menyala dan menghasilkan asap tebal. Pastikan pengeringan tuntas sebelum dikemas dalam wadah kedap udara.",
  },
};

const stepModal = document.getElementById("step-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalStepNumber = document.getElementById("modal-step-number");
const modalStepTitle = document.getElementById("modal-step-title");
const modalMaterials = document.getElementById("modal-materials");
const modalTools = document.getElementById("modal-tools");
const modalSteps = document.getElementById("modal-steps");
const modalTipsText = document.getElementById("modal-tips-text");

function openStepModal(stepId) {
  const data = stepDetails[stepId];
  if (!data) return;

  modalStepNumber.textContent = String(stepId).padStart(2, "0");
  modalStepTitle.textContent = data.title;

  modalMaterials.innerHTML = data.materials
    .map(
      (item) => `
        <li class="flex items-start gap-2">
            <i class="fa-solid fa-circle-check text-brand-green mt-0.5 text-xs"></i>
            <span>${item}</span>
        </li>
    `,
    )
    .join("");

  modalTools.innerHTML = data.tools
    .map(
      (item) => `
        <li class="flex items-start gap-2">
            <i class="fa-solid fa-screwdriver-wrench text-brand-green mt-0.5 text-xs"></i>
            <span>${item}</span>
        </li>
    `,
    )
    .join("");

  modalSteps.innerHTML = data.steps
    .map(
      (item, idx) => `
        <li class="flex items-start gap-3">
            <span class="step-badge w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-brand-textDark flex-shrink-0 mt-0.5">${idx + 1}</span>
            <span class="leading-relaxed">${item}</span>
        </li>
    `,
    )
    .join("");

  modalTipsText.innerHTML = `<span class="font-bold">Tips & Keselamatan:</span> ${data.tips}`;

  stepModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeStepModal() {
  stepModal.classList.add("hidden");
  document.body.style.overflow = "";
}

document.querySelectorAll(".step-card").forEach((card) => {
  card.addEventListener("click", () => {
    const stepId = card.getAttribute("data-step");
    openStepModal(stepId);
  });
});

modalCloseBtn.addEventListener("click", closeStepModal);
stepModal.addEventListener("click", (e) => {
  if (e.target === stepModal) closeStepModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !stepModal.classList.contains("hidden"))
    closeStepModal();
});
