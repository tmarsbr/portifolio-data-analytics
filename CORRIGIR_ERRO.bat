@echo off
echo.
echo ========================================
echo   CORRIGINDO ERRO DO MATERIAL-UI
echo ========================================
echo.

echo Parando servidor se estiver rodando...
taskkill /f /im node.exe >nul 2>&1

echo.
echo Limpando cache do npm...
npm cache clean --force

echo.
echo Removendo node_modules...
if exist node_modules rmdir /s /q node_modules

echo.
echo Removendo package-lock.json...
if exist package-lock.json del package-lock.json

echo.
echo Reinstalando dependencias com versoes corrigidas...
npm install

echo.
echo ✅ Correcao concluida!
echo.
echo Agora execute: npm start
echo Ou use o arquivo EXECUTAR.bat
echo.

pause
