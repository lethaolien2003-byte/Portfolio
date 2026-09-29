param(
  [string]$Action = "build"
)

$nodeDir = "C:\Program Files\nodejs"
$env:PATH = "$nodeDir;$env:PATH"

if ($Action -eq "install") {
  & "$nodeDir\npm.cmd" install
} else {
  & "$nodeDir\npm.cmd" run $Action
}
