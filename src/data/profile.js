export const profile = {
  name: "Stevanu Dika Pratama",
  email: "Stevanu17@gmail.com",
  whatsapp: "https://wa.me/6282118987548",
  location: "Cimahi Utara, Jawa Barat",
  intro:
    "Saya Stevanu Dika Pratama, lulusan Sistem Informasi. Saya membangun antarmuka web yang rapi dan responsif, lalu mengujinya agar setiap fitur berjalan sesuai kebutuhan pengguna.",
  about:
    "Saya merupakan lulusan Sistem Informasi dengan pengalaman dan kompetensi di bidang teknologi informasi, Seperti Game Master, pengembangan aplikasi web, pengelolaan basis data, serta pengujian perangkat lunak. Memiliki kemampuan analitis, problem solving, perhatian terhadap detail, serta terbiasa bekerja secara mandiri maupun dalam tim. Saya merupakan pribadi yang cepat belajar, memiliki rasa ingin tahu yang tinggi, dan antusias mempelajari hal-hal serta teknologi baru. Mampu beradaptasi dengan lingkungan dan tanggung jawab yang berbeda, serta memiliki komitmen untuk menyelesaikan pekerjaan secara efektif, teliti, dan bertanggung jawab. Saya siap memberikan kontribusi terbaik, mengembangkan kemampuan, dan terus belajar sesuai dengan kebutuhan perusahaan.",
  education: {
    school: "Universitas Nahdlatul Ulama Al Ghazali",
    major: "Sistem Informasi, 2019 - 2024",
    gpa: "IPK 3,59",
  },
};
export const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang" },
  { to: "/skill", label: "Skill" },
  { to: "/proyek", label: "Proyek" },
  { to: "/pengalaman", label: "Pengalaman" },
  { to: "/kontak", label: "Kontak" },
];
export const sides = [
  {
    tone: "dev",
    glyph: "</>",
    title: "Web Developer",
    text: "Antarmuka web yang rapi, responsif, dan mudah dirawat.",
    items: ["Vue.js", "React.js", "Next.js", "Laravel", "Tailwind"],
  },
  {
    tone: "qa",
    glyph: "QA",
    title: "Quality Assurance",
    text: "Pengujian manual dan otomatis untuk fungsi, tampilan, dan beban.",
    items: ["Selenium", "JMeter", "Postman", "Katalon Studio", "UAT"],
  },
];
export const marquee = [
  "Vue.js",
  "React.js",
  "Next.js",
  "Laravel",
  "Tailwind",
  "Selenium",
  "Apache JMeter",
  "Postman",
  "Katalon Studio",
  "Jira",
  "Git",
  "Figma",
];
export const skills = [
  {
    tone: "dev",
    title: "Web development",
    items: [
      "Vue.js",
      "Next.js",
      "React.js",
      "Laravel",
      "Tailwind",
      "Bootstrap",
      "Zustand",
      "TanStack",
      "API Integration",
    ],
    tools: ["Git", "VS Code", "Node.js", "Figma", "PostgreSQL", "NaviCat"],
  },
  {
    tone: "qa",
    title: "Quality assurance",
    items: [
      "Manual testing",
      "Automation testing",
      "Load testing",
      "Performance testing",
      "Functional testing",
      "UAT",
    ],
    tools: ["Selenium", "Apache JMeter", "Postman", "Katalon Studio", "Jira"],
  },
];
export const skillNote =
  "Analisis sistem: flowchart, use case, requirement gathering. Soft skill: komunikasi, manajemen waktu, berpikir kritis, dan belajar mandiri.";
