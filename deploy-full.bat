@echo off
echo Cleaning...
rmdir /s /q dist 2>nul

echo Installing dependencies...
call npm install

echo Building...
call npm run build

echo Creating SPA files...
echo. > dist\.nojekyll
copy dist\index.html dist\404.html >nul

echo Deploying...
call npx gh-pages -d dist --dotfiles

echo.
echo ✅ DEPLOYMENT COMPLETE!
echo 🌐 Your site: https://4leksey8963.github.io/simpliflow/
echo ⏰ Wait 1-2 minutes, then refresh!
pause