
const puppeteer = require('puppeteer');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const url = "https://docs.google.com/forms/d/e/1FAIpQLScJkeKuQD7KkX5yT33Z0uSoObafLrfGGgsZgT4qGQPHIVPADw/viewform";
function getStuff() {
    return readFile(__dirname+'/personalinfo.txt');
  }

(async () => {
    console.log("███████╗███████╗██╗░░██╗░█████╗░██╗░██████╗")
    console.log("██╔════╝╚════██║██║░██╔╝██╔══██╗██║██╔════╝")
    console.log("█████╗░░░░███╔═╝█████═╝░███████║██║╚█████╗░")
    console.log("██╔══╝░░██╔══╝░░██╔═██╗░██╔══██║██║░╚═══██╗")
    console.log("███████╗███████╗██║░╚██╗██║░░██║██║██████╔╝")
    console.log("╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═════╝░")
    console.log("by @fthn.mp4")
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250 // slow down by 250ms
    });
    const personalinfo = await (await getStuff()).toString('ASCII');
    const breakeraser = personalinfo.replace(/\n/gi, '');
    const splitted = await breakeraser.split("?*?");
    
    console.log(splitted);

    const page = await browser.newPage();
    await page.goto(url);
    await page.keyboard.press('Tab');
    await page.keyboard.sendCharacter(splitted[0]);
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.type(splitted[2]);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.type(splitted[3]);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.type(splitted[4]);
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.sendCharacter(splitted[1]);
    for (x = 0; x < 3; x++) {
        if(x == 0){
            for (i = 0; i < 19; i++) {
                page.keyboard.press('Tab');
                if(Math.floor(Math.random() * 2) == 1){
                    page.keyboard.press('Space');
                }
            }
            page.keyboard.press('Tab');
            page.keyboard.press('Tab');
        }
        if(x == 1){
            for (i = 0; i < 8; i++) {
                page.keyboard.press('Tab');
                if(Math.floor(Math.random() * 2) == 1){
                    page.keyboard.press('Space');
                }
            }
            page.keyboard.press('Tab');
            page.keyboard.press('Tab');
        }
        if(x == 2){
            for (i = 0; i < 13; i++) {
                page.keyboard.press('Tab');
                if(Math.floor(Math.random() * 2) == 1){
                    page.keyboard.press('Space');
                }
            }
            page.keyboard.press('Tab');
            page.keyboard.press('Tab');
        }
        

        
    }
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    
})();