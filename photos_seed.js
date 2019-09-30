const Photo = require("./models/Photo");

const photoSeed = () => {

  const photo1 = new Photo({
    title: "Thank you",
    photoUrl:
      "https://pm1.narvii.com/6487/0751486a15ce949cb2870b7c26fdd8e0ef98d6ef_hq.jpg",
    mood1: true,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo1.save();

  const photo2 = new Photo({
    title: "ANGTFT",
    photoUrl:
      "https://miro.medium.com/max/1000/1*FEm8g2efQHWS38n7VvqaWQ.jpeg",
    mood1: true,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo2.save();

  const photo3 = new Photo({
    title: "Advice from a tree",
    photoUrl: "https://i.redd.it/hn4h7psxt5o31.jpg",
    mood1: true,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo3.save();

  const photo4 = new Photo({
    title: "What a considerate man",
    photoUrl:
      "https://preview.redd.it/eihhjg3veeo31.jpg?width=640&height=551&crop=smart&auto=webp&s=e912155b77d0fafd984f85b01b24539e8a3d57e7",
    mood1: false,
    mood2: true,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo4.save();

  const photo5 = new Photo({
    title: "Wholesome Sailor Moon's creator",
    photoUrl:
      "https://preview.redd.it/iwkh43tsq4p31.jpg?width=640&height=627&crop=smart&auto=webp&s=ac1b7656ac1ce79c0998d16feeab957c9646cabb",
    mood1: false,
    mood2: true,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo5.save();

  const photo6 = new Photo({
    title: "You are Inevitable",
    photoUrl:
      "https://preview.redd.it/tm2mm7halko31.jpg?width=640&height=640&crop=smart&auto=webp&s=0708eba63a15cbcb12b71f166e8be7ce5b38cffe",
    mood1: false,
    mood2: true,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo6.save();

  const photo7 = new Photo({
    title: "that’s so lovely!",
    photoUrl:
      "https://preview.redd.it/al8li9pquzo31.jpg?width=640&height=716&crop=smart&auto=webp&s=1c60a81d1a142d8f24cebb6ca1600c47fa12f67b",
    mood1: false,
    mood2: false,
    mood3: true,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo7.save();

  const photo8 = new Photo({
    title: "To consider others before oneself is the ultimate selfless action",
    photoUrl:
      "https://preview.redd.it/b04p0zj117o31.jpg?width=640&height=590&crop=smart&auto=webp&s=008be4e014ff9b2618841c00d71172254e4d7437",
    mood1: false,
    mood2: false,
    mood3: true,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo8.save();

  const photo9 = new Photo({
    title: "I choose 2!",
    photoUrl: "https://i.redd.it/imcdoatek6o31.jpg",
    mood1: false,
    mood2: false,
    mood3: true,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo9.save();

  const photo10 = new Photo({
    title: "Dont judge others. We all gotta pop someday.",
    photoUrl:
      "https://preview.redd.it/ernxtwhzzxo31.jpg?width=640&height=625&crop=smart&auto=webp&s=0eac1f55506c0a6be37dc2435fc37cafa4ed0822",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo10.save();

  const photo11 = new Photo({
    title: "Reminder",
    photoUrl: "https://i.redd.it/bp8n09thx5p31.jpg",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo11.save();

  const photo12 = new Photo({
    title: "you got this.",
    photoUrl:
      "https://preview.redd.it/zqglqaomnxo31.jpg?width=640&height=989&crop=smart&auto=webp&s=f94feff159d201dd634946bb63686ca7cf70dd95",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: true,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo12.save();

  const photo13 = new Photo({
    title: "Catch errors",
    photoUrl:
      "https://i.redd.it/atf1ietqwaxy.jpg",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: true,
    mood6: false,
    mood7: false
  });
  photo13.save();

  const photo14 = new Photo({
    title: "Make it count like Muhammad Ali.",
    photoUrl:
      "https://preview.redd.it/4q9nvtaot2p31.jpg?width=640&height=958&crop=smart&auto=webp&s=d8268fd95ce03520b00d6cfc292d4495ac4a84ed",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: true,
    mood6: false,
    mood7: false
  });
  photo14.save();

  const photo15 = new Photo({
    title: "No errors...",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoQARmvdcUrYwJke24raM9QR13j2ja8Q82AzWKq4-EaSl5E3q",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: true,
    mood6: false,
    mood7: false
  });
  photo15.save();

  const photo16 = new Photo({
    title: "Game changer",
    photoUrl:
      "https://preview.redd.it/83xfk8znd3p31.jpg?width=640&crop=smart&auto=webp&s=5886944caf9b0c22239424137966714bb76d1901",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: false
  });
  photo16.save();

  const photo17 = new Photo({
    title: "Call me a debugger",
    photoUrl:
      "https://i0.wp.com/cleus.co/wp-content/uploads/2019/03/Screenshot-2019-03-14-at-4.23.07-PM.png?resize=939%2C919&ssl=1",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: false
  });
  photo17.save();

  const photo18 = new Photo({
    title: "Still progress",
    photoUrl:
      "https://pics.me.me/got-a-new-error-progress-smemegenerator-net-coding-memes-51672926.png",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: true,
    mood7: false
  });
  photo18.save();

  const photo19 = new Photo({
    title: "Stack overflow ftw....?",
    photoUrl:
      "https://i2.wp.com/cleus.co/wp-content/uploads/2019/03/Screenshot-2019-03-14-at-4.16.29-PM.png?w=672&ssl=1",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: true
  });
  photo19.save();

  const photo20 = new Photo({
    title: "So Sad",
    photoUrl:
      "https://i2.wp.com/cleus.co/wp-content/uploads/2019/03/Screenshot-2019-03-14-at-5.34.01-PM.png?w=578&ssl=1",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: true
  });
  photo20.save();

  const photo21 = new Photo({
    title: "I will find you",
    photoUrl: "https://www.probytes.net/wp-content/uploads/2018/01/4-1.png",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: true
  });
  photo21.save();
};

module.exports = photoSeed;




