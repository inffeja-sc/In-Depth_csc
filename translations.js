// ===== Словарь переводов (RU / EN / DE / ES) =====
const translations = {
    ru: {
     
    numeracy_title: "🔢 Системы счисления — Учебный курс",
    nav_home: "Главная",
    nav_topics: "Темы",
    nav_start: "Быстрый старт",
    hero_title: "🔢 Системы счисления",
    hero_subtitle: "Полный учебный курс по теории и практике перевода чисел между системами счисления",
    stat_topics: "Тем",
    stat_examples: "Примеров",
    stat_tasks: "Задач",
    stat_practice: "Практики",
    about_title: "О курсе",
    about_text: "Этот сайт представляет собой полное учебное пособие по позиционным системам счисления.",
    topics_title: "📚 Темы курса",
    topic1_title: "Позиционные СС",
    topic1_desc: "Основные понятия, алфавит, основание, разряды",
    topic2_title: "Целые числа",
    topic2_desc: "Перевод целых чисел между системами счисления",
    topic3_title: "Дробные числа",
    topic3_desc: "Перевод конечных P-ичных дробей",
    topic4_title: "Периодические дроби",
    topic4_desc: "Бесконечные периодические дроби",
    topic5_title: "Смешанные СС",
    topic5_desc: "P-Q-ичные системы, двоично-десятичная",
    topic6_title: "Система Фибоначчи",
    topic6_desc: "Необычная система на основе чисел Фибоначчи",
    topic7_title: "Задачи и задания",
    topic7_desc: "Более 60 задач с решениями",
    topic8_title: "Калькулятор",
    topic8_desc: "Инструмент для перевода чисел",
    quickstart_title: "🚀 Быстрый старт",
    step1_title: "Основы",
    step1_desc: "Начните с темы Позиционные СС",
    step2_title: "Практика",
    step2_desc: "Переходите к целым и дробным числам",
    step3_title: "Углубление",
    step3_desc: "Изучите периодические дроби",
    step4_title: "Закрепление",
    step4_desc: "Решайте задачи и используйте калькулятор",
    footer_text: "Учебный курс Системы счисления",
    
        logo: "🎓 Учи играючи!",
        nav_sections: "Разделы",
        nav_about: "О нас",
        nav_stats: "Статистика",

        hero_badge: "🔥 Новинка 2026",
        hero_title_1: "Информатика",
        hero_title_2: "это весело! 🎉",
        hero_subtitle: "Учись, играй, решай задачи и помогай друзьям — всё в одном месте!",
        hero_btn_start: "🚀 Начать путешествие",
        hero_btn_more: "🤔 Узнать больше",
        scroll_down: "Листай вниз",

        sections_title_1: "Выбери свой путь",
        sections_subtitle: "Четыре крутых направления для прокачки навыков",
        featured: "⭐ Популярное",

        card_games_title: "Игры со смыслом",
        card_games_desc: "Учись играя! Интерактивные квесты, головоломки и мини-игры по информатике",
        card_games_tag1: "🎲 Квесты",
        card_games_tag2: "🧩 Головоломки",
        card_games_tag3: "🏆 Рейтинги",

        card_course_title: "Курс профильной информатики",
        card_course_desc: "Системы счисления, алгоритмы, логика — полный курс с примерами и задачами",
        card_course_tag1: "🔢 Системы счисления",
        card_course_tag2: "🧮 Калькулятор",
        card_course_tag3: "✏️ 60+ задач",

        card_trainers_title: "Тренажёры-зубрилки и понимашки",
        card_trainers_desc: "Повторяй, пока не запомнишь! Автоматическая генерация заданий с проверкой",
        card_trainers_tag1: "🔄 Автогенерация",
        card_trainers_tag2: "✅ Мгновенная проверка",
        card_trainers_tag3: "📈 Прогресс",

        card_help_title: "Помощь коллегам",
        card_help_desc: "Объясни другу то, что понял сам! Методики, шпаргалки и готовые объяснения",
        card_help_tag1: "📝 Шпаргалки",
        card_help_tag2: "💡 Лайфхаки",
        card_help_tag3: "👥 Сообщество",

        stats_title: "Наши достижения",
        stat_1: "Тем курса",
        stat_2: "Задач",
        stat_3: "Учеников",
        stat_4: "Часа контента",

        why_title: "Почему это круто?",
        feat_1_title: "Интерактивность",
        feat_1_desc: "Никакой скуки! Всё можно потрогать, попробовать и проверить",
        feat_2_title: "Понимание, а не зубрёжка",
        feat_2_desc: "Объясняем так, чтобы действительно стало понятно",
        feat_3_title: "От простого к сложному",
        feat_3_desc: "Постепенное погружение — никто не останется позади",
        feat_4_title: "Красивый дизайн",
        feat_4_desc: "Учиться должно быть приятно для глаз",

        cta_title: "Готов начать? 🚀",
        cta_desc: "Выбери раздел и погрузись в мир информатики!",
        cta_btn: "🎯 Выбрать направление",

        footer_platform: "Учебная платформа по информатике",
        footer_made: "Сделано с ❤️ для учеников и учителей",

        // Morze
        morze_title: "📡 Азбука Морзе",
        morze_tab_text_to_morse: "Текст → Морзе",
        morze_tab_morse_to_text: "Морзе → Текст",
        morze_tab_mouse_input: "Ввод мышью",
        morze_tab_alphabet: "Алфавит",
        morze_btn_convert: "Преобразовать",
        morze_btn_clear: "Очистить",
        morze_btn_play: "🔊 Воспроизвести",
        morze_speed_label: "Скорость:",
        morze_speed_unit: "мс",
        morze_visual_title: "Визуальное представление",
        morze_text_output: "Текстовый код Морзе",
        morze_home: "Главная",
        morze_decode: "Расшифровка",
        morze_mouse_title: "Ввод кода Морзе мышью",
        morze_mouse_desc: "Удерживайте кнопку для ввода:",
        morze_mouse_short: "Короткое нажатие = точка (•)",
        morze_mouse_long: "Длинное удержание = тире (—)",
        morze_mouse_btn: "НАЖМИТЕ И УДЕРЖИВАЙТЕ",
        morze_threshold: "Порог точки/тире (мс)",
        morze_letter_pause: "Пауза между буквами (мс)",
        morze_word_pause: "Пауза между словами (мс)",
        morze_clear_input: "Очистить ввод",
        morze_decode_btn: "Расшифровать",
        morze_alpha_ru: "🔤 Русский алфавит",
        morze_alpha_en: "🔤 Английский алфавит",
        morze_alpha_digits: "🔢 Цифры",
        morze_alpha_punct: "❗ Знаки препинания"
    },

   en: {
    // ... existing translations ...
    
    // === NEW TRANSLATIONS for numeration.html ===
    numeracy_title: "🔢 Number Systems — Course",
    nav_home: "Home",
    nav_topics: "Topics",
    nav_start: "Quick Start",
    hero_title: "🔢 Number Systems",
    hero_subtitle: "Complete course on theory and practice of number conversion",
    stat_topics: "Topics",
    stat_examples: "Examples",
    stat_tasks: "Tasks",
    stat_practice: "Practice",
    about_title: "About the Course",
    about_text: "This site is a complete guide to positional number systems.",
    topics_title: "📚 Course Topics",
    topic1_title: "Positional Systems",
    topic1_desc: "Basic concepts, alphabet, base, digits",
    topic2_title: "Integers",
    topic2_desc: "Converting integers between systems",
    topic3_title: "Fractions",
    topic3_desc: "Converting finite P-ary fractions",
    topic4_title: "Periodic Fractions",
    topic4_desc: "Infinite periodic fractions",
    topic5_title: "Mixed Systems",
    topic5_desc: "P-Q-ary systems, BCD",
    topic6_title: "Fibonacci System",
    topic6_desc: "Unusual system based on Fibonacci numbers",
    topic7_title: "Tasks and Exercises",
    topic7_desc: "More than 60 problems with solutions",
    topic8_title: "Calculator",
    topic8_desc: "Tool for number conversion",
    quickstart_title: "🚀 Quick Start",
    step1_title: "Basics",
    step1_desc: "Start with Positional Systems",
    step2_title: "Practice",
    step2_desc: "Move to integers and fractions",
    step3_title: "Advanced",
    step3_desc: "Study periodic fractions",
    step4_title: "Consolidation",
    step4_desc: "Solve problems and use calculator",
    footer_text: "Number Systems Course",
    
    
        logo: "🎓 Learn by playing!",
        nav_sections: "Sections",
        nav_about: "About",
        nav_stats: "Stats",

        hero_badge: "🔥 New in 2026",
        hero_title_1: "Computer Science",
        hero_title_2: "is fun! 🎉",
        hero_subtitle: "Learn, play, solve problems and help friends — all in one place!",
        hero_btn_start: "🚀 Start the journey",
        hero_btn_more: "🤔 Learn more",
        scroll_down: "Scroll down",

        sections_title_1: "Choose your path",
        sections_subtitle: "Four cool directions to level up your skills",
        featured: "⭐ Popular",

        card_games_title: "Games with meaning",
        card_games_desc: "Learn by playing! Interactive quests, puzzles and mini-games about CS",
        card_games_tag1: "🎲 Quests",
        card_games_tag2: "🧩 Puzzles",
        card_games_tag3: "🏆 Leaderboards",

        card_course_title: "CS Advanced Course",
        card_course_desc: "Number systems, algorithms, logic — a full course with examples and problems",
        card_course_tag1: "🔢 Number systems",
        card_course_tag2: "🧮 Calculator",
        card_course_tag3: "✏️ 60+ problems",

        card_trainers_title: "Drills & Understanding trainers",
        card_trainers_desc: "Repeat until you remember! Automatic task generation with instant check",
        card_trainers_tag1: "🔄 Auto-generation",
        card_trainers_tag2: "✅ Instant check",
        card_trainers_tag3: "📈 Progress",

        card_help_title: "Help your peers",
        card_help_desc: "Explain to a friend what you understood! Methods, cheat sheets and ready explanations",
        card_help_tag1: "📝 Cheat sheets",
        card_help_tag2: "💡 Lifehacks",
        card_help_tag3: "👥 Community",

        stats_title: "Our achievements",
        stat_1: "Course topics",
        stat_2: "Problems",
        stat_3: "Students",
        stat_4: "Hours of content",

        why_title: "Why is it cool?",
        feat_1_title: "Interactivity",
        feat_1_desc: "No boredom! You can touch, try and check everything",
        feat_2_title: "Understanding, not cramming",
        feat_2_desc: "We explain so that it really becomes clear",
        feat_3_title: "From simple to complex",
        feat_3_desc: "Gradual immersion — no one gets left behind",
        feat_4_title: "Beautiful design",
        feat_4_desc: "Learning should be pleasant for the eyes",

        cta_title: "Ready to start? 🚀",
        cta_desc: "Choose a section and dive into the world of CS!",
        cta_btn: "🎯 Choose a direction",

        footer_platform: "Computer Science learning platform",
        footer_made: "Made with ❤️ for students and teachers",

        morze_title: "📡 Morse Code",
        morze_tab_text_to_morse: "Text → Morse",
        morze_tab_morse_to_text: "Morse → Text",
        morze_tab_mouse_input: "Mouse input",
        morze_tab_alphabet: "Alphabet",
        morze_btn_convert: "Convert",
        morze_btn_clear: "Clear",
        morze_btn_play: "🔊 Play",
        morze_speed_label: "Speed:",
        morze_speed_unit: "ms",
        morze_visual_title: "Visual representation",
        morze_text_output: "Morse text code",
        morze_home: "Home",
        morze_decode: "Decode",
        morze_mouse_title: "Mouse Morse input",
        morze_mouse_desc: "Hold the button to input:",
        morze_mouse_short: "Short press = dot (•)",
        morze_mouse_long: "Long hold = dash (—)",
        morze_mouse_btn: "CLICK AND HOLD",
        morze_threshold: "Dot/dash threshold (ms)",
        morze_letter_pause: "Pause between letters (ms)",
        morze_word_pause: "Pause between words (ms)",
        morze_clear_input: "Clear input",
        morze_decode_btn: "Decode",
        morze_alpha_ru: "🔤 Russian alphabet",
        morze_alpha_en: "🔤 English Alphabet",
        morze_alpha_digits: "🔢 Digits",
        morze_alpha_punct: "❗ Punctuation"
    },
de{
       // === Numeration page ===
    numeracy_title: "🔢 Zahlensysteme — Lehrkurs",
    nav_home: "Startseite",
    nav_topics: "Themen",
    nav_start: "Schnellstart",
    hero_title: "🔢 Zahlensysteme",
    hero_subtitle: "Vollständiger Lehrkurs zur Theorie und Praxis der Umrechnung von Zahlen zwischen Zahlensystemen",
    stat_topics: "Themen",
    stat_examples: "Beispiele",
    stat_tasks: "Aufgaben",
    stat_practice: "Übungen",
    about_title: "Über den Kurs",
    about_text: "Diese Website ist ein vollständiges Lehrbuch zu positionalen Zahlensystemen. Sie lernen Theorie, Umrechnungsalgorithmen, das Horner-Schema, Arbeit mit Bruch- und periodischen Zahlen sowie gemischte Zahlensysteme.",
    topics_title: "📚 Kursthemen",
    topic1_title: "Positionale Systeme",
    topic1_desc: "Grundbegriffe, Alphabet, Basis, Stellen, erweiterte Form und Horner-Schema",
    topic2_title: "Ganzzahlen",
    topic2_desc: "Umrechnung ganzer Zahlen zwischen Zahlensystemen, Divisions- und Multiplikationsalgorithmen",
    topic3_title: "Bruchzahlen",
    topic3_desc: "Umrechnung endlicher P-adischer Brüche, zwei Berechnungsmethoden, Multiplikationstabelle",
    topic4_title: "Periodische Brüche",
    topic4_desc: "Unendliche periodische Brüche, geometrische Progression, zwei Umrechnungsmethoden",
    topic5_title: "Gemischte Systeme",
    topic5_desc: "P-Q-adische Systeme, binär-dezimal, Theoreme 2 und 3, Zifferngruppierung",
    topic6_title: "Fibonacci-System",
    topic6_desc: "Ungewöhnliches Zahlensystem basierend auf Fibonacci-Zahlen, Beispiel 10010_FB",
    topic7_title: "Aufgaben und Übungen",
    topic7_desc: "Über 60 Aufgaben unterschiedlicher Schwierigkeit mit ausführlichen Lösungen",
    topic8_title: "Rechner",
    topic8_desc: "Interaktives Werkzeug zur Umrechnung von Zahlen zwischen beliebigen Zahlensystemen",
    quickstart_title: "🚀 Schnellstart",
    step1_title: "Grundlagen",
    step1_desc: "Beginnen Sie mit dem Thema 'Positionale Systeme' — verstehen Sie Stellen und Basis",
    step2_title: "Praxis",
    step2_desc: "Gehen Sie zu ganzen und Bruchzahlen über — meistern Sie die Umrechnungsalgorithmen",
    step3_title: "Vertiefung",
    step3_desc: "Studieren Sie periodische Brüche und gemischte Systeme für fortgeschrittenes Niveau",
    step4_title: "Festigung",
    step4_desc: "Lösen Sie Aufgaben und nutzen Sie den Rechner zur Überprüfung Ihrer Antworten",
    footer_text: "Lehrkurs 'Zahlensysteme' | Erstellt auf Basis von Informatik-Kursmaterialien"
        logo: "🎓 Spielend lernen!",
        nav_sections: "Bereiche",
        nav_about: "Über uns",
        nav_stats: "Statistiken",

        hero_badge: "🔥 Neu 2026",
        hero_title_1: "Informatik",
        hero_title_2: "macht Spaß! 🎉",
        hero_subtitle: "Lerne, spiele, löse Aufgaben und hilf Freunden — alles an einem Ort!",
        hero_btn_start: "🚀 Reise starten",
        hero_btn_more: "🤔 Mehr erfahren",
        scroll_down: "Nach unten scrollen",

        sections_title_1: "Wähle deinen Weg",
        sections_subtitle: "Vier coole Richtungen, um deine Fähigkeiten zu verbessern",
        featured: "⭐ Beliebt",

        card_games_title: "Spiele mit Sinn",
        card_games_desc: "Lerne durch Spielen! Interaktive Quests, Rätsel und Mini-Spiele zur Informatik",
        card_games_tag1: "🎲 Quests",
        card_games_tag2: "🧩 Rätsel",
        card_games_tag3: "🏆 Ranglisten",

        card_course_title: "Informatik-Kurs für Fortgeschrittene",
        card_course_desc: "Zahlensysteme, Algorithmen, Logik — ein vollständiger Kurs mit Beispielen und Aufgaben",
        card_course_tag1: "🔢 Zahlensysteme",
        card_course_tag2: "🧮 Rechner",
        card_course_tag3: "✏️ 60+ Aufgaben",

        card_trainers_title: "Übungs- und Verständnis-Trainer",
        card_trainers_desc: "Wiederhole, bis du es kannst! Automatische Aufgabengenerierung mit sofortiger Prüfung",
        card_trainers_tag1: "🔄 Auto-Generierung",
        card_trainers_tag2: "✅ Sofortige Prüfung",
        card_trainers_tag3: "📈 Fortschritt",

        card_help_title: "Hilf deinen Mitschülern",
        card_help_desc: "Erkläre einem Freund, was du verstanden hast! Methoden, Spickzettel und fertige Erklärungen",
        card_help_tag1: "📝 Spickzettel",
        card_help_tag2: "💡 Lifehacks",
        card_help_tag3: "👥 Community",

        stats_title: "Unsere Erfolge",
        stat_1: "Kursthemen",
        stat_2: "Aufgaben",
        stat_3: "Schüler",
        stat_4: "Stunden Inhalt",

        why_title: "Warum ist das cool?",
        feat_1_title: "Interaktivität",
        feat_1_desc: "Keine Langeweile! Alles kann ausprobiert und überprüft werden",
        feat_2_title: "Verstehen statt Auswendiglernen",
        feat_2_desc: "Wir erklären so, dass es wirklich klar wird",
        feat_3_title: "Vom Einfachen zum Komplexen",
        feat_3_desc: "Allmähliches Eintauchen — niemand wird zurückgelassen",
        feat_4_title: "Schönes Design",
        feat_4_desc: "Lernen soll auch für die Augen angenehm sein",

        cta_title: "Bereit zu starten? 🚀",
        cta_desc: "Wähle einen Bereich und tauche in die Welt der Informatik ein!",
        cta_btn: "🎯 Richtung wählen",

        footer_platform: "Informatik-Lernplattform",
        footer_made: "Mit ❤️ für Schüler und Lehrer gemacht",

        morze_title: "📡 Morsealphabet",
        morze_tab_text_to_morse: "Text → Morse",
        morze_tab_morse_to_text: "Morse → Text",
        morze_tab_mouse_input: "Mauseingabe",
        morze_tab_alphabet: "Alphabet",
        morze_btn_convert: "Umwandeln",
        morze_btn_clear: "Löschen",
        morze_btn_play: "🔊 Abspielen",
        morze_speed_label: "Geschwindigkeit:",
        morze_speed_unit: "ms",
        morze_visual_title: "Visuelle Darstellung",
        morze_text_output: "Morse-Textcode",
        morze_home: "Startseite",
        morze_decode: "Entschlüsseln",
        morze_mouse_title: "Morse-Eingabe mit der Maus",
        morze_mouse_desc: "Halte die Taste gedrückt zur Eingabe:",
        morze_mouse_short: "Kurzes Drücken = Punkt (•)",
        morze_mouse_long: "Langes Halten = Strich (—)",
        morze_mouse_btn: "KLICKEN UND HALTEN",
        morze_threshold: "Punkt/Strich-Schwelle (ms)",
        morze_letter_pause: "Pause zwischen Buchstaben (ms)",
        morze_word_pause: "Pause zwischen Wörtern (ms)",
        morze_clear_input: "Eingabe löschen",
        morze_decode_btn: "Entschlüsseln",
        morze_alpha_ru: "🔤 Russisches Alphabet",
        morze_alpha_en: "🔤 Englisches Alphabet",
        morze_alpha_digits: "🔢 Ziffern",
        morze_alpha_punct: "❗ Satzzeichen"
    },

    es: {
            // === Numeration page ===
    numeracy_title: "🔢 Sistemas numéricos — Curso",
    nav_home: "Inicio",
    nav_topics: "Temas",
    nav_start: "Inicio rápido",
    hero_title: "🔢 Sistemas numéricos",
    hero_subtitle: "Curso completo sobre la teoría y práctica de la conversión de números entre sistemas numéricos",
    stat_topics: "Temas",
    stat_examples: "Ejemplos",
    stat_tasks: "Tareas",
    stat_practice: "Práctica",
    about_title: "Sobre el curso",
    about_text: "Este sitio es un manual completo sobre sistemas numéricos posicionales. Aprenderás teoría, algoritmos de conversión, el esquema de Horner, trabajo con fracciones y números periódicos, así como sistemas mixtos.",
    topics_title: "📚 Temas del curso",
    topic1_title: "Sistemas posicionales",
    topic1_desc: "Conceptos básicos, alfabeto, base, dígitos, forma expandida y esquema de Horner",
    topic2_title: "Números enteros",
    topic2_desc: "Conversión de enteros entre sistemas numéricos, algoritmos de división y multiplicación",
    topic3_title: "Números fraccionarios",
    topic3_desc: "Conversión de fracciones P-ádicas finitas, dos métodos de cálculo, tabla de multiplicar",
    topic4_title: "Fracciones periódicas",
    topic4_desc: "Fracciones periódicas infinitas, progresión geométrica, dos métodos de conversión",
    topic5_title: "Sistemas mixtos",
    topic5_desc: "Sistemas P-Q-ádicos, binario-decimal, teoremas 2 y 3, agrupación de dígitos",
    topic6_title: "Sistema Fibonacci",
    topic6_desc: "Sistema numérico inusual basado en números de Fibonacci, ejemplo 10010_FB",
    topic7_title: "Tareas y ejercicios",
    topic7_desc: "Más de 60 tareas de diferente complejidad con soluciones detalladas",
    topic8_title: "Calculadora",
    topic8_desc: "Herramienta interactiva para convertir números entre cualquier sistema numérico",
    quickstart_title: "🚀 Inicio rápido",
    step1_title: "Fundamentos",
    step1_desc: "Comienza con el tema 'Sistemas posicionales' — comprende los dígitos y la base",
    step2_title: "Práctica",
    step2_desc: "Pasa a números enteros y fraccionarios — domina los algoritmos de conversión",
    step3_title: "Profundización",
    step3_desc: "Estudia fracciones periódicas y sistemas mixtos para nivel avanzado",
    step4_title: "Consolidación",
    step4_desc: "Resuelve tareas y usa la calculadora para verificar tus respuestas",
    footer_text: "Curso 'Sistemas numéricos' | Creado sobre la base de materiales del curso de informática"
        logo: "🎓 ¡Aprende jugando!",
        nav_sections: "Secciones",
        nav_about: "Sobre nosotros",
        nav_stats: "Estadísticas",

        hero_badge: "🔥 Novedad 2026",
        hero_title_1: "¡La informática",
        hero_title_2: "es divertida! 🎉",
        hero_subtitle: "¡Aprende, juega, resuelve problemas y ayuda a tus amigos — todo en un solo lugar!",
        hero_btn_start: "🚀 Comenzar el viaje",
        hero_btn_more: "🤔 Saber más",
        scroll_down: "Desplázate hacia abajo",

        sections_title_1: "Elige tu camino",
        sections_subtitle: "Cuatro direcciones geniales para mejorar tus habilidades",
        featured: "⭐ Popular",

        card_games_title: "Juegos con sentido",
        card_games_desc: "¡Aprende jugando! Misiones interactivas, rompecabezas y minijuegos de informática",
        card_games_tag1: "🎲 Misiones",
        card_games_tag2: "🧩 Rompecabezas",
        card_games_tag3: "🏆 Clasificaciones",

        card_course_title: "Curso avanzado de informática",
        card_course_desc: "Sistemas numéricos, algoritmos, lógica — un curso completo con ejemplos y problemas",
        card_course_tag1: "🔢 Sistemas numéricos",
        card_course_tag2: "🧮 Calculadora",
        card_course_tag3: "✏️ 60+ problemas",

        card_trainers_title: "Entrenadores de práctica y comprensión",
        card_trainers_desc: "¡Repite hasta que lo recuerdes! Generación automática de tareas con verificación instantánea",
        card_trainers_tag1: "🔄 Auto-generación",
        card_trainers_tag2: "✅ Verificación instantánea",
        card_trainers_tag3: "📈 Progreso",

        card_help_title: "Ayuda a tus compañeros",
        card_help_desc: "¡Explica a un amigo lo que entendiste! Métodos, chuletas y explicaciones listas",
        card_help_tag1: "📝 Chuletas",
        card_help_tag2: "💡 Trucos",
        card_help_tag3: "👥 Comunidad",

        stats_title: "Nuestros logros",
        stat_1: "Temas del curso",
        stat_2: "Problemas",
        stat_3: "Estudiantes",
        stat_4: "Horas de contenido",

        why_title: "¿Por qué es genial?",
        feat_1_title: "Interactividad",
        feat_1_desc: "¡Sin aburrimiento! Puedes tocar, probar y verificar todo",
        feat_2_title: "Comprensión, no memorización",
        feat_2_desc: "Explicamos para que realmente se entienda",
        feat_3_title: "De lo simple a lo complejo",
        feat_3_desc: "Inmersión gradual — nadie se queda atrás",
        feat_4_title: "Diseño hermoso",
        feat_4_desc: "Aprender debe ser agradable para los ojos",

        cta_title: "¿Listo para empezar? 🚀",
        cta_desc: "¡Elige una sección y sumérgete en el mundo de la informática!",
        cta_btn: "🎯 Elegir dirección",

        footer_platform: "Plataforma de aprendizaje de informática",
        footer_made: "Hecho con ❤️ para estudiantes y profesores",

        morze_title: "📡 Código Morse",
        morze_tab_text_to_morse: "Texto → Morse",
        morze_tab_morse_to_text: "Morse → Texto",
        morze_tab_mouse_input: "Entrada con ratón",
        morze_tab_alphabet: "Alfabeto",
        morze_btn_convert: "Convertir",
        morze_btn_clear: "Limpiar",
        morze_btn_play: "🔊 Reproducir",
        morze_speed_label: "Velocidad:",
        morze_speed_unit: "ms",
        morze_visual_title: "Representación visual",
        morze_text_output: "Código Morse en texto",
        morze_home: "Inicio",
        morze_decode: "Descifrar",
        morze_mouse_title: "Entrada Morse con el ratón",
        morze_mouse_desc: "Mantén presionado el botón para ingresar:",
        morze_mouse_short: "Pulsación corta = punto (•)",
        morze_mouse_long: "Pulsación larga = raya (—)",
        morze_mouse_btn: "HAZ CLIC Y MANTÉN",
        morze_threshold: "Umbral punto/raya (ms)",
        morze_letter_pause: "Pausa entre letras (ms)",
        morze_word_pause: "Pausa entre palabras (ms)",
        morze_clear_input: "Limpiar entrada",
        morze_decode_btn: "Descifrar",
        morze_alpha_ru: "🔤 Alfabeto ruso",
        morze_alpha_en: "🔤 Alfabeto inglés",
        morze_alpha_digits: "🔢 Dígitos",
        morze_alpha_punct: "❗ Puntuación"
    }
};

// ===== Применение языка =====
function applyLanguage(lang) {
    // Если язык не поддерживается — fallback на русский
    if (!translations[lang]) lang = 'ru';

    const dict = translations[lang];
    document.documentElement.lang = lang;

    // Обновляем все элементы с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Обновляем placeholder'ы
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Обновляем title страницы, если у него есть data-i18n
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl && dict[titleEl.getAttribute('data-i18n')]) {
        document.title = dict[titleEl.getAttribute('data-i18n')];
    }

    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Сохраняем выбор
    localStorage.setItem('siteLang', lang);
}

// ===== Инициализация при загрузке =====
document.addEventListener('DOMContentLoaded', () => {
    // Восстанавливаем сохранённый язык или определяем по браузеру
    let savedLang = localStorage.getItem('siteLang');
    if (!savedLang) {
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        // Поддерживаемые языки
        const supported = ['ru', 'en', 'de', 'es'];
        savedLang = supported.includes(browserLang) ? browserLang : 'ru';
    }
    applyLanguage(savedLang);

    // Обработчики переключателя
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyLanguage(btn.dataset.lang);
        });
    });
});
