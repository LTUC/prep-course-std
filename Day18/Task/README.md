# Netflix Clone

## **Task 18**

### **Overview**

For today and tomorrow's tasks, you will build a Netflix Clone web application.


### **Problem domain**

You are building a Netflix Clone application, where you can list a set of movies, and the user can add any movie to favorite list, also the user can see all favorite movies.

### **Requirements**

- Use this [Cheatsheet](https://drive.google.com/file/d/14VoN5f9mnLZ43t5kayttvbUWCYecxyLd/view) to create your project.
- API: https://developers.themoviedb.org/3


- You should have Six main components in your project.

    - Home 
    - Navbar(next task)
    - MovieList
    - Movie
    - ModalMovie
    - FavList (next task)   

- **Home component:**

    - Fetch data using the endpoint (‘/trending’) that you created in Task12. 

    - Render MovieList component.



- **MovieList component:**
    - Map the data that you have from the API. 
    - It returns and renders a Movie component.

- **Movie component:**
    - It includes the card that represents the movie
    - Each movie should have a button to add to the favorite list.
    - It includes a ModalMovie component.

- **ModalMovie component:**
    - It appears once the user clicks add to favorite button and shows movie details {name, img} also the user can add a comment on the card before adding it to the favorite list. 


    - When you click add to the favorite button you should store the data that you have from the Modal in your Database, using this endpoint(‘/addMovie’) from Task13.




