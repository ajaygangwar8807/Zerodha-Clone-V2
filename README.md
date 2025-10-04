
# Zerodha Clone

Welcome! This project is a simple and easy-to-understand clone of the Zerodha trading platform. It is made for learning and practice, not for real trading.

# Zerodha Clone (learning project)

This repository is a learning/demo clone of the Zerodha trading dashboard. It is not meant for production or real trading — only for study and UI/UX practice.

## Repository layout

- `backend/` — Node.js server and data models (Holdings, Orders, Positions).
- `dashboard/` — React dashboard app with charts and interaction components.
- `frontend/` — Static landing site, images, and assets.

## Quick start (local)

1. Clone this repository:

```powershell
git clone https://github.com/ajaygangwar8807/Zerodha-Clone-V2.git
cd "Zerodha Clone"
```

2. Install dependencies (run in each folder):

```powershell
cd backend
npm install
cd ../dashboard
npm install
cd ../frontend
npm install
```

3. Run locally:

- Backend (from `backend/`):
  ```powershell
  node index.js
  ```
- Dashboard (from `dashboard/`):
  ```powershell
  npm start
  ```
- Frontend / Landing (from `frontend/`):
  ```powershell
  npm start
  ```

## Important notes (cleanup & git)

- I removed previous submodule links so `dashboard/` and `frontend/` are now regular folders. If you see large uploads (node_modules) in the history, you may want to remove them from the repo.
- Do NOT commit `node_modules/`. To remove them from the repository and keep them locally:

```powershell
# add ignore rules
echo "dashboard/node_modules/" >> .gitignore
echo "frontend/node_modules/" >> .gitignore

git rm -r --cached dashboard/node_modules
git rm -r --cached frontend/node_modules
git add .gitignore
git commit -m "Remove node_modules and update .gitignore"
git push
```

- If you accidentally added large or unwanted files, consider using `git filter-repo` or `git filter-branch` to remove them from history (advanced).

## Features

- Holds mock holdings, orders and positions data
- React dashboard with charts and watchlist
- Static landing pages and assets

## License & disclaimer

This is an educational project only. It is not affiliated with Zerodha. Use at your own risk.

---

If you want, I can (and will) also:
- remove `node_modules/` from the repo now and push the cleanup,
- run a quick repo prune/gc to reduce size,
- or create a short CONTRIBUTING.md with run steps.

Tell me which cleanup step you'd like next and I'll run it.
