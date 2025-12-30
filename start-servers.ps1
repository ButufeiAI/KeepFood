# Script de demarrage pour tous les serveurs KeepFood
# Usage: .\start-servers.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  KEEPFOOD - DEMARRAGE DES SERVEURS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verifier que Node.js est disponible
$nodePath = "C:\Program Files\nodejs"
if (-not (Test-Path "$nodePath\node.exe")) {
    Write-Host "Node.js n'est pas trouve dans $nodePath" -ForegroundColor Red
    Write-Host "Veuillez installer Node.js ou modifier le chemin dans le script" -ForegroundColor Yellow
    exit 1
}

# Ajouter Node.js au PATH
$env:PATH = "$nodePath;$env:PATH"

# Arreter les processus Node.js existants
Write-Host "Arret des processus Node.js existants..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2
Write-Host "Processus arretes" -ForegroundColor Green
Write-Host ""

# Fonction pour demarrer un serveur
function Start-Server {
    param(
        [string]$Name,
        [string]$Path,
        [string]$Command,
        [int]$Port
    )
    
    Write-Host "Demarrage de $Name..." -ForegroundColor Cyan
    $process = Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$Path'; `$env:PATH = '$nodePath;' + `$env:PATH; $Command" -PassThru
    Write-Host "   PID: $($process.Id)" -ForegroundColor Gray
    return $process
}

# Demarrer les serveurs
Write-Host "Demarrage des serveurs..." -ForegroundColor Cyan
Write-Host ""

$backendProcess = Start-Server -Name "Backend API" -Path "$PSScriptRoot\backend" -Command "npm run start:dev" -Port 5201
Start-Sleep -Seconds 2

$frontendProcess = Start-Server -Name "Frontend" -Path "$PSScriptRoot\frontend" -Command "npm run dev" -Port 5202
Start-Sleep -Seconds 2

$marketingProcess = Start-Server -Name "Marketing" -Path "$PSScriptRoot\marketing" -Command "npm run dev" -Port 5200
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "Attente du demarrage des serveurs (20 secondes)..." -ForegroundColor Yellow
Start-Sleep -Seconds 20

# Verifier les serveurs
Write-Host ""
Write-Host "Verification des serveurs..." -ForegroundColor Cyan
Write-Host ""

$ip = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254.*" } | Select-Object -First 1).IPAddress

$servers = @(
    @{Name="Backend API"; Port=5201; URL="http://localhost:5201/api"},
    @{Name="Frontend"; Port=5202; URL="http://localhost:5202"},
    @{Name="Marketing"; Port=5200; URL="http://localhost:5200"}
)

foreach ($server in $servers) {
    $test = Test-NetConnection -ComputerName localhost -Port $server.Port -InformationLevel Quiet -WarningAction SilentlyContinue
    if ($test) {
        Write-Host "$($server.Name) (port $($server.Port)): ACTIF" -ForegroundColor Green
    } else {
        Write-Host "$($server.Name) (port $($server.Port)): En demarrage..." -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SERVEURS DEMARRES" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Adresse IP locale: $ip" -ForegroundColor White
Write-Host ""
Write-Host "URLs d'acces local:" -ForegroundColor Cyan
Write-Host "   Marketing:  http://localhost:5200" -ForegroundColor White
Write-Host "   Frontend:   http://localhost:5202" -ForegroundColor White
Write-Host "   Backend:    http://localhost:5201/api" -ForegroundColor White
Write-Host ""
Write-Host "URLs d'acces reseau local:" -ForegroundColor Cyan
Write-Host "   Marketing:  http://$ip:5200" -ForegroundColor White
Write-Host "   Frontend:   http://$ip:5202" -ForegroundColor White
Write-Host "   Backend:    http://$ip:5201/api" -ForegroundColor White
Write-Host ""
$publicIP = "91.178.47.136"
Write-Host "URLs d'acces public (IP: $publicIP):" -ForegroundColor Cyan
Write-Host "   Marketing:  http://$publicIP:5200" -ForegroundColor White
Write-Host "   Frontend:   http://$publicIP:5202" -ForegroundColor White
Write-Host "   Backend:    http://$publicIP:5201/api" -ForegroundColor White
Write-Host ""
Write-Host "Pour arreter les serveurs, executez: .\stop-servers.ps1" -ForegroundColor Yellow
Write-Host ""

