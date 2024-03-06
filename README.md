


Web Leads chrome extension
Overview
This is a simple web application that allows users to save and view leads (website URLs) in a list format. It provides features such as adding leads manually or extracting the current URL as a lead from the browser tab. The leads are stored locally using the browser's localStorage API.

Usage
To use the application, open the index.html file in a web browser. The interface provides an input field to add leads manually, a button to save the lead, a button to extract the current tab's URL, and a button to delete all leads. The leads are displayed in a list format below the input field.

Features
Add Leads Manually: Enter a URL into the input field and click the "Save Lead" button to add it to the list.
Extract Current Tab URL: Click the "Save Tab" button to automatically add the URL of the current browser tab to the list.
View Leads: Leads are displayed in a list format below the input field.
Delete All Leads: Click the "Delete All" button to clear all saved leads from the list and local storage.
Technologies Used
HTML
CSS
JavaScript
Dependencies
None
How it Works
When the page loads, it checks if there are any saved leads in the local storage. If leads exist, they are retrieved and displayed.
The "Save Tab" button extracts the URL of the current browser tab using the Chrome extension API (chrome.tabs.query) and adds it to the leads list.
The "Save Lead" button adds the URL entered manually into the input field to the leads list.
The "Delete All" button clears all saved leads from both the list and local storage.
Contribution
Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests.
