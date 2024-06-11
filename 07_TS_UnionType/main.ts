// combo of two data types = union type :
// Using the | we are saying our parameter is a string or number:

function statusCode(code: string | number) {
  console.log(`status code is ${code}`);
}
statusCode(404);
statusCode("200");
