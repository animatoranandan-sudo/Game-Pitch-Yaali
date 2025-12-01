@echo off
:: ========================================
:: E DRIVE CLEANUP SCRIPT
:: Automated cleanup for E: drive (SSD1)
:: ========================================

color 0E
title E Drive Cleanup Tool

echo.
echo ========================================
echo    E DRIVE (SSD1) CLEANUP TOOL
echo ========================================
echo.
echo Current E: drive status: 1.81 GB free (CRITICAL!)
echo.
echo This script will safely clean up:
echo  - Temporary files on E: drive
echo  - Cache files
echo  - Thumbnail cache
echo  - Recycle Bin on E:
echo  - Find large files to review
echo.
echo IMPORTANT: This requires Administrator rights!
echo.
pause

:: Check for admin rights
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo.
    echo ERROR: This script must be run as Administrator!
    echo Right-click the file and select "Run as administrator"
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Starting E: drive cleanup...
echo ========================================
echo.

:: Step 1: Clear temp files on E: (if any)
echo [1/5] Clearing temporary files on E: drive...
if exist "E:\Temp" (
    del /q/f/s "E:\Temp\*" >nul 2>&1
    echo       Done! Temp files cleared.
) else (
    echo       No temp folder found.
)

:: Step 2: Empty Recycle Bin on E:
echo.
echo [2/5] Emptying Recycle Bin on E: drive...
rd /s /q E:\$Recycle.Bin >nul 2>&1
echo       Done! Recycle Bin emptied.

:: Step 3: Clear any cache folders
echo.
echo [3/5] Clearing cache folders...
if exist "E:\Cache" (
    del /q/f/s "E:\Cache\*" >nul 2>&1
    echo       Done! Cache cleared.
) else (
    echo       No cache folder found.
)

:: Step 4: Find large files (over 100MB)
echo.
echo [4/5] Finding large files on E: drive (over 100MB)...
echo       This may take a moment...
echo.
echo === LARGE FILES ON E: DRIVE ===
forfiles /P E:\ /S /M * /C "cmd /c if @fsize GEQ 104857600 echo @path - @fsize bytes" 2>nul
echo.
echo TIP: Consider moving large files to Y: drive (285 GB free!)
echo.

:: Step 5: Show folder sizes
echo.
echo [5/5] Analyzing top-level folders on E: drive...
echo.
echo === FOLDER SIZES ===
dir E:\ /A:D /O:-S 2>nul | findstr /R "^[0-9]"
echo.

:: Show completion message
echo.
echo ========================================
echo    CLEANUP COMPLETE!
echo ========================================
echo.
echo Items cleaned:
echo  [x] Temporary files
echo  [x] Recycle Bin
echo  [x] Cache files
echo.
echo NEXT STEPS:
echo  1. Review the large files listed above
echo  2. Move files you don't need on SSD to Y: drive
echo  3. Delete files you no longer need
echo.
echo ========================================
echo.

:: Show disk space
echo Checking E: drive space...
echo.
wmic logicaldisk where "DeviceID='E:'" get DeviceID,Size,FreeSpace /format:list | findstr /r /v "^$"
echo.

echo Cleanup script completed!
echo.
echo RECOMMENDATION: Move large files to Y: drive
echo Y: drive has 285 GB free space available!
echo.
pause
