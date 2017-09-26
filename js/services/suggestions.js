app.factory('suggestions', [function(){
  var demoSuggestions = {
    posts: [
    {
      title: 'End all club emails with Laffy Taffy jokes',
      upvotes: 9,
      comments: ['I love laffy taff', 'your mom loves laffy taffy'],
    },
    {
      title: 'Free pizza at club meetings',
      upvotes: 15,
      comments: ["I'm in!", "Sorry I'm on a diet but I'll bring salad"],
    },
    {
      title: 'Retrofit water fountain with Gatorade',
      upvotes: 7,
      comments: ["Mr. Deeds, yes, please!", "Gatorade...water...gatorade!"],
    },
    {
      title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
      upvotes: 3,
      comments: ['woahhhhoooohhhh', "He was great in the beatles. Cool song"],
    },
    ]
  };
  return demoSuggestions;
}]);
