# Converso – Real-time AI Teaching Platform

A real-time AI teaching platform where users can build, personalize, and interact with AI-powered learning companions. Built with Next.js, Clerk, Supabase, and ShadCN UI.

---

## 🚀 Features

- **AI Companions:** Create custom learning companions with unique names, subjects, voices, and personalities.
- **Voice Sessions:** Real-time, voice-based interactive lessons powered by Vapi AI and 11Labs voices.
- **Companion Library:** Browse, search, and filter a library of companions by subject or topic.
- **Personalized Dashboard:** Track your recent sessions and learning journey.
- **Authentication:** Secure sign-in and user management via Clerk.
- **Subscription Management:** Integrated pricing table for managing subscriptions (via Clerk).
- **Responsive UI:** Mobile-first, accessible, and visually appealing.
- **Modern UI Kit:** Built with ShadCN UI and Tailwind CSS for rapid, consistent styling.
- **Supabase Integration:** Store and manage companion data securely.
- **TypeScript:** Type-safe codebase for reliability and maintainability.

---

## 🏗️ Architecture

### Frontend

- **Framework:** Next.js 15 (App Router, Server Components)
- **UI:** ShadCN UI (customized via `components/ui/`), Tailwind CSS, Lucide icons
- **State & Forms:** React Hook Form, Zod validation
- **Animations:** Lottie for animated avatars and feedback
- **Routing:** App directory structure (`app/`), dynamic routes for companions

### Backend & Data

- **Database:** Supabase (PostgreSQL)
- **API:** Next.js server actions (`lib/actions/`)
- **Authentication:** Clerk (middleware-protected routes, user context)
- **Voice AI:** Vapi AI SDK, 11Labs for voice synthesis
- **Business Logic:** All companion CRUD and filtering in `lib/actions/companion.actions.ts`

### DevOps

- **Deployment:** Vercel (recommended)
- **CI/CD:** GitHub Actions or Vercel integrations
- **Environment Variables:** Managed via `.env.local` (see below)

---

## 🗂️ Project Structure

```
<root>/
├── app/                # Next.js app directory (routes, layouts, pages)
│   ├── companions/     # Companion library, detail, and creation pages
│   ├── my-journey/     # User profile and progress
│   ├── sign-in/        # Authentication
│   ├── subscription/   # Pricing and subscription management
│   └── layout.tsx      # Global layout and theming
├── components/         # UI and feature components (ShadCN UI primitives in /ui)
├── constants/          # Static data (subjects, colors, voices, etc.)
├── lib/                # Utilities, Supabase client, server actions
├── public/             # Static assets (images, icons, readme images)
├── types/              # TypeScript types and interfaces
├── middleware.ts       # Clerk authentication middleware
├── globals.css         # Tailwind and custom global styles
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## 🧩 Key Components

- **CompanionForm:** Build a new AI companion with custom fields.
- **CompanionCard & CompanionsLists:** Display and list companions with subject color-coding.
- **CompanionComponent:** Real-time voice session UI, animated with Lottie.
- **SearchInput & SubjectFilter:** Dynamic search and filtering in the companion library.
- **Navbar & NavItems:** Main navigation with Clerk user controls.
- **CTA:** Call-to-action for building new companions.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sasank-V/converso.git
cd converso
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root and add:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
CLERK_SECRET_KEY=your_clerk_secret
VAPI_API_KEY=your_vapi_key
# ...other variables as needed
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📝 Customization

- **Add Subjects/Voices:** Edit `constants/index.ts` to add more subjects or voice options.
- **UI/Theming:** Update Tailwind config or ShadCN UI components in `components/ui/`.
- **Database:** Modify Supabase tables as needed for new features.
- **API/Logic:** Add new server actions in `lib/actions/`.

---

## 🧪 Testing

- **Lint:** `npm run lint`
- **Type Check:** `npm run type-check` (if configured)
- **Unit/E2E Tests:** Add with Jest, Playwright, or Cypress as needed.

---

## 🌐 Deployment

This project is ready to deploy on [Vercel](https://vercel.com/):

1. Push your code to GitHub.
2. Import your repo into Vercel.
3. Set up environment variables in the Vercel dashboard.
4. Deploy!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Clerk](https://clerk.com/)
- [Supabase](https://supabase.com/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Vapi AI](https://vapi.ai/)
- [11Labs](https://elevenlabs.io/)
- [Lottie](https://lottiefiles.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📬 Contact

For questions, suggestions, or contributions, please open an issue or reach out via [LinkedIn](https://www.linkedin.com/).
