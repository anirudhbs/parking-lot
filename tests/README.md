# Test Suite

This folder contains all the tests written for this project

- Run all the tests by running `npm run test`
- Check the main `README.md` to see how to run a particular test(s)

## createParkingLot

This tests the functionality to create a parking lot

## park

This tests the functionality of adding a car into a parking lot

## leave

This tests the functionality of removing a car from a particular slot in the parking lot

## registrationForColor

This tests the query functionality for getting the registration numbers of all cars of any given color

## slotForCarsWithColor

This tests the query functionality for getting the slot numbers of all the cars of any given color

## slotForRegistration

This tests the query functionality for getting the slot number of a car of the input registration number

## autoComplete

This is meant to test the logic written in the `autoComplete` method for CLI input

## getParams

This tests the `getParams` utility method used to get the parameters from each command that are separated by a space

## getLotDetails

This is for the `getLotDetails` method, which returns the details of all the non-empty slots in the parking lot

## getMatchingValues

This tests that the `getMatchingValues` method returns object containing only the values that pass the predicate

## getOutputString

This tests that the `getOutputString` method returns an appropriate message to display the user based on the array passed as a parameter to the method

## getValuesFromObject

This tests the `getValuesFromObject` method to return the required values in an array format

The value can be slot number, registration number, or color
