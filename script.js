// Job Data
const jobsData = [
    {
        id: "1",
        title: "مهندس برمجيات",
        company: "شركة تقنية مصر",
        location: "القاهرة",
        category: "تكنولوجيا",
        experience: "3 سنوات",
        description: "مطلوب مهندس برمجيات لتطوير تطبيقات ويب باستخدام JavaScript وReact.",
        salary: "15000 جنيه مصري",
        posted: "2025-04-20",
        icon: "https://img.icons8.com/color/48/000000/code.png"
    },
    {
        id: "2",
        title: "مدير تسويق",
        company: "شركة تسويقية",
        location: "الإسكندرية",
        category: "تسويق",
        experience: "5 سنوات",
        description: "مطلوب مدير تسويق لتطوير استراتيجيات التسويق الرقمي.",
        salary: "20000 جنيه مصري",
        posted: "2025-04-18",
        icon: "https://img.icons8.com/color/48/000000/marketing.png"
    },
    {
        id: "3",
        title: "مدرس رياضيات",
        company: "مدرسة خاصة",
        location: "الجيزة",
        category: "تعليم",
        experience: "2 سنة",
        description: "مطلوب مدرس رياضيات للمرحلة الإعدادية.",
        salary: "8000 جنيه مصري",
        posted: "2025-04-15",
        icon: "https://img.icons8.com/color/48/000000/math.png"
    },
    {
        id: "4",
        title: "طبيب أسنان",
        company: "عيادة خاصة",
        location: "أسيوط",
        category: "طب",
        experience: "2 سنة",
        description: "مطلوب طبيب أسنان للعمل في عيادة بأسيوط.",
        salary: "12000 جنيه مصري",
        posted: "2025-04-10",
        icon: "https://img.icons8.com/color/48/000000/dentist.png"
    },
    {
        id: "5",
        title: "مهندس مدني",
        company: "شركة إنشاءات",
        location: "المنصورة",
        category: "هندسة",
        experience: "4 سنوات",
        description: "مطلوب مهندس مدني للعمل في مشاريع بنية تحتية.",
        salary: "18000 جنيه مصري",
        posted: "2025-04-05",
        icon: "https://img.icons8.com/color/48/000000/engineer.png"
    },
    {
        id: "6",
        title: "مدير فندق",
        company: "فندق خمس نجوم",
        location: "شرم الشيخ",
        category: "سياحة",
        experience: "7 سنوات",
        description: "مطلوب مدير فندق لإدارة العمليات اليومية وضمان رضا العملاء.",
        salary: "25000 جنيه مصري",
        posted: "2025-04-01",
        icon: "https://img.icons8.com/color/48/000000/hotel.png"
    },
    {
        id: "7",
        title: "محاسب",
        company: "شركة تجارية",
        location: "القاهرة",
        category: "محاسبة",
        experience: "3 سنوات",
        description: "مطلوب محاسب لإدارة الحسابات وإعداد التقارير المالية.",
        salary: "10000 جنيه مصري",
        posted: "2025-03-30",
        icon: "https://img.icons8.com/color/48/000000/accounting.png"
    },
    {
        id: "8",
        title: "مدير مبيعات",
        company: "شركة استيراد",
        location: "الإسكندرية",
        category: "مبيعات",
        experience: "5 سنوات",
        description: "مطلوب مدير مبيعات لتحقيق أهداف المبيعات وزيادة الحصة السوقية.",
        salary: "22000 جنيه مصري",
        posted: "2025-03-28",
        icon: "https://img.icons8.com/color/48/000000/sales-performance.png"
    },
    {
        id: "9",
        title: "مبرمج بايثون",
        company: "شركة تقنية",
        location: "القاهرة",
        category: "تكنولوجيا",
        experience: "2 سنة",
        description: "مطلوب مبرمج بايثون لتطوير تطبيقات تعلم الآلة.",
        salary: "14000 جنيه مصري",
        posted: "2025-03-25",
        icon: "https://img.icons8.com/color/48/000000/python.png"
    },
    {
        id: "10",
        title: "ممرضة",
        company: "مستشفى خاص",
        location: "الغردقة",
        category: "طب",
        experience: "3 سنوات",
        description: "مطلوب ممرضة للعمل في قسم العناية المركزة.",
        salary: "9000 جنيه مصري",
        posted: "2025-03-20",
        icon: "https://img.icons8.com/color/48/000000/nurse-female.png"
    },
    {
        id: "11",
        title: "مصمم جرافيك",
        company: "وكالة إعلانات",
        location: "القاهرة",
        category: "تسويق",
        experience: "2 سنة",
        description: "مطلوب مصمم جرافيك لتصميم الإعلانات والمواد التسويقية.",
        salary: "11000 جنيه مصري",
        posted: "2025-03-18",
        icon: "https://img.icons8.com/color/48/000000/graphic-design.png"
    },
    {
        id: "12",
        title: "مهندس كهرباء",
        company: "شركة طاقة",
        location: "الفيوم",
        category: "هندسة",
        experience: "4 سنوات",
        description: "مطلوب مهندس كهرباء لتصميم وصيانة الأنظمة الكهربائية.",
        salary: "16000 جنيه مصري",
        posted: "2025-03-15",
        icon: "https://img.icons8.com/color/48/000000/electricity.png"
    },
    {
        id: "13",
        title: "مدرس لغة إنجليزية",
        company: "مركز تعليمي",
        location: "المنصورة",
        category: "تعليم",
        experience: "2 سنة",
        description: "مطلوب مدرس لغة إنجليزية لتدريس الطلاب في المراحل المختلفة.",
        salary: "7000 جنيه مصري",
        posted: "2025-03-10",
        icon: "https://img.icons8.com/color/48/000000/language.png"
    },
    {
        id: "14",
        title: "مدير موارد بشرية",
        company: "شركة استشارات",
        location: "القاهرة",
        category: "إدارة",
        experience: "6 سنوات",
        description: "مطلوب مدير موارد بشرية لإدارة عمليات التوظيف والتدريب.",
        salary: "23000 جنيه مصري",
        posted: "2025-03-05",
        icon: "https://img.icons8.com/color/48/000000/hr.png"
    },
    {
        id: "15",
        title: "مرشد سياحي",
        company: "شركة سياحة",
        location: "شرم الشيخ",
        category: "سياحة",
        experience: "3 سنوات",
        description: "مطلوب مرشد سياحي لتنظيم الجولات السياحية للزوار.",
        salary: "12000 جنيه مصري",
        posted: "2025-03-01",
        icon: "https://img.icons8.com/color/48/000000/tour-guide.png"
    },
    {
        id: "16",
        title: "موظف خدمة عملاء",
        company: "شركة اتصالات",
        location: "طنطا",
        category: "خدمة عملاء",
        experience: "1 سنة",
        description: "مطلوب موظف خدمة عملاء للرد على استفسارات العملاء.",
        salary: "6000 جنيه مصري",
        posted: "2025-02-28",
        icon: "https://img.icons8.com/color/48/000000/customer-support.png"
    },
    {
        id: "17",
        title: "مندوب مبيعات",
        company: "شركة أدوية",
        location: "الزقازيق",
        category: "مبيعات",
        experience: "2 سنة",
        description: "مطلوب مندوب مبيعات لتسويق المنتجات الطبية.",
        salary: "9000 جنيه مصري",
        posted: "2025-02-25",
        icon: "https://img.icons8.com/color/48/000000/sales-performance.png"
    },
    {
        id: "18",
        title: "طبيب بيطري",
        company: "عيادة بيطرية",
        location: "القاهرة",
        category: "طب",
        experience: "3 سنوات",
        description: "مطلوب طبيب بيطري للعمل في عيادة بيطرية.",
        salary: "13000 جنيه مصري",
        posted: "2025-02-20",
        icon: "https://img.icons8.com/color/48/000000/veterinarian.png"
    },
    {
        id: "19",
        title: "مهندس ميكانيكا",
        company: "شركة تصنيع",
        location: "الإسكندرية",
        category: "هندسة",
        experience: "5 سنوات",
        description: "مطلوب مهندس ميكانيكا للعمل في مصنع تصنيع.",
        salary: "20000 جنيه مصري",
        posted: "2025-02-15",
        icon: "https://img.icons8.com/color/48/000000/mechanical-engineer.png"
    },
    {
        id: "20",
        title: "أخصائي تسويق رقمي",
        company: "وكالة إعلانات",
        location: "الجيزة",
        category: "تسويق",
        experience: "3 سنوات",
        description: "مطلوب أخصائي تسويق رقمي لإدارة الحملات الإعلانية.",
        salary: "14000 جنيه مصري",
        posted: "2025-02-10",
        icon: "https://img.icons8.com/color/48/000000/digital-marketing.png"
    }
];

