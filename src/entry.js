/*
function Journal() {
  this.journalEntry = [];
}*/

function Entry(title, body) {
  this.title = title;
  this.body = body;
};

Entry.prototype.wordCount = function() {
  let words = this.body.split(' ').length;
  return words;
}

function Journal() {
  this.journalEntry = [];
}

function Entry(title, body) {
  this.title = title;
  this.body = body;
};

Entry.prototype.wordCount = function() {
  let words = this.body.split(' ').length;
  return words;
}

entry1 = new Entry("today", "blah blah blah blah");

console.log(entry1);

entry1.body.match(/[aeiou]/g).length

Entry.prototype.vowelConsonant = function(array) {

}

Entry.prototype.getTeaser = function(array) {

}