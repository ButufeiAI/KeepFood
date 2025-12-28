# Script de configuration pour KeepFood Backend

Write-Host "🔧 Configuration KeepFood Backend" -ForegroundColor Cyan
Write-Host ""

# Vérifier si .env existe
if (Test-Path .env) {
    Write-Host "✅ Fichier .env trouvé" -ForegroundColor Green
} else {
    Write-Host "📝 Création du fichier .env..." -ForegroundColor Yellow
    Copy-Item env.example .env
    Write-Host "✅ Fichier .env créé" -ForegroundColor Green
    Write-Host ""
    Write-Host "⚠️  IMPORTANT: Veuillez modifier le fichier .env avec vos informations PostgreSQL" -ForegroundColor Yellow
}

# Vérifier PostgreSQL
Write-Host ""
Write-Host "🔍 Vérification de PostgreSQL..." -ForegroundColor Cyan
$pgPort = Test-NetConnection -ComputerName localhost -Port 5432 -InformationLevel Quiet -WarningAction SilentlyContinue
if ($pgPort) {
    Write-Host "✅ PostgreSQL est actif sur le port 5432" -ForegroundColor Green
} else {
    Write-Host "❌ PostgreSQL n'est pas accessible sur le port 5432" -ForegroundColor Red
    Write-Host "   Veuillez démarrer PostgreSQL" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "📦 Installation des dépendances..." -ForegroundColor Cyan
if (Test-Path node_modules) {
    Write-Host "✅ node_modules existe déjà" -ForegroundColor Green
} else {
    Write-Host "⏳ Installation en cours..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "✅ Configuration terminée !" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Pour démarrer le serveur:" -ForegroundColor Cyan
Write-Host "   npm run start:dev" -ForegroundColor White
Write-Host ""
Write-Host "📝 N'oubliez pas de:" -ForegroundColor Yellow
Write-Host "   1. Créer la base de données: CREATE DATABASE keepfood;" -ForegroundColor White
Write-Host "   2. Vérifier les credentials dans .env" -ForegroundColor White



