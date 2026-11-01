/**
 * ============================================================================
 * PORTFOLIO TRẦN ĐỨC - INTERACTIVE JAVASCRIPT ENGINE (main.js)
 * Author: Trần Đức (17/06/2008) - Web/App Developer | HCMUIT Freshman
 * Featured Project: Nihongo NAKAMA (Đồ Án Web Học Tiếng Nhật)
 * ============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const EMAIL_ADDRESS = 'tranduc6525@gmail.com';

    /* ========================================================================
     * 0. TOAST NOTIFICATION SYSTEM (#toast-notification)
     * ======================================================================== */
    const toastEl = document.getElementById('toast-notification');
    let toastTimeoutId = null;

    /**
     * Hiển thị thông báo Toast góc màn hình
     * @param {string} message Nội dung thông báo
     * @param {number} duration Thời gian hiển thị (ms)
     */
    function showToast(message, duration = 3200) {
        if (!toastEl) return;

        const messageSpan =
            toastEl.querySelector('#toast-message, .toast-message, .toast-text') ||
            toastEl.querySelector('span:last-child');

        if (messageSpan && messageSpan !== toastEl) {
            messageSpan.textContent = message;
        } else {
            toastEl.textContent = message;
        }

        toastEl.classList.add('show', 'active', 'visible');
        toastEl.setAttribute('aria-hidden', 'false');

        if (toastTimeoutId) {
            clearTimeout(toastTimeoutId);
        }

        toastTimeoutId = setTimeout(() => {
            toastEl.classList.remove('show', 'active', 'visible');
            toastEl.setAttribute('aria-hidden', 'true');
        }, duration);
    }

    /* ========================================================================
     * 1. TYPEWRITER EFFECT (#typewriter-text)
     * ======================================================================== */
    function initTypewriter() {
        const typewriterEl = document.getElementById('typewriter-text');
        if (!typewriterEl) return;

        const phrases = [
            'Web/App Developer',
            'Sinh viên Năm Nhất HCMUIT',
            'Cựu Chuyên Tin Thoại Ngọc Hầu',
            'Creator of Nihongo NAKAMA 🇯🇵'
        ];

        // Tách chuỗi theo grapheme/code-point để không làm vỡ emoji cờ Nhật 🇯🇵
        const splitGraphemes = (str) => {
            if (typeof Intl !== 'undefined' && Intl.Segmenter) {
                const segmenter = new Intl.Segmenter('vi', { granularity: 'grapheme' });
                return Array.from(segmenter.segment(str), (s) => s.segment);
            }
            return Array.from(str);
        };

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const TYPE_SPEED = 75;
        const DELETE_SPEED = 40;
        const PAUSE_END = 1900;
        const PAUSE_START = 350;

        function tick() {
            const currentChars = splitGraphemes(phrases[phraseIndex]);

            if (!isDeleting) {
                charIndex++;
                typewriterEl.textContent = currentChars.slice(0, charIndex).join('');

                if (charIndex >= currentChars.length) {
                    isDeleting = true;
                    setTimeout(tick, PAUSE_END);
                    return;
                }
                setTimeout(tick, TYPE_SPEED);
            } else {
                charIndex--;
                typewriterEl.textContent = currentChars.slice(0, charIndex).join('');

                if (charIndex <= 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(tick, PAUSE_START);
                    return;
                }
                setTimeout(tick, DELETE_SPEED);
            }
        }

        tick();
    }

    /* ========================================================================
     * 2. DYNAMIC AGE CALCULATION (#dynamic-age) - DOB: 17/06/2008
     * ======================================================================== */
    function initDynamicAge() {
        const ageEl = document.getElementById('dynamic-age');
        if (!ageEl) return;

        const birthDate = new Date(2008, 5, 17); // Tháng 6 là index 5 (0-based)
        const now = new Date();

        let age = now.getFullYear() - birthDate.getFullYear();
        const monthDiff = now.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
            age--;
        }

        // Đảm bảo giá trị hợp lệ (Trần Đức sinh năm 2008 -> 17-18+ tuổi)
        if (age < 16 || Number.isNaN(age)) {
            age = 18;
        }

        const existingText = ageEl.textContent.trim().toLowerCase();
        const parentText = ageEl.parentElement ? ageEl.parentElement.textContent.toLowerCase() : '';
        const parentHasTuoiOutside =
            parentText.replace(existingText, '').includes('tuổi');

        if (existingText.includes('tuổi') || !parentHasTuoiOutside) {
            ageEl.textContent = `${age} tuổi`;
        } else {
            ageEl.textContent = `${age}`;
        }
    }

    /* ========================================================================
     * 3. DARK / LIGHT THEME TOGGLE (#theme-toggle, #theme-icon)
     * ======================================================================== */
    function initThemeToggle() {
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const rootEl = document.documentElement;

        const savedTheme = localStorage.getItem('theme');
        const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';

        function applyTheme(theme, notify = false) {
            rootEl.setAttribute('data-theme', theme);
            document.body.setAttribute('data-theme', theme);
            document.body.classList.toggle('light-theme', theme === 'light');
            document.body.classList.toggle('dark-theme', theme === 'dark');

            if (themeIcon) {
                themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
            }

            if (themeToggleBtn) {
                themeToggleBtn.setAttribute(
                    'aria-label',
                    theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'
                );
                themeToggleBtn.setAttribute(
                    'title',
                    theme === 'dark' ? 'Chế độ Tối (Nhấn để chuyển sang Sáng)' : 'Chế độ Sáng (Nhấn để chuyển sang Tối)'
                );
            }

            try {
                localStorage.setItem('theme', theme);
            } catch (_) {
                // Bỏ qua nếu trình duyệt chặn localStorage ở chế độ ẩn danh nghiêm ngặt
            }

            if (notify) {
                showToast(
                    theme === 'dark'
                        ? '🌙 Đã chuyển sang giao diện Tối (Dark Mode)'
                        : '☀️ Đã chuyển sang giao diện Sáng (Light Mode)',
                    2200
                );
            }
        }

        applyTheme(initialTheme, false);

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = rootEl.getAttribute('data-theme') || 'dark';
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme, true);
            });
        }
    }

    /* ========================================================================
     * 4. NAVBAR SCROLL, MOBILE MENU & SCROLL SPY (#navbar, #mobile-menu-btn, #nav-menu, #back-to-top)
     * ======================================================================== */
    function initNavigationAndScroll() {
        const navbar = document.getElementById('navbar') || document.querySelector('.navbar');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const backToTopBtn = document.getElementById('back-to-top');
        const sections = document.querySelectorAll('section[id]');

        function closeMobileMenu() {
            if (mobileMenuBtn && navMenu) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }

        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = navMenu.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active', isOpen);
                mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
            });

            // Đóng menu khi click vào bất kỳ .nav-link nào
            navLinks.forEach((link) => {
                link.addEventListener('click', () => {
                    closeMobileMenu();
                });
            });

            // Đóng menu khi click ra ngoài vùng navbar
            document.addEventListener('click', (e) => {
                if (
                    navMenu.classList.contains('active') &&
                    !navMenu.contains(e.target) &&
                    !mobileMenuBtn.contains(e.target)
                ) {
                    closeMobileMenu();
                }
            });

            // Đóng menu khi nhấn phím Escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        }

        function handleScroll() {
            const scrollY = window.scrollY || window.pageYOffset;

            // 1. Navbar .scrolled khi cuộn > 40px
            if (navbar) {
                navbar.classList.toggle('scrolled', scrollY > 40);
            }

            // 2. Nút #back-to-top hiện khi cuộn xuống
            if (backToTopBtn) {
                const showBackToTop = scrollY > 320;
                backToTopBtn.classList.toggle('visible', showBackToTop);
                backToTopBtn.classList.toggle('active', showBackToTop);
            }

            // 3. Scroll Spy: Highlight .nav-link.active theo section hiện tại
            if (sections.length > 0 && navLinks.length > 0) {
                let currentSectionId = '';
                const scrollCheckPos = scrollY + 160;

                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollCheckPos >= sectionTop && scrollCheckPos < sectionTop + sectionHeight) {
                        currentSectionId = section.getAttribute('id') || '';
                    }
                });

                // Nếu ở gần đầu trang, chọn section đầu tiên (hero)
                if (!currentSectionId && scrollY < 200 && sections[0]) {
                    currentSectionId = sections[0].getAttribute('id') || '';
                }

                if (currentSectionId) {
                    navLinks.forEach((link) => {
                        const href = link.getAttribute('href') || '';
                        const isActive = href === `#${currentSectionId}`;
                        link.classList.toggle('active', isActive);
                    });
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    /* ========================================================================
     * 5. SCROLL REVEAL & SKILL PROGRESS ANIMATION (.reveal, .skill-card, .skill-progress)
     * ======================================================================== */
    function animateSkillBarsIn(container = document) {
        const progressBars = container.querySelectorAll('.skill-progress');
        progressBars.forEach((bar) => {
            const rawWidth = bar.getAttribute('data-width');
            if (!rawWidth) return;
            const formattedWidth = String(rawWidth).trim().endsWith('%')
                ? String(rawWidth).trim()
                : `${String(rawWidth).trim()}%`;
            bar.style.width = formattedWidth;
        });
    }

    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        const skillCards = document.querySelectorAll('.skill-card');
        const allProgressBars = document.querySelectorAll('.skill-progress');

        if (!('IntersectionObserver' in window)) {
            revealElements.forEach((el) => el.classList.add('active', 'visible'));
            animateSkillBarsIn(document);
            return;
        }

        // Đặt chiều rộng ban đầu về 0% để hiệu ứng chạy mượt khi cuộn tới
        allProgressBars.forEach((bar) => {
            bar.style.width = '0%';
        });

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        target.classList.add('active', 'visible');

                        if (target.classList.contains('skill-card') || target.querySelector('.skill-progress')) {
                            requestAnimationFrame(() => {
                                animateSkillBarsIn(target);
                            });
                        }

                        observer.unobserve(target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        revealElements.forEach((el) => revealObserver.observe(el));

        // Đảm bảo mọi .skill-card (kể cả khi không gắn .reveal) cũng animate thanh tiến độ khi xuất hiện
        const skillObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(() => {
                            animateSkillBarsIn(entry.target);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        skillCards.forEach((card) => skillObserver.observe(card));
    }

    /* ========================================================================
     * 6. SKILLS FILTER (.filter-btn, .skill-card)
     * ======================================================================== */
    function initSkillsFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const skillCards = document.querySelectorAll('.skill-card');

        if (filterBtns.length === 0 || skillCards.length === 0) return;

        filterBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const selectedFilter = (btn.getAttribute('data-filter') || 'all').trim().toLowerCase();

                filterBtns.forEach((b) => {
                    const isActive = b === btn;
                    b.classList.toggle('active', isActive);
                    b.setAttribute('aria-selected', String(isActive));
                });

                skillCards.forEach((card) => {
                    const cardCategory = (
                        card.getAttribute('data-category') ||
                        card.getAttribute('data-filter') ||
                        ''
                    )
                        .trim()
                        .toLowerCase();

                    const categories = cardCategory.split(/\s+/);
                    const shouldShow =
                        selectedFilter === 'all' ||
                        cardCategory === selectedFilter ||
                        categories.includes(selectedFilter);

                    if (shouldShow) {
                        card.classList.remove('hidden');
                        card.classList.add('active', 'visible');
                        animateSkillBarsIn(card);
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    /* ========================================================================
     * 7. INTERACTIVE MINI-APP: "NIHONGO NAKAMA" (#nakama-widget)
     * ======================================================================== */
    function initNakamaMiniApp() {
        const widget = document.getElementById('nakama-widget');
        if (!widget) return;

        const flashcard = document.getElementById('nakama-flashcard');
        const tabButtons = document.querySelectorAll('.nakama-tab');
        const prevBtn = document.getElementById('nakama-prev-btn');
        const nextBtn = document.getElementById('nakama-next-btn');
        const flipBtn = document.getElementById('nakama-flip-btn');
        const speakBtn = document.getElementById('nakama-speak-btn');
        const tryNakamaBtn = document.getElementById('try-nakama-btn');

        const counterEl = document.getElementById('nakama-counter');
        const levelEl = document.getElementById('nakama-level');
        const jpEl = document.getElementById('nakama-jp');
        const romajiEl = document.getElementById('nakama-romaji');
        const viEl = document.getElementById('nakama-vi');
        const exampleEl = document.getElementById('nakama-example');

        // Cơ sở dữ liệu 3 bộ thẻ tiếng Nhật của dự án Nihongo NAKAMA
        const NAKAMA_DECKS = {
            vocab: [
                {
                    level: 'JLPT N4 • Từ Vựng',
                    jp: '仲間',
                    romaji: 'なかま • nakama',
                    vi: 'Bạn đồng hành / Đồng đội',
                    example: 'Ví dụ: 私たちは最高の仲間です。(Chúng ta là những người bạn đồng hành tuyệt vời nhất.)',
                    speakText: 'なかま'
                },
                {
                    level: 'JLPT N3 • IT Vocab',
                    jp: '開発者',
                    romaji: 'かいはつしゃ • kaihatsusha',
                    vi: 'Lập trình viên / Nhà phát triển',
                    example: 'Ví dụ: Webとアプリの開発者を目指しています。(Tôi hướng tới trở thành nhà phát triển Web & App.)',
                    speakText: 'かいはつしゃ'
                },
                {
                    level: 'JLPT N5 • Từ Vựng',
                    jp: '大学生',
                    romaji: 'だいがくせい • daigakusei',
                    vi: 'Sinh viên đại học',
                    example: 'Ví dụ: HCMUITの1年生の大学生です。(Tôi là sinh viên năm nhất trường ĐH CNTT - HCMUIT.)',
                    speakText: 'だいがくせい'
                },
                {
                    level: 'JLPT N4 • Từ Vựng',
                    jp: '未来',
                    romaji: 'みらい • mirai',
                    vi: 'Tương lai',
                    example: 'Ví dụ: テクノロジーで新しい未来を創る。(Kiến tạo tương lai mới bằng công nghệ.)',
                    speakText: 'みらい'
                },
                {
                    level: 'JLPT N3 • Từ Vựng',
                    jp: '挑戦',
                    romaji: 'ちょうせん • chousen',
                    vi: 'Thử thách / Chinh phục',
                    example: 'Ví dụ: 新しい技術に毎日挑戦する。(Mỗi ngày đều chinh phục những công nghệ mới.)',
                    speakText: 'ちょうせん'
                },
                {
                    level: 'JLPT N3 • Từ Vựng',
                    jp: '情熱',
                    romaji: 'じょうねつ • jounetsu',
                    vi: 'Nhiệt huyết / Đam mê',
                    example: 'Ví dụ: プログラミングへの情熱を持ち続ける。(Luôn giữ vững ngọn lửa đam mê lập trình.)',
                    speakText: 'じょうねつ'
                }
            ],
            kana: [
                {
                    level: 'Kana • Hàng A (Nguyên âm)',
                    jp: 'あ / ア',
                    romaji: 'Phát âm: a (Hiragana: あ • Katakana: ア)',
                    vi: 'Chữ A trong bảng chữ cái tiếng Nhật',
                    example: 'Từ vựng mẫu: あい (Ai - Tình yêu) • アプリ (Apuri - Ứng dụng / App)',
                    speakText: 'あ'
                },
                {
                    level: 'Kana • Hàng KA',
                    jp: 'か / カ',
                    romaji: 'Phát âm: ka (Hiragana: か • Katakana: カ)',
                    vi: 'Chữ KA trong bảng chữ cái tiếng Nhật',
                    example: 'Từ vựng mẫu: かさ (Kasa - Chiếc ô) • カメラ (Kamera - Máy ảnh)',
                    speakText: 'か'
                },
                {
                    level: 'Kana • Hàng SA',
                    jp: 'さ / サ',
                    romaji: 'Phát âm: sa (Hiragana: さ • Katakana: サ)',
                    vi: 'Chữ SA trong bảng chữ cái tiếng Nhật',
                    example: 'Từ vựng mẫu: さくら (Sakura - Hoa anh đào) • サーバー (Saabaa - Máy chủ Server)',
                    speakText: 'さ'
                },
                {
                    level: 'Kana • Hàng TA',
                    jp: 'た / タ',
                    romaji: 'Phát âm: ta (Hiragana: た • Katakana: タ)',
                    vi: 'Chữ TA trong bảng chữ cái tiếng Nhật',
                    example: 'Từ vựng mẫu: たいよう (Taiyou - Mặt trời) • タブレット (Taburetto - Máy tính bảng)',
                    speakText: 'た'
                },
                {
                    level: 'Kana • Hàng NA',
                    jp: 'な / ナ',
                    romaji: 'Phát âm: na (Hiragana: な • Katakana: ナ)',
                    vi: 'Chữ NA trong bảng chữ cái tiếng Nhật',
                    example: 'Từ vựng mẫu: なかま (Nakama - Bạn đồng hành) • ナビ (Nabi - Điều hướng Navigation)',
                    speakText: 'な'
                },
                {
                    level: 'Kana • Hàng HA',
                    jp: 'は / ハ',
                    romaji: 'Phát âm: ha (Hiragana: は • Katakana: ハ)',
                    vi: 'Chữ HA trong bảng chữ cái tiếng Nhật',
                    example: 'Từ vựng mẫu: はな (Hana - Bông hoa) • ハードウェア (Haadowea - Phần cứng)',
                    speakText: 'は'
                }
            ],
            kanji: [
                {
                    level: 'Kanji N5 • Hán Tự Cốt Lõi',
                    jp: '学',
                    romaji: 'Âm đọc: がく (gaku) / まな.ぶ (manabu)',
                    vi: 'Hán Việt: HỌC • Nghĩa: Học tập, tri thức',
                    example: 'Ghép từ: 大学 (Daigaku - Đại học) • 学生 (Gakusei - Sinh viên) • 学ぶ (Manabu - Học hỏi)',
                    speakText: 'まなぶ'
                },
                {
                    level: 'Kanji N3 • Chuyên Ngành CNTT',
                    jp: '情報',
                    romaji: 'Âm đọc: じょうほう (jouhou)',
                    vi: 'Hán Việt: TÌNH BÁO • Nghĩa: Thông tin, Tin học',
                    example: 'Ghép từ: 情報技術 (Jouhou Gijutsu - Công nghệ thông tin / IT)',
                    speakText: 'じょうほう'
                },
                {
                    level: 'Kanji N5 • Hán Tự Cốt Lõi',
                    jp: '語',
                    romaji: 'Âm đọc: ご (go) / かた.る (kataru)',
                    vi: 'Hán Việt: NGỮ • Nghĩa: Ngôn ngữ, lời nói',
                    example: 'Ghép từ: 日本語 (Nihongo - Tiếng Nhật) • 単語 (Tango - Từ vựng)',
                    speakText: 'にほんご'
                },
                {
                    level: 'Kanji N5 • Hán Tự Cốt Lõi',
                    jp: '友',
                    romaji: 'Âm đọc: ゆう (yuu) / とも (tomo)',
                    vi: 'Hán Việt: HỮU • Nghĩa: Bạn bè, bằng hữu',
                    example: 'Ghép từ: 友達 (Tomodachi - Bạn bè) • 親友 (Shinyuu - Bạn thân)',
                    speakText: 'ともだち'
                },
                {
                    level: 'Kanji N5 • Hán Tự Cốt Lõi',
                    jp: '道',
                    romaji: 'Âm đọc: どう (dou) / みち (michi)',
                    vi: 'Hán Việt: ĐẠO • Nghĩa: Con đường, đạo lý',
                    example: 'Ghép từ: 自分の道を進む (Jibun no michi wo susumu - Tiến bước trên con đường của mình)',
                    speakText: 'みち'
                },
                {
                    level: 'Kanji N4 • Hán Tự Truyền Cảm Hứng',
                    jp: '夢',
                    romaji: 'Âm đọc: む (mu) / ゆめ (yume)',
                    vi: 'Hán Việt: MỘNG • Nghĩa: Ước mơ, hoài bão',
                    example: 'Ghép từ: 夢を実現する (Yume wo jitsugen suru - Hiện thực hóa ước mơ)',
                    speakText: 'ゆめ'
                }
            ]
        };

        let currentDeckKey = 'vocab';
        let currentCardIndex = 0;

        function renderCard(resetFlip = true) {
            const deck = NAKAMA_DECKS[currentDeckKey] || NAKAMA_DECKS.vocab;
            const card = deck[currentCardIndex] || deck[0];

            if (resetFlip && flashcard) {
                flashcard.classList.remove('is-flipped');
            }

            const updateContent = () => {
                if (counterEl) {
                    counterEl.textContent = `${currentCardIndex + 1} / ${deck.length}`;
                }
                if (levelEl) {
                    levelEl.textContent = card.level;
                }
                if (jpEl) {
                    jpEl.textContent = card.jp;
                }
                if (romajiEl) {
                    romajiEl.textContent = card.romaji;
                }
                if (viEl) {
                    viEl.textContent = card.vi;
                }
                if (exampleEl) {
                    exampleEl.textContent = card.example;
                }
            };

            if (resetFlip && flashcard && flashcard.classList.contains('is-flipped')) {
                setTimeout(updateContent, 150);
            } else {
                updateContent();
            }
        }

        function toggleFlip() {
            if (!flashcard) return;
            flashcard.classList.toggle('is-flipped');
        }

        function goToPrevCard() {
            const deck = NAKAMA_DECKS[currentDeckKey] || NAKAMA_DECKS.vocab;
            currentCardIndex = (currentCardIndex - 1 + deck.length) % deck.length;
            renderCard(true);
        }

        function goToNextCard() {
            const deck = NAKAMA_DECKS[currentDeckKey] || NAKAMA_DECKS.vocab;
            currentCardIndex = (currentCardIndex + 1) % deck.length;
            renderCard(true);
        }

        function speakCurrentCard(e) {
            if (e) {
                e.stopPropagation();
            }

            const deck = NAKAMA_DECKS[currentDeckKey] || NAKAMA_DECKS.vocab;
            const card = deck[currentCardIndex] || deck[0];
            const textToSpeak = card.speakText || card.jp;

            if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
                showToast(`🔊 Phát âm mẫu: "${card.jp}" (${card.romaji})`);
                return;
            }

            try {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'ja-JP';
                utterance.rate = 0.92;
                utterance.pitch = 1.0;

                const voices = window.speechSynthesis.getVoices();
                const jpVoice = voices.find(
                    (v) => v.lang && (v.lang.toLowerCase().startsWith('ja') || v.lang.includes('JP'))
                );
                if (jpVoice) {
                    utterance.voice = jpVoice;
                }

                window.speechSynthesis.speak(utterance);
                showToast(`🔊 Đang phát âm tiếng Nhật: "${card.jp}" (${card.romaji})`, 2400);
            } catch (_) {
                showToast(`🔊 Phát âm: "${card.jp}" — ${card.romaji}`, 2400);
            }
        }

        // Sự kiện chuyển bộ thẻ (.nakama-tab)
        tabButtons.forEach((tab) => {
            tab.addEventListener('click', () => {
                const deckName = tab.getAttribute('data-deck');
                if (!deckName || !NAKAMA_DECKS[deckName]) return;

                currentDeckKey = deckName;
                currentCardIndex = 0;

                tabButtons.forEach((t) => {
                    const isActive = t === tab;
                    t.classList.toggle('active', isActive);
                    t.setAttribute('aria-selected', String(isActive));
                });

                renderCard(true);
            });
        });

        // Sự kiện lật thẻ khi click vào #nakama-flashcard hoặc nhấn Space / Enter
        if (flashcard) {
            flashcard.addEventListener('click', (e) => {
                if (e.target.closest('button')) return;
                toggleFlip();
            });

            flashcard.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    toggleFlip();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    goToNextCard();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    goToPrevCard();
                }
            });
        }

        if (flipBtn) {
            flipBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFlip();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', goToPrevCard);
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', goToNextCard);
        }

        if (speakBtn) {
            speakBtn.addEventListener('click', speakCurrentCard);
        }

        // Nút #try-nakama-btn: cuộn mượt tới #nakama-widget, làm nổi bật và lật thẻ demo
        if (tryNakamaBtn) {
            tryNakamaBtn.addEventListener('click', (e) => {
                e.preventDefault();
                widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
                widget.classList.add('highlight-pulse');

                showToast('🇯🇵 Chào mừng bạn trải nghiệm Mini Flashcard của Nihongo NAKAMA!', 3000);

                setTimeout(() => {
                    if (flashcard) {
                        flashcard.classList.toggle('is-flipped');
                        flashcard.focus({ preventScroll: true });
                    }
                }, 550);

                setTimeout(() => {
                    widget.classList.remove('highlight-pulse');
                }, 1800);
            });
        }

        // Khởi tạo thẻ đầu tiên
        renderCard(false);
    }

    /* ========================================================================
     * 8. COPY EMAIL (#copy-email-btn, #hero-copy-email) & CLIPBOARD HANDLER
     * ======================================================================== */
    function initCopyEmail() {
        const copyButtons = [
            document.getElementById('copy-email-btn'),
            document.getElementById('hero-copy-email')
        ].filter(Boolean);

        async function copyTextToClipboard(text) {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            }

            // Fallback cho môi trường không có Clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            textArea.style.top = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(textArea);
            return ok;
        }

        copyButtons.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                const emailToCopy = btn.getAttribute('data-email') || EMAIL_ADDRESS;

                try {
                    await copyTextToClipboard(emailToCopy);
                    showToast(`📋 Đã sao chép email: ${emailToCopy}`);
                } catch (_) {
                    showToast(`📧 Email của Trần Đức: ${emailToCopy}`);
                }
            });
        });
    }

    /* ========================================================================
     * 9. CONTACT FORM HANDLER (#contact-form)
     * ======================================================================== */
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');

        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('sender-name');
            const emailInput = document.getElementById('sender-email');
            const subjectInput = document.getElementById('sender-subject');
            const messageInput = document.getElementById('sender-message');

            const senderName = nameInput ? nameInput.value.trim() : '';
            const senderEmail = emailInput ? emailInput.value.trim() : '';
            const senderSubject = subjectInput ? subjectInput.value.trim() : '';
            const senderMessage = messageInput ? messageInput.value.trim() : '';

            if (!senderName || !senderEmail || !senderMessage) {
                if (formStatus) {
                    formStatus.textContent = '⚠️ Vui lòng điền đầy đủ Họ tên, Email và Nội dung tin nhắn.';
                    formStatus.className = 'form-status error visible';
                }
                showToast('⚠️ Vui lòng điền đầy đủ thông tin bắt buộc!');
                return;
            }

            const finalSubject = senderSubject
                ? `[Portfolio Trần Đức] ${senderSubject}`
                : `[Portfolio Trần Đức] Liên hệ từ ${senderName}`;

            const finalBody = [
                `Xin chào Trần Đức,`,
                ``,
                `Mình là: ${senderName}`,
                `Email liên hệ: ${senderEmail}`,
                `Tiêu đề: ${senderSubject || 'Trao đổi hợp tác / Dự án'}`,
                ``,
                `Nội dung tin nhắn:`,
                `${senderMessage}`,
                ``,
                `---`,
                `Gửi từ Portfolio Trần Đức (https://dustintran.me)`
            ].join('\r\n');

            if (formStatus) {
                formStatus.textContent =
                    '✅ Cảm ơn bạn đã nhắn tin! Đang mở ứng dụng Email để gửi trực tiếp tới tranduc6525@gmail.com...';
                formStatus.className = 'form-status success visible';
            }

            showToast('✉️ Đang mở trình gửi mail tới tranduc6525@gmail.com!');

            const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
                finalSubject
            )}&body=${encodeURIComponent(finalBody)}`;

            setTimeout(() => {
                window.location.href = mailtoUrl;
                contactForm.reset();
            }, 350);
        });
    }

    /* ========================================================================
     * KHỞI CHẠY TẤT CẢ MODULE
     * ======================================================================== */
    initTypewriter();
    initDynamicAge();
    initThemeToggle();
    initNavigationAndScroll();
    initScrollReveal();
    initSkillsFilter();
    initNakamaMiniApp();
    initCopyEmail();
    initContactForm();
});
