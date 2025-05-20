@echo off
set /p package="Enter package: "
..\venv\Scripts\python.exe -m pip install %package%
pause

