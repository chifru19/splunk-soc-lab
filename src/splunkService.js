// src/splunkService.js
export async function sendLogToSplunk(eventData) {
    const SPLUNK_URL = 'http://YOUR_SERVER_IP:8088/services/collector/event';
    const SPLUNK_TOKEN = 'YOUR_GENERATED_TOKEN_HERE';

    try {
        await fetch(SPLUNK_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Splunk ${SPLUNK_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "event": eventData,
                "sourcetype": "_json"
            })
        });
        console.log("Log sent to Splunk!");
    } catch (error) {
        console.error("Failed to send log:", error);
    }
}