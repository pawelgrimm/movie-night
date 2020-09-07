# Movie Night

A web application to help you find the best movie for your next movie night! 

Check it out at [movie-night.pawelgrimm.com](https://movie-night.pawelgrimm.com)

## Key features

 - Search a massive movie database and add movies to a list
 - Create a ballot and share the link to have users vote on your list
 - Automatically selects a movie based on votes
 - Check out key movie details and watch a trailer directly from the app, both as a list-creator and voter

## Technologies

 - React, Redux, webpack, babel
 - Node.js, express.js
 - Firebase (realtime DB)
 
## Motivation

I love to watch movies with my friends, but deciding what to watch has always been a hassle. 
Doing it manually is pretty much  a problem with time complexity O(n^<sup>2</sup>), where n is the number of people you want to please.

Now I just throw up a list of movies, everyone votes on their own phone, the movie is selected automatically, and we FINALLY have enough time to watch the extended version of the Fellowship of the Ring :)

## Disclaimers

Please note that this app is meant as a personal tool to share with a handful of friends. This means:

 - No user authentication, cheat-prevention measures, or vote obfuscation
   - Authentication services like Firebase Authentication or Auth0 could be integrated
   - Guest users could be tracked with cookies or by IP address
 - Not WCAG compliant, though accessibility was considered and built in where feasible
   - UI laid out with semantic elements, but largely not keyboard-navigable
 - Hosted on a cheap Azure VM and not ready for thousands of concurrent users
   - Could be scaled with relative ease as backend endpoints are largely functional
 - Loads reasonably quickly, but doesn't have SEO or CDN
   - Should consider implementing server-side rendering using Next.js 
   
## Things I'd Like To Address In Future Version

 - Results page should update automatically as new votes are casted
   - Could implement with polling or websockets
 - Creating a ballot from a previous ballot or other user-created list
   - It would be nice to just vote on my list of unwatched "Super Scary Movies" or "Ephemeral, Uplifting, Feel-Good Movies" instead of creating a new list from scratch every time
 - Suggest additional movies based on current list
   - TheMovieDB has an open movie recommendation engine that I could leverage
 - Collaborative list creation
   - This would be a large architectural change
