@echo off
echo ============================================
echo Correction restaurantId pour admin
echo ============================================
echo.

REM Mettre a jour l'utilisateur admin
psql -U postgres -d keepfood -c "UPDATE users SET \"restaurantId\" = 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d' WHERE email = 'leonard.anghe@gmail.com'; SELECT email, role, \"restaurantId\" FROM users WHERE email = 'leonard.anghe@gmail.com';"

if %errorlevel% equ 0 (
    echo.
    echo ✅ RestaurantId mis a jour!
    echo.
    echo Vous pouvez maintenant vous connecter sur:
    echo    http://localhost:5202/login
    echo.
    echo Email: leonard.anghe@gmail.com
    echo Pass: Admin123!
    echo.
) else (
    echo.
    echo ❌ Erreur lors de la mise a jour
    echo Verifiez que PostgreSQL est demarre
    echo.
)

pause
