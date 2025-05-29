# TeeUp

## FIGMA USER FLOWS AND USER STORIES

https://www.figma.com/board/WcUu61gcBbnunnmAfSoxuP/User-Flows---Stories--Community-?node-id=0-1&t=yO5IvsVJvJYLwUBo-1


## Summary

Introducing TeeUp, the ultimate golf companion designed to enhance your game and connect you with fellow golfers! Whether you're a casual player or a seasoned pro, our app offers a seamless experience for organizing and enjoying golf games.

Key Features:

Group Management: Easily select the number of players in your group and find suitable golf games tailored to your needs.

Game Database: Access a comprehensive database of golf games, complete with detailed explanations on how to play each format.

Scorekeeping Made Easy: Keep track of scores effortlessly, with automatic calculations based on player handicaps for a fair and competitive experience.

Extensive Course Database: Explore thousands of golf courses, complete with scorecards, slope ratings, and yardages, ensuring you have all the information you need at your fingertips.

User Profiles: Create and customize your profile to track your progress, connect with friends, and share your golfing achievements.


Join a community of golf enthusiasts and elevate your game with TeeUp where every swing counts! Download now and tee off into a world of fun and competition!


## Golf Games

Players can first select the total number of players that are in their group. TeeUp will provide them a list of different games which will work with the total number of players.

Players may also choose a custom game or customize the pre-set game chosen. 


## Scoring Formats
These define how players or teams are scored. There are 3 primary scoring formats however some games can have a combination of these styles within a match:

### Stroke Play: Counta the total number of strokes over 18 holes.
### Match Play:	Holes are won/lost/tied based on individual hole performance.	
### Points-Based: Players earn points based on hole performance.	



## GamePlay Formats
These define how players or teams play their ball:

### Individual Play: Each player plays their own ball throughout.
### Best Ball (Four Ball): Each player plays their own ball, best score counts
### Scramble: All players hit, best shot is selected, all play from there.	Scramble, Shamble (partial)
### Alternate Shot (Foursomes): Teammates alternate shots with a single ball.
### Modified/Hybrid Formats: Combination of multiple play styles.


## Player Matchup Formats
These define the format in which the players or teams are matched up. 

### Solo
### H2H: Head to Head - 1v1, 1v1v1, 1v1v1v1
### H2H Hybrid: Head to Head in which 1 player is competing against a team (1v2)
### Team Play: Any team against another team where the first number indicates the amount of players on your team and the second number represents the number of players on the opposing team - 2v2, 4v4, 4(solo)
### Modified/Hybrid Formats: Combination of multiple match setup formats.



 ________________________

## Games

 ### 1. Basic Stroke Play (Medal Play)
 
 ### 2. Match Play (Singles)
 
 ### 3. Match Play (Team)

 ### 4. Basic Scramble

 ### 5. Basic Shamble

 ### 6. Stableford

 ### 7. Nassau 

 ### 8. Skins 

 ### 9. Wolf

 ### 10. Bingo, Bango, Bongo

 ### 11. Vegas

 ### 12. 9-Ball (Threesomes Only)

 ### 13. Snake
 
 ### 14. Hollywood

 ### 15. Custom Game


min player
max player

_______________________________________________________________

## Databases

TeeUp will need to utilize the following data sets:

1. Database storing each golf game, including the rules, scoring, player criteria.
     -This may be a custom database I create
     -There will need to be flags on each golf game, primarily for number of players allowed. This way when a user indicates the total players, it will only display the appropriate games that meet the criteria
   
2. User Database
     - This will be have components of an interactive social application where users can create profiles and add other users and create groups
       
3. Course Database - Will need to store the following:
     - Course Names and Locations
     - Course Score Card - So users can input scores in the application and have it align with the holes of the course
     - Course Rating - USGA Course Rating is an evaluation of the difficulty of a golf course for scratch golfers. (More specifically, the number is an estimate of the average scores of the best 50-percent of rounds played by scratch golfers at         the course being rated.)
       Course rating is very easy to understand because it is expressed in strokes. A par-72 course that is easy might have a course rating of 68.9; one that is difficult might have a course rating of 74.5. That means that a scratch golfer              should be expected to average 68.9 strokes in his better rounds at the easier              course; and 74.5 at the more difficult one.
     - Course Slope Rating - The slope rating of a golf course is a measurement of it's relative difficulty for a bogey golfer compared to a scratch golfer. This value ranges from 55 (least difficult) to 155 (most difficult)

