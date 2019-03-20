var array = [42];
var selection = d3.select("body");
//var h2 = d3.selectAll("h2"); // Returns empty list if no h2
//console.log(h2);
var tds = d3.selectAll("tr").selectAll("td");
//console.log(tds);
var spans = d3.selectAll("tr").selectAll("td").selectAll("span");
//console.log(spans);
var sections = d3.selectAll("section");
//console.log(sections);
//console.log(sections.append("p")); // Returns a array of p
//console.log(d3.selectAll("section").select("aside")); // Returns array of 4 items (aside for per 2 sections, 2 null)
//document.body.__data__ = 42; // Nothing happens
//d3.select("body").datum(42); // Nothing happens
//d3.select("body").datum(42).append("h2"); // Adds data to h2, nothing displayed, require .join()
var numbers = [4, 5, 18, 23, 42];
var divs = d3.selectAll("h2").data(numbers)
//divs.exit();
divs.enter();
var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];
//
// function names(freq) {
//   return freq.name;
// }

//console.log(d3.selectAll("div").data(letters, names));
