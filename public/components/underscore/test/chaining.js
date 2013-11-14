$(document).ready(function(){module("Chaining"),test("map/flatten/reduce",function(){var e=["I'm a lumberjack and I'm okay","I sleep all night and I work all day","He's a lumberjack and he's okay","He sleeps all night and he works all day"],t=_(e).chain().map(function(e){return e.split("")}).flatten().reduce(function(e,t){return e[t]=e[t]||0,e[t]++,e},{}).value();ok(16==t.a&&10==t.e,"counted all the letters in the song")}),test("select/reject/sortBy",function(){var e=[1,2,3,4,5,6,7,8,9,10];e=_(e).chain().select(function(e){return 0==e%2}).reject(function(e){return 0==e%4}).sortBy(function(e){return-e}).value(),equal(e.join(", "),"10, 6, 2","filtered and reversed the numbers")}),test("select/reject/sortBy in functional style",function(){var e=[1,2,3,4,5,6,7,8,9,10];e=_.chain(e).select(function(e){return 0==e%2}).reject(function(e){return 0==e%4}).sortBy(function(e){return-e}).value(),equal(e.join(", "),"10, 6, 2","filtered and reversed the numbers")}),test("reverse/concat/unshift/pop/map",function(){var e=[1,2,3,4,5];e=_(e).chain().reverse().concat([5,5,5]).unshift(17).pop().map(function(e){return 2*e}).value(),equal(e.join(", "),"34, 10, 8, 6, 4, 2, 10, 10","can chain together array functions.")})});