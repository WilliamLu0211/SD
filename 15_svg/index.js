//DATA from http://bl.ocks.org/weiglemc/6185069

// cereals = {'Apple_Cinnamon_Cheerios': {'calories': '110', 'sodium': '180'}, 'Rice_Chex': {'calories': '110', 'sodium': '240'}, 'Just_Right_Fruit_&_Nut': {'calories': '140', 'sodium': '170'}, 'Shredded_Wheat_spoon_size': {'calories': '90', 'sodium': '0'}, 'Bran_Flakes': {'calories': '90', 'sodium': '210'}, 'Raisin_Squares': {'calories': '90', 'sodium': '0'}, 'Apple_Jacks': {'calories': '110', 'sodium': '125'}, 'Honey_Graham_Ohs': {'calories': '120', 'sodium': '220'}, 'Rice_Krispies': {'calories': '110', 'sodium': '290'}, 'Strawberry_Fruit_Wheats': {'calories': '90', 'sodium': '15'}, 'Cream_of_Wheat_(Quick)': {'calories': '100', 'sodium': '80'}, 'Nutri-Grain_Almond-Raisin': {'calories': '140', 'sodium': '220'}, 'Just_Right_Crunchy__Nuggets': {'calories': '110', 'sodium': '170'}, "Cap'n'Crunch": {'calories': '120', 'sodium': '220'}, 'Count_Chocula': {'calories': '110', 'sodium': '180'}, 'Clusters': {'calories': '110', 'sodium': '140'}, 'Multi-Grain_Cheerios': {'calories': '100', 'sodium': '220'}, 'Fruity_Pebbles': {'calories': '110', 'sodium': '135'}, 'Oatmeal_Raisin_Crisp': {'calories': '130', 'sodium': '170'}, 'Puffed_Wheat': {'calories': '50', 'sodium': '0'}, 'Honey-comb': {'calories': '110', 'sodium': '180'}, 'Almond_Delight': {'calories': '110', 'sodium': '200'}, 'Corn_Chex': {'calories': '110', 'sodium': '280'}, 'Crispy_Wheat_&_Raisins': {'calories': '100', 'sodium': '140'}, 'Grape-Nuts': {'calories': '110', 'sodium': '170'}, 'Golden_Grahams': {'calories': '110', 'sodium': '280'}, 'Smacks': {'calories': '110', 'sodium': '70'}, 'Raisin_Nut_Bran': {'calories': '100', 'sodium': '140'}, 'Mueslix_Crispy_Blend': {'calories': '160', 'sodium': '150'}, 'Special_K': {'calories': '110', 'sodium': '230'}, 'Wheaties_Honey_Gold': {'calories': '110', 'sodium': '200'}, 'Maypo': {'calories': '100', 'sodium': '0'}, 'Total_Whole_Grain': {'calories': '100', 'sodium': '200'}, 'Kix': {'calories': '110', 'sodium': '260'}, 'Golden_Crisp': {'calories': '100', 'sodium': '45'}, 'Crispix': {'calories': '110', 'sodium': '220'}, 'Shredded_Wheat': {'calories': '80', 'sodium': '0'}, 'Basic_4': {'calories': '130', 'sodium': '210'}, 'Honey_Nut_Cheerios': {'calories': '110', 'sodium': '250'}, 'Cinnamon_Toast_Crunch': {'calories': '120', 'sodium': '210'}, 'Trix': {'calories': '110', 'sodium': '140'}, 'Grape_Nuts_Flakes': {'calories': '100', 'sodium': '140'}, 'Life': {'calories': '100', 'sodium': '150'}, 'Post_Nat._Raisin_Bran': {'calories': '120', 'sodium': '200'}, 'Corn_Flakes': {'calories': '100', 'sodium': '290'}, 'Wheaties': {'calories': '100', 'sodium': '200'}, 'Double_Chex': {'calories': '100', 'sodium': '190'}, 'Great_Grains_Pecan': {'calories': '120', 'sodium': '75'}, 'Triples': {'calories': '110', 'sodium': '250'}, 'Fruitful_Bran': {'calories': '120', 'sodium': '240'}, 'All-Bran': {'calories': '70', 'sodium': '260'}, 'Lucky_Charms': {'calories': '110', 'sodium': '180'}, 'All-Bran_with_Extra_Fiber': {'calories': '50', 'sodium': '140'}, 'Quaker_Oatmeal': {'calories': '100', 'sodium': '0'}, 'Product_19': {'calories': '100', 'sodium': '320'}, "Shredded_Wheat_'n'Bran": {'calories': '90', 'sodium': '0'}, 'Puffed_Rice': {'calories': '50', 'sodium': '0'}, 'Total_Corn_Flakes': {'calories': '110', 'sodium': '200'}, 'Total_Raisin_Bran': {'calories': '140', 'sodium': '190'}, 'Quaker_Oat_Squares': {'calories': '100', 'sodium': '135'}, '100%_Bran': {'calories': '70', 'sodium': '130'}, 'Cocoa_Puffs': {'calories': '110', 'sodium': '180'}, 'Frosted_Flakes': {'calories': '110', 'sodium': '200'}, 'Froot_Loops': {'calories': '110', 'sodium': '125'}, 'Raisin_Bran': {'calories': '120', 'sodium': '210'}, 'Wheat_Chex': {'calories': '100', 'sodium': '230'}, 'Frosted_Mini-Wheats': {'calories': '100', 'sodium': '0'}, 'Corn_Pops': {'calories': '110', 'sodium': '90'}, 'Nutri-grain_Wheat': {'calories': '90', 'sodium': '170'}, 'Cheerios': {'calories': '110', 'sodium': '290'}, '100%_Natural_Bran': {'calories': '120', 'sodium': '15'}, "Cracklin'_Oat_Bran": {'calories': '110', 'sodium': '140'}, 'Nut&Honey_Crunch': {'calories': '120', 'sodium': '190'}, 'Bran_Chex': {'calories': '90', 'sodium': '200'}};

