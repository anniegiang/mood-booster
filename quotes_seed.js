const Quote = require("./models/Quote");
const seed2 = () => {
  const quote1 = new Quote({
    title: "Quote 1",
    quoteText:
      "Don't let the fear of losing be greater than the excitement of winning.",
    author: "Robert Kiyosaki",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  quote1.save();
  const quote2 = new Quote({
    title: "Quote 2",
    quoteText: "Always remember that the future comes one day at a time.",
    author: "Dean Acheson",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });

  quote2.save();

  const quote3 = new Quote({
    title: "Quote 3",
    quoteText: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill",
    mood1: false,
    mood2: true,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  quote3.save();
};

module.exports = seed2;
