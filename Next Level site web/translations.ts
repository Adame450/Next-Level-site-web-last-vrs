import { Translations, Language } from './types';

export const I18N_ENGINE: Record<Language, Translations> = {
  FR: {
    navbar: {
      features: "ARCHITECTURE",
      join: "NOUS REJOINDRE",
      cta: "COMMENCER",
      simulator: "SIMULATEUR"
    },
    hero: {
      label: "SERVICE D'OPTIMISATION PC PREMIUM",
      title: "DOMINEZ VOTRE JEU",
      subtitle: "Transformez votre machine en arme de compétition. Latence nulle. FPS maximisés. La référence e-sport.",
      cta_primary: "ACCÉDER AU DISCORD",
      cta_secondary: "SIMULER MES PERFS"
    },
    stats: {
      clients: "CLIENTS OPTIMISÉS",
      fps: "GAIN FPS MOYEN",
      latency: "RÉDUCTION LATENCE",
      satisfaction: "SATISFACTION"
    },
    story: {
      title: "ORIGINE DU PROJET",
      log_failure_title: "ERREUR CRITIQUE : LE SCAM À 40€",
      log_failure_desc: "J'ai payé 40€ chez un concurrent 'réputé' (Tweaks Lab). Le résultat ? Une catastrophe. Service lent, support absent. Au lieu de gagner des FPS, mon PC est devenu instable, le système crashait. Leur 'optimisation' détruisait mon matériel.",
      log_success_title: "NOUVEAU NOYAU : PROJET NEXT LEVEL",
      log_success_desc: "J'ai tout effacé. J'ai rencontré 'Le Secret', un ingénieur virtuel. Ensemble, nous avons réécrit chaque ligne de code. Pas de scripts cassés. Pas de risques. Une optimisation SAFE, CLEAN et RADICALE.",
      partner: "PARTENAIRE: LE SECRET"
    },
    manifesto: {
      title: "POURQUOI NOUS ?",
      subtitle: "L'approche radicale pour des résultats tangibles.",
      items: [
        {
          id: "01",
          title: "AUTO BIOS & CUSTOM",
          description: "Notre logiciel déploie un BIOS sur mesure ou automatisé pour débrider votre carte mère.",
          techSpec: "SOFTWARE EXCLUSIF"
        },
        {
          id: "02",
          title: "SCRIPT WINDOWS",
          description: "Suppression chirurgicale de la télémétrie et des services inutiles via nos scripts propriétaires. Zéro ISO modifié.",
          techSpec: "SÉCURITÉ 100%"
        },
        {
          id: "03",
          title: "RÉSEAU E-SPORT",
          description: "Optimisation de la pile TCP/IP pour une registration des balles instantanée.",
          techSpec: "PING STABLE"
        }
      ]
    },
    features: {
      title: "RÉSULTATS",
      grid: [
        { title: "INPUT LAG", desc: "Temps de réponse divisé par deux.", stat: "-40%" },
        { title: "FPS STABILITY", desc: "Fini les chutes de framerate en fight.", stat: "0.1% LOW" },
        { title: "CONNEXION", desc: "Priorité absolue aux paquets jeu.", stat: "OPTIMISÉ" },
        { title: "RAM", desc: "Overclocking manuel des timings.", stat: "TUNED" }
      ]
    },
    discord: {
      status_label: "STATUT",
      status_value: "OUVERT",
      access_label: "ACCÈS IMMÉDIAT",
      cta: "REJOINDRE L'ÉLITE",
      id_label: "TICKET D'ENTRÉE"
    },
    footer: {
      copyright: "TOUS DROITS RÉSERVÉS",
      system: "NEXT LEVEL SYSTEMS"
    },
    calculator: {
      title: "PRONOSTIC DE PERFORMANCE",
      subtitle: "SAISISSEZ VOS COMPOSANTS POUR DÉBLOQUER VOTRE POTENTIEL.",
      select_cpu: "QUEL EST VOTRE PROCESSEUR (CPU) ?",
      select_gpu: "QUELLE EST VOTRE CARTE GRAPHIQUE (GPU) ?",
      select_ram: "QUELLE EST VOTRE RAM ?",
      analyze_btn: "LANCER LA SIMULATION",
      analyzing: "ANALYSE DU MATÉRIEL...",
      result_title: "RAPPORT d'OPTIMISATION",
      before: "STOCK CONFIG",
      after: "OPTIMISÉ",
      gain: "GAIN MOYEN",
      latency_est: "STABILITÉ (1% LOW)"
    }
  },
  EN: {
    navbar: {
      features: "ARCHITECTURE",
      join: "JOIN US",
      cta: "START NOW",
      simulator: "SIMULATOR"
    },
    hero: {
      label: "PREMIUM PC OPTIMIZATION SERVICE",
      title: "DOMINATE THE GAME",
      subtitle: "Turn your machine into a competitive weapon. Zero latency. Max FPS. The e-sports benchmark.",
      cta_primary: "JOIN DISCORD",
      cta_secondary: "SIMULATE PERFS"
    },
    stats: {
      clients: "OPTIMIZED RIGS",
      fps: "AVG FPS GAIN",
      latency: "LATENCY REDUCTION",
      satisfaction: "SATISFACTION"
    },
    story: {
      title: "PROJECT ORIGIN",
      log_failure_title: "CRITICAL ERROR: THE $40 SCAM",
      log_failure_desc: "I paid €40 to a 'reputable' competitor (Tweaks Lab). The result? A disaster. Slow service, zero support. Instead of gaining FPS, my PC became unstable, system crashes. Their 'optimization' was breaking my hardware.",
      log_success_title: "NEW KERNEL: PROJECT NEXT LEVEL",
      log_success_desc: "I wiped everything. I met 'Le Secret', a virtual engineer. Together, we rewrote every line of code. No broken scripts. No risks. Just SAFE, CLEAN, and RADICAL optimization.",
      partner: "PARTNER: LE SECRET"
    },
    manifesto: {
      title: "WHY CHOOSE US?",
      subtitle: "The radical approach for tangible results.",
      items: [
        {
          id: "01",
          title: "AUTO BIOS & CUSTOM",
          description: "Our software deploys a custom or automated BIOS to unchain your motherboard.",
          techSpec: "EXCLUSIVE SOFTWARE"
        },
        {
          id: "02",
          title: "WINDOWS SCRIPT",
          description: "Surgical removal of telemetry and useless services via our proprietary scripts. Zero modified ISOs.",
          techSpec: "100% SECURE"
        },
        {
          id: "03",
          title: "E-SPORTS NETWORK",
          description: "TCP/IP stack optimization for instant bullet registration.",
          techSpec: "STABLE PING"
        }
      ]
    },
    features: {
      title: "RESULTS",
      grid: [
        { title: "INPUT LAG", desc: "Response time cut in half.", stat: "-40%" },
        { title: "FPS STABILITY", desc: "No more frame drops in fights.", stat: "0.1% LOW" },
        { title: "CONNECTION", desc: "Absolute priority for game packets.", stat: "OPTIMIZED" },
        { title: "RAM", desc: "Manual timing overclocking.", stat: "TUNED" }
      ]
    },
    discord: {
      status_label: "STATUS",
      status_value: "OPEN",
      access_label: "INSTANT ACCESS",
      cta: "JOIN THE ELITE",
      id_label: "ENTRY TICKET"
    },
    footer: {
      copyright: "ALL RIGHTS RESERVED",
      system: "NEXT LEVEL SYSTEMS"
    },
    calculator: {
      title: "PERFORMANCE PROGNOSIS",
      subtitle: "ENTER YOUR HARDWARE TO UNLOCK HIDDEN POTENTIAL.",
      select_cpu: "WHAT IS YOUR CPU?",
      select_gpu: "WHAT IS YOUR GPU?",
      select_ram: "WHAT IS YOUR RAM?",
      analyze_btn: "RUN SIMULATION",
      analyzing: "ANALYZING HARDWARE...",
      result_title: "OPTIMIZATION REPORT",
      before: "STOCK CONFIG",
      after: "OPTIMIZED",
      gain: "AVG GAIN",
      latency_est: "STABILITY (1% LOW)"
    }
  },
  ES: {
    navbar: {
      features: "ARQUITECTURA",
      join: "ÚNETE",
      cta: "EMPEZAR",
      simulator: "SIMULADOR"
    },
    hero: {
      label: "SERVICIO DE OPTIMIZACIÓN DE PC PREMIUM",
      title: "DOMINA EL JUEGO",
      subtitle: "Convierte tu máquina en un arma competitiva. Latencia cero. Máximos FPS. La referencia en e-sports.",
      cta_primary: "ÚNETE A DISCORD",
      cta_secondary: "SIMULAR RENDIMIENTO"
    },
    stats: {
      clients: "CLIENTES OPTIMIZADOS",
      fps: "GANANCIA FPS PROM.",
      latency: "REDUCCIÓN LATENCIA",
      satisfaction: "SATISFACCIÓN"
    },
    story: {
      title: "ORIGEN DEL PROYECTO",
      log_failure_title: "ERROR CRÍTICO: LA ESTAFA DE 40€",
      log_failure_desc: "Pagué 40€ a un competidor 'famoso' (Tweaks Lab). ¿El resultado? Un desastre. Servicio lento, sin soporte. En lugar de ganar FPS, mi PC se volvió inestable, fallos del sistema. Su 'optimización' estaba rompiendo mi hardware.",
      log_success_title: "NUEVO NÚCLEO: PROYECTO NEXT LEVEL",
      log_success_desc: "Borré todo. Conocí a 'Le Secret', un ingeniero virtual. Juntos, reescribimos cada línea de código. Sin scripts rotos. Sin riesgos. Una optimización SEGURA, LIMPIA y RADICAL.",
      partner: "SOCIO: LE SECRET"
    },
    manifesto: {
      title: "¿POR QUÉ ELEGIRNOS?",
      subtitle: "El enfoque radical para resultados tangibles.",
      items: [
        {
          id: "01",
          title: "AUTO BIOS & CUSTOM",
          description: "Nuestro software despliega un BIOS a medida o automático para liberar tu placa base.",
          techSpec: "SOFTWARE EXCLUSIVO"
        },
        {
          id: "02",
          title: "SCRIPT WINDOWS",
          description: "Eliminación quirúrgica de telemetría y servicios inútiles mediante scripts propietarios. Cero ISO.",
          techSpec: "100% SEGURO"
        },
        {
          id: "03",
          title: "RED E-SPORTS",
          description: "Optimización de la pila TCP/IP para registro instantáneo de balas.",
          techSpec: "PING STABLE"
        }
      ]
    },
    features: {
      title: "RESULTADOS",
      grid: [
        { title: "INPUT LAG", desc: "Tiempo de respuesta reducido a la mitad.", stat: "-40%" },
        { title: "FPS STABILITY", desc: "Sin caídas de frames en peleas.", stat: "0.1% LOW" },
        { title: "CONEXIÓN", desc: "Prioridad absoluta para paquetes de juego.", stat: "OPTIMIZADO" },
        { title: "RAM", desc: "Overclocking manual de timings.", stat: "AFINADO" }
      ]
    },
    discord: {
      status_label: "ESTADO",
      status_value: "ABIERTO",
      access_label: "ACCESO INMEDIATO",
      cta: "ÚNETE A LA ÉLITE",
      id_label: "TICKET DE ENTRADA"
    },
    footer: {
      copyright: "TODOS LOS DERECHOS RESERVADOS",
      system: "NEXT LEVEL SYSTEMS"
    },
    calculator: {
      title: "PRONÓSTICO DE RENDIMIENTO",
      subtitle: "INGRESA TU HARDWARE PARA VER EL POTENCIAL OCULTO.",
      select_cpu: "¿CUÁL ES TU CPU?",
      select_gpu: "¿CUÁL ES TU GPU?",
      select_ram: "¿CUÁL ES TU RAM?",
      analyze_btn: "EJECUTAR SIMULACIÓN",
      analyzing: "ANALIZANDO HARDWARE...",
      result_title: "INFORME DE OPTIMIZACIÓN",
      before: "CONFIG STOCK",
      after: "OPTIMIZADO",
      gain: "GANANCIA PROM.",
      latency_est: "ESTABILIDAD (1% LOW)"
    }
  },
  AR: {
    navbar: {
      features: "هندسة",
      join: "انضم إلينا",
      cta: "ابدأ الآن",
      simulator: "محاكاة"
    },
    hero: {
      label: "خدمة تحسين الكمبيوتر المتميزة",
      title: "سيطر على اللعبة",
      subtitle: "حول جهازك إلى سلاح تنافسي. زمن انتقال صفري. أقصى إطارات. المرجع في الرياضات الإلكترونية.",
      cta_primary: "انضم إلى ديسكورد",
      cta_secondary: "محاكاة الأداء"
    },
    stats: {
      clients: "أجهزة محسنة",
      fps: "زيادة الإطارات",
      latency: "تخفيض التأخير",
      satisfaction: "رضا العملاء"
    },
    story: {
      title: "أصل المشروع",
      log_failure_title: "خطأ فادح: احتيال الـ 40 يورو",
      log_failure_desc: "دفعت 40 يورو لمنافس 'مشهور' (Tweaks Lab). النتيجة؟ كارثة. خدمة بطيئة، دعم معدوم. بدلاً من كسب الإطارات، أصبح جهازي غير مستقر، وانهيار النظام. كان 'تحسينهم' يدمر أجهزتي.",
      log_success_title: "نواة جديدة: مشروع المستوى التالي",
      log_success_desc: "مسحت كل شيء. التقيت بـ 'Le Secret'، مهندس افتراضي. معًا، أعدنا كتابة كل سطر من التعليمات البرمجية. لا نصوص برمجية معطلة. لا مخاطر. مجرد تحسين آمن ونظيف وجذري.",
      partner: "الشريك: LE SECRET"
    },
    manifesto: {
      title: "لماذا تختارنا؟",
      subtitle: "النهج الجذري لنتائج ملموسة.",
      items: [
        {
          id: "01",
          title: "البيوس التلقائي والمخصص",
          description: "برنامجنا ينشر بيوس مخصص أو تلقائي لتحرير اللوحة الأم الخاصة بك.",
          techSpec: "برنامج حصري"
        },
        {
          id: "02",
          title: "سكريبت ويندوز",
          description: "إزالة دقيقة للتتبع والخدمات غير الضرورية عبر نصوصنا البرمجية الخاصة. لا نسخ معدلة.",
          techSpec: "آمن 100%"
        },
        {
          id: "03",
          title: "شبكة الرياضات الإلكترونية",
          description: "تحسين حزمة TCP/IP لتسجيل الطلقات الفوري.",
          techSpec: "بينج مستقر"
        }
      ]
    },
    features: {
      title: "النتائج",
      grid: [
        { title: "INPUT LAG", desc: "تقليل وقت الاستجابة للنصف.", stat: "-40%" },
        { title: "FPS STABILITY", desc: "لا انخفاض في الإطارات أثناء القتال.", stat: "0.1% LOW" },
        { title: "اتصال", desc: "أولوية قصوى لحزم الألعاب.", stat: "مُحسَّن" },
        { title: "RAM", desc: "كسر سرعة التوقيت يدوياً.", stat: "مضبوط" }
      ]
    },
    discord: {
      status_label: "الحالة",
      status_value: "مفتوح",
      access_label: "دخول فوري",
      cta: "انضم للنخبة",
      id_label: "تذكرة الدخول"
    },
    footer: {
      copyright: "جميع الحقوق محفوظة",
      system: "NEXT LEVEL SYSTEMS"
    },
    calculator: {
      title: "توقعات الأداء",
      subtitle: "أدخل أجهزتك لرؤية الإمكانيات المخفية.",
      select_cpu: "ما هو المعالج الخاص بك (CPU)؟",
      select_gpu: "ما هي بطاقة الرسومات الخاصة بك (GPU)؟",
      select_ram: "ما هي الذاكرة الخاصة بك (RAM)؟",
      analyze_btn: "تشغيل المحاكاة",
      analyzing: "تحليل الأجهزة...",
      result_title: "تقرير التحسين",
      before: "الوضع الحالي",
      after: "محسن",
      gain: "متوسط الزيادة",
      latency_est: "استقرار"
    }
  }
};