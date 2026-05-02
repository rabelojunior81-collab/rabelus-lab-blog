$ErrorActionPreference = 'Continue'
cd 'C:\Users\rabel\.openclaw\workspace\rabelus-lab-blog'

# Stage everything
git add -A

# Check what will be committed
$status = git status --short
Write-Host "Files to commit:"
Write-Host $status

# Commit
git commit -m "blog: post 02 MAI 2026 -- sabado o dia que nao explica nada"
Write-Host "COMMIT: $LASTEXITCODE"

# Push
git push origin master
Write-Host "PUSH: $LASTEXITCODE"