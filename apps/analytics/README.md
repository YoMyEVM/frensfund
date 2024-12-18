
# 💻 &nbsp; Analytics

![next](https://img.shields.io/static/v1?label&logo=nextdotjs&logoColor=white&message=Next.js&color=black)
![ts](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![tailwind](https://img.shields.io/static/v1?label&logo=tailwindcss&logoColor=white&message=tailwind&color=38B2AC)
![version](https://img.shields.io/github/package-json/v/GenerationSoftware/pooltogether-client-monorepo?filename=apps%2Fanalytics%2Fpackage.json&color=brightgreen)

# 🏆 &nbsp; Overview

App to visualize analytics and general health metrics of the PoolTogether protocol.

## 🏎️ &nbsp; Quickstart

### Running Development Server

Run the development server through `pnpm dev`.

Open [http://localhost:3004](http://localhost:3004) on your browser to see the resulting app.

### App Structure

The app follows the following structure:

- `pages` - All of the pages in the app!
- `views` - Different views available to simplify page logic.
- `components` - React components that make up the contents of the pages.
- `hooks` - App-specific hooks not included in other hook packages.
- `constants` - Constant values, references and configurations to deploy and run this app.

### Environment Setup

Add your RPC URLs to `.env.local` for testing. A `.env.example` file is available for reference.

If none are provided, the app will use public RPCs which could potentially get rate-limited.