// Companies Ads Data
const companiesAds = [
    {
        company: "شركة تقنية مصر",
        description: "نبحث عن مهندسي برمجيات ذوي خبرة للانضمام إلى فريقنا في القاهرة.",
        icon: "https://img.icons8.com/color/48/000000/code.png"
    },
    {
        company: "فندق خمس نجوم",
        description: "فرص عمل في شرم الشيخ! نبحث عن مدير فندق محترف.",
        icon: "https://img.icons8.com/color/48/000000/hotel.png"
    },
    {
        company: "شركة استشارات",
        description: "نحتاج إلى مدير موارد بشرية للعمل في القاهرة.",
        icon: "https://img.icons8.com/color/48/000000/hr.png"
    },
    {
        company: "شركة اتصالات",
        description: "وظائف شاغرة في خدمة العملاء بطنطا، انضم إلينا الآن!",
        icon: "https://img.icons8.com/color/48/000000/customer-support.png"
    }
];

// Translations
const translations = {
    ar: {
        title: 'وظفني',
        home: 'الرئيسية',
        myJobs: 'وظائفي',
        notifications: 'الإشعارات',
        messages: 'الرسائل',
        askForMe: 'أسال ليا',
        jobSettings: 'إعدادات الوظيفة',
        categories: 'الأقسام',
        settings: 'الإعدادات',
        about: 'حول الموقع',
        contact: 'اتصل بنا',
        login: 'تسجيل الدخول',
        forCompanies: 'للشركات',
        uploadCV: 'رفع السيرة الذاتية',
        findJob: 'ابحث عن وظيفتك المثالية في مصر',
        search: 'بحث',
        searchPlaceholder: 'ابحث عن وظيفة...',
        allLocations: 'جميع المواقع',
        allCategories: 'جميع المجالات',
        availableJobs: 'الوظائف المتاحة',
        companiesAds: 'إعلانات الشركات',
        viewDetails: 'عرض التفاصيل',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'أدخل بريدك الإلكتروني',
        password: 'كلمة المرور',
        passwordPlaceholder: 'أدخل كلمة المرور',
        noAccount: 'ليس لديك حساب؟',
        createAccount: 'إنشاء حساب',
        companyDashboard: 'لوحة تحكم الشركات',
        addJob: 'إضافة وظيفة جديدة',
        companyJobs: 'وظائف الشركة',
        statusActive: 'الحالة: نشطة',
        edit: 'تعديل',
        delete: 'حذف',
        company: 'الشركة',
        location: 'الموقع',
        experience: 'الخبرة',
        description: 'الوصف',
        salary: 'الراتب',
        posted: 'تاريخ النشر',
        applyNow: 'تقدم الآن',
        addToFavorites: 'إضافة إلى المفضلة',
        removeFromFavorites: 'إزالة من المفضلة',
        loadMore: 'تحميل المزيد',
        appliedSuccessfully: 'تم التقديم بنجاح!',
        loggedInSuccessfully: 'تم تسجيل الدخول بنجاح!',
        jobAddedSuccessfully: 'تمت إضافة وظيفة جديدة بنجاح!',
        jobDeletedSuccessfully: 'تم حذف الوظيفة بنجاح!',
        aboutContent: 'نحن منصة "وظفني"، نهدف إلى ربط الباحثين عن العمل بأفضل الفرص الوظيفية في مصر. نقدم مجموعة واسعة من الوظائف في مختلف المجالات مثل التكنولوجيا، التسويق، التعليم، الطب، والهندسة. سواء كنت باحثًا عن عمل أو شركة تبحث عن مواهب، نحن هنا لدعمك.',
        aboutMission: 'مهمتنا هي تسهيل عملية التوظيف من خلال توفير واجهة سهلة الاستخدام وفلاتر بحث متقدمة لتلبية احتياجاتك.',
        name: 'الاسم',
        namePlaceholder: 'أدخل اسمك',
        message: 'الرسالة',
        messagePlaceholder: 'اكتب رسالتك هنا...',
        sendMessage: 'إرسال الرسالة',
        messageSentSuccessfully: 'تم إرسال الرسالة بنجاح!',
        contactCompany: 'تواصل مع الشركة',
        chooseCV: 'اختر ملف السيرة الذاتية (PDF أو Word)',
        uploadCVButton: 'رفع السيرة الذاتية',
        cvUploadedSuccessfully: 'تم رفع السيرة الذاتية بنجاح!',
        footerAbout: 'منصة توظيف مصرية تساعدك في العثور على وظيفة أحلامك في مصر.',
        quickLinks: 'روابط سريعة',
        contactUs: 'تواصلوا معنا',
        footerBottom: '© 2025 وظفني. جميع الحقوق محفوظة.'
    },
    en: {
        title: 'Wazafny',
        home: 'Home',
        myJobs: 'My Jobs',
        notifications: 'Notifications',
        messages: 'Messages',
        askForMe: 'Ask For Me',
        jobSettings: 'Job Settings',
        categories: 'Categories',
        settings: 'Settings',
        about: 'About Us',
        contact: 'Contact Us',
        login: 'Login',
        forCompanies: 'For Companies',
        uploadCV: 'Upload CV',
        findJob: 'Find Your Perfect Job in Egypt',
        search: 'Search',
        searchPlaceholder: 'Search for a job...',
        allLocations: 'All Locations',
        allCategories: 'All Categories',
        availableJobs: 'Available Jobs',
        companiesAds: 'Companies Ads',
        viewDetails: 'View Details',
        email: 'Email',
        emailPlaceholder: 'Enter your email',
        password: 'Password',
        passwordPlaceholder: 'Enter your password',
        noAccount: 'Don’t have an account?',
        createAccount: 'Create an account',
        companyDashboard: 'Company Dashboard',
        addJob: 'Add New Job',
        companyJobs: 'Company Jobs',
        statusActive: 'Status: Active',
        edit: 'Edit',
        delete: 'Delete',
        company: 'Company',
        location: 'Location',
        experience: 'Experience',
        description: 'Description',
        salary: 'Salary',
        posted: 'Posted On',
        applyNow: 'Apply Now',
        addToFavorites: 'Add to Favorites',
        removeFromFavorites: 'Remove from Favorites',
        loadMore: 'Load More',
        appliedSuccessfully: 'Applied successfully!',
        loggedInSuccessfully: 'Logged in successfully!',
        jobAddedSuccessfully: 'Job added successfully!',
        jobDeletedSuccessfully: 'Job deleted successfully!',
        aboutContent: 'We are "Wazafny", a platform aimed at connecting job seekers with the best job opportunities in Egypt. We offer a wide range of jobs in various fields such as technology, marketing, education, medicine, and engineering. Whether you are a job seeker or a company looking for talent, we are here to support you.',
        aboutMission: 'Our mission is to simplify the recruitment process by providing an easy-to-use interface and advanced search filters to meet your needs.',
        name: 'Name',
        namePlaceholder: 'Enter your name',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
        sendMessage: 'Send Message',
        messageSentSuccessfully: 'Message sent successfully!',
        contactCompany: 'Contact Company',
        chooseCV: 'Choose CV file (PDF or Word)',
        uploadCVButton: 'Upload CV',
        cvUploadedSuccessfully: 'CV uploaded successfully!',
        footerAbout: 'An Egyptian recruitment platform helping you find your dream job in Egypt.',
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us',
        footerBottom: '© 2025 Wazafny. All rights reserved.'
    }
};

