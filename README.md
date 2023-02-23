Hi there 🖐️,

Over the last few weeks I have explored Next.js and decided to re purpose an old Movie project that I did not get to finish.

- The app is wrapped with AuthContext which gives the current user access to the app, which will is under pages/home.js.
- From there, the user can choose which genre they would like and the amount of time they prefer to sit and watch a movie for.
- Once completed, a call to the movie database API will be made and will return movies based on their search params.
- Users can also create their own lists and add the movies they like to whatever list(s) they created and can remove once completed.


First issue: Not properly understanding server versus client side rendering.
  - The form at the beginning of the home.js is intended for the client but I did not give Next.js permission to render on the client side which was 
    obviously throwing errors once there was client side interaction with the form.
  - Since this won't be a massive application, I decided to give client access to the entire document.js which fixed the problem. Once app is completed 
    I will explore which pages/components can have access to the client side.
    
Second issue: Specifying which domains that are allowed to be used as image paths.
  - From the API call an image is returned for each movie. The hostname used for the image was not configured under images in the next.config.js file.
  - A quick debug and applying new permissions to the next.config.js file fixed the issue and I learned something new!
