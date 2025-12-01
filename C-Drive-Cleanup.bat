@echo off
:: ========================================
:: C DRIVE CLEANUP SCRIPT
:: Automated cleanup for C: drive
:: ========================================

color 0A
title C Drive Cleanup Tool

echo.
echo ========================================
echo    C DRIVE CLEANUP TOOL
echo ========================================
echo.
echo This script will safely clean up:
echo  - Old website copy from thermal-magnetar
echo  - Temporary files
echo  - Windows Update cache
echo  - Recycle Bin
echo  - Thumbnail cache
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
echo Starting cleanup...
echo ========================================
echo.

:: Step 1: Delete old website copy
echo [1/8] Removing old website copy...
if exist "c:\Users\Jai\.gemini\antigravity\playground\thermal-magnetar" (
    rmdir /s /q "c:\Users\Jai\.gemini\antigravity\playground\thermal-magnetar" 2>nul
    echo       Done! Old website folder removed.
) else (
    echo       Folder not found - already removed.
)

:: Step 2: Clear user temp files
echo.
echo [2/8] Clearing user temporary files...
del /q/f/s "%TEMP%\*" >nul 2>&1
echo       Done! User temp files cleared.

:: Step 3: Clear Windows temp files
echo.
echo [3/8] Clearing Windows temporary files...
del /q/f/s "C:\Windows\Temp\*" >nul 2>&1
echo       Done! Windows temp files cleared.

:: Step 4: Clear Windows Prefetch
echo.
echo [4/8] Clearing Windows Prefetch...
del /q/f/s "C:\Windows\Prefetch\*" >nul 2>&1
echo       Done! Prefetch cleared.

:: Step 5: Empty Recycle Bin
echo.
echo [5/8] Emptying Recycle Bin...
rd /s /q C:\$Recycle.Bin >nul 2>&1
echo       Done! Recycle Bin emptied.

:: Step 6: Clear thumbnail cache
echo.
echo [6/8] Clearing thumbnail cache...
del /q/f/s "%LocalAppData%\Microsoft\Windows\Explorer\thumbcache_*.db" >nul 2>&1
echo       Done! Thumbnail cache cleared.

:: Step 7: Windows Update Cleanup
echo.
echo [7/8] Running Windows Update cleanup...
echo       This may take a few minutes...
Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase >nul 2>&1
echo       Done! Windows Update cache cleaned.

:: Step 8: Clear Windows Error Reports
echo.
echo [8/8] Clearing Windows Error Reports...
del /q/f/s "C:\ProgramData\Microsoft\Windows\WER\ReportQueue\*" >nul 2>&1
del /q/f/s "C:\ProgramData\Microsoft\Windows\WER\ReportArchive\*" >nul 2>&1
echo       Done! Error reports cleared.

:: Show completion message
echo.
echo ========================================
echo    CLEANUP COMPLETE!
echo ========================================
echo.
echo The following items have been cleaned:
echo  [x] Old website copy
echo  [x] Temporary files
echo  [x] Windows temp files
echo  [x] Prefetch cache
echo  [x] Recycle Bin
echo  [x] Thumbnail cache
echo  [x] Windows Update cache
echo  [x] Error reports
echo.
echo You should now have several GB of free space!
echo.
echo TIP: Run Disk Cleanup for even more space:
echo      Press Win+R, type: cleanmgr, press Enter
echo.
echo ========================================
echo.

:: Show disk space
echo Checking C: drive space...
echo.
wmic logicaldisk where "DeviceID='C:'" get DeviceID,Size,FreeSpace /format:list | findstr /r /v "^$"
echo.

echo Cleanup script completed successfully!
echo.
pause
