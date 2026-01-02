# Script PowerShell pour créer un utilisateur admin
# Usage: .\create-admin.ps1

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  KEEPFOOD - CRÉATION UTILISATEUR ADMIN" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Paramètres de connexion à la base
$DB_HOST = Read-Host "Hôte PostgreSQL (défaut: localhost)"
if ([string]::IsNullOrWhiteSpace($DB_HOST)) { $DB_HOST = "localhost" }

$DB_PORT = Read-Host "Port (défaut: 5432)"
if ([string]::IsNullOrWhiteSpace($DB_PORT)) { $DB_PORT = "5432" }

$DB_NAME = Read-Host "Nom de la base (défaut: keepfood)"
if ([string]::IsNullOrWhiteSpace($DB_NAME)) { $DB_NAME = "keepfood" }

$DB_USER = Read-Host "Utilisateur PostgreSQL (défaut: postgres)"
if ([string]::IsNullOrWhiteSpace($DB_USER)) { $DB_USER = "postgres" }

Write-Host ""
$env:PGPASSWORD = Read-Host "Mot de passe PostgreSQL" -AsSecureString
$env:PGPASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($env:PGPASSWORD)
)

Write-Host ""
Write-Host "Création de l'utilisateur admin..." -ForegroundColor Yellow
Write-Host ""

# Exécuter le script SQL
$result = & psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f create-admin-user.sql 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Green
    Write-Host "  UTILISATEUR CRÉÉ AVEC SUCCÈS!" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📧 Email: leonard.anghe@gmail.com" -ForegroundColor White
    Write-Host "🔑 Mot de passe: Admin123!" -ForegroundColor White
    Write-Host "👤 Rôle: SUPER_ADMIN" -ForegroundColor White
    Write-Host ""
    Write-Host "Vous pouvez maintenant vous connecter à:" -ForegroundColor Cyan
    Write-Host "   http://localhost:5202/login" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERREUR lors de la création de l'utilisateur" -ForegroundColor Red
    Write-Host $result -ForegroundColor Red
    Write-Host ""
}

# Nettoyer
$env:PGPASSWORD = $null
