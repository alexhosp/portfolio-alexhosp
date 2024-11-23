# Next.js Portfolio Website
This repository contains the source code for my personal portfolio website, built with Next.js, Prisma, and Supabase. It showcases my skills and projects through a custom UI design system created with Storybook, Shadcn UI, and Tailwind CSS. The site features About, Projects, Services, and Contact pages.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Development Workflow](#development-workflow)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

# [Overview](#overview)

This project is my personal portfolio website, designed to showcase my skills and projects while providing a seamless and engaging user experience. The goal is to offer a clear and immediate understanding of who I am, what I do, and what I’m currently working on.

# [Key Features](#key-features)

## Website Features

- **Responsive Design**: Optimized for various devices to ensure accessibility.
- **Dynamic Content**: Fetches and displays real-time data from GitHub.
- **Interactive Animations**: Smooth transitions powered by Framer Motion.
- **Theming**: Light and dark mode options for user preference.
- **Contact Form**: A modal-based form created with React Hook Forms, with inputs securely stored in a database.

## Pages

- **Homepage**: Includes a brief introduction, an overview of all pages, and a FAQ section.
- **Projects Page**: Showcases my work, including live GitHub statistics and detailed descriptions.
- **Services Page**: Highlights the services I offer, with sub-pages providing detailed explanations for each service.
- **About Page**: Shares personal background information, including embedded YouTube Shorts.

  # [Technology Stack](#technology-stack)
  - **Framework**: Next.js
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Language:** TypeScript
- **Package Manager**: pnpm
- **Bundler**: Turbopack
- **Design System**: Storybook, Shadcn UI, and Tailwind CSS.
- **Animations**: Framer Motion
- **Version Control:** Git, GitHub
- **Deployment:** Vercel
- **Analytics:** Google Analytics
  
# [Development Workflow](#development-workflow)
## Planning

- **User Stories**: Created agile user stories to define features, tracking each as an issue on GitHub for an organized and iterative workflow.
- **Technology Stack**: Chose Next.js, TypeScript, and Prisma for modularity, server-side rendering, and type safety. Decided to build a custom design system using Storybook to separate UI development from functionality.

## Setup

- Initialized the project with Next.js, Storybook, TypeScript, Prettier, and Turbopack.
- Configured Storybook to work with Tailwind CSS and Next.js components, ensuring consistent and adaptable styling across the project.
- Designed branding elements, including a logo, and curated media and content (text) to be shared on the site.
- Set up Supabase databases for development and production, populated with Prisma schema and content. Connected the app to the database using Prisma Client and Next.js Server Components for efficient server-side data fetching.
- Deployed the application to Vercel for fast and reliable hosting.

## Implementation

- **Design System**: Built reusable UI components (e.g., buttons, headings, navigation) in Storybook, incorporating Framer Motion directly into components to allow easy import and configuration of specific animations.
- **Core Features**: Developed key pages by dynamically fetching data from Prisma and using pre-built UI components. Built a contact form with React Hook Forms, storing submissions in the database. All pages were implemented as Next.js server components, ensuring optimized server-side rendering and scalability.

## Outcomes

- Achieved a 99/100 Vercel performance score.
- Built a cohesive branding and design system from scratch, enabling reusable UI components and seamless integration into the app.
- Streamlined UI development by decoupling it from core feature development, making the process more efficient and modular.
- Used Supabase with Prisma to simplify data updates and fetching, ensuring an efficient and flexible approach to database management.

# [Future Enhancements](#future-enhancements)
Planned updates include adding interactive data visualizations to the projects page, integrating Amplitude and Google Analytics for detailed insights, and optimizing performance using collected data. I will refine the light mode theme, address GitHub issues, and continuously update the site to reflect portfolio progress. Additionally, I aim to automate content publishing and updates for easier maintenance.

# [Contributing](#contributing)
This project is primarily a personal portfolio, but constructive feedback and suggestions are welcome! If you’d like to propose improvements, ask questions, or discuss potential collaborations, feel free to reach out via `alexhosp.dev@gmail.com`.

# [License](#license)
This project is licensed under the MIT License. You are free to use, modify, and distribute this code with proper attribution.
  
