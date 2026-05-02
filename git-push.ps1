cd "C:\Users\rabel\.openclaw\workspace\rabelus-lab-blog"
git pull --rebase origin main
if ($LASTEXITCODE -ne 0) { Write-Host "Pull failed with exit code $LASTEXITCODE" }
git add -A
git commit -m "blog: post 02 MAI 2026 -- sábado o dia que não explica nada"
git push origin main
if ($LASTEXITCODE -ne 0) { Write-Host "Push failed with exit code $LASTEXITCODE" }
Write-Host "Done."