@echo off
echo ============================================
echo Insertion des donnees de test KeepFood
echo ============================================
echo.

REM Verifier si PostgreSQL est installe
where psql >nul 2>nul
if %errorlevel% neq 0 (
    echo ERREUR: PostgreSQL n'est pas installe ou pas dans le PATH
    echo.
    echo Installez PostgreSQL ou ajoutez-le au PATH
    pause
    exit /b 1
)

echo PostgreSQL trouve!
echo.

REM Demander les informations de connexion
set /p DB_HOST="Hote PostgreSQL (defaut: localhost): " || set DB_HOST=localhost
set /p DB_PORT="Port (defaut: 5432): " || set DB_PORT=5432
set /p DB_NAME="Nom de la base (defaut: keepfood): " || set DB_NAME=keepfood
set /p DB_USER="Utilisateur (defaut: postgres): " || set DB_USER=postgres

echo.
echo Connexion a: %DB_HOST%:%DB_PORT%/%DB_NAME% en tant que %DB_USER%
echo.

REM Executer le script SQL
psql -h %DB_HOST% -p %DB_PORT% -U %DB_USER% -d %DB_NAME% -f seed-data.sql

if %errorlevel% equ 0 (
    echo.
    echo ============================================
    echo Donnees inserees avec succes!
    echo ============================================
    echo.
    echo Restaurant: Le Gourmet
    echo Tables: 8 tables creees
    echo Categories: 9 categories
    echo Produits: 50+ produits avec images
    echo.
    echo Vous pouvez maintenant tester l'application!
    echo.
) else (
    echo.
    echo ERREUR lors de l'insertion des donnees
    echo Verifiez vos identifiants de connexion
    echo.
)

pause
