// Tunggu hingga DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Efek typing untuk nama
    const typingText = document.querySelector('.typing-text');
    const cursor = document.querySelector('.cursor');
    const nameText = "Fauzan Nur Hafidz"; // Ganti dengan nama Anda
    let i = 0;
    let isDeleting = false;
    let isPaused = false;
    let pauseTime = 0;
    
    function typeWriter() {
        // Jika sedang pause, tunggu sebelum melanjutkan
        if (isPaused) {
            pauseTime--;
            if (pauseTime <= 0) {
                isPaused = false;
            }
            setTimeout(typeWriter, 100);
            return;
        }
        
        // Menghapus teks
        if (isDeleting) {
            typingText.textContent = nameText.substring(0, i);
            i--;
            
            // Jika sudah terhapus semua, mulai mengetik lagi
            if (i < 0) {
                isDeleting = false;
                isPaused = true;
                pauseTime = 10; // Pause selama 1 detik (10 * 100ms)
            }
            
            setTimeout(typeWriter, 75); // Kecepatan menghapus
        } 
        // Mengetik teks
        else {
            typingText.textContent = nameText.substring(0, i + 1);
            i++;
            
            // Jika sudah selesai mengetik, mulai menghapus setelah pause
            if (i >= nameText.length) {
                isPaused = true;
                pauseTime = 30; // Pause selama 3 detik (30 * 100ms)
                isDeleting = true;
            }
            
            setTimeout(typeWriter, 150); // Kecepatan mengetik
        }
    }
    
    // Mulai efek typing setelah sedikit delay
    setTimeout(typeWriter, 1000);

    // Inisialisasi Particles.js untuk hero section
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#0ea5e9"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0ea5e9",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('fade');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    // Variabel untuk elemen-elemen yang akan dimanipulasi
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Fungsi untuk navigasi mobile
    function toggleNav() {
        // Toggle class active pada navLinks
        navLinks.classList.toggle('active');
        // Animasi burger menu
        burger.classList.toggle('active');
        // Disable scroll saat menu terbuka
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Event listener untuk burger menu
    burger.addEventListener('click', toggleNav);

    // Event listener untuk scroll
    window.addEventListener('scroll', () => {
        // Tambahkan class scrolled pada header saat scroll
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll untuk link navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Tutup menu mobile jika terbuka
            if (navLinks.classList.contains('active')) {
                toggleNav();
            }

            // Scroll ke elemen target
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Filter proyek
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Hapus class active dari semua tombol filter
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Tambahkan class active ke tombol yang diklik
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Tampilkan proyek berdasarkan filter
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Galeri Modal
    const galleryModal = document.querySelector('.gallery-modal');
    const galleryClose = document.querySelector('.gallery-close');
    const galleryMain = document.querySelector('.gallery-main img');
    const galleryThumbs = document.querySelector('.gallery-thumbs');
    const galleryTitle = document.querySelector('.gallery-title');
    const galleryPrev = document.querySelector('.gallery-prev');
    const galleryNext = document.querySelector('.gallery-next');
    const galleryBtns = document.querySelectorAll('.view-gallery-btn');
    const galleryZoom = document.createElement('button'); // Tambah tombol zoom
    galleryZoom.className = 'gallery-zoom';
    galleryZoom.innerHTML = '<i class="fas fa-search-plus"></i>';
    
    let isZoomed = false; // Status zoom

    // Data galeri proyek (dalam implementasi nyata, ini bisa diambil dari API atau database)
    const projectGalleries = {
        project1: {
            title: 'Cluster Perumahan',
            images: [
                { src: 'img/cluster/1.jpg', alt: 'E-Commerce Homepage' },
                { src: 'img/cluster/2.jpg', alt: 'Product Listing' },
                { src: 'img/cluster/3.jpg', alt: 'Product Detail' },
                { src: 'img/cluster/4.jpg', alt: 'Shopping Cart' },
                { src: 'img/cluster/5.jpg', alt: 'Checkout Process' },
                { src: 'img/cluster/6.jpg', alt: 'Admin Dashboard' },
                { src: 'img/cluster/7.jpg', alt: 'Admin Dashboard' },
                { src: 'img/cluster/8.jpg', alt: 'Admin Dashboard' },
                { src: 'img/cluster/9.jpg', alt: 'Admin Dashboard' },
                { src: 'img/cluster/10.jpg', alt: 'Admin Dashboard' },
                { src: 'img/cluster/11.jpg', alt: 'Admin Dashboard' },
                { src: 'img/cluster/12.jpg', alt: 'Admin Dashboard' },
            ]
        },
        project2: {
            title: 'Organizer Wedding',
            images: [
                { src: 'img/sam/1.png', alt: 'Task App Homepage' },
                { src: 'img/sam/2.png', alt: 'Task List View' },
                { src: 'img/sam/3.png', alt: 'Add New Task' },
                { src: 'img/sam/4.png', alt: 'Calendar View' },
                { src: 'img/sam/5.png', alt: 'Task Categories' },
                { src: 'img/sam/6.png', alt: 'Task Statistics' }
            ]
        },
        project3: {
            title: 'Pusat Pembelanjaan Online',
            images: [
                { src: 'img/flex/1.png', alt: 'Dashboard Overview' },
                { src: 'img/flex/2.png', alt: 'Analytics Panel' },
                { src: 'img/flex/3.png', alt: 'User Management' },
                { src: 'img/flex/4.png', alt: 'Settings Page' },
            ]
        },
        project4: {
            title: 'Blog Platform',
            images: [
                { src: 'img/project4.jpg', alt: 'Blog Homepage' },
                { src: 'img/project4-1.jpg', alt: 'Article Page' },
                { src: 'img/project4-2.jpg', alt: 'Author Profile' },
                { src: 'img/project4-3.jpg', alt: 'Comment Section' },
                { src: 'img/project4-4.jpg', alt: 'Content Editor' },
                { src: 'img/project4-5.jpg', alt: 'Category Page' }
            ]
        },
        project5: {
            title: 'Sistem Manajemen Kosan Digital',
            images: [
                { src: 'img/kosan/1.png', alt: 'Dashboard Kosan' },
                { src: 'img/kosan/2.jpg', alt: 'Pendaftaran Penyewa' },
                { src: 'img/kosan/3.jpg', alt: 'Pengelolaan Kamar' },
                { src: 'img/kosan/4.jpg', alt: 'Tagihan Bulanan' },
                { src: 'img/kosan/5.jpg', alt: 'Notifikasi Otomatis' },
                { src: 'img/kosan/6.jpg', alt: 'Monitoring Pembayaran' },
                { src: 'img/kosan/7.jpg', alt: 'Monitoring Pembayaran' },
                { src: 'img/kosan/8.png', alt: 'Monitoring Pembayaran' },
                { src: 'img/kosan/9.png', alt: 'Monitoring Pembayaran' },
                { src: 'img/kosan/10.png', alt: 'Monitoring Pembayaran' },
                { src: 'img/kosan/11.png', alt: 'Monitoring Pembayaran' },
                { src: 'img/kosan/12.png', alt: 'Monitoring Pembayaran' },
                { src: 'img/kosan/13.png', alt: 'Monitoring Pembayaran' },
            ]
        },
        project6: {
            title: 'Kasir Virtual Resto HJ Nuridah',
            images: [
                { src: 'img/dapur/d1.png', alt: 'Halaman Utama Menu' },
                { src: 'img/dapur/d2.png', alt: 'Kategori Menu' },
                { src: 'img/dapur/d3.png', alt: 'Detail Produk' },
                { src: 'img/dapur/d4.png', alt: 'Keranjang Belanja' },
                { src: 'img/dapur/d5.png', alt: 'Proses Checkout' },
                { src: 'img/dapur/d6.png', alt: 'Pembayaran Digital' },
            ]
        }
    };

    // Variabel untuk menyimpan data galeri yang aktif
    let currentGallery = null;
    let currentIndex = 0;

    // Fungsi untuk membuka galeri
    function openGallery(projectId) {
        // Dapatkan data galeri
        currentGallery = projectGalleries[projectId];
        currentIndex = 0;
        isZoomed = false; // Reset status zoom

        if (!currentGallery) return;

        // Set judul galeri
        galleryTitle.textContent = currentGallery.title;

        // Buat thumbnail
        galleryThumbs.innerHTML = '';
        currentGallery.images.forEach((image, index) => {
            const thumb = document.createElement('div');
            thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
            thumb.addEventListener('click', () => {
                showImage(index);
            });
            galleryThumbs.appendChild(thumb);
        });

        // Tampilkan gambar pertama
        showImage(0);

        // Tambahkan tombol zoom ke container
        const galleryMainContainer = document.querySelector('.gallery-main');
        if (!galleryMainContainer.querySelector('.gallery-zoom')) {
            galleryMainContainer.appendChild(galleryZoom);
        }

        // Tampilkan modal
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Fungsi untuk menampilkan gambar
    function showImage(index) {
        if (!currentGallery) return;

        currentIndex = index;
        isZoomed = false; // Reset zoom saat ganti gambar
        
        // Validasi index
        if (currentIndex < 0) {
            currentIndex = currentGallery.images.length - 1;
        } else if (currentIndex >= currentGallery.images.length) {
            currentIndex = 0;
        }

        // Update gambar utama
        const image = currentGallery.images[currentIndex];
        galleryMain.src = image.src;
        galleryMain.alt = image.alt;
        galleryMain.style.transform = 'scale(1)';
        galleryMain.style.cursor = 'default';

        // Update thumbnail aktif
        const thumbs = galleryThumbs.querySelectorAll('.gallery-thumb');
        thumbs.forEach((thumb, i) => {
            if (i === currentIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
        
        // Update ikon zoom
        galleryZoom.innerHTML = '<i class="fas fa-search-plus"></i>';
    }

    // Fungsi untuk zoom gambar
    function toggleZoom() {
        isZoomed = !isZoomed;
        
        if (isZoomed) {
            galleryMain.style.transform = 'scale(1.5)';
            galleryMain.style.cursor = 'move';
            galleryZoom.innerHTML = '<i class="fas fa-search-minus"></i>';
        } else {
            galleryMain.style.transform = 'scale(1)';
            galleryMain.style.cursor = 'default';
            galleryZoom.innerHTML = '<i class="fas fa-search-plus"></i>';
        }
    }
    
    // Event listener untuk tombol zoom
    galleryZoom.addEventListener('click', toggleZoom);
    
    // Event listener untuk drag gambar saat zoom
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;
    
    galleryMain.addEventListener('mousedown', (e) => {
        if (!isZoomed) return;
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        galleryMain.style.transition = 'none';
    });
    
    galleryMain.addEventListener('mousemove', (e) => {
        if (!isDragging || !isZoomed) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        
        // Batasi pergerakan
        const maxTranslate = 150;
        translateX = Math.max(-maxTranslate, Math.min(translateX, maxTranslate));
        translateY = Math.max(-maxTranslate, Math.min(translateY, maxTranslate));
        
        galleryMain.style.transform = `scale(1.5) translate(${translateX}px, ${translateY}px)`;
    });
    
    galleryMain.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    galleryMain.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    // Event listener untuk tombol galeri
    galleryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            openGallery(projectId);
        });
    });

    // Event listener untuk tombol tutup galeri
    galleryClose.addEventListener('click', () => {
        galleryModal.classList.remove('active');
        document.body.style.overflow = '';
        isZoomed = false; // Reset zoom saat tutup galeri
        translateX = 0;
        translateY = 0;
    });

    // Event listener untuk tombol navigasi galeri
    galleryPrev.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    galleryNext.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    // Event listener untuk keyboard
    document.addEventListener('keydown', e => {
        if (!galleryModal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            galleryModal.classList.remove('active');
            document.body.style.overflow = '';
            isZoomed = false; // Reset zoom saat tutup galeri
            translateX = 0;
            translateY = 0;
        } else if (e.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        } else if (e.key === 'z' || e.key === 'Z') {
            toggleZoom(); // Zoom dengan keyboard
        }
    });

    // Event listener untuk klik di luar konten galeri
    galleryModal.addEventListener('click', e => {
        if (e.target === galleryModal) {
            galleryModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Dapatkan nilai input
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validasi form sederhana
            if (!name || !email || !subject || !message) {
                alert('Mohon isi semua kolom!');
                return;
            }
            
            // Validasi email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Mohon masukkan alamat email yang valid!');
                return;
            }
            
            // Simulasi pengiriman form
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Mengirim...';
            
            setTimeout(() => {
                alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
                
                // Reset form
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }

    // Animasi pada scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .about-content, .skill-item, .project-card, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    // Panggil animasi saat scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Panggil animasi saat halaman dimuat
    setTimeout(animateOnScroll, 500);

    // Tambahkan animasi CSS untuk elemen yang dianimasikan
    const style = document.createElement('style');
    style.innerHTML = `
        .section-title, .about-content, .skill-item, .project-card, .contact-content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .section-title.visible, .about-content.visible, .skill-item.visible, .project-card.visible, .contact-content.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .skill-item, .project-card {
            transition-delay: calc(0.1s * var(--i, 0));
        }
    `;
    document.head.appendChild(style);

    // Tambahkan delay untuk animasi elemen berurutan
    document.querySelectorAll('.skill-item, .project-card').forEach((el, i) => {
        el.style.setProperty('--i', i % 4);
    });
});
