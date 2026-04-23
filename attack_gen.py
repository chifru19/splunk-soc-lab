import time
import random
import os

# Updated to a local path to avoid Permission Errors
# This folder will be created inside your splunk-soc-lab directory
LOG_FILE = "data/access.log"

def ensure_log_dir():
    """Creates the data directory if it doesn't exist."""
    dir_name = os.path.dirname(LOG_FILE)
    if dir_name and not os.path.exists(dir_name):
        os.makedirs(dir_name)
        print(f"Created directory: {dir_name}")

def generate_log():
    """Generates simulated attack and access logs."""
    ensure_log_dir()
    
    users = ["admin", "root", "frank_fru", "guest", "db_user", "web_master"]
    actions = ["FAILED_LOGIN", "SUCCESSFUL_LOGIN", "FILE_ACCESS", "SUDO_ATTEMPT", "SQL_INJECTION_TRY"]
    
    print(f"--- Attack Generator Started: Writing to {LOG_FILE} ---")
    print("Press Ctrl+C to stop the generator.")

    while True:
        user = random.choice(users)
        action = random.choice(actions)
        
        # Simulate Brute Force Logic: 
        # If action is FAILED_LOGIN, repeat multiple times quickly
        iterations = random.randint(10, 30) if action == "FAILED_LOGIN" else 1
        
        for _ in range(iterations):
            status = "critical" if action in ["FAILED_LOGIN", "SQL_INJECTION_TRY", "SUDO_ATTEMPT"] else "info"
            src_ip = f"192.168.1.{random.randint(2, 254)}"
            
            log_entry = f"{time.ctime()} | status={status} | user={user} | action={action} | src_ip={src_ip}\n"
            
            try:
                with open(LOG_FILE, "a") as f:
                    f.write(log_entry)
                print(f"Log Generated: {action} for user {user}")
            except Exception as e:
                print(f"Error writing to log: {e}")
            
            if iterations > 1:
                time.sleep(0.1)

        # Wait between events to simulate real traffic
        time.sleep(random.randint(2, 7))

if __name__ == "__main__":
    generate_log()