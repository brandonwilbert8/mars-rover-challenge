# Mars Rover
This is a Mars Rover Technical Challenge - Solution in JavaScript. 

## Problem Statement:

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their onboard cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

To control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right, respectively, without moving from its current spot.

'M' means move forward one grid point and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

Input:

The first line of input is the upper-right coordinates of the plateau. The lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

Output:

The output for each rover should be its final coordinates and heading.

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E

## Identification:

- First, trying to understand that the rover produces position and location. The position of the rover is represented by x and y coordinates. The location of the rover is represented by compass direction, so either N, E, W, or S. Example of this can be: (0,1,N) which means x = 0, y = 1, location = N.
- Define 2 variables for both maximum x and y coordinates to make sure the rover does not go out of range.
- By reading the instruction from NASA to control the rover, it can be identified that there are 3 types of instructions, which are L, R, and M. L is spin 90 degrees to the left. R is spin 90 degrees to the right, and M is to move forward 1 position from the respective coordinate.
- By judging from the conditions above, a constructor with 3 parameters (x,y, and location) can be created to represent the Rover model.
- Moving on, 3 methods can be created to represent the 3 instructions. These are the moveForward(), turnLeft(), and turnRight() functions.
  - Assuming that the square directly North from (x, y) is (x, y+1), the rest of the directions can be completed in the moveForward() functions.
  - Both turnLeft() and turnRight() functions are just re-directing the direction based on each pathway whether to turn left or right.
- Another function - executeCommands() which takes 1 parameter as an input, is created to process the commands provided by NASA, just an if-statement. 
- Also need to make sure that the rover stays within the maximum range of both x and y coordinates to make sure it can operate correctly.

## Logic Operation:

- A function is created to handle the input and to create the rovers.
- Knowing the input is consisting of 5 lines - string, it has to be separated by using the .split() method which is able to split the string into an array of substrings.
- By substracting the input string, the first element can be assigned as both maximum value of x and y coordinates, this will be the target point to make sure that the object is not out of position.
- Next step would be to iterate the rest of the input, the second line which represents the position and location will be assigned to variable x, y, and orientation respectively.
- The next line of the input will be the commands directed from NASA, this then will be assigned into a variable.
- Based on the 2 information collected, instantiate a new Rover object, and assign the object to be executed with the executeCommands() function by taking the command from the second line as the parameter.
- The new output from the operation above will then be pushed into a new empty array. 
- Another function is created to execute the final operation, which is to run the program, it has a forEach() method inside it.
- Lastly, the new result from the new array will then be rendered by using the forEach() method and then displayed into the console, this can be done by typing "node rover.js" on the terminal and it should produce the expected output.
