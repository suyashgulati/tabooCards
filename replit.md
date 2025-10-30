# Taboo Card Game

## Overview

This is an interactive web-based Taboo card game built with React and TypeScript. The application displays song names that players must get others to guess without saying forbidden "taboo" words. The game features a card-based interface with scoring, hints, and session management. Players can mark cards as correct or skip them, with the score tracking their performance throughout the session.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing instead of React Router

**UI Component System**
- Shadcn UI component library based on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via CSS variables
- Component library follows "New York" style variant from Shadcn

**State Management**
- TanStack Query (React Query) for server state management and caching
- Local React state for UI interactions (hint visibility, current card, score)
- No global state management library - using composition and prop drilling

**Design System**
- Typography: Inter font family loaded from Google Fonts
- Spacing uses Tailwind's default spacing scale (2, 4, 6, 8, 12, 16 units)
- Custom color system using HSL values with CSS custom properties
- Responsive breakpoints: mobile (<768px), desktop (≥768px)
- Card-focused design with elevation via shadows and rounded corners

**Game Logic**
- Cards are statically defined in the frontend (no backend API currently)
- Score calculation based on correct/skip actions
- Session management allows resetting the game state
- Sequential card display with shuffle on new session

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Development mode uses Vite middleware for SSR and HMR
- Production mode serves static files from dist/public

**API Design**
- RESTful API structure (routes prefixed with /api)
- Currently minimal backend - routes.ts is a placeholder for future endpoints
- Storage interface pattern defined but using in-memory implementation

**Data Layer**
- Storage abstraction layer (IStorage interface) for future database integration
- Currently implements MemStorage (in-memory Map-based storage)
- User schema defined with Drizzle ORM ready for PostgreSQL
- Schema includes basic User model with username/password fields

**Development Tools**
- TSX for running TypeScript directly in development
- ESBuild for production server bundling
- Request/response logging middleware for API debugging
- Source map support for better error debugging

### Database Schema

**ORM Configuration**
- Drizzle ORM configured for PostgreSQL dialect
- Schema location: shared/schema.ts for type sharing between client/server
- Migrations directory: ./migrations
- Connection via DATABASE_URL environment variable

**Current Schema**
- Users table: id (UUID primary key), username (unique text), password (text)
- TabooCard interface (TypeScript only, not persisted): song, tabooWords array, hint
- Zod schemas for validation using drizzle-zod integration

**Future Database Design**
- Schema is ready for PostgreSQL but currently unused
- Game cards are hardcoded in frontend - could be moved to database
- Session/score persistence could be added to track player progress

## External Dependencies

### Core Framework Dependencies
- **React & React DOM**: UI library for component-based architecture
- **Vite**: Build tool and development server with plugin ecosystem
- **Express**: Node.js web server framework
- **TypeScript**: Type system for JavaScript

### Database & ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver (Neon database provider)
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### UI Component Libraries
- **Radix UI**: Unstyled, accessible component primitives (@radix-ui/react-*)
- **Shadcn UI**: Pre-styled components built on Radix (configured via components.json)
- **Lucide React**: Icon library for UI elements
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: For creating variant-based component APIs
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component

### Form & Data Management
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Validation resolver integration
- **Zod**: Schema validation library
- **TanStack Query**: Server state management and caching
- **date-fns**: Date manipulation utilities

### Development Tools
- **@replit/vite-plugin-***: Replit-specific Vite plugins for enhanced development experience
- **PostCSS & Autoprefixer**: CSS processing pipeline
- **tsx**: TypeScript execution for Node.js

### Styling Utilities
- **clsx**: Conditional className utility
- **tailwind-merge**: Intelligent Tailwind class merging
- **tailwindcss-animate**: Animation utilities for Tailwind

### Notes on Integration
- Google Fonts CDN used for Inter font family (no npm package)
- Database is provisioned but application currently works without it
- All UI components are self-contained in client/src/components/ui/
- Shared types between client/server live in shared/ directory