export const projects = [
  {
    tone: "dev",
    title: "Brewclean.shoes",
    text: "Website jasa cuci dan perawatan sepatu di Pondok Aren, Tangerang Selatan, lengkap dengan paket layanan Fast Clean, Deep Clean, Hard Clean, dan Kids Shoes Clean.",
    link: "https://brewclean.shoescare.workers.dev/",
    tags: ["Cloudflare Workers", "SEO"],
  },
  {
    tone: "dev",
    title: "Kasir Tritih Golf Country Club",
    text: "Antarmuka aplikasi kasir yang responsif, dengan komponen yang bisa dipakai ulang dan integrasi API.",
    tags: ["Vue.js", "Laravel"],
  },
  {
    tone: "dev",
    title: "Edu Digital SMPN 02 Cilacap",
    text: "Frontend aplikasi pendidikan digital untuk sekolah, dengan struktur komponen yang rapi dan penamaan konsisten.",
    tags: ["Vue.js", "Laravel", "UI/UX"],
  },
  {
    tone: "qa",
    title: "Darul Quran dan Edu Digital",
    text: "Pengujian manual dan otomatis untuk UI, fungsi, beban, dan responsivitas, dengan dokumen UAT untuk developer.",
    tags: ["JMeter", "Selenium", "Postman"],
  },
  {
    tone: "qa",
    title: "Pengujian aplikasi Bola Soft",
    text: "Membuat test plan dan test case, mendokumentasikan bug, lalu mempresentasikan hasil UAT langsung ke pengguna.",
    tags: ["Katalon Studio", "JMeter", "Selenium"],
  },
  {
    tone: "dev",
    title: "Website Dragon Nest",
    text: "Ikut membuat website admin dan pemain, menyusun database, dan men-deploy game di AWS EC2.",
    tags: ["PHP", "Bootstrap", "AWS EC2"],
  },
];
export const projectFilters = [
  { value: "all", label: "Semua" },
  { value: "dev", label: "Web development" },
  { value: "qa", label: "Quality assurance" },
];
export const jobs = [
  {
    type: "oth",
    date: "Agustus 2025 - Juli 2026",
    title: "Admin Teknisi",
    company: "Seven Computer, penuh waktu",
    points: [
      "Memperbaiki komponen, software, dan troubleshooting laptop dan komputer.",
      "Mencatat stok, penjualan, dan servis, lalu membuat laporan harian dan bulanan.",
      "Melayani pelanggan: rekomendasi, konsultasi, dan pengambilan barang servis.",
    ],
  },
  {
    type: "qa",
    date: "September 2023 - Januari 2024",
    title: "Quality Assurance",
    company: "PT Inovis Membangun Bangsa, freelance",
    points: [
      "Menguji aplikasi Darul Quran dan Edu Digital dengan JMeter, Selenium, dan Postman.",
      "Memberi masukan dari sisi pengguna akhir untuk kenyamanan dan usability.",
      "Menyusun dokumentasi pengujian, termasuk UAT dan catatan perbaikan.",
    ],
  },
  {
    type: "dev",
    date: "Januari 2023 - September 2023",
    title: "Web Developer",
    company: "PT Inovis Membangun Bangsa, berbasis proyek",
    points: [
      "Membangun frontend dua aplikasi dengan Vue.js dan Laravel.",
      "Membantu integrasi API dan koneksi database.",
      "Menerapkan prinsip clean code pada struktur komponen.",
    ],
  },
  {
    type: "qa",
    date: "November 2022 - Desember 2022",
    title: "Quality Assurance",
    company: "PT Inovis Membangun Bangsa, magang",
    points: [
      "Membuat dokumen UAT dan membantu proses sign-off bersama pengguna.",
      "Berkolaborasi dengan System Analyst dan developer.",
      "Mendokumentasikan bug dan memberi rekomendasi perbaikan.",
    ],
  },
  {
    type: "oth",
    date: "Februari 2022 - September 2022",
    title: "Digital Marketing",
    company: "Margodadi Corp",
    points: [
      "Membuat konten produk dengan Photoshop dan After Effects, serta menjadwalkan pemasaran.",
      "Presentasi produk di beberapa desa dan menindaklanjuti calon pelanggan.",
    ],
  },
  {
    type: "oth",
    date: "Maret 2020 - April 2021",
    title: "Game Master",
    company: "Dragon Nest Academia",
    points: [
      "Membantu merancang gameplay, mekanik, dan event game.",
      "Membantu deployment, database, dan website game.",
      "Menjadi penghubung antara pemain dan developer untuk keluhan dan bug.",
    ],
  },
];
