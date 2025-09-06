@echo off
REM Windows-specific script to handle OpenNext preview
REM This bypasses the ESM URL scheme issue on Windows

echo Building OpenNext app...
call npx opennextjs-cloudflare build

if %ERRORLEVEL% NEQ 0 (
    echo Build failed!
    exit /b %ERRORLEVEL%
)

echo Starting Wrangler dev server...
call npx wrangler dev

if %ERRORLEVEL% NEQ 0 (
    echo Wrangler dev failed!
    exit /b %ERRORLEVEL%
)
