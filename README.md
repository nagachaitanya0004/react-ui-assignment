# PopX Authentication UI

A production-quality, mobile-first authentication interface built with React and Vite.  
This project includes four polished screens (Welcome, Login, Register, Account Settings), reusable UI components, and a clean CSS-based design system.

## Features

- Mobile-first app shell with centered `375px` layout
- Reusable `Layout`, `Button`, `Input`, and custom `Radio` components
- Client-side routing with `react-router-dom`
- Login and Register form validation
- Disabled submit states until forms are valid
- LocalStorage mock persistence for user/session data
- Account screen that renders stored user data
- Consistent spacing, typography, transitions, and visual hierarchy

## Tech Stack

- React (Vite)
- Functional components
- `react-router-dom`
- Plain CSS (no Tailwind, no inline styles)
- LocalStorage (mock persistence)

## Folder Structure

```txt
src/
├── components/
│   ├── Layout.jsx
│   ├── Layout.css
│   ├── Button.jsx
│   ├── Button.css
│   ├── Input.jsx
│   ├── Input.css
│   ├── Radio.jsx
│   └── Radio.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── Login.jsx
│   ├── Login.css
│   ├── Register.jsx
│   ├── Register.css
│   ├── Account.jsx
│   └── Account.css
├── assets/
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Routes

- `/` -> Welcome (Home)
- `/login` -> Login
- `/register` -> Register
- `/account` -> Account Settings

## Setup

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Build production bundle

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Live Demo

[Add deployment URL here](https://example.com)

## Notes

- This is a frontend-only implementation (no backend auth API).
- LocalStorage keys used:
  - `popxUser`
  - `popxSession`
