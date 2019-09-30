const Quote = require("./models/Quote")

// 1 - loss of motivation
// 2 - stressed
// 3 - imposter syndrome
// 4 - test anxiety
// 5 - social anxiety
// 6 - pressure
// 7 - mental fatigue
// Loss of motivation
const quoteSeed = () => {
  const quote1 = new Quote({
    title: "Remember",
    quoteText: "If you can remember why you started then you will know why you must continue.",
    author: "Chris Burkmenn",
    mood1: true,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote1.save();
  const quote2 = new Quote({
    title: "Get up",
    quoteText: "Fall down seven times, get up eight.",
    author: "Japanese Proverb",
    mood1: true,
    mood2: false,
    mood3: false,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote2.save();
  const quote3 = new Quote({
    title: "Climb",
    quoteText: "The best view comes after the hardest climb.",
    author: "Unknown",
    mood1: true,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote3.save();
  // Stressed 
  const quote4 = new Quote({
    title: "Release",
    quoteText: "You must learn to let go. Release the stress. You were never in control anyway.",
    author: "Steve Maraboli",
    mood1: false,
    mood2: true,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote4.save();
  const quote5 = new Quote({
    title: "Time",
    quoteText: "To achieve great things, two things are needed: a plan and not quite enough time.",
    author: "Leonard Bernstein",
    mood1: false,
    mood2: true,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote5.save();
  const quote6 = new Quote({
    title: "Stress",
    quoteText: "The mind can go either direction under stress—toward positive or toward negative: on or off. Think of it as a spectrum whose extremes are unconsciousness at the negative end and hyperconsciousness at the positive end. The way the mind will lean under stress is strongly influenced by training.",
    author: "Frank Herbert",
    mood1: false,
    mood2: true,
    mood3: false,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote6.save();
  // Imposter Syndrome
  const quote7 = new Quote({
    title: "Talent",
    quoteText: "What's talent but the ability to get away with something?",
    author: "Tennessee Williams",
    mood1: false,
    mood2: false,
    mood3: true,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote7.save();
  const quote8 = new Quote({
    title: "Imposter",
    quoteText: "The beauty of the impostor syndrome is you vacillate between extreme egomania and a complete feeling of: 'I'm a fraud! Oh God, they're on to me! I'm a fraud!' . . . just try to ride the egomania when it comes and enjoy it, and then slide through the idea of fraud.",
    author: "Tina Fey",
    mood1: false,
    mood2: false,
    mood3: true,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote8.save();
  const quote9 = new Quote({
    title: "Don't wait",
    quoteText: "Don't wait until everything is just right. It will never be perfect. There will always be challenges, obstacles and less than perfect conditions. So what? Get started now. With each step you take, you will grow stronger and stronger, more and more skilled, more and more self-confident, and more and more successful.",
    author: "Mark Victor Hansen",
    mood1: false,
    mood2: false,
    mood3: true,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote9.save();
  //test anxiety
  const quote10 = new Quote({
    title: "Failed",
    quoteText: "The master has failed more times than the beginner has even tried.",
    author: "Stephen McCranie",
    mood1: false,
    mood2: false,
    mood3: true,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote10.save();
  const quote11 = new Quote({
    title: "Opportunity",
    quoteText: "In the middle of ever difficulty lies opportunity.",
    author: "Albert Einstein",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote11.save();
  const quote12 = new Quote({
    title: "Impossible",
    quoteText: "It always seems impossible until its done.",
    author: "Nelson Mandela",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote12.save();
  const quote13 = new Quote({
    title: "Granger",
    quoteText: "KEEP CALM and STUDY LIKE GRANGER.",
    author: "Unknown",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false,
  })
  quote13.save();
  const quote14 = new Quote({
    title: "Expert",
    quoteText: "The EXPERT in anything was once a BEGINNER.",
    author: "Unknown",
    mood1: false,
    mood2: false,
    mood3: true,
    mood4: true,
    mood5: false,
    mood6: true,
    mood7: false,
  })
  quote14.save();
  // Social Anxiety
  const quote26 = new Quote({
    title: "Ending",
    quoteText: "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
    author: "Carl Bard",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: true,
    mood6: false,
    mood7: false,
  })
  quote26.save();
  const quote15 = new Quote({
    title: "Normal",
    quoteText: "To suffer some anxiety, some depression, some disappointment, even some failure is normal.",
    author: "Boyd K. Packer",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: true,
    mood6: false,
    mood7: false,
  })
  quote15.save();
  const quote16 = new Quote({
    title: "Be who you are",
    quoteText: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    author: "Dr. Seuss",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: true,
    mood6: false,
    mood7: false,
  })
  quote16.save();
  const quote17 = new Quote({
    title: "Anxiety",
    quoteText: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
    author: "Charles Spurgeon",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: true,
    mood6: false,
    mood7: false,
  })
  quote17.save();
  // Pressure 
  const quote18 = new Quote({
    title: "Easy",
    quoteText: "Nothing worth having comes easy.",
    author: "Unknown",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: false,
  })
  quote18.save();
  const quote19 = new Quote({
    title: "Growth",
    quoteText: "We don't grow when something is easy. We grow when something is challenging.",
    author: "Unknown",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: false,
  })
  quote19.save();
  const quote20 = new Quote({
    title: "Path",
    quoteText: "If you can find a path with no obstacles, it probably doesn't lead anywhere.",
    author: "Frank A. Clark",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: false,
  })
  quote20.save();
  const quote21 = new Quote({
    title: "Believe",
    quoteText: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers, you cannot be successful or happy.",
    author: "Norman Vincent Peale",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: false,
  })
  quote21.save();
  // Mental Fatigue
  const quote27 = new Quote({
    title: "Rock Bottom",
    quoteText: "Rock bottom became the solid foundation on which I rebuilt my life.",
    author: "J.K. Rowling",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: true,
  })
  quote27.save();
  const quote22 = new Quote({
    title: "Each day",
    quoteText: "Finish each day and be done with it. You have done what you could; some blunders and absurdities have crept in; forget them as soon as you can. Tomorrow is a new day; you shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.",
    author: "Ralph Waldo Emerson",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: true,
  })
  quote22.save();
  const quote23 = new Quote({
    title: "Roar",
    quoteText: "Courage doesn't always roar, sometimes it's the quiet voice at the end of the day whispering 'I will try again tomorrow.",
    author: "Mary Anne Radmacher",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: true,
  })
  quote23.save();
  const quote24 = new Quote({
    title: "Dream",
    quoteText: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    mood1: true,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: true,
  })
  quote24.save();
  const quote25 = new Quote({
    title: "Courage",
    quoteText: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    author: "Mark Twain",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: true,
  })
  quote25.save();
  const quote28 = new Quote({
    title: "Courage",
    quoteText: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    author: "Mark Twain",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: true,
  })
  quote28.save();
  
}

module.exports = quoteSeed;

