Simple blogging application designed for users to create, manage, and share their own blog posts.

## Brief Description

This blogging platform offers an interactive space for users to share his knowledge and tips. Users can comment on posts, create their own posts and also create new categories

## Live Demo

Check out the live demo of the application: [Live Demo](https://blog-board.vercel.app/)

## Tech Stack

- Next.js
- NextAuth
- Supabase
- Shadcn UI
- React Query
- React Hook Form
- Next Safe Action
- Sonner
- MDXRemote

## Features

- Login with Github
- Authentication using Next Auth with Supabase Adapter
- Creating posts
- Post Preview
- Creating categories
- Adding comments
- Protected Routes
- Server Actions
- Prefething queries
- Hydration Boundaries
- Statically generated pages

## What I learned?

- Implementing authentication with Supabase Adapter for Next Auth
- Protecting routes on a server side and a client side
- Prefetching queries on a server side
- Using Hydration Boundary for prefetched queries
- Using Server Actions with Next Safe Action
- Creating a Trigger in Supabase PostgreSQL Database
- Generating Database Type using Supabase CLI
- Using Partial Prerendering

## Screenshots

### ![home](https://www.tarabasz.dev/_next/image?url=%2Fimages%2Fblog-baord-1.png&w=1920&q=75)

### ![home](https://www.tarabasz.dev/_next/image?url=%2Fimages%2Fblog-baord-2.png&w=1920&q=75)

### ![home](https://www.tarabasz.dev/_next/image?url=%2Fimages%2Fblog-baord-3.png&w=1920&q=75)

### ![home](https://www.tarabasz.dev/_next/image?url=%2Fimages%2Fblog-baord-4.png&w=1920&q=75)

### ![home](https://www.tarabasz.dev/_next/image?url=%2Fimages%2Fblog-baord-5.png&w=1920&q=75)

### ![home](https://www.tarabasz.dev/_next/image?url=%2Fimages%2Fblog-board-7.png&w=1920&q=75)

## Environment Variables (`.env.local`)

Before running the application, make sure you have correctly configured the environment variables. Fill in the following variables in the `.env` file:

```env
SUPABASE_SERVICE=
SUPABASE_URL=
SUPABASE_API_KEY=
SUPABASE_JWT_SECRET=

GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

## Installation and running the app

```
pnpm i
pnpm dev
```
