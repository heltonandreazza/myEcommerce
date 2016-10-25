var Recommender = require('likely');

var inputMatrix = [ [ 1, 2, 3, 0 ], //John
                    [ 4, 0, 5, 6 ], // Sue
                    [ 7, 8, 0, 9 ] //Joe
                  ];
var rowLabels = ['John', 'Sue', 'Joe'];
var colLabels = ['Red', 'Blue', 'Green', 'Purple'];


var Model = Recommender.buildModel(inputMatrix, rowLabels, colLabels);



var recommendations = Model.rankAllItems('John');
console.log(recommendations);
