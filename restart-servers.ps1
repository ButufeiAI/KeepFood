# Script de redémarrage pour tous les serveurs KeepFood
# Usage: .\restart-servers.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  KEEPFOOD - REDEMARRAGE DES SERVEURS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Arrêter les serveurs
Write-Host "🛑 Arrêt des serveurs..." -ForegroundColor Yellow
& "$PSScriptRoot\stop-servers.ps1"
Write-Host ""

Start-Sleep -Seconds 3

# Démarrer les serveurs
Write-Host "🚀 Redémarrage des serveurs..." -ForegroundColor Cyan
& "$PSScriptRoot\start-servers.ps1"

