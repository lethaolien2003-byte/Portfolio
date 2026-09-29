$nodeDir = "C:\Program Files\nodejs"
$env:PATH = "$nodeDir;$env:PATH"
Write-Host "Node version: $(& "$nodeDir\node.exe" -v)"
Write-Host "Running npm install..."
& "$nodeDir\npm.cmd" install
