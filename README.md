# NathRacker API

NestJS backend for the NathRacker document encoding and verification system.

- **Production:** https://nathrackerapi.nathdomain.com
- **Staging:** https://staging-nathrackerapi.nathdomain.com
- **Swagger Docs (staging only):** /docs

---

## Requirements

- Node.js 20+
- PostgreSQL
- PM2 (`npm install -g pm2`)
- Cloudflared

---

## Environment Setup

Create the environment file for your target environment.

**.env** (local dev)
```
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/nathracker
JWT_SECRET_KEY=your_secret_here
PORT=3001
CORS_ORIGINS=http://localhost:3000
```

**.env.staging**
```
NODE_ENV=staging
DATABASE_URL=postgresql://user:password@localhost:5432/nathracker_staging
JWT_SECRET_KEY=your_staging_secret_here
PORT=3001
CORS_ORIGINS=https://staging.nathracker.nathdomain.com,http://localhost:3000
```

**.env.production**
```
NODE_ENV=production
DATABASE_URL=postgresql://user:password@localhost:5432/nathracker
JWT_SECRET_KEY=your_production_secret_here
PORT=3001
CORS_ORIGINS=https://nathracker.nathdomain.com
```

> Note: Special characters in the database password must be URL-encoded (e.g. `#` → `%23`).

---

## Project Setup

```powershell
npm install
```

---

## Development

```powershell
npm run start:dev
```

---

## Production Deployment

### 1. Build
```powershell
npm run build
```

### 2. Run migrations
```powershell
npm run migrate:prod
# or for staging:
npm run migrate:staging
```

### 3. Seed initial data (first deploy only)
```powershell
$env:NODE_ENV="production"; npx tsx AddNewUser.ts
```

### 4. Start with PM2
```powershell
pm2 start ecosystem.config.cjs --only nathracker-api

# or staging:
pm2 start ecosystem.config.cjs --only nathracker-api-staging

# also start the Cloudflare tunnel:
pm2 start ecosystem.config.cjs --only cloudflared

pm2 save
pm2 startup
```

---

## Scripts

| Script | Description |
|---|---|
| `npm run start:dev` | Start in watch mode (development) |
| `npm run build` | Build for production |
| `npm run migrate:prod` | Run migrations against production DB |
| `npm run migrate:staging` | Run migrations against staging DB |
| `npm run lint` | Lint source files |
| `npm run test` | Run unit tests |

---

## PM2 Process Reference

```powershell
pm2 list                          # view all processes
pm2 logs nathracker-api           # view logs
pm2 restart nathracker-api        # restart
pm2 stop nathracker-api           # stop
```
