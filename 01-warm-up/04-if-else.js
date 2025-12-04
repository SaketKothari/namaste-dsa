function validateVotingEligibility(userAge) {
  if (userAge < 0) {
    console.log(`Age ${userAge}: Invalid input - age cannot be negative!`);
  } else if (userAge >= 18) {
    console.log(`Age ${userAge}: Eligible to vote!`);
  } else {
    console.log(`Age ${userAge}: Not eligible to vote yet!`);
  }
}

console.log('=== Voting Eligibility Checker ===');
validateVotingEligibility(18);
validateVotingEligibility(5);
validateVotingEligibility(-1);
console.log();

// -------------------------------------------

function determineNumberType(inputNumber) {
  if (inputNumber % 2 === 0) {
    // Modulo operator (%) returns the remainder after division
    console.log(`${inputNumber} is an even number`);
  } else {
    console.log(`${inputNumber} is an odd number`);
  }
}

console.log('=== Even/Odd Number Checker ===');
determineNumberType(10);
determineNumberType(9);
