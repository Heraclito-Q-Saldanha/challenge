# backend

*all commands must be executed in the ./backend folder*

### run dev
```sh
cp .env.dev.example .env
docker compose -f compose.dev.yaml up -d
npm install
npm run db:push
npm run start:dev
```