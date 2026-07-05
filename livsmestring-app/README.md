# Livsmestring App

Livsmestring is a multilingual, progressive web app for learning life skills through short video-based lessons. The experience is designed to be simple, accessible, and supportive for users who want to explore topics such as health and career in a language they understand.

## What this project does

The app guides users through a structured learning flow:

- Choose a language from a wide range of supported languages
- Browse categories such as health and career
- Explore themes and subtopics
- Watch educational videos
- Track progress locally as they move through the content

The project is built with Next.js and uses browser storage to remember the selected language and completed content so users can continue where they left off.

> Note: at the moment, both the styling and the video content depend on an internet connection. The app is not fully offline-ready yet.

## Main features

- Multilingual interface and content support
- Category-based navigation
- Theme and subtopic progression
- Video-based learning experience
- Progress tracking with local storage
- Progressive Web App setup
- Responsive and mobile-friendly UI

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Sass
- Jest for testing
- Progressive Web App support via service worker and manifest

## Project structure

- `app/` contains the main pages and routing
- `components/` contains reusable UI components
- `lib/` contains translations, storage logic, content data, and shared types
- `public/` contains the service worker and static assets
- `__tests__/` contains automated tests for progress, saving, theme handling, and translations

## Getting started

### Prerequisites

- Node.js 18.18 or newer
- npm, pnpm, yarn, or bun

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available scripts

```bash
npm run dev      # start the development server
npm run build    # create a production build
npm run start    # start the production server
npm run lint     # run ESLint
npm run test     # run the Jest test suite
```

## Testing

Run the test suite with:

```bash
npm run test
```

The tests cover core behaviors such as progress persistence, language selection flow, theme handling, and translation data.

## Deployment

This project is well suited for deployment on Vercel, but it can also be deployed to other platforms that support Next.js applications.

For a production build, run:

```bash
npm run build
```

## Notes

The app is designed to be lightweight, accessible, and easy to extend with more categories, themes, languages, or learning content over time.
