hello
A：Abstract Design: The shapes change color and size to give the clock a more abstract, artistic feel.
Real-Time Update: Time is calculated using the millis() function, updating in real time with smooth rotations.

s: Represents the current second, calculated using the millis() function.
m: Represents the current minute, derived from the seconds count.
h: Represents the current hour, derived from the minute count.
Rotation Angles: The angles for each time unit are calculated using:
sa for seconds (rotating every 6 degrees per second).
ma for minutes (rotating every 6 degrees per minute).
ha for hours (rotating every 15 degrees per hour).

B：
LIGHTING PIECE
Light a match and watch till it goes out.
1955 autumn

This is a simple interactive fire match animation built using the p5.js library. When the mouse hovers over the matchstick's head, the match ignites, and a glowing effect appears behind it, simulating firelight.

Move the mouse pointer close to the match head (located near the center of the screen) to trigger the firelight effect.
When the mouse is near the match head, the color will change to a brighter red, and a glowing firelight will appear in the background, growing and shrinking dynamically.
