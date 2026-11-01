/**
 * ============================================================================
 * TRAN DUC PORTFOLIO - INTERNATIONAL MULTILINGUAL & INTERACTIVE ENGINE (main.js)
 * Author: Tran Duc (17/06/2008) - Web/App Developer
 * Education: Vietnam–Japan IT @ HCMUIT (First-year) | Thoai Ngoc Hau Gifted HS (Informatics)
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
            'nav.focus': 'What I Do',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',

            'hero.badge': 'Open to Projects & Collaboration • Ho Chi Minh City',
            'hero.greeting': "Hi, I'm",
            'hero.roleLine': 'Web/App Developer • Vietnam–Japan IT @ HCMUIT',
            'hero.description':
                'Driven Web/App Developer and first-year Vietnam–Japan Information Technology student at HCMUIT, with a strong algorithmic foundation from the Informatics major at Thoai Ngoc Hau Gifted High School. Passionate about building impactful software, committed to continuous learning, and oriented toward the Japanese technology market.',
            'hero.ctaPrimary': 'Get in Touch',
            'hero.ctaSecondary': 'Explore Profile',
            'hero.roleLabel': 'Role',
            'hero.majorLabel': 'Major',
            'hero.majorValue': 'Vietnam–Japan IT (HCMUIT)',
            'hero.jpLabel': 'Japanese',
            'hero.dobLabel': 'Date of Birth',
            'hero.eduLabel': 'University',

            'about.tag': 'About Me',
            'about.title': 'Profile & Career Orientation',
            'about.subtitle':
                'Driven by curiosity, continuous improvement, and a vision for the Japanese IT industry.',
            'about.storyTitle': 'Background & Growth Mindset',
            'about.bio':
                'I am Tran Duc, born on 17/06/2008. I am currently a first-year student in the Vietnam–Japan Information Technology program at the University of Information Technology – VNU-HCM (HCMUIT) and graduated from the Informatics specialized class at Thoai Ngoc Hau Gifted High School. My focus is building clean, reliable Web and Mobile applications.',
            'about.bio1':
                'Hello! I am Tran Duc (born 17/06/2008), a Web/App Developer based in Ho Chi Minh City, Vietnam. My journey in computer science began in the specialized Informatics class at Thoai Ngoc Hau Gifted High School, where I developed disciplined algorithmic thinking and a deep passion for technology. Currently, I am a first-year student in the Vietnam–Japan Information Technology program at the University of Information Technology – VNU-HCM (HCMUIT).',
            'about.bio2':
                'Guided by a strong growth mindset and eagerness to learn, I continuously refine my engineering skills across Web/App development and core programming. Holding a JLPT N5 certification and actively advancing my Japanese proficiency alongside software engineering at HCMUIT, my goal is to build reliable digital products and work professionally in the Japanese technology market.',
            'about.pill1': '🎯 Japan IT Market Orientation',
            'about.pill2': '🚀 Continuous Learner',
            'about.pill3': '💡 Algorithmic Foundation',
            'about.infoTitle': 'Quick Facts',
            'about.info.name': 'Full Name',
            'about.info.dob': 'Date of Birth',
            'about.info.location': 'Location',
            'about.info.locationVal': 'Ho Chi Minh City, Vietnam',
            'about.info.role': 'Role',
            'about.info.university': 'University',
            'about.info.universityVal': 'HCMUIT (First-year Student)',
            'about.info.major': 'Major',
            'about.info.majorVal': 'Vietnam–Japan Information Technology',
            'about.info.highschool': 'High School',
            'about.info.highschoolVal': 'Thoai Ngoc Hau Gifted High School (Informatics)',
            'about.info.japanese': 'Japanese',
            'about.info.email': 'Email',
            'about.info.phone': 'Phone',

            'focus.tag': 'What I Do',
            'focus.title': 'Engineering Focus',
            'focus.subtitle':
                'Core areas where I apply my technical foundation and passion for building software.',
            'focus.web.title': 'Web Development',
            'focus.web.desc':
                'Designing and developing clean, responsive, and accessible web interfaces with semantic HTML5, modern CSS3, and interactive JavaScript.',
            'focus.app.title': 'Application Development',
            'focus.app.desc':
                'Building practical software applications and automation tools using Python and C/C++ with attention to clean architecture and user experience.',
            'focus.algo.title': 'Algorithms & Core CS',
            'focus.algo.desc':
                'Applying data structures, algorithmic thinking, and problem-solving skills cultivated from the Gifted Informatics program to write optimal code.',

            'edu.tag': 'Education',
            'edu.title': 'Academic Journey',
            'edu.uit.period': 'Present • First-year Student',
            'edu.uit.school': 'University of Information Technology – VNU-HCM (HCMUIT)',
            'edu.uit.role': "Bachelor's Program in Vietnam–Japan Information Technology",
            'edu.uit.desc':
                'Studying core computer science, software engineering, and Japanese language & business culture, preparing for a software engineering career in the Vietnam–Japan IT ecosystem.',
            'edu.tnh.period': 'High School • Graduated',
            'edu.tnh.school': 'Thoai Ngoc Hau Gifted High School',
            'edu.tnh.role': 'Informatics Major (Chuyên Tin)',
            'edu.tnh.desc':
                'Trained intensively in C/C++ programming, data structures, algorithms, and analytical problem-solving in the specialized Informatics class.',

            'skills.tag': 'Skills',
            'skills.title': 'Technical Stack & Languages',
            'skills.cpp.desc': 'Core programming, data structures, and algorithmic problem solving.',
            'skills.web.desc': 'Modern, responsive web interfaces and interactive frontend development.',
            'skills.python.desc': 'Scripting, automation, and general-purpose application development.',
            'skills.git.desc': 'Version control and collaborative source code management.',

            'lang.vi.name': 'Vietnamese',
            'lang.vi.level': 'Native',
            'lang.ja.name': 'Japanese',
            'lang.ja.level': 'JLPT N5 (Vietnam–Japan IT Program)',
            'lang.en.name': 'English',
            'lang.en.level': 'Technical Reading & Communication',

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
            'contact.locationLabel': 'Location',
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
            'nav.focus': '専門領域',
            'nav.education': '学歴',
            'nav.skills': 'スキル',
            'nav.projects': 'プロジェクト',
            'nav.contact': '連絡先',

            'hero.badge': 'プロジェクト・協業募集中 • ホーチミン市',
            'hero.greeting': 'はじめまして、',
            'hero.roleLine': 'Web/アプリ開発者 • HCMUIT 日越情報技術専攻',
            'hero.description':
                'ホーチミン市情報技術大学（HCMUIT）日越情報技術プログラムの1年生であり、トアイ・ゴック・ハウ英才高等学校情報科出身のWeb/アプリ開発者です。技術への情熱と向上心を持ち、日本のIT市場での活躍を目指して日々研鑽を積んでいます。',
            'hero.ctaPrimary': 'お問い合わせ',
            'hero.ctaSecondary': 'プロフィールを見る',
            'hero.roleLabel': '専門分野',
            'hero.majorLabel': '専攻',
            'hero.majorValue': '日越IT専攻 (HCMUIT)',
            'hero.jpLabel': '日本語能力',
            'hero.dobLabel': '生年月日',
            'hero.eduLabel': '大学',

            'about.tag': '自己紹介',
            'about.title': 'プロフィールとキャリア目標',
            'about.subtitle': '技術への情熱、絶え間ない向上心、そして日本のIT業界へのビジョン。',
            'about.storyTitle': '経歴と成長マインドセット',
            'about.bio':
                '2008年6月17日生まれのチャン・ドゥック（Trần Đức）です。トアイ・ゴック・ハウ英才高等学校の情報科を卒業し、現在はホーチミン市情報技術大学（HCMUIT）の日越情報技術プログラム1年生として、Webおよびアプリケーション開発に注力しています。',
            'about.bio1':
                'はじめまして、チャン・ドゥック（Trần Đức、2008年6月17日生まれ）と申します。トアイ・ゴック・ハウ英才高等学校の情報科（専門クラス）でアルゴリズムとプログラミングの基礎を徹底的に学び、現在はホーチミン市情報技術大学（HCMUIT）の日越情報技術（Vietnam-Japan IT）専攻の1年生として在籍しています。',
            'about.bio2':
                'テクノロジーへの強い情熱と常に学び続ける向上心（成長マインドセット）を大切にしています。現在JLPT N5を取得しており、専門的なソフトウェア開発技術と日本語能力の双方を高めながら、将来は日本のIT市場およびグローバルな開発現場で価値あるWeb・アプリケーション製品を創出することを目指しています。',
            'about.pill1': '🎯 日本IT市場志向',
            'about.pill2': '🚀 高い向上心・継続学習',
            'about.pill3': '💡 アルゴリズム思考',
            'about.infoTitle': '基本情報',
            'about.info.name': '氏名',
            'about.info.dob': '生年月日',
            'about.info.location': '所在地',
            'about.info.locationVal': 'ベトナム・ホーチミン市',
            'about.info.role': '役職',
            'about.info.university': '大学',
            'about.info.universityVal': 'HCMUIT（大学1年生）',
            'about.info.major': '専攻',
            'about.info.majorVal': '日越情報技術（Vietnam–Japan IT）',
            'about.info.highschool': '出身高校',
            'about.info.highschoolVal': 'トアイ・ゴック・ハウ英才高等学校（情報科）',
            'about.info.japanese': '日本語資格',
            'about.info.email': 'メール',
            'about.info.phone': '電話番号',

            'focus.tag': '専門領域',
            'focus.title': '注力している開発分野',
            'focus.subtitle': 'これまでの技術基盤と情熱を活かして取り組んでいる主要分野。',
            'focus.web.title': 'Web開発',
            'focus.web.desc':
                'セマンティックなHTML5、モダンCSS3、JavaScriptを用い、洗練されたレスポンシブなWebインターフェースを設計・開発します。',
            'focus.app.title': 'アプリケーション開発',
            'focus.app.desc':
                'PythonやC/C++を活用し、クリーンな設計と使いやすさを重視した実用的なソフトウェア・ツールを開発します。',
            'focus.algo.title': 'アルゴリズム・計算機科学',
            'focus.algo.desc':
                '高校の情報科で培ったデータ構造とアルゴリズム思考を活かし、効率的で保守性の高いコードを実装します。',

            'edu.tag': '学歴',
            'edu.title': '学歴・経歴',
            'edu.uit.period': '現在 • 1年生',
            'edu.uit.school': 'ホーチミン市情報技術大学 (HCMUIT)',
            'edu.uit.role': '日越情報技術（Vietnam–Japan IT）学士課程',
            'edu.uit.desc':
                'コンピュータサイエンス、ソフトウェア工学、および日本語・日本ビジネス文化を学び、日越IT分野で活躍するエンジニアを目指しています。',
            'edu.tnh.period': '高校 • 卒業',
            'edu.tnh.school': 'トアイ・ゴック・ハウ英才高等学校',
            'edu.tnh.role': '情報学専攻（専門クラス）',
            'edu.tnh.desc':
                '情報科（専門クラス）にてC/C++プログラミング、データ構造、アルゴリズム、論理的問題解決を集中的に習得。',

            'skills.tag': 'スキル',
            'skills.title': '技術スタック・言語能力',
            'skills.cpp.desc': 'コアプログラミング、データ構造、アルゴリズムによる問題解決。',
            'skills.web.desc': 'モダンでレスポンシブなWebインターフェースとフロントエンド開発。',
            'skills.python.desc': 'スクリプト作成、自動化、汎用アプリケーション開発。',
            'skills.git.desc': 'バージョン管理およびソースコード管理。',

            'lang.vi.name': 'ベトナム語',
            'lang.vi.level': '母国語（ネイティブ）',
            'lang.ja.name': '日本語',
            'lang.ja.level': 'JLPT N5取得（日越ITプログラム在籍）',
            'lang.en.name': '英語',
            'lang.en.level': '技術文書読解・コミュニケーション',

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
            'contact.locationLabel': '所在地',
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
            'nav.focus': 'Định hướng',
            'nav.education': 'Học vấn',
            'nav.skills': 'Kỹ năng',
            'nav.projects': 'Dự án',
            'nav.contact': 'Liên hệ',

            'hero.badge': 'Sẵn sàng hợp tác dự án • TP. Hồ Chí Minh',
            'hero.greeting': 'Xin chào, mình là',
            'hero.roleLine': 'Web/App Developer • CNTT Việt – Nhật @ HCMUIT',
            'hero.description':
                'Web/App Developer và sinh viên năm nhất ngành Công nghệ Thông tin Việt – Nhật tại HCMUIT, xuất thân từ lớp Chuyên Tin Trường THPT Chuyên Thoại Ngọc Hầu. Luôn giữ vững niềm đam mê công nghệ, tinh thần cầu tiến không ngừng và định hướng phát triển sự nghiệp hướng tới thị trường IT Nhật Bản.',
            'hero.ctaPrimary': 'Liên hệ ngay',
            'hero.ctaSecondary': 'Xem hồ sơ',
            'hero.roleLabel': 'Vai trò',
            'hero.majorLabel': 'Chuyên ngành',
            'hero.majorValue': 'CNTT Việt – Nhật (HCMUIT)',
            'hero.jpLabel': 'Tiếng Nhật',
            'hero.dobLabel': 'Ngày sinh',
            'hero.eduLabel': 'Đại học',

            'about.tag': 'Giới thiệu',
            'about.title': 'Hồ sơ & Định hướng phát triển',
            'about.subtitle':
                'Luôn cầu tiến, đam mê công nghệ và hướng tới môi trường công nghệ chuẩn Nhật Bản.',
            'about.storyTitle': 'Câu chuyện & Tinh thần cầu tiến',
            'about.bio':
                'Mình là Trần Đức, sinh ngày 17/06/2008. Hiện mình đang là sinh viên năm nhất ngành Công nghệ Thông tin Việt – Nhật tại Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM (HCMUIT), cựu học sinh lớp Chuyên Tin tại Trường THPT Chuyên Thoại Ngọc Hầu, định hướng phát triển Web và App.',
            'about.bio1':
                'Xin chào! Mình là Trần Đức (sinh ngày 17/06/2008), hiện đang học tập và làm việc tại TP. Hồ Chí Minh. Hành trình đến với lập trình của mình được hun đúc từ những năm tháng học lớp Chuyên Tin tại Trường THPT Chuyên Thoại Ngọc Hầu, nơi rèn luyện cho mình tư duy thuật toán bài bản và niềm đam mê công nghệ sâu sắc. Hiện tại, mình là sinh viên năm nhất ngành Công nghệ Thông tin Việt – Nhật tại Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM (HCMUIT).',
            'about.bio2':
                'Với tinh thần cầu tiến, ham học hỏi và mục tiêu nghề nghiệp rõ ràng, mình luôn chủ động trau dồi kỹ năng phát triển Web/App cùng tư duy kỹ thuật phần mềm chuẩn mực. Bên cạnh nền tảng chuyên môn, mình đã đạt chứng chỉ tiếng Nhật JLPT N5 và đang tiếp tục nâng cao năng lực ngoại ngữ để hướng tới môi trường làm việc chuyên nghiệp tại thị trường công nghệ Nhật Bản.',
            'about.pill1': '🎯 Hướng tới thị trường Nhật Bản',
            'about.pill2': '🚀 Tinh thần cầu tiến',
            'about.pill3': '💡 Nền tảng Chuyên Tin',
            'about.infoTitle': 'Thông tin tóm tắt',
            'about.info.name': 'Họ và tên',
            'about.info.dob': 'Ngày sinh',
            'about.info.location': 'Địa điểm',
            'about.info.locationVal': 'TP. Hồ Chí Minh, Việt Nam',
            'about.info.role': 'Vai trò',
            'about.info.university': 'Đại học',
            'about.info.universityVal': 'HCMUIT (Sinh viên năm nhất)',
            'about.info.major': 'Chuyên ngành',
            'about.info.majorVal': 'Công nghệ Thông tin Việt – Nhật',
            'about.info.highschool': 'Cấp 3',
            'about.info.highschoolVal': 'THPT Chuyên Thoại Ngọc Hầu (Chuyên Tin)',
            'about.info.japanese': 'Tiếng Nhật',
            'about.info.email': 'Email',
            'about.info.phone': 'Số điện thoại',

            'focus.tag': 'Lĩnh vực tập trung',
            'focus.title': 'Định hướng phát triển chuyên môn',
            'focus.subtitle':
                'Những lĩnh vực cốt lõi nơi mình vận dụng nền tảng thuật toán và đam mê xây dựng sản phẩm.',
            'focus.web.title': 'Phát triển Web',
            'focus.web.desc':
                'Thiết kế và phát triển giao diện web hiện đại, tối ưu trải nghiệm đa thiết bị với HTML5, CSS3 và JavaScript.',
            'focus.app.title': 'Phát triển Ứng dụng',
            'focus.app.desc':
                'Xây dựng các ứng dụng phần mềm và công cụ thực tiễn bằng Python và C/C++, chú trọng cấu trúc mã nguồn sạch và tính hữu dụng.',
            'focus.algo.title': 'Thuật toán & Nền tảng CS',
            'focus.algo.desc':
                'Vận dụng cấu trúc dữ liệu và tư duy giải quyết vấn đề từ nền tảng Chuyên Tin để viết mã nguồn tối ưu, dễ bảo trì.',

            'edu.tag': 'Học vấn',
            'edu.title': 'Hành trình học tập',
            'edu.uit.period': 'Hiện tại • Sinh viên năm nhất',
            'edu.uit.school': 'Trường Đại học Công nghệ Thông tin – ĐHQG TP.HCM (HCMUIT)',
            'edu.uit.role': 'Cử nhân Công nghệ Thông tin Việt – Nhật',
            'edu.uit.desc':
                'Theo học chương trình đào tạo kết hợp Khoa học máy tính, Kỹ thuật phần mềm cùng ngôn ngữ và văn hóa doanh nghiệp Nhật Bản.',
            'edu.tnh.period': 'Cấp 3 • Đã tốt nghiệp',
            'edu.tnh.school': 'Trường THPT Chuyên Thoại Ngọc Hầu',
            'edu.tnh.role': 'Chuyên Tin học',
            'edu.tnh.desc':
                'Được đào tạo chuyên sâu về lập trình C/C++, cấu trúc dữ liệu, giải thuật và tư duy giải quyết bài toán tại lớp Chuyên Tin.',

            'skills.tag': 'Kỹ năng',
            'skills.title': 'Kỹ năng lập trình & Ngôn ngữ',
            'skills.cpp.desc': 'Lập trình cốt lõi, cấu trúc dữ liệu và giải quyết bài toán thuật toán.',
            'skills.web.desc': 'Phát triển giao diện web hiện đại, tương thích đa thiết bị.',
            'skills.python.desc': 'Lập trình kịch bản, tự động hóa và phát triển ứng dụng.',
            'skills.git.desc': 'Quản lý phiên bản và mã nguồn dự án.',

            'lang.vi.name': 'Tiếng Việt',
            'lang.vi.level': 'Bản ngữ',
            'lang.ja.name': 'Tiếng Nhật',
            'lang.ja.level': 'JLPT N5 (Chương trình CNTT Việt – Nhật)',
            'lang.en.name': 'Tiếng Anh',
            'lang.en.level': 'Đọc hiểu tài liệu kỹ thuật & Giao tiếp',

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
            'contact.locationLabel': 'Địa điểm',
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
            'Web/App Developer • Vietnam–Japan IT @ HCMUIT',
            'First-year Student at HCMUIT',
            'Thoai Ngoc Hau Informatics Alumni',
            'JLPT N5 • Japan IT Market Orientation'
        ],
        ja: [
            'Web/アプリ開発者 • HCMUIT 日越情報技術専攻',
            'ホーチミン市情報技術大学（HCMUIT）1年生',
            'トアイ・ゴック・ハウ英才高校 情報科出身',
            'JLPT N5取得 • 日本IT市場志向'
        ],
        vi: [
            'Web/App Developer • CNTT Việt – Nhật @ HCMUIT',
            'Sinh viên Năm Nhất HCMUIT',
            'Cựu Chuyên Tin THPT Chuyên Thoại Ngọc Hầu',
            'JLPT N5 • Định hướng Thị trường IT Nhật Bản'
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
        if (!typewriterEl || typewriterEl.hasAttribute('data-i18n')) return;

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const TYPE_SPEED = 70;
        const DELETE_SPEED = 38;
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
