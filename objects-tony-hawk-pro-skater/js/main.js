//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkProSkaterCharacter(chName, specialMove, sponsor, stance) {
    this.characterName = chName
    this.sponsor = sponsor
    this.specialTrick = specialMove
    this.stance = stance
    this.grind = function(){ alert('5050') }
    this.flip = function(){ alert('Kickflip Underflip') }
    this.taunt = function(){ alert('FIRST TRY') }
}

let kareemCampbell = new TonyHawkProSkaterCharacter('Kareem','Element','Laserflip','Goofy')