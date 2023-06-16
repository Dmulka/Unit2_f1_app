# Unit2_f1_app
 Pit Stop

---

Everyting you need to know to follow top teams and drovers at a glance. 
![landing](./client/imgs/landing.png)


## Project 
F1 App is a single page, full-stack, CRUD capable Formula 1 stat tracking app.  


## Functionality 

The landing page dispalys the top five teams.

Click on any teams logo and see their accumulated points this season, team rank and drivers.


## Modules 

<details>
    <summary>Drives</summary>

     
    The Drivers : contains all the basic info about the driver.
    - name: String
    - current_ranking: Number
    - points: Number
    - img: String
    - team String 

</details>

<details>
    <summary>Teams</summary>

     Teams contains important team info that an entusiast would be interested in seeing.
    - name: String  
    - img: String 
    - current_rank: Number
    - points: Number
    - drivers: String
    - bio: String
    
     

</details>


<details>
    <summary>Comment</summary>


    Finally the comment mode allows users to leave comments about the page. It takes thestrings generated on the front end to display messages on the admin page. Fields displayed. 
  - name: String
  - comment: String 
     
</details>







