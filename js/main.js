/**
 * ============================================================================
 * TRAN DUC PORTFOLIO - INTERNATIONAL MULTILINGUAL & INTERACTIVE ENGINE (main.js)
 * Author: Tran Duc (17/06/2008) - Web/App Developer
 * Education: HCMUIT (First-year Student) | Thoai Ngoc Hau Gifted High School (Informatics)
 * Languages Supported: English (en - Default), Japanese (ja), Vietnamese (vi)
 * ============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const EMAIL_ADDRESS = 'tranduc6525@gmail.com';
    const PHONE_NUMBER = '0765902422';
    const LANG_STORAGE_KEY = 'portfolio_lang';
    const THEME_STORAGE_KEY = 'theme';

    /* ========================================================================
     * 1. MULTILINGUAL I18N DICTIONARY (EN / JA / VI)
     * ======================================================================== */
    const I18N_DICTIONARY = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',

            'hero.badge': 'Web/App Developer',
            'hero.greeting': "Hi, I'm",
            'hero.description':
                'First-year student at the University of Information Technology – VNU-HCM (HCMUIT) and former Informatics major at Thoai Ngoc Hau Gifted High School.',
            'hero.ctaPrimary': 'Contact Me',
            'hero.ctaSecondary': 'About Me',
            'hero.dobLabel': 'Date of Birth',
            'hero.eduLabel': 'University',
            'hero.roleLabel': 'Role',

            'about.tag': 'About',
            'about.title': 'Personal Profile',
            'about.subtitle': 'Background and verified personal details.',
            'about.bio':
                'I am Tran Duc, born on 17/06/2008. I am currently a first-year student at the University of Information Technology – VNU-HCM (HCMUIT) and graduated from the Informatics specialized class at Thoai Ngoc Hau Gifted High School. My focus is building clean, reliable Web and Mobile applications.',
            'about.info.name': 'Full Name',
            'about.info.dob': 'Date of Birth',
            'about.info.role': 'Role',
            'about.info.university': 'University',
            'about.info.universityVal': 'HCMUIT (First-year Student)',
            'about.info.highschool': 'High School',
            'about.info.highschoolVal': 'Thoai Ngoc Hau Gifted High School (Informatics)',
            'about.info.email': 'Email',
            'about.info.phone': 'Phone',

            'edu.tag': 'Education',
            'edu.title': 'Academic Journey',
            'edu.uit.period': 'Present • First-year Student',
            'edu.uit.school': 'University of Information Technology – VNU-HCM (HCMUIT)',
            'edu.uit.role': 'Undergraduate Student • Web/App Developer',
            'edu.tnh.period': 'High School',
            'edu.tnh.school': 'Thoai Ngoc Hau Gifted High School',
            'edu.tnh.role': 'Informatics Major (Chuyên Tin)',

            'skills.tag': 'Skills',
            'skills.title': 'Technical Stack',
            'skills.cpp.desc': 'Core programming, data structures, and algorithmic problem solving.',
            'skills.web.desc': 'Modern, responsive web interfaces and interactive frontend development.',
            'skills.python.desc': 'Scripting, automation, and general-purpose application development.',
            'skills.git.desc': 'Version control and collaborative source code management.',

            'projects.tag': 'Projects',
            'projects.title': 'Selected Works',
            'projects.emptyTitle': 'Projects Coming Soon',
            'projects.emptyDesc':
                'This section is temporarily left blank. Upcoming Web and App projects will be published here soon.',

            'contact.tag': 'Contact',
            'contact.title': 'Get In Touch',
            'contact.subtitle': 'Feel free to reach out directly via email or phone.',
            'contact.emailLabel': 'Email',
            'contact.phoneLabel': 'Phone',
            'contact.copyBtn': 'Copy',
            'contact.form.name': 'Your Name',
            'contact.form.namePlaceholder': 'Enter your name',
            'contact.form.email': 'Your Email',
            'contact.form.emailPlaceholder': 'name@example.com',
            'contact.form.message': 'Message',
            'contact.form.messagePlaceholder': 'Write your message here...',
            'contact.form.submit': 'Send Message',

            'footer.rights': 'All rights reserved.'
        },

        ja: {
            'nav.home': 'ホーム',
            'nav.about': '自己紹介',
            'nav.education': '学歴',
            'nav.skills': 'スキル',
            'nav.projects': 'プロジェクト',
            'nav.contact': '連絡先',

            'hero.badge': 'Web / アプリ開発者',
            'hero.greeting': 'はじめまして、',
            'hero.description':
                'ホーチミン市情報技術大学（HCMUIT）の1年生であり、トアイ・ゴック・ハウ英才高等学校の情報科出身です。Webおよびアプリケーション開発に取り組んでいます。',
            'hero.ctaPrimary': 'お問い合わせ',
            'hero.ctaSecondary': 'プロフィール',
            'hero.dobLabel': '生年月日',
            'hero.eduLabel': '大学',
            'hero.roleLabel': '専門分野',

            'about.tag': '自己紹介',
            'about.title': 'プロフィール',
            'about.subtitle': '基本情報とこれまでの歩み。',
            'about.bio':
                '2008年6月17日生まれのチャン・ドゥック（Trần Đức）です。トアイ・ゴック・ハウ英才高等学校の情報科を卒業し、現在はホーチミン市情報技術大学（HCMUIT）の1年生として、Webおよびアプリケーション開発に注力しています。',
            'about.info.name': '氏名',
            'about.info.dob': '生年月日',
            'about.info.role': '役職',
            'about.info.university': '大学',
            'about.info.universityVal': 'HCMUIT（大学1年生）',
            'about.info.highschool': '出身高校',
            'about.info.highschoolVal': 'トアイ・ゴック・ハウ英才高等学校（情報科）',
            'about.info.email': 'メール',
            'about.info.phone': '電話番号',

            'edu.tag': '学歴',
            'edu.title': '学歴・経歴',
            'edu.uit.period': '現在 • 1年生',
            'edu.uit.school': 'ホーチミン市情報技術大学 (HCMUIT)',
            'edu.uit.role': '学部生 • Web/App Developer',
            'edu.tnh.period': '高校',
            'edu.tnh.school': 'トアイ・ゴック・ハウ英才高等学校',
            'edu.tnh.role': '情報学専攻（専門クラス）',

            'skills.tag': 'スキル',
            'skills.title': '技術スタック',
            'skills.cpp.desc': 'コアプログラミング、データ構造、アルゴリズムによる問題解決。',
            'skills.web.desc': 'モダンでレスポンシブなWebインターフェースとフロントエンド開発。',
            'skills.python.desc': 'スクリプト作成、自動化、汎用アプリケーション開発。',
            'skills.git.desc': 'バージョン管理およびソースコード管理。',

            'projects.tag': 'プロジェクト',
            'projects.title': '制作実績',
            'projects.emptyTitle': 'プロジェクト準備中',
            'projects.emptyDesc':
                '現在このセクションは準備中です。Webおよびアプリ開発プロジェクトを順次公開予定です。',

            'contact.tag': '連絡先',
            'contact.title': 'お問い合わせ',
            'contact.subtitle': 'メールまたはお電話にてお気軽にご連絡ください。',
            'contact.emailLabel': 'メールアドレス',
            'contact.phoneLabel': '電話番号',
            'contact.copyBtn': 'コピー',
            'contact.form.name': 'お名前',
            'contact.form.namePlaceholder': 'お名前を入力してください',
            'contact.form.email': 'メールアドレス',
            'contact.form.emailPlaceholder': 'name@example.com',
            'contact.form.message': 'メッセージ',
            'contact.form.messagePlaceholder': 'メッセージを入力してください...',
            'contact.form.submit': 'メッセージを送信',

            'footer.rights': 'All rights reserved.'
        },

        vi: {
            'nav.home': 'Trang chủ',
            'nav.about': 'Giới thiệu',
            'nav.education': 'Học vấn',
            'nav.skills': 'Kỹ năng',
            'nav.projects': 'Dự án',
            'nav.contact': 'Liên hệ',

            'hero.badge': 'Web/App Developer',
            'hero.greeting': 'Xin chào, mình là',
            'hero.description':
                'Sinh viên năm nhất tại Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM (HCMUIT), cựu học sinh Chuyên Tin tại Trường THPT Chuyên Thoại Ngọc Hầu.',
            'hero.ctaPrimary': 'Liên hệ ngay',
            'hero.ctaSecondary': 'Về bản thân',
            'hero.dobLabel': 'Ngày sinh',
            'hero.eduLabel': 'Đại học',
            'hero.roleLabel': 'Vai trò',

            'about.tag': 'Giới thiệu',
            'about.title': 'Thông tin cá nhân',
            'about.subtitle': 'Thông tin cơ bản và hành trình học tập.',
            'about.bio':
                'Mình là Trần Đức, sinh ngày 17/06/2008. Hiện mình đang là sinh viên năm nhất tại Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM (HCMUIT), cựu học sinh lớp Chuyên Tin tại Trường THPT Chuyên Thoại Ngọc Hầu, định hướng phát triển Web và App.',
            'about.info.name': 'Họ và tên',
            'about.info.dob': 'Ngày sinh',
            'about.info.role': 'Vai trò',
            'about.info.university': 'Đại học',
            'about.info.universityVal': 'HCMUIT (Sinh viên năm nhất)',
            'about.info.highschool': 'Cấp 3',
            'about.info.highschoolVal': 'THPT Chuyên Thoại Ngọc Hầu (Chuyên Tin)',
            'about.info.email': 'Email',
            'about.info.phone': 'Số điện thoại',

            'edu.tag': 'Học vấn',
            'edu.title': 'Hành trình học tập',
            'edu.uit.period': 'Hiện tại • Sinh viên năm nhất',
            'edu.uit.school': 'Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM (HCMUIT)',
            'edu.uit.role': 'Sinh viên năm nhất • Web/App Developer',
            'edu.tnh.period': 'Cấp 3',
            'edu.tnh.school': 'Trường THPT Chuyên Thoại Ngọc Hầu',
            'edu.tnh.role': 'Chuyên Tin học',

            'skills.tag': 'Kỹ năng',
            'skills.title': 'Kỹ năng lập trình',
            'skills.cpp.desc': 'Lập trình cốt lõi, cấu trúc dữ liệu và giải quyết bài toán thuật toán.',
            'skills.web.desc': 'Phát triển giao diện web hiện đại, tương thích đa thiết bị.',
            'skills.python.desc': 'Lập trình kịch bản, tự động hóa và phát triển ứng dụng.',
            'skills.git.desc': 'Quản lý phiên bản và mã nguồn dự án.',

            'projects.tag': 'Dự án',
            'projects.title': 'Dự án',
            'projects.emptyTitle': 'Dự án đang được cập nhật',
            'projects.emptyDesc':
                'Phần dự án hiện đang tạm để trống và sẽ sớm được cập nhật trong thời gian tới.',

            'contact.tag': 'Liên hệ',
            'contact.title': 'Liên hệ với tôi',
            'contact.subtitle': 'Hãy liên hệ trực tiếp với mình qua email hoặc số điện thoại.',
            'contact.emailLabel': 'Email',
            'contact.phoneLabel': 'Số điện thoại',
            'contact.copyBtn': 'Sao chép',
            'contact.form.name': 'Họ và tên',
            'contact.form.namePlaceholder': 'Nhập họ và tên của bạn',
            'contact.form.email': 'Email của bạn',
            'contact.form.emailPlaceholder': 'name@example.com',
            'contact.form.message': 'Nội dung tin nhắn',
            'contact.form.messagePlaceholder': 'Nhập nội dung tin nhắn...',
            'contact.form.submit': 'Gửi tin nhắn',

            'footer.rights': 'Mọi quyền được bảo lưu.'
        }
    };

    const UI_MESSAGES = {
        en: {
            copiedEmail: `📋 Copied email: ${EMAIL_ADDRESS}`,
            copiedPhone: `📞 Copied phone: ${PHONE_NUMBER}`,
            copiedGeneric: (val) => `📋 Copied: ${val}`,
            themeDark: '🌙 Switched to Dark Mode',
            themeLight: '☀️ Switched to Light Mode',
            formMissing: '⚠️ Please fill in your Name, Email, and Message.',
            formSending: `✅ Opening your email client to send message to ${EMAIL_ADDRESS}...`,
            langChanged: '🌐 Language set to English'
        },
        ja: {
            copiedEmail: `📋 メールアドレスをコピーしました: ${EMAIL_ADDRESS}`,
            copiedPhone: `📞 電話番号をコピーしました: ${PHONE_NUMBER}`,
            copiedGeneric: (val) => `📋 コピーしました: ${val}`,
            themeDark: '🌙 ダークモードに切り替えました',
            themeLight: '☀️ ライトモードに切り替えました',
            formMissing: '⚠️ お名前、メールアドレス、メッセージをすべて入力してください。',
            formSending: `✅ メールアプリを開いています（宛先: ${EMAIL_ADDRESS}）...`,
            langChanged: '🇯🇵 日本語に切り替えました'
        },
        vi: {
            copiedEmail: `📋 Đã sao chép email: ${EMAIL_ADDRESS}`,
            copiedPhone: `📞 Đã sao chép SĐT: ${PHONE_NUMBER}`,
            copiedGeneric: (val) => `📋 Đã sao chép: ${val}`,
            themeDark: '🌙 Đã chuyển sang chế độ Tối',
            themeLight: '☀️ Đã chuyển sang chế độ Sáng',
            formMissing: '⚠️ Vui lòng điền đầy đủ Họ tên, Email và Nội dung tin nhắn.',
            formSending: `✅ Đang mở ứng dụng Email để gửi tới ${EMAIL_ADDRESS}...`,
            langChanged: '🇻🇳 Đã chuyển sang Tiếng Việt'
        }
    };

    const TYPEWRITER_PHRASES = {
        en: [
            'Web/App Developer',
            'First-year Student at HCMUIT',
            'Thoai Ngoc Hau Informatics Alumni'
        ],
        ja: [
            'Web / アプリ開発者',
            'HCMUIT 大学1年生',
            'トアイ・ゴック・ハウ英才高校 情報科出身'
        ],
        vi: [
            'Web/App Developer',
            'Sinh viên Năm Nhất HCMUIT',
            'Cựu Chuyên Tin Thoại Ngọc Hầu'
        ]
    };

    let currentLang = 'en';

    /* ========================================================================
     * 2. TOAST NOTIFICATION SYSTEM (#toast-notification)
     * ======================================================================== */
    const toastEl = document.getElementById('toast-notification');
    let toastTimeoutId = null;

    function showToast(message, duration = 2800) {
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
     * 3. DYNAMIC AGE CALCULATION (#dynamic-age) - DOB: 17/06/2008
     * ======================================================================== */
    function updateDynamicAge(lang = currentLang) {
        const ageEl = document.getElementById('dynamic-age');
        if (!ageEl) return;

        const birthDate = new Date(2008, 5, 17); // 17/06/2008
        const now = new Date();

        let age = now.getFullYear() - birthDate.getFullYear();
        const monthDiff = now.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 16 || Number.isNaN(age)) {
            age = 18;
        }

        if (lang === 'ja') {
            ageEl.textContent = `${age}歳`;
        } else if (lang === 'vi') {
            ageEl.textContent = `${age} tuổi`;
        } else {
            ageEl.textContent = `${age} yrs`;
        }
    }

    /* ========================================================================
     * 4. MULTILINGUAL SWITCHER (.lang-btn[data-lang])
     * ======================================================================== */
    function applyLanguage(lang, notify = false) {
        const normalizedLang = I18N_DICTIONARY[lang] ? lang : 'en';
        currentLang = normalizedLang;

        const dict = I18N_DICTIONARY[normalizedLang];

        // 1. Cập nhật thuộc tính lang trên thẻ <html>
        document.documentElement.lang = normalizedLang;
        document.documentElement.setAttribute('data-lang', normalizedLang);

        // 2. Dịch toàn bộ phần tử [data-i18n]
        const i18nElements = document.querySelectorAll('[data-i18n]');
        i18nElements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
                el.textContent = dict[key];
            }
        });

        // 3. Dịch toàn bộ thuộc tính placeholder cho [data-i18n-placeholder]
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // 4. Cập nhật trạng thái active cho các nút .lang-btn[data-lang]
        const langButtons = document.querySelectorAll('.lang-btn[data-lang]');
        langButtons.forEach((btn) => {
            const btnLang = btn.getAttribute('data-lang');
            const isActive = btnLang === normalizedLang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });

        // 5. Cập nhật tuổi động theo ngôn ngữ
        updateDynamicAge(normalizedLang);

        // 6. Lưu vào localStorage
        try {
            localStorage.setItem(LANG_STORAGE_KEY, normalizedLang);
        } catch (_) {
            // Bỏ qua nếu localStorage bị hạn chế
        }

        if (notify && UI_MESSAGES[normalizedLang]) {
            showToast(UI_MESSAGES[normalizedLang].langChanged, 2000);
        }
    }

    function initLanguageSystem() {
        let savedLang = 'en';
        try {
            const stored = localStorage.getItem(LANG_STORAGE_KEY);
            if (stored && I18N_DICTIONARY[stored]) {
                savedLang = stored;
            }
        } catch (_) {
            savedLang = 'en';
        }

        applyLanguage(savedLang, false);

        const langButtons = document.querySelectorAll('.lang-btn[data-lang]');
        langButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const targetLang = btn.getAttribute('data-lang');
                if (targetLang && targetLang !== currentLang) {
                    applyLanguage(targetLang, true);
                }
            });
        });
    }

    /* ========================================================================
     * 5. OPTIONAL TYPEWRITER EFFECT (#typewriter-text)
     * ======================================================================== */
    function initTypewriter() {
        const typewriterEl = document.getElementById('typewriter-text');
        if (!typewriterEl) return;

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const TYPE_SPEED = 75;
        const DELETE_SPEED = 40;
        const PAUSE_END = 1800;
        const PAUSE_START = 350;

        function tick() {
            const phrases = TYPEWRITER_PHRASES[currentLang] || TYPEWRITER_PHRASES.en;
            const currentPhrase = phrases[phraseIndex % phrases.length];
            const chars = Array.from(currentPhrase);

            if (!isDeleting) {
                charIndex++;
                typewriterEl.textContent = chars.slice(0, charIndex).join('');

                if (charIndex >= chars.length) {
                    isDeleting = true;
                    setTimeout(tick, PAUSE_END);
                    return;
                }
                setTimeout(tick, TYPE_SPEED);
            } else {
                charIndex--;
                typewriterEl.textContent = chars.slice(0, charIndex).join('');

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
     * 6. DARK / LIGHT THEME TOGGLE (#theme-toggle, #theme-icon)
     * ======================================================================== */
    function initThemeToggle() {
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const rootEl = document.documentElement;

        let savedTheme = 'dark';
        try {
            const stored = localStorage.getItem(THEME_STORAGE_KEY);
            if (stored === 'light' || stored === 'dark') {
                savedTheme = stored;
            }
        } catch (_) {
            savedTheme = 'dark';
        }

        function applyTheme(theme, notify = false) {
            rootEl.setAttribute('data-theme', theme);
            document.body.setAttribute('data-theme', theme);
            document.body.classList.toggle('light-theme', theme === 'light');
            document.body.classList.toggle('dark-theme', theme === 'dark');

            if (themeIcon) {
                themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
            }

            try {
                localStorage.setItem(THEME_STORAGE_KEY, theme);
            } catch (_) {
                // Ignore storage errors
            }

            if (notify) {
                const msgPack = UI_MESSAGES[currentLang] || UI_MESSAGES.en;
                showToast(theme === 'dark' ? msgPack.themeDark : msgPack.themeLight, 2000);
            }
        }

        applyTheme(savedTheme, false);

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                const current = rootEl.getAttribute('data-theme') || 'dark';
                const nextTheme = current === 'dark' ? 'light' : 'dark';
                applyTheme(nextTheme, true);
            });
        }
    }

    /* ========================================================================
     * 7. NAVBAR SCROLL, MOBILE MENU & SCROLL SPY
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

            navLinks.forEach((link) => {
                link.addEventListener('click', closeMobileMenu);
            });

            document.addEventListener('click', (e) => {
                if (
                    navMenu.classList.contains('active') &&
                    !navMenu.contains(e.target) &&
                    !mobileMenuBtn.contains(e.target)
                ) {
                    closeMobileMenu();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        }

        function handleScroll() {
            const scrollY = window.scrollY || window.pageYOffset;

            if (navbar) {
                navbar.classList.toggle('scrolled', scrollY > 40);
            }

            if (backToTopBtn) {
                const showBackToTop = scrollY > 320;
                backToTopBtn.classList.toggle('visible', showBackToTop);
                backToTopBtn.classList.toggle('active', showBackToTop);
            }

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

                if (currentSectionId) {
                    navLinks.forEach((link) => {
                        const href = link.getAttribute('href') || '';
                        link.classList.toggle('active', href === `#${currentSectionId}`);
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
     * 8. SCROLL REVEAL & SKILL PROGRESS ANIMATION
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

        if (!('IntersectionObserver' in window)) {
            revealElements.forEach((el) => el.classList.add('active', 'visible'));
            animateSkillBarsIn(document);
            return;
        }

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
                rootMargin: '0px 0px -30px 0px'
            }
        );

        revealElements.forEach((el) => revealObserver.observe(el));

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
     * 9. COPY EMAIL & COPY PHONE HANDLER (#copy-email-btn, #copy-phone-btn, [data-copy])
     * ======================================================================== */
    function initCopyHandlers() {
        async function copyTextToClipboard(text) {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                return true;
            }

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

        const copyElements = document.querySelectorAll(
            '#copy-email-btn, #copy-phone-btn, #hero-copy-email, [data-copy], [data-email], [data-phone]'
        );

        copyElements.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();

                const id = btn.id || '';
                const rawCopyValue =
                    btn.getAttribute('data-copy') ||
                    btn.getAttribute('data-email') ||
                    btn.getAttribute('data-phone') ||
                    (id.includes('phone') ? PHONE_NUMBER : EMAIL_ADDRESS);

                const isPhone =
                    id.includes('phone') ||
                    btn.hasAttribute('data-phone') ||
                    rawCopyValue.replace(/\s+/g, '') === PHONE_NUMBER;

                const msgPack = UI_MESSAGES[currentLang] || UI_MESSAGES.en;

                try {
                    await copyTextToClipboard(rawCopyValue);
                    if (isPhone) {
                        showToast(msgPack.copiedPhone);
                    } else if (rawCopyValue === EMAIL_ADDRESS) {
                        showToast(msgPack.copiedEmail);
                    } else {
                        showToast(msgPack.copiedGeneric(rawCopyValue));
                    }
                } catch (_) {
                    showToast(isPhone ? msgPack.copiedPhone : msgPack.copiedEmail);
                }
            });
        });
    }

    /* ========================================================================
     * 10. CONTACT FORM HANDLER (#contact-form)
     * ======================================================================== */
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');

        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput =
                document.getElementById('sender-name') ||
                contactForm.querySelector('input[name="name"]');
            const emailInput =
                document.getElementById('sender-email') ||
                contactForm.querySelector('input[name="email"]');
            const subjectInput =
                document.getElementById('sender-subject') ||
                contactForm.querySelector('input[name="subject"]');
            const messageInput =
                document.getElementById('sender-message') ||
                contactForm.querySelector('textarea[name="message"]');

            const senderName = nameInput ? nameInput.value.trim() : '';
            const senderEmail = emailInput ? emailInput.value.trim() : '';
            const senderSubject = subjectInput ? subjectInput.value.trim() : '';
            const senderMessage = messageInput ? messageInput.value.trim() : '';

            const msgPack = UI_MESSAGES[currentLang] || UI_MESSAGES.en;

            if (!senderName || !senderEmail || !senderMessage) {
                if (formStatus) {
                    formStatus.textContent = msgPack.formMissing;
                    formStatus.className = 'form-status error visible';
                }
                showToast(msgPack.formMissing);
                return;
            }

            const finalSubject = senderSubject
                ? `[Portfolio Tran Duc] ${senderSubject}`
                : `[Portfolio Tran Duc] Contact from ${senderName}`;

            const finalBody = [
                `Hello Tran Duc,`,
                ``,
                `Name: ${senderName}`,
                `Email: ${senderEmail}`,
                ``,
                `Message:`,
                `${senderMessage}`,
                ``,
                `---`,
                `Sent via Portfolio (https://dustintran.me)`
            ].join('\r\n');

            if (formStatus) {
                formStatus.textContent = msgPack.formSending;
                formStatus.className = 'form-status success visible';
            }

            showToast(msgPack.formSending);

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
     * INITIALIZE ALL MODULES
     * ======================================================================== */
    initLanguageSystem();
    initTypewriter();
    initThemeToggle();
    initNavigationAndScroll();
    initScrollReveal();
    initCopyHandlers();
    initContactForm();
});
