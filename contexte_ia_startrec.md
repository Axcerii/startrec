# PROJECT CONTEXT: STARTREC

## 1. Project Overview

**Name:** Startrec
**Type:** Web platform for audiovisual professionals and amateurs to network, create profiles, post projects, and apply for roles.
**Target Audience:** Beginners and amateurs in the audiovisual/cinema industry.
**Business Logic:** Users can create detailed profiles (talents, gear, portfolios), post projects needing specific roles, and apply to projects. Premium features include custom themes, detailed portfolios (iFrames), ad-removal, and Karma visibility (reliability score).
**Infrastructure Constraints:** Extremely low budget (<100€). Time-to-market: 5 months for MVP.

## 2. Tech Stack & Architecture

**Architecture Pattern:** Modular Monolith
**Framework:** Next.js (App Router)
**Language:** TypeScript (Strict mode)
**Database / Backend-as-a-Service:** Firebase Google (Firestore for NoSQL DB, Firebase Auth for authentication)
**Validation:** Zod + Firebase SDK
**Internationalization (i18n):** next-intl (Server-first, fr/en routing)
**Logging & Observability:** Pino (Library) + Axiom (Storage/Dashboard)
**Payments:** Stripe
**Emails/Newsletters:** Brevo
**Automation:** N8N (or Make)
**Analytics:** Google Analytics

## 3. Folder Structure & Modular Architecture

Enforce the following structure to maintain the Modular Monolith:

* `/src/components/`: Atomic UI components (buttons, inputs, generic modals).

* `/src/features/`: Core modularity. Domain-driven folders (e.g., `projects/`, `auth/`, `karma/`, `profiles/`). Each feature folder contains its own specific components, hooks, and TypeScript types.

* `/src/lib/`: Configuration for external tools (Firebase SDK init, Stripe client, Pino setup).

* `/src/services/`: Pure logic for communicating with Firestore or external APIs. **Strictly separate from UI.**

## 4. Coding Guidelines & Clean Code (CRITICAL)

When writing code for this project, you MUST adhere to the following principles:

* **Single Responsibility Principle (SRP):** A React component must ONLY handle UI/display logic. Data fetching and complex domain logic must reside in custom hooks or dedicated service functions in `/src/services/`.

* **Don't Repeat Yourself (DRY):** TypeScript interfaces/types (e.g., `Project`, `User`) must be defined once (usually in `/src/features/{featureName}/types.ts`) and reused across API routes, Firebase services, and UI components.

* **Keep It Simple, Stupid (KISS):** Favor straightforward, readable implementations over over-engineered solutions. Algorithms (like Karma calculation) must be explicitly named and easily maintainable.

* **Server Components First:** Leverage Next.js Server Components by default for SEO and performance (crucial for indexing project ads). Only use `'use client'` when interactivity or browser APIs are required.

* **Type Safety:** Always use Zod schemas to validate data coming from forms or entering/leaving Firestore.

## 5. Specific Implementation Rules

* **Database Interactions:** Never write direct Firestore queries inside a React Component. Always create a service function in `/src/services/` (e.g., `getProjects()`, `applyToProject()`).

* **Translations:** All static text must use `next-intl`. Do not hardcode French or English strings in the UI components. Define them in JSON files (e.g., `messages/fr.json`).

* **Error Handling & Logging:** Do not use `console.log` for production errors. Use the configured `Pino` logger to stream structured JSON logs to `Axiom`.