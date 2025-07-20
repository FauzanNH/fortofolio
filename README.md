# Portofolio Profesional

Website portofolio profesional untuk menampilkan proyek dan keahlian Anda. Website ini dirancang untuk keperluan pameran atau lamaran kerja.

## Fitur

- Desain responsif untuk semua ukuran perangkat
- Animasi scroll yang menarik
- Filter proyek berdasarkan kategori
- Formulir kontak yang interaktif
- Tampilan keahlian dengan indikator level
- Navigasi smooth scroll

## Struktur Folder

```
portofolio/
│
├── index.html          # Halaman utama
├── css/
│   └── main.css        # File CSS utama
├── js/
│   └── main.js         # File JavaScript utama
├── img/                # Folder untuk gambar
│   ├── hero-bg.jpg     # Background hero section
│   ├── profile.jpg     # Foto profil
│   ├── project1.jpg    # Gambar proyek 1
│   ├── project2.jpg    # Gambar proyek 2
│   ├── project3.jpg    # Gambar proyek 3
│   └── project4.jpg    # Gambar proyek 4
└── cv.pdf              # File CV untuk diunduh
```

## Cara Menggunakan

1. Ganti konten di `index.html` dengan informasi pribadi Anda
2. Tambahkan foto profil Anda di folder `img/` dengan nama `profile.jpg`
3. Tambahkan gambar proyek Anda di folder `img/` dengan nama `project1.jpg`, `project2.jpg`, dst.
4. Tambahkan background untuk hero section di folder `img/` dengan nama `hero-bg.jpg`
5. Ganti file CV dengan file CV Anda sendiri dan simpan dengan nama `cv.pdf`

## Kustomisasi

### Mengubah Warna

Anda dapat mengubah skema warna dengan mengedit variabel CSS di file `css/main.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #4b5563;
    --accent-color: #3b82f6;
    --light-color: #f3f4f6;
    --dark-color: #1f2937;
    --text-color: #374151;
    --border-color: #e5e7eb;
    --success-color: #10b981;
    --container-width: 1200px;
    --transition: all 0.3s ease;
}
```

### Menambahkan Proyek Baru

Untuk menambahkan proyek baru, tambahkan kode berikut di dalam div dengan class `projects-grid` di `index.html`:

```html
<div class="project-card" data-category="kategori">
    <div class="project-img">
        <img src="img/nama-gambar.jpg" alt="Nama Proyek">
    </div>
    <div class="project-info">
        <h3>Nama Proyek</h3>
        <p>Deskripsi proyek Anda.</p>
        <div class="project-tags">
            <span>Tag 1</span>
            <span>Tag 2</span>
            <span>Tag 3</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-sm">Demo</a>
            <a href="#" class="btn btn-sm btn-secondary">Kode</a>
        </div>
    </div>
</div>
```

Ganti `kategori` dengan kategori proyek (web, mobile, atau design), `nama-gambar.jpg` dengan nama file gambar proyek, dan isi informasi lainnya sesuai dengan proyek Anda.

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome untuk ikon

## Lisensi

Proyek ini tersedia di bawah lisensi [MIT](https://opensource.org/licenses/MIT). 