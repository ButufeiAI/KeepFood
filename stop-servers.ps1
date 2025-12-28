# Script d'arrêt pour tous les serveurs KeepFood
# Usage: .\stop-servers.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  KEEPFOOD - ARRET DES SERVEURS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier les processus Node.js en cours
$nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    Write-Host "🛑 Arrêt de $($nodeProcesses.Count) processus Node.js..." -ForegroundColor Yellow
    
    foreach ($process in $nodeProcesses) {
        Write-Host "   Arrêt du processus PID: $($process.Id)" -ForegroundColor Gray
        Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
    }
    
    Start-Sleep -Seconds 2
    
    # Vérifier que tous les processus sont arrêtés
    $remaining = Get-Process -Name node -ErrorAction SilentlyContinue
    if ($remaining) {
        Write-Host "⚠️  Certains processus sont encore en cours, arrêt forcé..." -ForegroundColor Yellow
        Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 1
    }
    
    Write-Host "✅ Tous les serveurs ont été arrêtés" -ForegroundColor Green
} else {
    Write-Host "ℹ️  Aucun serveur en cours d'exécution" -ForegroundColor Gray
}

Write-Host ""
Write-Host "🔍 Vérification des ports..." -ForegroundColor Cyan

$ports = @(5200, 5201, 5202)
foreach ($port in $ports) {
    $test = Test-NetConnection -ComputerName localhost -Port $port -InformationLevel Quiet -WarningAction SilentlyContinue
    if ($test) {
        Write-Host "   ⚠️  Port $port: Toujours ouvert" -ForegroundColor Yellow
    } else {
        Write-Host "   ✅ Port $port: Fermé" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "✅ Arrêt terminé" -ForegroundColor Green
Write-Host ""