// State
let currentLang = localStorage.getItem('language') || 'ar';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let displayedJobs = 0;
const jobsPerPage = 6;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    updateLanguage();
    document.getElementById('languageSelect').value = currentLang;

    // Load initial jobs and ads
    if (document.getElementById('jobsContainer')) {
        loadJobs();
    }
    if (document.getElementById('adsContainer')) {
        loadAds();
    }

    // Language change
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('language', currentLang);
        updateLanguage();
        if (document.getElementById('jobsContainer')) {
            displayedJobs = 0;
            loadJobs();
        }
        if (document.getElementById('adsContainer')) {
            loadAds();
        }
    });

    // Load More Button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadJobs();
        });
    }

    // Favorites Buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.favorite-btn')) {
            const btn = e.target.closest('.favorite-btn');
            const id = btn.dataset.id;
            const job = {
                id: id,
                title: btn.dataset.title,
                description: btn.dataset.description,
                location: btn.dataset.location,
                category: btn.dataset.category,
                icon: btn.dataset.icon
            };

            if (favorites.some(fav => fav.id === id)) {
                favorites = favorites.filter(fav => fav.id !== id);
                btn.classList.remove('added');
                btn.querySelector('span').textContent = translations[currentLang].addToFavorites;
                showToast(translations[currentLang].removeFromFavorites);
            } else {
                favorites.push(job);
                btn.classList.add('added');
                btn.querySelector('span').textContent = translations[currentLang].removeFromFavorites;
                showToast(translations[currentLang].addToFavorites);
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    });

    // GSAP Animations
    gsap.from('.header', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.hero-section', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
    });

    gsap.from('.companies-ads', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out'
    });

    gsap.from('.jobs-section', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1,
        ease: 'power2.out'
    });

    // Slide Animations
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
    }

    setInterval(nextSlide, 7000);
});

