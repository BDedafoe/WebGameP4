const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250;


function handleDirectionChange(){             //sets the paramater for the direction of the character's movement
    if(direction === null) {
        character.src = 'assets/green-character/static.gif'
    }
    
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
        x-=1
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
        y+=1
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
        x+=1
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
        y-=1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

setInterval(handleDirectionChange, 1)

document.addEventListener('keydown', function(e){       //sets the parameter for using arrow keys to move the character
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})

document.addEventListener('keyup', function(e) {    //This keeps the movement in place, no longer lets the character go off screen
    direction = null
})

move(character).withArrowKeys(100, 250, handleDirectionChange)

//moving another image///

//Image code coordinates provided//
move(newImage('assets/tree.png')).withArrowKeys(200, 450, handleDirectionChange)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
move(newImage('assets/boulder.png')).to(180,100) //added for shits and gigs
