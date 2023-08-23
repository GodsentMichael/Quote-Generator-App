const generateQuote = () => {
    const quotes = [
        // Inspiring Hard Work

        {
            content: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
            author: 'Winston Churchill',
          },
          {
            content: 'The only limit to our realization of tomorrow will be our doubts of today.',
            author: 'Franklin D. Roosevelt',
          },
          {
            content: 'The future depends on what you do today.',
            author: 'Mahatma Gandhi',
          },
          {
            content: 'The harder the conflict, the greater the triumph.',
            author: 'George Washington',
          },
          {
            content: 'Success is stumbling from failure to failure with no loss of enthusiasm.',
            author: 'Winston Churchill',
          },
          {
            content: 'The secret of change is to focus all of your energy not on fighting the old, but on building the new.',
            author: 'Socrates',
          },

        {
          content: 'The only way to do great work is to love what you do.',
          author: 'Steve Jobs',
        },
        {
          content: "Don't watch the clock; do what it does. Keep going.",
          author: 'Sam Levenson',
        },
        {
          content: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing.',
          author: 'Pele',
        },
        {
          content: 'Hard work beats talent when talent doesn\'t work hard.',
          author: 'Tim Notke',
        },
        {
          content: 'Dreams don\'t work unless you do.',
          author: 'John C. Maxwell',
        },
        {
          content: 'The road to success is dotted with many tempting parking spaces.',
          author: 'Will Rogers',
        },
    
        // Consistency

        {
            content: 'Success is walking from failure to failure with no loss of enthusiasm.',
            author: 'Winston Churchill',
          },
          {
            content: 'Consistency is what transforms average into excellence.',
            author: 'Unknown',
          },
          {
            content: "It's not what we do once in a while that shapes our lives. It's what we do consistently.",
            author: 'Tony Robbins',
          },
          {
            content: 'The successful person makes a habit of doing what the failing person doesn’t like to do.',
            author: 'Thomas Edison',
          },
          {
            content: 'In essence, if we want to direct our lives, we must take control of our consistent actions. It’s not what we do once in a while that shapes our lives, but what we do consistently.',
            author: 'Tony Robbins',
          },
          {
            content: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
            author: 'Aristotle',
          },
      

        {
          content: 'Success is the sum of small efforts, repeated day in and day out.',
          author: 'Robert Collier',
        },
        {
          content: 'Consistency is not perfection. It is simply refusing to give up.',
          author: 'Babe Ruth',
        },
        {
          content: 'Small daily improvements are the key to staggering long-term results.',
          author: 'Godsent Michael',
        },
        {
          content: 'The secret of your future is hidden in your daily routine.',
          author: 'Mike Murdock',
        },
        {
          content: 'Consistency breeds confidence and complacency breeds failure.',
          author: 'Godsent Michael',
        },
        {
          content: 'The difference between who you are and who you want to be is what you do.',
          author: 'Godsent Michael',
        },
    
        // Creativity/Productivity

        {
            content: 'Creativity is intelligence having fun.',
            author: 'Albert Einstein',
          },
          {
            content: 'Simplicity is the ultimate sophistication.',
            author: 'Leonardo da Vinci',
          },
          {
            content: 'The only way to do great work is to love what you do.',
            author: 'Steve Jobs',
          },
          {
            content: 'The more I practice, the luckier I get.',
            author: 'Gary Player',
          },
          {
            content: 'The best way to predict the future is to create it.',
            author: 'Peter Drucker',
          },
          {
            content: 'Perfection is not attainable, but if we chase perfection we can catch excellence.',
            author: 'Vince Lombardi',
          },
      

        {
          content: 'Creativity is intelligence having fun.',
          author: 'Albert Einstein',
        },
        {
          content: 'The best way to predict the future is to create it.',
          author: 'Peter Drucker',
        },
        {
          content: 'Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.',
          author: 'Paul J. Meyer',
        },
        {
          content: "Don't be afraid to give up the good to go for the great.",
          author: 'John D. Rockefeller',
        },
        {
          content: "You can't use up creativity. The more you use, the more you have.",
          author: 'Maya Angelou',
        },
        {
          content: 'Success is walking from failure to failure with no loss of enthusiasm.',
          author: 'Winston Churchill',
        },
    
        // Work-Life Balance

        {
            content: 'Balance is not something you find. It’s something you create.',
            author: 'Jana Kingsford',
          },
          {
            content: 'You will never feel truly satisfied by work until you are satisfied by life.',
            author: 'Heather Schuck',
          },
          {
            content: 'The key to a good work-life balance is to have both work and life complement each other, not compete with each other.',
            author: 'Unknown',
          },
          {
            content: 'Almost everything will work if you unplug it for a few minutes, including you.',
            author: 'Anne Lamott',
          },
          {
            content: 'You can’t have everything you want, but you can have the things that really matter to you.',
            author: 'Marissa Mayer',
          },
          {
            content: 'It’s not the load that breaks you down, it’s the way you carry it.',
            author: 'Lou Holtz',
          },

        {
          content: 'The key to a good work-life balance is to have both work and life complement each other, not compete with each other.',
          author: 'Godsent Michael',
        },
        {
          content: 'Take care of yourself: When you don\'t sleep, eat crap, don\'t exercise, and are living off adrenaline for too long, your performance suffers.',
          author: 'Arianna Huffington',
        },
        {
          content: 'Balance is not something you find. It\'s something you create.',
          author: 'Jana Kingsford',
        },
        {
          content: 'Strive not to get more done, but to have less to do.',
          author: 'Godsent Michael',
        },
        {
          content: 'The challenge of work-life balance is without question one of the most significant struggles faced by modern man.',
          author: 'Stephen Covey',
        },
        {
          content: 'Almost everything will work if you unplug it for a few minutes, including you.',
          author: 'Anne Lamott',
        },
      ];
    
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
}

module.exports = generateQuote;

  