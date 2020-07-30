var quotes=['The purpose of our lives is to be happy.',
'Life is what happens when you’re busy making other plans.',
'Never let the fear of striking out keep you from playing the game.',
'Not how long, but how well you have lived is the main thing.',
'Life is about making an impact, not making an income.',
'Every strike brings me closer to the next home run.',
'Live as if you were to die tomorrow. Learn as if you were to live forever.',
'Every moment is a fresh beginning.','There are no mistakes, only opportunities.',
'If you love life, don’t waste time, for time is what life is made up of.',
'Be happy for this moment. This moment is your life.',
'Happiness is the feeling that power increases — that resistance is being overcome.',
'Life is very interesting… in the end, some of your greatest pains, become your greatest strengths.',
'It’s never too late – never too late to start over, never too late to be happy.',
'You’re only human. You live once and life is wonderful, so eat the damned red velvet cupcake',
'Be nice to people on the way up, because you may meet them on the way down.',
'Life’s tough, but it’s tougher when you’re stupid',
'In the long run, the sharpest weapon of all is a kind and gentle spirit.',
'Nothing is more honorable than a grateful heart.','Happy is the man who can make a living by his hobby',
'Be where you are; otherwise you will miss your life','There are no regrets in life, just lessons.'];




function newQuote()
{
    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}