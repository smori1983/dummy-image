const fs = require('fs');
const imgGen = require('js-image-generator');

const outputDir = __dirname + '/output';

fs.mkdirSync(outputDir);

const samples = [
  {type: 'png', w:  400, h: 300},
  {type: 'png', w:  800, h: 600},
  {type: 'png', w: 1200, h: 900},
  {type: 'jpg', w:  400, h: 300},
  {type: 'jpg', w:  800, h: 600},
  {type: 'jpg', w: 1200, h: 900},
];

samples.forEach((item) => {
  const fileName = 'img_' + item.type + '.' + item.w + 'x' + item.h + '.' + item.type;

  imgGen.generateImage(item.w, item.h, 80, (err, image) => {
    console.log('Generating: ' + fileName);
    fs.writeFileSync(outputDir + '/' + fileName, image.data);
  });
});
