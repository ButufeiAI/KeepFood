@echo off
echo ========================================
echo KeepFood - Installation et Demarrage
echo ========================================
echo.

cd backend

echo [1/2] Installation des dependances...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERREUR: Installation echouee
    echo Verifiez que Node.js est installe
    pause
    exit /b 1
)

echo.
echo [2/2] Demarrage du serveur...
echo Le serveur sera accessible sur http://localhost:5201/api
echo.
echo Pour arreter le serveur, appuyez sur Ctrl+C
echo.

call npm run start:dev

pause



