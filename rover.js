// defining the maximum coordinates for both x and y
let maxX, maxY;

class Rover {
  // constructor for Rover object
  // x and y represent the coordinates of the plateau
  // orientation can be N / E / W / S  => north, east, west, south
  // example: if the position is (0,0,N) => it means: (x=0, y=0, orientation=N)
  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  // methods to move forward
  moveForward() {
    if (this.orientation === "N") {
      this.y += 1;
    } else if (this.orientation === "E") {
      this.x += 1;
    } else if (this.orientation === "S") {
      this.y -= 1;
    } else if (this.orientation === "W") {
      this.x -= 1;
    }
  }

  // methods to move left - turning 90 degrees to the left
  turnLeft() {
    if (this.orientation === "N") {
      this.orientation = "W";
    } else if (this.orientation === "E") {
      this.orientation = "N";
    } else if (this.orientation === "S") {
      this.orientation = "E";
    } else if (this.orientation === "W") {
      this.orientation = "S";
    }
  }

  // methods to move right - turning 90 degrees to the right
  turnRight() {
    if (this.orientation === "N") {
      this.orientation = "E";
    } else if (this.orientation === "E") {
      this.orientation = "S";
    } else if (this.orientation === "S") {
      this.orientation = "W";
    } else if (this.orientation === "W") {
      this.orientation = "N";
    }
  }

  // method to execute a list of commands, given by NASA from Earth to execute the plateau - M, L, and R
  // M: Move Forward
  // L: Spin Left
  // R: Spin Right
  executeCommands(commands) {
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      if (command === "M") {
        this.moveForward();
      } else if (command === "L") {
        this.turnLeft();
      } else if (command === "R") {
        this.turnRight();
      }
    }

    // make sure the rover stays within the range for both x and y - first line of the input
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > maxX) {
      this.x = maxX;
    }
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y > maxY) {
      this.y = maxY;
    }
  }

  // method to print the current position of the rover
  // the format should be (x,y,orientation); example: (0,0,N)
  printPosition() {
    console.log(`${this.x} ${this.y} ${this.orientation}`);
  }
}

// function to parse the input and create rovers
function createRovers(input) {
  // splitting the input into arrays
  const lines = input.split("\n");

  // assigning the first element as maximum values - in this case: 5 and 5
  [maxX, maxY] = lines[0].split(" ").map(Number);

  // initiating empty array
  const rovers = [];

  // looping through the input (5 lines input)- arrays
  for (let i = 1; i < lines.length; i += 2) {
    // assigning x, y, and orientation from the second line of the input
    const [x, y, orientation] = lines[i].split(" ");

    // assigning the commands "LMLMLMLMM" or "MMRMMRMRRM"
    const commands = lines[i + 1];

    // creating the rover object based on the input
    const rover = new Rover(Number(x), Number(y), orientation);

    // calling the executeCommands() method to execute the command
    rover.executeCommands(commands);

    // pushing the output into the empty array
    rovers.push(rover);
  }

  // returning the array
  return rovers;
}

// main function to run the program
function runProgram(input) {
  // instantiate a new instance of the createRovers() function by passing the input as parameter
  const rovers = createRovers(input);

  // print out the results based on each element of the array
  rovers.forEach((rover) => rover.printPosition());
}

// example input - 5 lines
const input = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

// to run the input, and it will display the expected output
runProgram(input);

module.exports = runProgram;
