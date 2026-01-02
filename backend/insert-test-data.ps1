# Script PowerShell pour insérer des données de test dans KeepFood
# Usage: .\insert-test-data.ps1

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  KEEPFOOD - INSERTION DONNÉES DE TEST" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si psql est disponible
$psqlPath = Get-Command psql -ErrorAction SilentlyContinue
if (-not $psqlPath) {
    Write-Host "ERREUR: PostgreSQL n'est pas installé ou pas dans le PATH" -ForegroundColor Red
    Write-Host "Installez PostgreSQL ou ajoutez-le au PATH système" -ForegroundColor Yellow
    exit 1
}

Write-Host "PostgreSQL trouvé: $($psqlPath.Source)" -ForegroundColor Green
Write-Host ""

# Paramètres de connexion
$DB_HOST = Read-Host "Hôte PostgreSQL (défaut: localhost)"
if ([string]::IsNullOrWhiteSpace($DB_HOST)) { $DB_HOST = "localhost" }

$DB_PORT = Read-Host "Port (défaut: 5432)"
if ([string]::IsNullOrWhiteSpace($DB_PORT)) { $DB_PORT = "5432" }

$DB_NAME = Read-Host "Nom de la base (défaut: keepfood)"
if ([string]::IsNullOrWhiteSpace($DB_NAME)) { $DB_NAME = "keepfood" }

$DB_USER = Read-Host "Utilisateur (défaut: postgres)"
if ([string]::IsNullOrWhiteSpace($DB_USER)) { $DB_USER = "postgres" }

Write-Host ""
Write-Host "Connexion à: $DB_HOST:$DB_PORT/$DB_NAME en tant que $DB_USER" -ForegroundColor Cyan
Write-Host ""

# Demander le mot de passe
$env:PGPASSWORD = Read-Host "Mot de passe" -AsSecureString
$env:PGPASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($env:PGPASSWORD)
)

# Exécuter le script SQL
Write-Host "Insertion des données..." -ForegroundColor Yellow
$result = & psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f seed-data.sql 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "============================================" -ForegroundColor Green
    Write-Host "  DONNÉES INSÉRÉES AVEC SUCCÈS!" -ForegroundColor Green
    Write-Host "============================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📊 Résumé:" -ForegroundColor Cyan
    Write-Host "   Restaurant: Le Gourmet" -ForegroundColor White
    Write-Host "   Tables: 8 tables créées" -ForegroundColor White
    Write-Host "   Catégories: 9 catégories" -ForegroundColor White
    Write-Host "   Produits: 50+ produits" -ForegroundColor White
    Write-Host ""
    Write-Host "✅ Vous pouvez maintenant tester l'application!" -ForegroundColor Green
    Write-Host ""
    Write-Host "URLs de test:" -ForegroundColor Cyan
    Write-Host "   - Bar POS: http://localhost:5202/bar-pos" -ForegroundColor White
    Write-Host "   - Cuisine: http://localhost:5202/kitchen-display" -ForegroundColor White
    Write-Host "   - Dashboard: http://localhost:5202/dashboard" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ ERREUR lors de l'insertion des données" -ForegroundColor Red
    Write-Host $result -ForegroundColor Red
    Write-Host ""
    Write-Host "Vérifiez:" -ForegroundColor Yellow
    Write-Host "   - Vos identifiants de connexion" -ForegroundColor White
    Write-Host "   - Que la base de données existe" -ForegroundColor White
    Write-Host "   - Que PostgreSQL est démarré" -ForegroundColor White
    Write-Host ""
}

# Nettoyer le mot de passe
$env:PGPASSWORD = $null
