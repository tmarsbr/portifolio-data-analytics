@echo off
echo.
echo ========================================
echo   PORTFOLIO DATA & ANALYTICS - SETUP
echo ========================================
echo.

echo Verificando se Node.js esta instalado...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ❌ ERRO: Node.js nao encontrado!
    echo.
    echo Por favor, instale o Node.js primeiro:
    echo 1. Acesse: https://nodejs.org/
    echo 2. Baixe a versao LTS
    echo 3. Execute o instalador
    echo 4. Reinicie o terminal e execute este arquivo novamente
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js encontrado!
echo.

echo Verificando se npm esta disponivel...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERRO: npm nao encontrado!
    pause
    exit /b 1
)

echo ✅ npm encontrado!
echo.

echo Limpando cache do npm...
npm cache clean --force

echo.
echo Removendo node_modules existente...
if exist node_modules rmdir /s /q node_modules

echo.
echo Instalando dependencias...
npm install

if %errorlevel% neq 0 (
    echo.
    echo ❌ Erro ao instalar dependencias!
    pause
    exit /b 1
)

echo.
echo ✅ Dependencias instaladas com sucesso!
echo.
echo Iniciando o servidor de desenvolvimento...
echo O portfolio sera aberto automaticamente em http://localhost:3000
echo.
echo Para parar o servidor, pressione Ctrl+C
echo.

npm start

pause