var cereals = [{'calories': '70', 'name': '100%_Bran', 'sodium': '130'}, {'calories': '120', 'name': '100%_Natural_Bran', 'sodium': '15'}, {'calories': '70', 'name': 'All-Bran', 'sodium': '260'}, {'calories': '50', 'name': 'All-Bran_with_Extra_Fiber', 'sodium': '140'}, {'calories': '110', 'name': 'Almond_Delight', 'sodium': '200'}, {'calories': '110', 'name': 'Apple_Cinnamon_Cheerios', 'sodium': '180'}, {'calories': '110', 'name': 'Apple_Jacks', 'sodium': '125'}, {'calories': '130', 'name': 'Basic_4', 'sodium': '210'}, {'calories': '90', 'name': 'Bran_Chex', 'sodium': '200'}, {'calories': '90', 'name': 'Bran_Flakes', 'sodium': '210'}, {'calories': '120', 'name': "Cap'n'Crunch", 'sodium': '220'}, {'calories': '110', 'name': 'Cheerios', 'sodium': '290'}, {'calories': '120', 'name': 'Cinnamon_Toast_Crunch', 'sodium': '210'}, {'calories': '110', 'name': 'Clusters', 'sodium': '140'}, {'calories': '110', 'name': 'Cocoa_Puffs', 'sodium': '180'}, {'calories': '110', 'name': 'Corn_Chex', 'sodium': '280'}, {'calories': '100', 'name': 'Corn_Flakes', 'sodium': '290'}, {'calories': '110', 'name': 'Corn_Pops', 'sodium': '90'}, {'calories': '110', 'name': 'Count_Chocula', 'sodium': '180'}, {'calories': '110', 'name': "Cracklin'_Oat_Bran", 'sodium': '140'}, {'calories': '100', 'name': 'Cream_of_Wheat_(Quick)', 'sodium': '80'}, {'calories': '110', 'name': 'Crispix', 'sodium': '220'}, {'calories': '100', 'name': 'Crispy_Wheat_&_Raisins', 'sodium': '140'}, {'calories': '100', 'name': 'Double_Chex', 'sodium': '190'}, {'calories': '110', 'name': 'Froot_Loops', 'sodium': '125'}, {'calories': '110', 'name': 'Frosted_Flakes', 'sodium': '200'}, {'calories': '100', 'name': 'Frosted_Mini-Wheats', 'sodium': '0'}, {'calories': '120', 'name': 'Fruitful_Bran', 'sodium': '240'}, {'calories': '110', 'name': 'Fruity_Pebbles', 'sodium': '135'}, {'calories': '100', 'name': 'Golden_Crisp', 'sodium': '45'}, {'calories': '110', 'name': 'Golden_Grahams', 'sodium': '280'}, {'calories': '100', 'name': 'Grape_Nuts_Flakes', 'sodium': '140'}, {'calories': '110', 'name': 'Grape-Nuts', 'sodium': '170'}, {'calories': '120', 'name': 'Great_Grains_Pecan', 'sodium': '75'}, {'calories': '120', 'name': 'Honey_Graham_Ohs', 'sodium': '220'}, {'calories': '110', 'name': 'Honey_Nut_Cheerios', 'sodium': '250'}, {'calories': '110', 'name': 'Honey-comb', 'sodium': '180'}, {'calories': '110', 'name': 'Just_Right_Crunchy__Nuggets', 'sodium': '170'}, {'calories': '140', 'name': 'Just_Right_Fruit_&_Nut', 'sodium': '170'}, {'calories': '110', 'name': 'Kix', 'sodium': '260'}, {'calories': '100', 'name': 'Life', 'sodium': '150'}, {'calories': '110', 'name': 'Lucky_Charms', 'sodium': '180'}, {'calories': '100', 'name': 'Maypo', 'sodium': '0'}, {'calories': '160', 'name': 'Mueslix_Crispy_Blend', 'sodium': '150'}, {'calories': '100', 'name': 'Multi-Grain_Cheerios', 'sodium': '220'}, {'calories': '120', 'name': 'Nut&Honey_Crunch', 'sodium': '190'}, {'calories': '140', 'name': 'Nutri-Grain_Almond-Raisin', 'sodium': '220'}, {'calories': '90', 'name': 'Nutri-grain_Wheat', 'sodium': '170'}, {'calories': '130', 'name': 'Oatmeal_Raisin_Crisp', 'sodium': '170'}, {'calories': '120', 'name': 'Post_Nat._Raisin_Bran', 'sodium': '200'}, {'calories': '100', 'name': 'Product_19', 'sodium': '320'}, {'calories': '50', 'name': 'Puffed_Rice', 'sodium': '0'}, {'calories': '50', 'name': 'Puffed_Wheat', 'sodium': '0'}, {'calories': '100', 'name': 'Quaker_Oat_Squares', 'sodium': '135'}, {'calories': '100', 'name': 'Quaker_Oatmeal', 'sodium': '0'}, {'calories': '120', 'name': 'Raisin_Bran', 'sodium': '210'}, {'calories': '100', 'name': 'Raisin_Nut_Bran', 'sodium': '140'}, {'calories': '90', 'name': 'Raisin_Squares', 'sodium': '0'}, {'calories': '110', 'name': 'Rice_Chex', 'sodium': '240'}, {'calories': '110', 'name': 'Rice_Krispies', 'sodium': '290'}, {'calories': '80', 'name': 'Shredded_Wheat', 'sodium': '0'}, {'calories': '90', 'name': "Shredded_Wheat_'n'Bran", 'sodium': '0'}, {'calories': '90', 'name': 'Shredded_Wheat_spoon_size', 'sodium': '0'}, {'calories': '110', 'name': 'Smacks', 'sodium': '70'}, {'calories': '110', 'name': 'Special_K', 'sodium': '230'}, {'calories': '90', 'name': 'Strawberry_Fruit_Wheats', 'sodium': '15'}, {'calories': '110', 'name': 'Total_Corn_Flakes', 'sodium': '200'}, {'calories': '140', 'name': 'Total_Raisin_Bran', 'sodium': '190'}, {'calories': '100', 'name': 'Total_Whole_Grain', 'sodium': '200'}, {'calories': '110', 'name': 'Triples', 'sodium': '250'}, {'calories': '110', 'name': 'Trix', 'sodium': '140'}, {'calories': '100', 'name': 'Wheat_Chex', 'sodium': '230'}, {'calories': '100', 'name': 'Wheaties', 'sodium': '200'}, {'calories': '110', 'name': 'Wheaties_Honey_Gold', 'sodium': '200'}];

