Sakai is an application template for Vue based on the [create-vue](https://github.com/vuejs/create-vue), the recommended way to start a Vite-powered Vue projects.

Visit the [documentation](https://sakai.primevue.org/documentation) to get started.

---

This's template for "Build School" students exercise project.

1. Clone source code.
```bash
git clone 
```
2. Install package.
```bash
npm install
```
3. Create `.env` file (if need), setup `VITE_API_HOST`.

```
# Backend API Host.
VITE_API_HOST = https://localhost:7069
```

4. Run in development environment.
```bash
npm run dev
``` 
5. Deploy for production.
Create `.env.production` file (if need), setup `VITE_API_HOST`.
```
# Backend API Host.
VITE_API_HOST = https://exampele.com
```
```bash
npm run build
```