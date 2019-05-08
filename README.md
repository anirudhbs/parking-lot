# Parking Lot

A parking lot allocation problem

<!-- An assignment, as a part of the interview process for Everest Engineering -->

## Steps to run the project

- This project requires `node` to be installed on your machine, install it from [here](https://nodejs.org/en/)
- Install the required node dependencies: `npm install`

### Option 1: Run the project on the CLI

- Run the command `npm start`
- You can now enter commands to perform operations in the parking lot
- Autocomplete suggestions of the input can be seen by pressing the `TAB` button
- The output of each command would be shown in the CLI
- To exit the CLI, type `exit`, or press `control + C`

### Option 2: Run the project using file input

- Run the command `npm run start:file file_inputs.txt`
- This method of running the application takes the input from the file `file_inputs.txt`
- The assumption is that the file is present in the root directory of the project
- All the commands inside of the file are run one by one
- The output of all the commands are shown in the terminal

## List of available commands

- All the operation names use camel case convention
- The operation name, and the paramters passed are space separated

The following are the list of commands that the application can run

### create_parking_lot

This command takes in one argument, a number

An empty parking lot of size of the input number is created

```
create_parking_lot 6
# returns: Created a parking lot with 6 slots
```

### park

This command takes 2 arguments, the registration number, and the color of the car

A message is returned saying which slot the car is parked in

```
park KA-01-HH-1234 White
# returns: Allocated slot number: 1
```

### leave

This command takes a single argument, a slot number

The car present at that slot number is then removed from there

```
leave 4
# returns: Slot number 4 is free
```

### registration_numbers_for_cars_with_colour

This command takes in a single argument, a color, and it returns the registration numbers of all the cars in the lot of the particular color

```
registration_numbers_for_cars_with_colour Red
# returns: KA-02-HH-2345, KA-12-HH-6789
```

### slot_numbers_for_cars_with_colour

This command takes a single argument, a color, and it returns the slot numbers of all the cars in the lot of that particular color

```
slot_numbers_for_cars_with_colour Red
# returns: 2, 6
```

### slot_number_for_registration_number

This command takes in a single argument, a registration number, and returns the slot number(s) of the car(s) of the given registration number

The assumption here is that there is no restriction that registration numbers need not be unique

```
slot_number_for_registration_number KA-05-HH-4567
# returns: 4
```

## Run the tests

- `jest` is being used for tests in this project
- Run `npm run test` to run all the tests
- To run an individual test, run the following command

```
npm run test [...<filename>]

# For example
npm run test tests/operations/park.test.js
npm run test tests/operations/park.test.js tests/queries/slotForRegistration.test.js

# All the test files are present in the tests/ directory
```
