# Vue and Django Tutorial
This GitHub repository was created for myself to learn the basics of Vue and Django. I am following one and only one guide during this tutorial: [Building a Simple CRM Using Django (DRF) And Vue](https://www.youtube.com/playlist?list=PLpyspNLjzwBl-u7Vh8mGfqqRKcVxHzqlp).

My goal, other than learning Vue and Django as well as gain more experience with GitHub and npm, is to take notes in some form so I can remember the process or at least refer back to something quicker in the future.

---
## Project Tools
* [GitHub](https://github.com/)
   * [GitHub Desktop](https://desktop.github.com/) - *Highly Recommended*
   * GitHub Desktop used to clone repository and very helpful in many ways.
* [Python](https://www.python.org/) - *Prerequisite*
   * Using 3.10.4, but any version should work.
* [Visual Studio Code](https://code.visualstudio.com/) - *Prerequisite*
   * VS Code used to code (obviously) and used to help run the servers necessary for Vue and Django.
   * The Terminal section can have multiple terminals open at once and it works better with virtual environments than Command Prompt.
   * While I say this is a prerequisite, PyCharm or any other IDE/code editor may work just as well.
* [Node.js](https://nodejs.org/en/) - *Prerequisite*
* [Django](https://www.djangoproject.com/)
   * [Django 4.0.4 Web Framework](https://docs.djangoproject.com/en/4.0/)
   * [Django REST Framework](https://www.django-rest-framework.org/)
* [Vue.js (v3) JavaScript Framework](https://v3.vuejs.org/)
* [Bulma CSS Framework](https://bulma.io/documentation/)
---

## Installing Project Dependencies
The directions below assume all prerequisites are met from Project Tools above. GitHub Desktop will be used for these directions even though it wasn't a prerequisite.

1. Use GitHub Desktop to clone the repository.
2. Open VS Code, go to File > Open Folder.
3. Find where you saved the GitHub repository and open the folder with VS Code. The default GitHub Desktop location is
   ```
   C:/Users/<Username>/Documents/GitHub/Vue-and-Django-Tutorial/
   ```
   * For me, my directory path looks like the below example:
      ```
      C:/GitHub/Vue-and-Django-Tutorial/
      ```
4. With VS Code opened to your project folder, press **CTRL+Tilde (`~)** and type **cd tutorial_vue** and press enter.
5. Next, run the following in the tutorial_vue directory:
   ```
    .../GitHub/Vue-and-Django-Tutorial/tutorial_vue> npm install
    ```
6. **Steps at this point will be updated later to cover everything.**

---

## Working with the Project
1. First, run the Django server.
   - With VS Code, press **CTRL+Tilde (`~)** and type the following commands into the terminal
      ```
      ../GitHub/Vue-and-Django-Tutorial> ./tutorial_env/Scripts/activate
      ../GitHub/Vue-and-Django-Tutorial> cd tutorial_django
      ../GitHub/Vue-and-Django-Tutorial/tutorial_django> py manage.py runserver
      ```
2. Next, run the Vue server.
   - With VS Code and the terminal window opened, press the + symbol in the top right of the terminal window to open another terminal. This is useful because you can't do anything in the previous terminal after running the server.
   - With the second terminal now opened, type the followng commands into the terminal
      ```
	  ../GitHub/Vue-and-Django-Tutorial> cd tutorial_vue
	  ../GitHub/Vue-and-Django-Tutorial/tutorial_vue> npm run serve
	  ```

Quick Notes:
- With the Django development server running:
  - Access the Django admin GUI by navigating to http://127.0.0.1:8000/admin.
- A URL to the Vue.js app (http://localhost:8080) will be displayed in the terminal.

---

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

