# Script d'arrêt pour tous les serveurs KeepFood
# Usage: .\stop-servers.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  KEEPFOOD - ARRET DES SERVEURS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier les processus Node.js en cours
$nodeProcesses = Get-Process -Name node -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    Write-Host "[ARRET] Arret de $($nodeProcesses.Count) processus Node.js..." -ForegroundColor Yellow
    
    foreach ($process in $nodeProcesses) {
        Write-Host "   Arret du processus PID: $($process.Id)" -ForegroundColor Gray
        Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
    }
    
    Start-Sleep -Seconds 2
    
    # Vérifier que tous les processus sont arrêtés
    $remaining = Get-Process -Name node -ErrorAction SilentlyContinue
    if ($remaining) {
        Write-Host "[ATTENTION] Certains processus sont encore en cours, arret force..." -ForegroundColor Yellow
        Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 1
    }
    
    Write-Host "[OK] Tous les serveurs ont ete arretes" -ForegroundColor Green
} else {
    Write-Host "[INFO] Aucun serveur en cours d'execution" -ForegroundColor Gray
}

Write-Host ""
Write-Host "[VERIFICATION] Verification des ports..." -ForegroundColor Cyan

$ports = @(5200, 5201, 5202, 5203)
foreach ($port in $ports) {
    $test = Test-NetConnection -ComputerName localhost -Port $port -InformationLevel Quiet -WarningAction SilentlyContinue
    if ($test) {
        Write-Host "   [ATTENTION] Port $port - Toujours ouvert" -ForegroundColor Yellow
    } else {
        Write-Host "   [OK] Port $port - Ferme" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "[OK] Arret termine" -ForegroundColor Green
Write-Host ""

