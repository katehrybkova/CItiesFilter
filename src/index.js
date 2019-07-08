
// import generic from 'src/analytics/fixtures/cities.json';
// console.log(generic)

// function requireAll( requireContext ) {
//     return requireContext.keys().map( requireContext );
//   }
//   let modules = requireAll( require.context("analytics/fixtures", false, /.json$/) );
//   console.log(modules)

var request = new XMLHttpRequest();
var requestURL = 'https://github.com/katehrybkova/CItiesFilter/blob/master/src/analytics/fixtures/cities.json';

request.open('GET', requestURL);
request.onreadystatechange = function(e) {
    if (this.readyState = 4) {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText);
console.log(response)        }
        else {
console.log("sorry! error")        }
    }
}
request.responseType = 'json';
request.send();

request.onload = function() {
  var file = request.response;
  console.log(file)
}


