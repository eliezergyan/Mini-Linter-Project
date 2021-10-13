let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const storyWords = story.split(' ');

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const betterWords = storyWords.filter(word => {
  if (unnecessaryWords.includes(word)){
    null;
  } else {
    return word;
  }
});

// Counting the number of overusedWords
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

for (let i = 0; i < storyWords.length; i ++){
  if (storyWords[i] === overusedWords[0]){
    counter1 += 1;
  } else if (storyWords[i] === overusedWords[1]){
    counter2 += 1;
  } else if (storyWords[i] === overusedWords[2]){
    counter3 += 1;
  }
}


// Counting Sentences in the paragraph
let sentences = 0;
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

console.log('There are ' + storyWords.length + ' words in the paragraph\n' );

console.log('There are ' + sentences + ' sentences in the paragraph.\n');

// Counting the overusedWords
console.log(overusedWords[0] + ' was used '+ counter1 + ' times(s)');
console.log(overusedWords[1] + ' was used '+ counter2 + ' times(s)');
console.log(overusedWords[2] + ' was used '+ counter3 + ' time(s)\n');

// Joining betterWords
console.log(betterWords.join(' '));

