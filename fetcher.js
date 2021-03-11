




/*

                        -fetcher()-
This function will take a URL as a command-line argument as well as 
a local file path and download the resource to the specified path.

        if the spevifed path does not exist it will 
        creat a new file with the filoe name specified.
*/



const args = process.argv.slice(2);

const fetcher = (x)=>{
  const url = x[0]; // url input from user
  const path = x[1]; // path to download data to
  const request = require('request');
  var progress = require('request-progress'); // to acces the bytes received
  request(`${url}`, (error, response, body) => { // (from request module)
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
    
  
    
    // This will fetch the bytes (from request-progress moduel)
    progress(request(`${url}`))
    .on('progress', state => {
      // console.log(state)
      // console.log(state.size.transferred)
      console.log(` \n Downloaded and saved ${state.size.transferred} bytes to ./${path} \n`)
    })

    /* 
          --- output of state ---- transferd(bytes) --- 
    {
            time: { elapsed: 0.003, remaining: null },
            speed: null,
            percent: null,
            size: { total: null, transferred: 13423 }
          }
    */

    //Node's fs module to write the file index.html (will write resource from url returned to the file)
    fs = require('fs');
    fs.writeFile(`${path}`, `${body}`, function (err) {
      if (err) return console.log(err);
      // console.log('Hello World > helloworld.txt');
    });




    
});

// // this will fetch teh bytes
// progress(request(`${url}`))
//  .on('progress', state => {

//    console.log(state)

//   })




// //Node's fs module to write the file index.html
// fs = require('fs');
// fs.writeFile('./indexx.txt', 'testing testing', function (err) {
//   if (err) return console.log(err);
//   console.log('Hello World > helloworld.txt');
// });



// console.log(path);
}
fetcher(args);




