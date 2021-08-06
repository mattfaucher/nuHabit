# **nuHabit**: easy habit tracking

## Ciara Williams, Noam Gal, Matt Faucher

<br>
<br>

- nuHabit was designed with the idea that having the ability to track gaining a new habit or breaking a bad one would create more active participation in the process, thus increasing the chance of success.

* nuHabit features a list of habits readily available on the home page, nuHabit, with the ability to add, edit, and delete a habit is located directly on the habit card. A user clicks on the "Done" button to say they have completed the habit. Additional information on the habit can be found by clicking on the habits title in the card. We included a progress bar for a quick visual representation of a users success with the color of the bar representing whether a user is forming, green, or breaking, yellow, a habit.

* The additional information page includes a visual of the number of days or weeks that the user has been working the habit, as well as a reward system. The reward system uses badges to represent, in increments, the success of the user towards breaking or forming the habit. A badge is earned when an increment is reached for example a daily habit with a day count of 10 will have earned two badges. Along with the badge display comes the number of days or weeks that are associated with the earned badge and some words of encouragement.

* nuHabit has two additional pages. The first is a list of all accomplished habits, titled Completed Habits. The idea behind having this page is to allow the user to not only see their accomplishments but also be able to find past ones without having to look hard. The link to the additional information page is still active and will render the same.

\*The second badge is a collection of all the badges earned from every habit, active or completed, title Badge Collection. The idea behind this page is to have a visual representation of all of the successes of a user. Every time a new badge is earned it is added to this page.

### Accomplishments:

- Matt
  - Set up MongoDB Atlas database with a cluster and two collections - users and deletedHabits
- Ciara and Matt
  - Set up API backend including: api_handler.js, db.js, graphql_date.js, habits.js, users.js, server.js, schema and necessary scripts
- Matt
  - Connected API backend to the UI frontend by setting up the graphql fetch
- Matt and Ciara
  - Created HabitList page
    - including add/update/delete a habit
    - including progress bar
- Ciara
  - Created HabitDetails page
- Ciara
  - Created Accomplished Habits page
- Noam
  - Found badge images
- Everyone
  - Set up Routing
- Matt
  - Created NavBar
- Matt
  - Setup Authentication using Auth0

### Currently Working On

- Noam
  - Created Badge Collection page
- Ciara and Matt
  - Implement "Done" button fuctionality
  - Creating a completedHabits array in the user
  - Mutation of a habit from habitList to completedHabits
- Matt
  - Bug fix in the add modal
  - Bug fix after adding new habit
- Ciara
  - Landing page design

## Next Steps

- Add design to Ui
- Add Toast notifications
- Logo
- Add filtering to Habits and Accomplished habits
  - break or form
  - daily or weekly

### Image Documentation

Database

![DB](/readme-images/DB.png)

<br>
<br>

Login

![login](/readme-images/Login.png)

<br>
<br>

Home Page
![Exist](/readme-images/Existing.png)

![Blank](/readme-images/BlankModal.png)

![Filled](/readme-images/FilledModal.png)

![New](/readme-images/NewHabitAdded.png)

![Progress](/readme-images/ProgressBarDifference.png)

<br>
<br>

Habit Details

![Daily](/readme-images/DailyDetails.png)

![Weekly](/readme-images/WeeklyDetails.png)

<br>
<br>

Accomplished Habits

![Accomplished](/readme-images/NoAccomplishedHabits.png)
