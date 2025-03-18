function asknotif() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

window.addEventListener('load', asknotif);