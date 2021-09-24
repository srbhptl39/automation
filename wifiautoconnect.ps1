mkdir C:\temp
cd C:\temp
$client = new-object System.Net.WebClient -ErrorAction Stop
$client.DownloadFile("https://github.com/srbhptl39/automation/raw/master/wificonnectschtask.xml","C:\temp\WifiConnect.xml") ;
$data=netsh wlan show interfaces | Select-String ssid
$ssid=("$data").split(":",3)[1].Substring(1,("$data").split(":",3)[1].IndexOf("BSSID")-6)
netsh wlan export profile name=$ssid key=clear folder=c:\temp
$wifixmlpath = 'C:\temp\Wi-Fi-'+$ssid+'.xml'

"netsh wlan add profile filename='$wifixmlpath'" >> task.ps1
"netsh wlan connect name='$ssid'">> task.ps1

schtasks.exe /create /XML "C:\temp\WifiConnect.xml" /TN Wificonnect
