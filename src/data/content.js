import { Bot, Building2, Boxes, HeartPulse, Landmark, ReceiptText } from 'lucide-vue-next'

export const profile = {
  name: 'Giovanni López',
  title: 'Software Engineer & Consultant',
  specialty: 'Laravel & Vue',
  location: 'Mexico',
  education: {
    degree: 'B.S. in Computer Systems Engineering',
    school: 'Instituto Tecnológico de La Paz',
    years: '2006 – 2011',
  },
  avatar: 'https://avatars.githubusercontent.com/u/874420?v=4',
  pitch:
    'I build business software for companies and institutions: ERPs, healthcare systems, electronic invoicing, government websites and SaaS — from the database to the screen your team uses every day.',
}

export const links = {
  email: 'mailto:gmlo89@hotmail.com',
  emailLabel: 'gmlo89@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/gmlo89/',
  github: 'https://github.com/gmlo89',
  x: 'https://x.com/gmlo_89',
}

export const services = [
  {
    icon: ReceiptText,
    title: 'Electronic Invoicing (CFDI / SAT)',
    text: 'CFDI 4.0 stamping and cancellation through PAC providers, SAT bulk download, XML/PDF generation, payment complements and SAT catalogs built into your system.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Laboratory Systems',
    text: 'Patient records, lab orders and results, branded PDF reports, inventory and billing — plus companion mobile apps.',
  },
  {
    icon: Building2,
    title: 'Multi-tenant SaaS',
    text: 'One codebase serving many companies: tenant isolation, Stripe subscriptions, roles and permissions, real-time updates and audit logs.',
  },
  {
    icon: Boxes,
    title: 'Custom ERP & Operations',
    text: 'Systems shaped around how your business actually works: point of sale, cash closures, inventory, multi-currency accounting, quotes and the official paperwork your industry requires.',
  },
  {
    icon: Landmark,
    title: 'Institutional Websites & CMS',
    text: 'Fast, accessible public websites for government and institutions, with a CMS your staff can run on their own and full-text search over large catalogs.',
  },
  {
    icon: Bot,
    title: 'AI-assisted Development',
    text: 'I work with AI coding agents backed by automated tests and static analysis, so you get features faster without giving up quality.',
  },
]

export const work = [
  {
    title: 'SaaS for medical practices',
    problem: 'Doctors and clinics needed one subscription product to run their practice and stay compliant.',
    solution:
      'Multi-tenant platform with appointments and Google/Microsoft calendar sync, electronic medical records aligned with NOM-024 and NOM-004, prescriptions with a template designer, imaging studies, sales and CFDI invoicing (including self-invoicing), WhatsApp and SMS reminders, and Stripe subscription plans.',
    tags: ['Laravel 12', 'Inertia 3', 'Vue 3', 'TypeScript', 'Multi-tenancy', 'Stripe', 'WhatsApp API', 'Pest'],
  },
  {
    title: 'Maritime agency ERP',
    problem: 'A shipping agency serving several companies tracked vessel expenses, invoices and permits by hand.',
    solution:
      'Multi-company ERP with a dual-currency (MXN/USD) ledger, invoicing, quotes, a supplier portal and auto-filled official maritime forms.',
    tags: ['Laravel', 'Inertia', 'Vue 3', 'Pest', 'PHPStan'],
  },
  {
    title: 'State historical archive website',
    problem: 'A state government archive needed to publish its collections online.',
    solution:
      'Public website and CMS for books, maps, newspapers, videos and digitized collections, with full-text search and server-side rendering.',
    tags: ['Laravel 13', 'Inertia 3', 'Vue 3', 'TypeScript', 'Filament', 'PostgreSQL'],
  },
  {
    title: 'Hospital management system',
    problem: 'A private hospital needed admissions, pharmacy stock and billing in one place.',
    solution:
      'Patient admissions, medical records, pharmacy and warehouse stock, point of sale, cash closures and clinical PDF documents, with role-based access.',
    tags: ['Laravel', 'Inertia', 'Vue 3', 'MySQL', 'Pest'],
  },
  {
    title: 'Clinical laboratory network',
    problem: 'A group of clinical labs needed one system for the whole operation.',
    solution:
      'Full platform for orders, results and PDF reports with barcodes, CFDI invoicing, real-time updates and a companion mobile app.',
    tags: ['Laravel', 'Inertia', 'Vue 3', 'TypeScript', 'Expo'],
  },
  {
    title: 'Multi-tenant invoicing platform',
    problem: 'Businesses needed to issue and manage CFDI invoices from the web.',
    solution:
      'SaaS with per-company tenants, PAC integration for stamping and cancellation, SAT bulk download and Stripe billing, upgraded to Laravel 13.',
    tags: ['Laravel 13', 'Inertia 3', 'Multi-tenancy', 'CFDI', 'Stripe'],
  },
  {
    title: 'Pawn shop management system',
    problem: 'A pawn shop chain with branches in several Mexican states needed one system for every location.',
    solution: 'Pawn tickets, auctions, point of sale, cashboxes and closures, expenses and consolidated reports across all branches.',
    tags: ['Laravel', 'MySQL', 'Real-time'],
  },
]

export const stack = [
  { group: 'Backend', items: ['PHP 8.4', 'Laravel 13', 'Inertia 3', 'Filament', 'REST APIs'] },
  { group: 'Frontend', items: ['Vue 3', 'TypeScript', 'Tailwind CSS 4', 'shadcn-vue', 'Vite'] },
  { group: 'Quality', items: ['Pest', 'Larastan / PHPStan', 'Rector', 'Pint', 'Oxlint'] },
  { group: 'Mobile', items: ['Expo', 'React Native'] },
  { group: 'Data', items: ['MySQL', 'PostgreSQL', 'SQLite', 'Meilisearch'] },
  { group: 'Infrastructure', items: ['Laravel Forge', 'DigitalOcean', 'Docker', 'Nginx', 'GitHub Actions', 'Sentry'] },
  {
    group: 'Integrations',
    items: ['Stripe', 'WhatsApp Business API', 'Twilio', 'Microsoft Graph', 'Google APIs', 'PAC / SAT web services'],
  },
]

export const openSource = [
  { name: 'cfdi', text: 'Generate SAT CFDI documents with PHP.', url: 'https://github.com/gmlo89/cfdi' },
  { name: 'finkok', text: 'PHP client for Finkok invoicing services.', url: 'https://github.com/gmlo89/finkok' },
  { name: 'datatable', text: 'DataTable component for Laravel + Vue + Vuetify.', url: 'https://github.com/gmlo89/datatable' },
  { name: 'vue-confirm-button', text: 'Vue button with built-in confirmation.', url: 'https://github.com/gmlo89/vue-confirm-button' },
]