To put it another way: USGA Course Rating tells the best golfers how hard a golf course actually plays; USGA Slope Rating indicates how much harder the course plays for "regular" (meaning not among the best) golfers.
   
4. Database to store historic data
     - Users will want to store their playing history 

https://golfpadgps.com/ - Reference app

_______________________________________________________________

## Handicap

A USGA Handicap Index is a numerical value that represents a golfer's demonstrated playing ability, calculated based on their past scores relative to the difficulty of the courses 
and tees played, essentially providing a portable measure of how well a golfer plays across different courses; it is the official term used by the United States Golf Association to describe a golfer's handicap. 

### Calculation:
It is calculated by averaging the best 8 "Score Differentials" from a golfer's most recent 20 rounds, taking into account the course difficulty and playing conditions. 

### Purpose:
The Handicap Index allows golfers to compete fairly against others, regardless of the course they are playing on
 
Through the USGA handicap system, players can enter their USGA handicap (A further iteration may be able to API that data in from USGA)

The handicap scoring algorithm will then be applied to different games to ensure the proper number of strokes, points and other scoring is fairly integrated. 

This will be an optional tool for players to apply when they play a game.

______________________________________________________________
# Application Sections

## Sign Up Page

Users will sign up based off of their email address.

They will need to create a username 


## Profile Section

TeeUp will have elements of a social app. Users will be able to create their own profile and connect with other users. Since users will have their handicap and other data added, when they add another user and participate in a game, all of their data will be factored in.

1. General Login Information
2. Personal Profile Page
3. Simple dashboard of their matches
4. Current Handicap Index

_______________________________________________________________

## Match Section

Users will set up their matches and find the games to play in this section. 

Users can add in other TeeUp users or set up players without the app as a general player. 

In this section users will do the following:

1. Player Total: Users select the number of players for their match
2. Player Selection: Users can add other TeeUp users or select General Player and provide them with an individual name or team name
3. Course Selection: Select the course. If course is in database, all slope and course rating data along with specific scorecard will be attributed. If course is not in the list, users can manually add this information (not required). 
4. Game Selection:
   - TeeUp will provide the user with a list of games which meet the criteria.
   - There will be a description of the game as well as the rules of the game selected
   - Once selected, users can make certain modifications to the game (will have to limit the types of modifications to ensure the rules of the game or automatic scoring isn't impacted)
   - If the user selects "Custom Game" they will need to input certain criteria such as (scoring stlye: stroke play, match play, hybrid) and determine other rules.
   - Wagering - If the group wants to wager money, they can determine the wager amounts, pot, so TeeUp can track and score the winnings properly.
  
5. Match Preview: Once game selection has been made, users will see a Match Preview. This preview will display an overview of the match, which holes certain players have strokes on (per the handicap indexes), and the stakes. This is generated prior to selecting "Begin Match" to account for any edits or changes that need to be made.
6. Start Match - (There will have to a unique match ID or other identifier which will allow users on different networks to be part of the same match).
_______________________________________________________________

## TeeUp Games Section

This section of the application will provide detailed descriptions and rules of the different games. 

1. Games Overview: Detailed descriptions of each game.
2. Favorites
3. Custom Game Creation: Users can create custom games with certain criteria which will then appear in their games list.

_______________________________________________________________

## ScoreCard

The scorecard will allows users to input their scores in real time and be reflected for each user in the match.

This scoreboard will be adjusted to the game and auto update any changes in score due to the handicap index.

In this section, live status of the where the match stands, the current wager balance per player and other details of the ongoing match.

_______________________________________________________________


# Pricing


Free App

Pro 

_______________________________________________________________


# Tech Stack

### Database: Mongo DB

### Frontend: ??

### Backend: ??

_______________________________________________________________

# TO DO


1. Define the rules for each golf game so we can build the logic for scoring as well as ensuring only games which meet player number criteria populate appropriately.
2. Find a golf course database where we will pull the course information - This will need to contain the following:
       a. Score Card for course
       b. Slope rating and Course rating for each tee as well as course length from each tee

https://rapidapi.com/slashgolf/api/live-golf-data
https://documenter.getpostman.com/view/1756312/UVeDsT2b

4. Write the logic for scoring
