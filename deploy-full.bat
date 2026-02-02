@echo off
echo ==========================
echo   FULL DEPLOYMENT PROCESS
echo ==========================
echo.

echo 1. Committing changes to Git...
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

echo.
echo 2. Building project...
call npm run build

echo.
echo 3. Preparing SPA files...
if not exist dist (
    echo ERROR: dist folder not found after build!
    pause
    exit /b 1
)

echo. > dist\.nojekyll
copy dist\index.html dist\404.html >nul

echo Files in dist:
dir dist

echo.
echo 4. Deploying to GitHub Pages...
call npx gh-pages -d dist --dotfiles

echo.
echo ✅ DEPLOYMENT PROCESS COMPLETE!
echo.
echo 📋 Next steps:
echo   1. Check GitHub Actions: https://github.com/4leksey8963/simpliflow/actions
echo   2. Check Pages settings: https://github.com/4leksey8963/simpliflow/settings/pages
echo   3. Open your site (wait 2 min): https://4leksey8963.github.io/simpliflow/
echo.
echo ⏰ Please wait 1-2 minutes for GitHub Pages to update!
pause