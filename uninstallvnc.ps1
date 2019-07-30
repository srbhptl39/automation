Add-Type -Name Window -Namespace Console -MemberDefinition '
[DllImport("Kernel32.dll")] 
public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")]
public static extern bool MoveWindow(IntPtr hWnd, int X, int Y, int W, int H); '

$consoleHWND = [Console.Window]::GetConsoleWindow();
$consoleHWND
[Console.Window]::MoveWindow($consoleHWND,0,0,1,1);


& 'C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe' -kill

& 'C:\Program Files (x86)\uvnc bvba\UltraVNC\winvnc.exe' -kill

Start-Sleep -Seconds 2 -ErrorAction Stop

& 'C:\Program Files\uvnc bvba\UltraVNC\unins000.exe' /SP- /VERYSILENT /NORESTART -ErrorAction Stop;



& 'C:\Program Files (x86)\uvnc bvba\UltraVNC\unins000.exe' /SP- /VERYSILENT /NORESTART -ErrorAction Stop;

Start-Sleep -Seconds 2 -ErrorAction Stop

Remove-Item 'C:\Program Files\uvnc bvba' -Recurse

Remove-Item 'C:\Program Files (x86)\uvnc bvba' -Recurse

exit
