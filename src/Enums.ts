console.log("Enums");

// used to define set of named constant

// Type of error we want to define
// unauthorized, wrong, internal, doesn't exist

enum ErrorMessage {
  Unauthorized = "unauthorized",
  UserDNE = "user doesn't exist",
  Wrong = "wrong credentials",
  internal = "Internal Error",
}
const printErrorMessage = (err: ErrorMessage):void => {
  if (err === ErrorMessage.Unauthorized) {
    // custamizing the unauthorized error message
    console.log(`Error: ${err}, This is custom text added to that message`);
  } else {
    console.log(`Error: ${err}`);
  }
};

printErrorMessage(ErrorMessage.Unauthorized);


// Note:
// you can just use it to store some string constant value
// Done :)