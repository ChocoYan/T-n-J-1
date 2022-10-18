var bg,backgroundimg

function preload() {
    backgroundimg = loadImage('background2.jpg')
    
}

function setup() {
    createCanvas(windowWidth,windowHeight)

    bg = createSprite(500,500)
    bg.addImage(backgroundimg)

}

function draw() {
    background('white')

    drawSprites()
}