var margin = {top: 20, right: 15, bottom: 60, left: 60}
  , width = 960 - margin.left - margin.right
  , height = 500 - margin.top - margin.bottom;

var calorieFinder = function(d){
  return parseInt(d["calories"]);
}

var sodiumFinder = function(d){
  return parseInt(d["sodium"]);
}

var x_range = d3.scaleLinear()
                .domain([0,d3.max(cereals, calorieFinder)])
                .range([margin.left, width]);

var y_range = d3.scaleLinear()
                .domain([0,d3.max(cereals, sodiumFinder)])
                .range([height, margin.top]);

d3.select("body")
  .append("h1")
  .html("correlation between sodium and calories of different brands of cereals");

var svg = d3.select("body")
            .append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom)
            .attr('class', 'chart');

var graph = svg.append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                .attr('width', width)
                .attr('height', height)
                .attr('class', 'main')

var x_axis = d3.axisBottom(x_range);

svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width/2 + margin.left + margin.right)
    .attr("y", height + margin.top + margin.bottom)
    .text("Sodium Count");

graph.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'main axis date')
    .call(x_axis)

var y_axis = d3.axisLeft(y_range);

svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("x", -175)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Calorie Count");

graph.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'main axis date')
    .call(y_axis)

var g = graph.append("svg:g");

svg.selectAll("circle")
   .data(cereals)
   .enter().append("circle")
   .attr("cy", function (d) { return y_range(parseInt(d["calories"])); } )
   .attr("cx", function (d) { return x_range(parseInt(d["sodium"])); } )
   .attr("r", 5)
   // .style("opacity", 0.6);

 svg.selectAll("text")
    .data(cereals)
    .enter().append("text")
    .attr("y", function (d) { return y_range(parseInt(d["calories"])); } )
    .attr("x", function (d) { return x_range(parseInt(d["sodium"])); } )
    .attr("font-size", "8px")
    .text(function (d) { return d["name"] });
