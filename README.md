# Positive ID

Positive ID is a 'how much do you know about your friends?' web application. It's intended to be a mobile application you play with a social group, oriented around quizzes about each other's interests and preferences. There are elements of Concentration, the card game where you flip over pairs of cards, trying to make matches by remembering where other cards are in the grid.

# To Do
1.	DONE Sinatra back-end
1.	DONE Heroku deployment
1.	Login using Twitter [example](http://github.com/moomerman/sinitter)
1.	Datamapper ORM?
1.	jquery ajax front-end
1.	jquery UI for eye candy
1.	"About" form for storing interests/preferences
1.	"Quiz" form for multiple-choice questions
1.	Random question picker
	1. Randomly picks a topic
	1. Randomly picks a user about whom you haven't answered the topic
	1. Gathers 2 other user preferences for that topic and uses them as "wrong" answers
1. Guessing a question right tags that preference as "known" for that user, adding 1 point to the guesser's score
1. Guessing a question wrong gives a "No, that's So-and-So's favorite" so you learn about all your friend's preferences
1. As you fill in answers for a friend, you get closer to "positive identification". When you have all the answers for them, they're marked as "positively identified" and you get 50 points.
1. The ultimate goal of the game is to positively identify everyone in your social group.
1. Each player has a "brag board" that shows their points, how many guesses they've gotten right, who they've positively identified and how many other players have positively identified them.
1. Other player's brag boards are viewable, as well as a leaderboard showing highest scorers, etc.