// Update Language
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        elem.textContent = translations[currentLang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
        const key = elem.getAttribute('data-i18n-placeholder');
        elem.setAttribute('placeholder', translations[currentLang][key]);
    });

    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
}

// Load Jobs
function loadJobs() {
    const jobsContainer = document.getElementById('jobsContainer');
    const searchQuery = document.getElementById('jobSearch')?.value.toLowerCase() || '';
    const locationFilter = document.getElementById('locationFilter')?.value || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';

    // Filter jobs
    let filteredJobs = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery) ||
            job.company.toLowerCase().includes(searchQuery) ||
            job.description.toLowerCase().includes(searchQuery);
        const matchesLocation = locationFilter ? job.location === locationFilter : true;
        const matchesCategory = categoryFilter ? job.category === categoryFilter : true;
        return matchesSearch && matchesLocation && matchesCategory;
    });

    // Load jobs incrementally
    const nextJobs = filteredJobs.slice(displayedJobs, displayedJobs + jobsPerPage);
    nextJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <img src="${job.icon}" alt="Job Icon" class="job-icon">
            <div class="job-content">
                <h3>${job.title}</h3>
                <p>${job.company} - ${job.location}</p>
                <p>${job.description}</p>
                <div class="job-footer">
                    <button class="favorite-btn" 
                        data-id="${job.id}" 
                        data-title="${job.title}" 
                        data-description="${job.description}" 
                        data-location="${job.location}" 
                        data-category="${job.category}" 
                        data-icon="${job.icon}">
                        <i class="fas fa-heart"></i>
                        <span>${favorites.some(fav => fav.id === job.id) ? translations[currentLang].removeFromFavorites : translations[currentLang].addToFavorites}</span>
                    </button>
                    <a href="job-details.html?id=${job.id}" data-i18n="viewDetails">${translations[currentLang].viewDetails}</a>
                </div>
            </div>
        `;
        if (favorites.some(fav => fav.id === job.id)) {
            jobCard.querySelector('.favorite-btn').classList.add('added');
        }
        jobsContainer.appendChild(jobCard);

        // Animate job card
        gsap.from(jobCard, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: jobCard,
                start: 'top 80%'
            }
        });
    });

    displayedJobs += nextJobs.length;

    // Hide Load More button if no more jobs to load
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedJobs >= filteredJobs.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Load Companies Ads
function loadAds() {
    const adsContainer = document.getElementById('adsContainer');
    adsContainer.innerHTML = ''; // Clear previous ads
    companiesAds.forEach(ad => {
        const adCard = document.createElement('div');
        adCard.classList.add('ads-card');
        adCard.innerHTML = `
            <div class="ads-header">
                <img src="${ad.icon}" alt="Company Icon" class="ads-icon">
                <div>
                    <h3>${ad.company}</h3>
                </div>
            </div>
            <p>${ad.description}</p>
        `;
        adsContainer.appendChild(adCard);

        // Animate ad card
        gsap.from(adCard, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: adCard,
                start: 'top 80%'
            }
        });
    });
}

// Search Jobs
function searchJobs() {
    displayedJobs = 0;
    const jobsContainer = document.getElementById('jobsContainer');
    jobsContainer.innerHTML = '';
    loadJobs();
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}