import { Bot, Building2, Boxes, HeartPulse, Landmark, ReceiptText } from 'lucide-vue-next'

// Language-neutral data shared by every locale.

export const profile = {
  name: 'Giovanni López',
  avatar: 'https://avatars.githubusercontent.com/u/874420?v=4',
  since: 2010,
  projectsDelivered: 50,
  industries: 6,
}

export const links = {
  email: 'mailto:gmlo89@hotmail.com',
  emailLabel: 'gmlo89@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/gmlo89/',
  github: 'https://github.com/gmlo89',
  x: 'https://x.com/gmlo_89',
}

export const services = [
  { id: 'cfdi', icon: ReceiptText },
  { id: 'health', icon: HeartPulse },
  { id: 'saas', icon: Building2 },
  { id: 'erp', icon: Boxes },
  { id: 'institutional', icon: Landmark },
  { id: 'ai', icon: Bot },
]

export const projects = [
  { id: 'medical-saas', tags: ['Laravel 12', 'Inertia 3', 'Vue 3', 'TypeScript', 'Multi-tenancy', 'Stripe', 'WhatsApp API', 'Pest'] },
  { id: 'maritime-erp', tags: ['Laravel', 'Inertia', 'Vue 3', 'Pest', 'PHPStan'] },
  { id: 'state-archive', tags: ['Laravel 13', 'Inertia 3', 'Vue 3', 'TypeScript', 'Filament', 'PostgreSQL'] },
  { id: 'hospital', tags: ['Laravel', 'Inertia', 'Vue 3', 'MySQL', 'Pest'] },
  { id: 'lab-network', tags: ['Laravel', 'Inertia', 'Vue 3', 'TypeScript', 'Expo'] },
  { id: 'invoicing-saas', tags: ['Laravel 13', 'Inertia 3', 'Multi-tenancy', 'CFDI', 'Stripe'] },
  { id: 'pawn-shop', tags: ['Laravel', 'MySQL', 'Real-time'] },
  { id: 'campaign', tags: ['Laravel', 'Vue', 'Pusher', 'Laravel Echo', 'Redis', 'SMS'] },
  { id: 'siaf', tags: ['Laravel', 'MySQL', 'Bootstrap'] },
]

export const stack = [
  { id: 'backend', items: ['PHP 8.4', 'Laravel 13', 'Inertia 3', 'Filament', 'REST APIs'] },
  { id: 'frontend', items: ['Vue 3', 'TypeScript', 'Tailwind CSS 4', 'shadcn-vue', 'Vite'] },
  { id: 'quality', items: ['Pest', 'Larastan / PHPStan', 'Rector', 'Pint', 'Oxlint'] },
  { id: 'mobile', items: ['Expo', 'React Native'] },
  { id: 'data', items: ['MySQL', 'PostgreSQL', 'SQLite', 'Meilisearch'] },
  { id: 'infrastructure', items: ['Laravel Forge', 'DigitalOcean', 'Docker', 'Nginx', 'GitHub Actions', 'Sentry'] },
  { id: 'integrations', items: ['Stripe', 'WhatsApp Business API', 'Twilio', 'Microsoft Graph', 'Google APIs', 'PAC / SAT web services'] },
]

export const openSource = [
  { name: 'cfdi', url: 'https://github.com/gmlo89/cfdi' },
  { name: 'finkok', url: 'https://github.com/gmlo89/finkok' },
  { name: 'datatable', url: 'https://github.com/gmlo89/datatable' },
  { name: 'vue-confirm-button', url: 'https://github.com/gmlo89/vue-confirm-button' },
]

// Copy for each locale. Keys must match between `es` and `en`.

