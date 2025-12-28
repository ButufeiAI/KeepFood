# Commande courte pour démarrer les serveurs
# Peut être exécutée depuis n'importe quel dossier
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $scriptRoot) {
    $scriptRoot = $PSScriptRoot
}
if (-not $scriptRoot) {
    $scriptRoot = (Get-Location).Path
}
& "$scriptRoot\start-servers.ps1"
