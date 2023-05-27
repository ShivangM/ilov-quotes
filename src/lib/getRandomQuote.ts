import sharp from 'sharp';

export const getRandomQuote = async () => {
  const res = await fetch('https://zenquotes.io/api/random', {
    method: 'GET',
    cache: 'no-store',
  });

  const data = await res.json();
  const { q, a }: Quote = data[0];

  const width = 750;
  const height = 483;
  const words = q.split(' ');
  const lineBreak = 4;
  let newText = '';

  let tspanElements = '';
  for (let i = 0; i < words.length; i++) {
    newText += words[i] + ' ';
    if ((i + 1) % lineBreak === 0) {
      tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
      newText = '';
    }
  }

  if (newText !== '') {
    tspanElements += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
  }

  // Construct the SVG
  const svgImage = `
          <svg width="${width}" height="${height}">
              <style>
                 .title { 
                   fill: #ffffff; 
                  font-size: 20px; 
                     font-weight: bold;
                }
               .quoteAuthorStyles {
                     font-size: 35px;
                    font-weight: bold;
                   padding: 50px;
              }
                .footerStyles {
                  font-size: 20px;
                     font-weight: bold;
                    fill: lightgrey;
                   text-anchor: middle;
                  font-family: Verdana;
              }
              </style>
              <circle cx="382" cy="76" r="44" fill="rgba(255, 255, 255, 0.155)"/>
              <text x="382" y="76" dy="50" text-anchor="middle" font-size="90" font-family="Verdana" fill="white">"</text>
              <g>
                  <rect x="0" y="0" width="${width}" height="auto"></rect>
                     <text id="lastLineOfQuote" x="375" y="120" font-family="Verdana" font-size="35" fill="white" text-anchor="middle">
                        ${tspanElements}
                    <tspan class="quoteAuthorStyles" x="375" dy="1.8em">- ${a}</tspan>
               </text>
                </g>
              <text x="${width / 2}" y="${
    height - 10
  }" class="footerStyles">Developed by @Shivang Mishra | Quotes from I❤️ Quotes</text>
          </svg>
        `;

  // Add background imgaes for the svg creation
  const backgroundNumbers = 7;
  const randomBgIdx = Math.floor(Math.random() * backgroundNumbers);
  const randomBg = `src/assets/backgrounds/${randomBgIdx}.jpeg`;

  //Composite this image together
  const timestamp = new Date().toLocaleString().replace(/[^\d]/g, '');
  const svgBuffer = Buffer.from(svgImage);
  const image = await sharp(randomBg)
    .composite([
      {
        input: svgBuffer,
        top: 0,
        left: 0,
      },
    ])
    .toFile(`src/assets/finals/quote_card_${timestamp}.png`);

  return q;
};
