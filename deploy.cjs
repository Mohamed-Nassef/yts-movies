const { execSync } = require('child_process');

const msg = process.argv[2] || 'update';

try {
    console.log('🟢 Adding files...');
    execSync('git add .', { stdio: 'inherit' });

    console.log(`📦 Committing with message: "${msg}"`);
    execSync(`git commit -m "${msg}"`, { stdio: 'inherit' });

    console.log('⬆️ Pushing to GitHub...');
    execSync('git push', { stdio: 'inherit' });

    console.log('🏗️ Building the project...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('🚀 Deploying to GitHub Pages...');
    execSync('npm run deploy', { stdio: 'inherit' });

    console.log('✅ Done!');
} catch (error) {
    console.error('❌ Something went wrong:', error.message);
}
// ==============================
// Steps to setup and use commit-deploy script:
// ==============================
//
// 1️⃣ Copy the deploy.cjs file into your project root.
//
// 2️⃣ Add this script to your package.json:
//     "scripts": {
//         "deploy": "gh-pages -d dist",
//         "commit-deploy": "node deploy.cjs"
//     },
//     
//
// 3️⃣ Install gh-pages if it's not already installed:
//     npm install gh-pages --save-dev
//
// 4️⃣ In vite.config.ts, set the base path:
//     base: "/your-repo-name/"
//     👉 Replace "your-repo-name" with your actual GitHub repo name.
//
// 5️⃣ If Git is not initialized yet, run:
//     git init
//     git remote add origin https://github.com/your-username/your-repo-name.git
//
// ✅ To deploy, run:
//     npm run commit-deploy -- "your commit message"
//
// 🌐 After the first deploy, your site will be live at:
//     https://your-username.github.io/your-repo-name/
// ==============================
// Note: Make sure you have the necessary permissions to push to the repository.
//       If you encounter any issues, check your GitHub repository settings and permissions.
// ==============================   


