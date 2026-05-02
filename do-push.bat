@echo off
cd /d C:\Users\rabel\.openclaw\workspace\rabelus-lab-blog
git add -A
git commit -m "blog: post 02 MAI 2026 -- sabado o dia que nao explica nada"
git push origin master
echo DONE: %ERRORLEVEL%