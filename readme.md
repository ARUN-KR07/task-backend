
---

## Backend README (`task-backend/README.md`)**

```markdown
# Task Backend - FeathersJS API

FeathersJS backend API for User Management Dashboard, connected to PostgreSQL using Knex.

## Features
- REST API endpoints for users
  - GET `/users` → fetch users
  - POST `/users` → add user
  - PATCH `/users/:id` → edit user / soft delete
- Soft delete functionality (`deleted: true`)
- PostgreSQL database support via Knex
- Migrations included for database setup

## Tech Stack
- Node.js + FeathersJS
- Knex.js + PostgreSQL
- Axios compatible REST API

## Prerequisites
- Node.js >= 18
- npm
- PostgreSQL server running

## Setup Instructions

1. Clone the repo
```bash
git clone https://github.com/<your-username>/task-backend.git
cd task-backend
