import natural from 'natural';
const classifier = new natural.BayesClassifier();

classifier.addDocument('turn on the lights', 'lightsOn');
classifier.addDocument('turn off the lights', 'lightsOff');
classifier.addDocument('increase brightness', 'increaseBrightness');
classifier.addDocument('decrease brightness', 'decreaseBrightness');

classifier.train();

const text = "turn on the lights please";
const command = classifier.classify(text);
console.log(command);