export const messages = {
  es: {
    meta: {
      title: 'Giovanni López · Ingeniero de software en La Paz, BCS',
      description:
        'Ingeniero de software en La Paz, Baja California Sur. Desde 2010 desarrollo sistemas a la medida para empresas, hospitales y laboratorios: ERPs, expediente clínico, facturación CFDI 4.0 y SaaS.',
    },
    nav: {
      label: 'Principal',
      services: 'Servicios',
      work: 'Proyectos',
      process: 'Cómo trabajo',
      faq: 'Preguntas',
      quote: 'Cotizar proyecto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      language: 'Idioma',
      theme: { system: 'Tema: sistema', light: 'Tema: claro', dark: 'Tema: oscuro' },
    },
    hero: {
      available: 'Disponible para nuevos proyectos',
      headline: 'Software a la medida para empresas e instituciones.',
      intro: [
        'Soy',
        'ingeniero de software en La Paz, Baja California Sur. Desde 2010 he entregado más de 50 sistemas para empresas, hospitales y laboratorios: ERPs, expedientes clínicos, facturación CFDI y plataformas SaaS.',
      ],
      support: ['Trabajas directo conmigo, de la primera llamada al soporte. Hay clientes que me acompañan desde hace', 'más de 10 años', '.'],
      primaryCta: 'Platiquemos de tu proyecto',
      secondaryCta: 'Ver proyectos',
      role: 'Ingeniero de software y consultor',
      facts: [
        { title: 'La Paz, Baja California Sur, México', text: 'Trabajo remoto con clientes en todo el país' },
        { title: 'Desarrollando software desde 2010', text: 'Ing. en Sistemas Computacionales · Instituto Tecnológico de La Paz' },
        { title: 'Emito factura CFDI 4.0', text: 'Para clientes en México' },
        { title: 'Contrato y NDA', text: 'El código es tuyo' },
      ],
    },
    stats: {
      label: 'Experiencia en cifras',
      years: 'años desarrollando software',
      projects: 'proyectos entregados',
      industries: 'industrias: salud, gobierno, marítimo, retail, finanzas y SaaS',
      packages: 'paquetes open source',
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Lo que puedo construir para ti',
      items: {
        cfdi: {
          title: 'Facturación electrónica (CFDI / SAT)',
          text: 'Timbrado y cancelación CFDI 4.0 con tu PAC, descarga masiva del SAT, XML/PDF, complementos de pago y catálogos del SAT dentro de tu sistema.',
        },
        health: {
          title: 'Sistemas de salud y laboratorio',
          text: 'Expediente clínico, órdenes y resultados de laboratorio, reportes PDF con tu marca, inventario y facturación, además de apps móviles.',
        },
        saas: {
          title: 'SaaS multi-empresa',
          text: 'Un solo sistema para muchas empresas: aislamiento por cliente, suscripciones con Stripe, roles y permisos, tiempo real y bitácora.',
        },
        erp: {
          title: 'ERP y operación a la medida',
          text: 'Sistemas hechos a la forma en que trabaja tu negocio: punto de venta, cortes de caja, inventario, contabilidad multimoneda, cotizaciones y los formatos oficiales de tu industria.',
        },
        institutional: {
          title: 'Sitios institucionales y CMS',
          text: 'Sitios públicos rápidos y accesibles para gobierno e instituciones, con un CMS que tu personal administra solo y búsqueda en catálogos grandes.',
        },
        ai: {
          title: 'Desarrollo asistido por IA',
          text: 'Trabajo con agentes de IA respaldados por pruebas automatizadas y análisis estático: más rapidez sin sacrificar calidad.',
        },
      },
      agency: {
        title: '¿Eres agencia? Trabajo como tu desarrollador senior',
        text: 'Me integro a tu equipo en proyectos Laravel y Vue, con marca blanca, NDA y entregas en tus tiempos y con tus herramientas.',
        cta: 'Hablemos',
      },
    },
    work: {
      eyebrow: 'Proyectos',
      title: 'Algunos proyectos que he entregado',
      showAll: 'Ver más proyectos',
      showLess: 'Ver menos',
      items: {
        'medical-saas': {
          category: 'Salud · SaaS',
          title: 'SaaS para consultorios médicos',
          problem: 'Médicos y clínicas necesitaban un producto por suscripción para operar su consulta y cumplir la norma.',
          solution:
            'Plataforma multi-empresa con agenda sincronizada con Google/Microsoft Calendar, expediente clínico conforme a NOM-024 y NOM-004, recetas con diseñador de plantillas, estudios de imagen, ventas y facturación CFDI (incluida autofacturación), recordatorios por WhatsApp y SMS, y planes de suscripción con Stripe.',
        },
        'maritime-erp': {
          category: 'Marítimo · ERP',
          title: 'ERP para agencia naviera',
          problem: 'Una agencia naviera que atiende a varias empresas controlaba a mano gastos de buques, facturas y permisos.',
          solution:
            'ERP multiempresa con contabilidad en dos monedas (MXN/USD), facturación, cotizaciones, portal de proveedores y formatos marítimos oficiales que se llenan solos.',
        },
        'state-archive': {
          category: 'Gobierno · Sitio web',
          title: 'Sitio del archivo histórico estatal',
          problem: 'El archivo histórico de un gobierno estatal necesitaba publicar sus acervos en línea.',
          solution:
            'Sitio público y CMS para libros, mapas, periódicos, videos y colecciones digitalizadas, con búsqueda de texto completo y renderizado en servidor.',
        },
        hospital: {
          category: 'Salud · Hospital',
          title: 'Sistema de gestión hospitalaria',
          problem: 'Un hospital privado necesitaba admisiones, farmacia y cobranza en un solo lugar.',
          solution:
            'Admisión de pacientes, expediente clínico, farmacia y almacén, punto de venta, cortes de caja y documentos clínicos en PDF, con acceso por roles.',
        },
        'lab-network': {
          category: 'Salud · Laboratorio',
          title: 'Red de laboratorios clínicos',
          problem: 'Un grupo de laboratorios clínicos necesitaba un solo sistema para toda la operación.',
          solution:
            'Plataforma completa para órdenes, resultados y reportes PDF con código de barras, facturación CFDI, actualizaciones en tiempo real y una app móvil.',
        },
        'invoicing-saas': {
          category: 'Finanzas · SaaS',
          title: 'Plataforma de facturación multi-empresa',
          problem: 'Negocios que necesitaban emitir y administrar sus facturas CFDI desde la web.',
          solution:
            'SaaS con una cuenta por empresa, integración con PAC para timbrado y cancelación, descarga masiva del SAT y cobro con Stripe, actualizado a Laravel 13.',
        },
        'pawn-shop': {
          category: 'Retail · Finanzas',
          title: 'Sistema para casa de empeño',
          problem: 'Una cadena de casas de empeño con sucursales en varios estados necesitaba un solo sistema para todas.',
          solution: 'Boletas de empeño, remates, punto de venta, cajas y cortes, gastos y reportes consolidados de todas las sucursales.',
        },
        campaign: {
          category: 'Política · Campaña electoral',
          title: 'Sistema para campaña electoral',
          problem: 'Una campaña electoral necesitaba organizar a su equipo en territorio y dar seguimiento a miles de registros.',
          solution:
            'Plataforma para administrar miles de registros organizados por zona, encuestas, metas con avance y un tablero para el día de la elección con notificaciones en tiempo real y envío de SMS.',
        },
        siaf: {
          category: 'Gobierno · Administración interna',
          title: 'Sistema integral de administración y finanzas',
          problem: 'Un instituto estatal de cultura necesitaba controlar en un solo lugar sus recursos humanos, materiales y financieros.',
          solution:
            'Expedientes de personal con gafetes, asistencia y licencias; inventarios y resguardos; presupuestos por proyecto con gastos y saldos; viáticos y correspondencia interna sin papel.',
        },
      },
    },
    process: {
      eyebrow: 'Cómo trabajo',
      title: 'Un proceso claro, sin sorpresas',
      steps: [
        { title: 'Diagnóstico', text: 'Una llamada para entender tu operación, qué duele hoy y qué necesitas resolver primero.' },
        { title: 'Propuesta y cotización', text: 'Alcance por etapas, tiempos y costo por escrito. Firmamos contrato y NDA.' },
        { title: 'Desarrollo por entregas', text: 'Avances que puedes probar cada semana, con pruebas automatizadas desde el inicio.' },
        { title: 'Lanzamiento y soporte', text: 'Puesta en producción, capacitación a tu equipo y mantenimiento mensual si lo necesitas.' },
      ],
      guarantees: ['Factura CFDI 4.0', 'Contrato por escrito', 'Acuerdo de confidencialidad (NDA)', 'El código y la propiedad intelectual son tuyos'],
    },
    stack: {
      eyebrow: 'Tecnología',
      title: 'Herramientas que uso todos los días',
      groups: {
        backend: 'Backend',
        frontend: 'Frontend',
        quality: 'Calidad',
        mobile: 'Móvil',
        data: 'Datos',
        infrastructure: 'Infraestructura',
        integrations: 'Integraciones',
      },
    },
    openSource: {
      eyebrow: 'Open source',
      title: 'Paquetes en GitHub',
      items: {
        cfdi: 'Genera CFDI del SAT con PHP.',
        finkok: 'Cliente PHP para los servicios de facturación de Finkok.',
        datatable: 'Componente DataTable para Laravel + Vue + Vuetify.',
        'vue-confirm-button': 'Botón de Vue con confirmación integrada.',
      },
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que normalmente me preguntan',
      items: [
        { q: '¿Emites factura?', a: 'Sí. Emito CFDI 4.0 para empresas y personas en México, así que puedes deducir el servicio.' },
        {
          q: '¿Cuánto cuesta un proyecto?',
          a: 'Depende del alcance. Después del diagnóstico te envío una cotización por etapas, para que empieces por lo más importante y crezcas desde ahí.',
        },
        { q: '¿Cuánto tiempo toma?', a: 'Una primera versión útil suele estar lista en semanas, no meses; después se amplía por entregas.' },
        { q: '¿Trabajas con clientes fuera de La Paz?', a: 'Sí. Trabajo de forma remota con clientes en todo México.' },
        {
          q: '¿Trabajas solo?',
          a: 'Trabajas directo conmigo. Cuando el proyecto lo pide, sumo colaboradores de confianza y yo sigo siendo tu punto de contacto.',
        },
        { q: '¿El código es mío?', a: 'Sí. El código y la propiedad intelectual son tuyos, por contrato.' },
        {
          q: '¿Das mantenimiento después del lanzamiento?',
          a: 'Sí, con un plan mensual de soporte, actualizaciones y mejoras. Sigo dando soporte a sistemas que entregué hace más de 10 años.',
        },
        {
          q: '¿Trabajas con agencias?',
          a: 'Sí. Me integro a tu equipo como desarrollador senior de Laravel y Vue, con marca blanca y NDA.',
        },
      ],
    },
    contact: {
      title: '¿Tienes un proyecto en mente?',
      text: 'Cuéntame qué necesitas construir o arreglar. Te respondo con preguntas, un plan y una cotización.',
      location: 'La Paz, Baja California Sur, México',
    },
  },

  en: {
    meta: {
      title: 'Giovanni López · Software Engineer in La Paz, Mexico',
      description:
        'Software engineer based in La Paz, Baja California Sur, Mexico. Building custom software since 2010 for companies, hospitals and labs: ERPs, medical records, CFDI 4.0 e-invoicing and SaaS.',
    },
    nav: {
      label: 'Main',
      services: 'Services',
      work: 'Work',
      process: 'How I work',
      faq: 'FAQ',
      quote: 'Get a quote',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
      theme: { system: 'Theme: system', light: 'Theme: light', dark: 'Theme: dark' },
    },
    hero: {
      available: 'Available for new projects',
      headline: 'Custom software for companies and institutions.',
      intro: [
        "I'm",
        'a software engineer based in La Paz, Baja California Sur, Mexico. Since 2010 I have delivered 50+ systems for companies, hospitals and labs: ERPs, medical records, CFDI e-invoicing and SaaS platforms.',
      ],
      support: ['You work directly with me, from the first call to ongoing support. Some clients have been with me for', 'more than 10 years', '.'],
      primaryCta: "Let's talk about your project",
      secondaryCta: 'See my work',
      role: 'Software Engineer & Consultant',
      facts: [
        { title: 'La Paz, Baja California Sur, Mexico', text: 'Working remotely with clients across the country' },
        { title: 'Building software since 2010', text: 'B.S. in Computer Systems Engineering · Instituto Tecnológico de La Paz' },
        { title: 'CFDI 4.0 invoices', text: 'For clients in Mexico' },
        { title: 'Contract & NDA', text: 'You own the code' },
      ],
    },
    stats: {
      label: 'Experience in numbers',
      years: 'years building software',
      projects: 'projects delivered',
      industries: 'industries: healthcare, government, maritime, retail, finance and SaaS',
      packages: 'open-source packages',
    },
    services: {
      eyebrow: 'Services',
      title: 'What I can build for you',
      items: {
        cfdi: {
          title: 'Electronic Invoicing (CFDI / SAT)',
          text: 'CFDI 4.0 stamping and cancellation through PAC providers, SAT bulk download, XML/PDF generation, payment complements and SAT catalogs built into your system.',
        },
        health: {
          title: 'Healthcare & Laboratory Systems',
          text: 'Patient records, lab orders and results, branded PDF reports, inventory and billing — plus companion mobile apps.',
        },
        saas: {
          title: 'Multi-tenant SaaS',
          text: 'One codebase serving many companies: tenant isolation, Stripe subscriptions, roles and permissions, real-time updates and audit logs.',
        },
        erp: {
          title: 'Custom ERP & Operations',
          text: 'Systems shaped around how your business actually works: point of sale, cash closures, inventory, multi-currency accounting, quotes and the official paperwork your industry requires.',
        },
        institutional: {
          title: 'Institutional Websites & CMS',
          text: 'Fast, accessible public websites for government and institutions, with a CMS your staff can run on their own and full-text search over large catalogs.',
        },
        ai: {
          title: 'AI-assisted Development',
          text: 'I work with AI coding agents backed by automated tests and static analysis, so you get features faster without giving up quality.',
        },
      },
      agency: {
        title: 'Are you an agency? I work as your senior developer',
        text: 'I join your team on Laravel and Vue projects — white-label, under NDA, on your schedule and with your tools.',
        cta: "Let's talk",
      },
    },
    work: {
      eyebrow: 'Selected work',
      title: "Some of the projects I've delivered",
      showAll: 'See more projects',
      showLess: 'Show less',
      items: {
        'medical-saas': {
          category: 'Healthcare · SaaS',
          title: 'SaaS for medical practices',
          problem: 'Doctors and clinics needed one subscription product to run their practice and stay compliant.',
          solution:
            'Multi-tenant platform with appointments and Google/Microsoft calendar sync, electronic medical records aligned with NOM-024 and NOM-004, prescriptions with a template designer, imaging studies, sales and CFDI invoicing (including self-invoicing), WhatsApp and SMS reminders, and Stripe subscription plans.',
        },
        'maritime-erp': {
          category: 'Maritime · ERP',
          title: 'Maritime agency ERP',
          problem: 'A shipping agency serving several companies tracked vessel expenses, invoices and permits by hand.',
          solution: 'Multi-company ERP with a dual-currency (MXN/USD) ledger, invoicing, quotes, a supplier portal and auto-filled official maritime forms.',
        },
        'state-archive': {
          category: 'Government · Website',
          title: 'State historical archive website',
          problem: 'A state government archive needed to publish its collections online.',
          solution: 'Public website and CMS for books, maps, newspapers, videos and digitized collections, with full-text search and server-side rendering.',
        },
        hospital: {
          category: 'Healthcare · Hospital',
          title: 'Hospital management system',
          problem: 'A private hospital needed admissions, pharmacy stock and billing in one place.',
          solution:
            'Patient admissions, medical records, pharmacy and warehouse stock, point of sale, cash closures and clinical PDF documents, with role-based access.',
        },
        'lab-network': {
          category: 'Healthcare · Laboratory',
          title: 'Clinical laboratory network',
          problem: 'A group of clinical labs needed one system for the whole operation.',
          solution: 'Full platform for orders, results and PDF reports with barcodes, CFDI invoicing, real-time updates and a companion mobile app.',
        },
        'invoicing-saas': {
          category: 'Finance · SaaS',
          title: 'Multi-tenant invoicing platform',
          problem: 'Businesses needed to issue and manage CFDI invoices from the web.',
          solution: 'SaaS with per-company tenants, PAC integration for stamping and cancellation, SAT bulk download and Stripe billing, upgraded to Laravel 13.',
        },
        'pawn-shop': {
          category: 'Retail · Finance',
          title: 'Pawn shop management system',
          problem: 'A pawn shop chain with branches in several Mexican states needed one system for every location.',
          solution: 'Pawn tickets, auctions, point of sale, cashboxes and closures, expenses and consolidated reports across all branches.',
        },
        campaign: {
          category: 'Politics · Electoral campaign',
          title: 'Electoral campaign system',
          problem: 'An electoral campaign needed to organize its field team and keep track of thousands of records.',
          solution:
            'Platform to manage thousands of records organized by zone, surveys, goals with progress tracking and an election-day dashboard with real-time notifications and SMS messaging.',
        },
        siaf: {
          category: 'Government · Internal administration',
          title: 'Administration and finance system',
          problem: 'A state cultural institute needed one place to manage its human, material and financial resources.',
          solution:
            'Staff records with ID badges, attendance and leave; inventory and asset custody; budgets by project with expenses and balances; travel expenses and paperless internal mail.',
        },
      },
    },
    process: {
      eyebrow: 'How I work',
      title: 'A clear process, no surprises',
      steps: [
        { title: 'Discovery', text: 'A call to understand your operation, what hurts today and what needs to be solved first.' },
        { title: 'Proposal & quote', text: 'Scope in phases, timeline and cost in writing. We sign a contract and an NDA.' },
        { title: 'Iterative delivery', text: 'Progress you can try every week, with automated tests from day one.' },
        { title: 'Launch & support', text: 'Go-live, training for your team and monthly maintenance if you need it.' },
      ],
      guarantees: ['CFDI 4.0 invoices (Mexico)', 'Written contract', 'Non-disclosure agreement (NDA)', 'You own the code and the IP'],
    },
    stack: {
      eyebrow: 'Tech stack',
      title: 'Tools I work with every day',
      groups: {
        backend: 'Backend',
        frontend: 'Frontend',
        quality: 'Quality',
        mobile: 'Mobile',
        data: 'Data',
        infrastructure: 'Infrastructure',
        integrations: 'Integrations',
      },
    },
    openSource: {
      eyebrow: 'Open source',
      title: 'Packages on GitHub',
      items: {
        cfdi: 'Generate SAT CFDI documents with PHP.',
        finkok: 'PHP client for Finkok invoicing services.',
        datatable: 'DataTable component for Laravel + Vue + Vuetify.',
        'vue-confirm-button': 'Vue button with built-in confirmation.',
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions I usually get',
      items: [
        { q: 'Do you issue invoices?', a: 'Yes. I issue CFDI 4.0 invoices for companies and individuals in Mexico, so the service is tax-deductible.' },
        {
          q: 'How much does a project cost?',
          a: 'It depends on the scope. After discovery I send you a quote split into phases, so you can start with what matters most and grow from there.',
        },
        { q: 'How long does it take?', a: 'A first useful version is usually ready in weeks, not months; then it grows through regular deliveries.' },
        { q: 'Do you work with clients outside La Paz?', a: 'Yes. I work remotely with clients all over Mexico.' },
        {
          q: 'Do you work alone?',
          a: 'You work directly with me. When a project needs it, I bring in trusted collaborators and remain your single point of contact.',
        },
        { q: 'Do I own the code?', a: 'Yes. The code and the intellectual property are yours, by contract.' },
        {
          q: 'Do you offer maintenance after launch?',
          a: 'Yes, through a monthly plan for support, updates and improvements. I still support systems I delivered more than 10 years ago.',
        },
        { q: 'Do you work with agencies?', a: 'Yes. I join your team as a senior Laravel and Vue developer, white-label and under NDA.' },
      ],
    },
    contact: {
      title: 'Have a project in mind?',
      text: "Tell me what you need to build or fix. I'll reply with questions, a plan and an estimate.",
      location: 'La Paz, Baja California Sur, Mexico',
    },
  },
}
