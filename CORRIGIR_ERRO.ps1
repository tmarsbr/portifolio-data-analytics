Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   CORRIGINDO ERRO DO MATERIAL-UI" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Parando servidor se estiver rodando..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

Write-Host ""
Write-Host "Limpando cache do npm..." -ForegroundColor Yellow
npm cache clean --force

Write-Host ""
Write-Host "Removendo node_modules..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}

Write-Host ""
Write-Host "Removendo package-lock.json..." -ForegroundColor Yellow
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
}

Write-Host ""
Write-Host "Reinstalando dependencias com versoes corrigidas..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "✅ Correcao concluida!" -ForegroundColor Green
Write-Host ""
Write-Host "Agora execute: npm start" -ForegroundColor Cyan
Write-Host "Ou use o arquivo EXECUTAR.bat" -ForegroundColor Cyan
Write-Host ""

Read-Host "Pressione Enter para continuar"
