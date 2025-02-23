**LabourLink**

**Overview**
LabourLink is a platform that connects laborers and contractors with individuals seeking short-term labor or long-term construction services. 
The platform facilitates direct hiring, displays daily wage postings, and charges a service fee for successful matches.

**Installation**

**Clone the Repository**
```
git clone https://github.com/HimanshuChauhan7878/LabourLink.git
cd LabourLink
```

**Install Dependencies**
```
npm install
```

**Run the Development Server**
```
npm run dev
```
Access the application at **http://localhost:5173/**.

**Building for Production**
To create an optimized build:
```
npm run build
```
The output will be in the **dist/** directory.

**Deployment**

To deploy on GitHub Pages:

1. Build with the correct base path:
```
vite build --base=/LabourLink/
```
2. Push the **dist/** folder to the **gh-pages** branch:
```
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin `git subtree split --prefix dist main`:gh-pages --force
```

**Usage**
- Users can browse available laborers and contractors.
- Laborers and contractors can register and list their services.
- Clients can hire based on availability and wage listings.

**Troubleshooting**

**Blank Page After Deployment**
- Turn off Ad blocker first. If issue persits then go to next step. 
- Ensure `base: '/LabourLink/'` is set in `vite.config.ts`.
- Add `<base href="/LabourLink/">` in `index.html`.
- Clear browser cache and refresh.

**404 Errors for Assets**
- Run `vite build --base=/LabourLink/`.
- Ensure the `dist/` folder is pushed to `gh-pages`.

**Contribution Guidelines**
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Describe changes"`).
4. Push the branch (`git push origin feature-branch`).
5. Submit a pull request for review.

**License**
This project is licensed under the **MIT License**.

**Contact**
For any questions or contributions, reach out at:
Email: **himanshu34484@gmail.com**

