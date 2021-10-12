## Private Route Notes
- Note Tokens are stored in either Memory in the browser session storage or local storage. 
- ## Cookies Vs. Local Storage
Cookies and local storage serve different purposes. Cookies are mainly for reading server-side, whereas local storage can only be read by the client-side. Apart from saving data, a big technical difference is the size of data you can store, and as I mentioned earlier localStorage gives you more to work with.

- __Session Storage__ = The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
- __Local Storage__ (about persistance) HTML5 local storage makes it possible to store values in the browser which can survive the browser session. Local Storage is a type of Web storage which like cookies is accessible on all windows in the browser. Unless you need something sent with "every request" local storage is superior for the authentication in this project and in most other development use cases. While each has their advantages IMO local storage is the go to for developement temporary storage needs like tokens for login. However cookies provide a level of security and should be used for more real world API's and projects. 
- __Cookies__ While they can hold much less in storage they are older, and they requre you to set when they expire. Cookies like the other two accompany "every" http request and it's why they are smaller. 

- In this application the token is stored locally and can be observed in the "applications" tabe of Chrome or edge.
- Example code to use... 
  ```Javascript
  localStorage.setItem(name, 'bob')
  console.log(localStorage.getItem('name'))
  localStorage.removeItem('name')
  ```
  ## Using cookies to transfer session data.

### Advantages when using cookies:

- A cookie is a small key/value pair data structure passed back and forth between client and server and stored in the browser
- The server uses it to store information about a particular client/user
- Workflow for using cookies as session storage:
  - The server issues a cookie with an expiration time and sends it with the response.
  - Browsers automatically store the cookie and send it on every request to the same domain
  - The server can read the information contained in the cookie (like the username)
  - The server can make changes to the cookie before sending it back on the response
  - Rinse and repeat
- Express-session uses cookies for session management.

### Drawbacks when using cookies:

- Small size, around 4KB
- Send in every request, increasing the request size if too much information is stored in them
- If an attacker gets a hold of the private key used to encrypt the cookie, they could read the cookie data
