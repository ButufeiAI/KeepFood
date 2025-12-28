@echo off
echo ========================================
echo Installation KeepFood Backend
echo ========================================
echo.

cd backend
echo Installation des dependances npm...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo Installation terminee avec succes!
    echo ========================================
    echo.
    echo Pour demarrer le serveur:
    echo   cd backend
    echo   npm run start:dev
    echo.
) else (
    echo.
    echo ========================================
    echo ERREUR lors de l'installation
    echo ========================================
    echo.
    echo Verifiez que:
    echo   1. Node.js est installe
    echo   2. npm est disponible dans le PATH
    echo.
)

pause



