let textY;
let rectHeight, rectY;
let aboutText = ["Welcome to Deeply Relaxation,", "your serene space where the ancient art of yoga meets the contemporary practices of Pilates and Ashtanga.", "Our mission is to guide you on a transformative journey towards relaxation, balance, and inner peace." ,"", "Our Philosophy", "At Deeply Relaxation, we believe in the power of yoga to soothe the mind, strengthen the body,", "and uplift the spirit. In today's fast-paced world, finding a moment of tranquility can be a ","challenge. Our website serves as an oasis of calm, offering you the tools to unwind, de-stress, and rejuvenate.","", "Our Commitment","Every section of our website not only provides historical insights and daily practice videos but also","includes fun facts and tips to deepen your understanding and enjoyment of these practices.","", "Join Our Community", "At Deeply Relaxation, we're more than just a website; we're a community of like-minded", "individuals seeking harmony and wellness. Whether you're a beginner or an experienced", "practitioner, we welcome you to join us on this journey of discovery and relaxation.","", "Together, let's embark on a path that leads to a more relaxed, balanced, and joyful life." ];

function preload() {
  img1 = loadImage("img/1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont("Noto Sans");

  rectHeight = windowHeight / 1.7;
  rectY = windowHeight / 2 + 50;
  textY = rectY - rectHeight / 2;

  let linkButton = createButton('Visit Homepage');
  linkButton.id('linkButton');
  linkButton.mousePressed(goToHomepage);
  linkButton.parent('linkButtonContainer');
}

function goToHomepage() {
  window.location.href = '../entry-6/index.html'; 
}


function draw() {
  image(img1, 0, 0, windowWidth, windowHeight);

  push();
  textSize(50);
  text('About', windowWidth / 2, windowHeight / 6);
  pop();

  

  push();
  textSize(20);
  for (let i = 0; i < aboutText.length; i++) {
    let yPos = textY + i * 50;
    if (yPos > rectY - rectHeight / 2 && yPos < rectY + rectHeight / 2) {
      text(aboutText[i], windowWidth / 2, yPos);
    }
  }
  pop();

  textY -= 0.5;

  if (textY + aboutText.length * 30 < rectY - rectHeight / 2) {
    textY = rectY + rectHeight / 2;
  }
}
