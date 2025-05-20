@echo off
set /p package="Enter package: "
..\venv\Scripts\python.exe -m pip uninstall %package%
pause

