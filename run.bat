@echo off
setlocal

if not exist "%~dp0backend\node_modules" (
    echo Backend dependencies are missing. Run win.bat first.
    pause
    exit /b 1
)

if not exist "%~dp0frontend\node_modules" (
    echo Frontend dependencies are missing. Run win.bat first.
    pause
    exit /b 1
)

start "Campus Lost and Found - Backend" /D "%~dp0backend" cmd /k "set JWT_SECRET=local-dev-secret-change-this&&npm start"
start "Campus Lost and Found - Frontend" /D "%~dp0frontend" cmd /k "npm start"

echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo Close the two opened terminal windows to stop the application.
