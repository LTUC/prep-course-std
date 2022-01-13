# Netflix Clone

## **Task 19**

### **Overview**

You will continue building on what you achieved in the last task.

### **Requirements**

- You have to create two new components.
  - FavList as what you did before with MovieList
  - Navbar

- Update App component:

  - Add routing for home and favorite list pages.
  - Render `<Navbar />` 


- Navbar component:

  - Should be able to navigate between home and favorite list page.

    **Hint**: use `<Link >` from react-bootstrap

- FavList component:
  - Retrieve the data from your database if any.
  - Display them on the Favorite list page as cards.
  - Each card should have two buttons added (Delete, Update)
      
  - Delete button, should remove the card from the favorite list.
  - Update button, enable the user to update the comment. 

