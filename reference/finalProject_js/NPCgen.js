//gameResCode.js required for this to run properly
//uses getRandom function from there

$(document).ready(function toggleHandler(){
    $("#toggleSex").change(function(){
        $("#sex").val('random');
        if($('#toggleSex').is(':checked')){
            console.log("gender toggle on");
            $("#sex").removeAttr("disabled");
        }
        else{
            console.log("gender toggle off")
            $("#sex").attr("disabled", "disabled");
        }
    });
    $("#toggleRace").change(function(){
        $("#race").val('random');
        if($('#toggleRace').is(':checked')){
            console.log("race toggle on");
            $("#race").removeAttr("disabled");
        }
        else{

            console.log("race toggle off")
            $("#race").attr("disabled", "disabled");
        }
    });
    $("#toggleWealth").change(function(){
        $("#wealth").val('random');
        if($('#toggleWealth').is(':checked')){
            console.log("wealth toggle on");
            $("#wealth").removeAttr("disabled");
        }
        else{
             console.log("wealth toggle off")
            $("#wealth").attr("disabled", "disabled");           
        }
    });
});

//10 each
//[0]-[4] are male names, [5]-[9] are female
let humFName = ["Archibald" , "Braum" , "Norbit" , "Percival" , "Marley" , "Ashlynn" , "Alaura" , "Mona" , "Elaina" , "Yasha"];
let elfFName = ["Ravindill" , "Fyndral" , "Celebrian" , "Gil'galad" , "Reinys" , "Taenya" , "Valindra" , "Gaelira" , "Ellania" , "Chandrelle"];
let dwaFName = ["Kipper" , "Groon" , "Dwil" , "Findli" , "Doran" , "Astrid" , "Gudrun" , "Hilde" , "Sigrunn" , "Kili"];
let halFName = ["Wenrin" , "Bosco" , "Meriadoc" , "Adelbric" , "Andwise" , "Arabella" , "Pansy" , "Rosa" , "Gilly" , "Marigold"];
    
//8 each
let humLName = ["Brinks" , "Arnvold" , "Gilmore" , "Daxio" , "Tranter" , "Chromwell" , "Brinjay" , "Darrington"];
let elfLName = ["Il'dan" , "K'ryyn" , "Sil'thon" , "Glorfindel" , "Earendil" , "Hal'duin" , "Nar'dual" , "Orris"];
//4 each
let dwaLNamePt1 = ["Hearth" , "Stone" , "Forge" , "Iron"];
let dwaLNamePt2 = ["beard" , "fire" , "smith" , "born"]
let halLNamePt1 = ["Bristle" , "Half" , "Green" , "Briar"];
let halLNamePt2 = ["wood" , "pint" , "hill" , "bog"];

//2
let sex = ["Male" , "Female"];

//4
let race = ["Human" , "Elf" , "Dwarf" , "Halfling"];

//3
let wealth = ["Poor" , "Middle Class" , "Rich"];

//10 each
let lowItems = ["A shoddy dagger" , "A wooden holy symbol of a local god" , "Several woven leather bracelets" , "A pack of playing cards" , 
"A surprisingly nice wool sweater" , "A sturdy leather satchel" , "A journal or diary and writing supplies" , "A flask of whiskey" , 
"A pair of broken eyeglasses" , "A thick cloack with several holes worn in it"]
let midItems = ["A gem that illuminates 10ft in the dark" , "A well-crafted longsword" , "A small case with various spices" , 
"A gold ring engraved with a message from a loved one" , "A well-groomed riding horse" , "A silver pocketwatch" , "A smoking pipe with a pouch of quality tobbaco" ,
 "A book titled \"How to Make Small Talk\"" , "An ornate pocket knife" , "A talking doll that gives directions to places it's been before"]
let highItem = ["A magic hand-crossbow that loads itself" , "Several pieces of jewelry with large precious gems" , "A cloak made of the pelt of some exotic animal" , 
"A flask that turns water into wine and vice versa" , "A large dog trained to protect them, but otherwise friendly" , "A small pouch that fits items several times its size" ,
"A tiny padded chair that grows and shrinks on command" , "A small enchanted brass crow that carries letters" , "A diamond with a strong magic aura that doesn't seem to do anything" ,
 "A ledger with the names of several people that owe them money"]

//5
let hairColor = ["Blonde" , "Brown" , "Red" , "Black" , "White" , "Bald"];

//5
let eyeColor = ["Blue" , "Brown" , "Green" , "Gold" , "Grey"];

//4
let skinColor = ["Pale" , "Fair" , "Tan" , "Black"];

//13
let physTraits = ["Large scar across chest" , "Freckles" , "Blind in one eye" , "Cleft lip" , "Missing a limb" , "Missing a tooth" ,
"Burn scars covering both arms" , "Has a lot of tattoos" , "Eyebrows are tattooed slightly too high with no actual eyebrows growing" ,
"Has a very large and distracting mole" , "Wears a beard that is noticably fake" , "Six fingers on one hand" , "Smells very flowery"];

//14
let persTraits = ["Always speaks with exaggerated arm motions" , "Speaks in the third person" , "Constantly fiddling with anything in reach" , "Doesn't make eye contact" , 
"Almost always speaks in a whisper" , "Has a gambling addiction" , "Never uses proper nouns" , "Believes in a pantheon of gods who control the universe through role-playing" , "Annoyed by small talk" , "Prone to foot-tapping" , "Has a fear of small animals" , "Likes to collect odd trinkets" , "Chews on things when stressed" , "Fascinated by birds"];

let events = ["Parents died in a house fire" , "Saw a dragon once" , "Was kidnapped by circus folk and spent most of his childhood caring for their elephant"]
 
function npcGen(){
    console.log("generating character");

    //clear output field before writing a new character
	$("#npcField").empty();
 
	let oSex = "";
    //gender determiner
	if($("#toggleSex").is(':checked')){
		console.log("getting gender");
		if($("#sex").val() == "random")
			oSex = sex[getRandom(0,2)];
		else
			oSex = $("#sex").val();
	}
    else
        oSex = sex[getRandom(0,2)];
    
    let oRace = "";
    //race determiner
	if($("#toggleRace").is(':checked')){
        console.log("getting race");
		if($("#race").val() == "random")
			oRace = race[getRandom(0,4)];
		else
			oRace = $("#race").val();
	}
    else
			oRace = race[getRandom(0,4)];  

	let name = "";
    //name handler
	if($("#name").is(':checked')){
		console.log("generating name");
		if(oSex == "Male"){
			//console.log("male name");
			if(oRace == "Human")
				$("#npcField").append("Name: " + humFName[getRandom(0,5)] + " " + humLName[getRandom(0,8)] + "\n");
			else if(oRace == "Elf")
				$("#npcField").append("Name: " + elfFName[getRandom(0,5)] + " " + elfLName[getRandom(0,8)] + "\n");
			else if(oRace == "Dwarf")
				$("#npcField").append("Name: " + dwaFName[getRandom(0,5)] + " " + dwaLNamePt1[getRandom(0,4)] + dwaLNamePt2[getRandom(0,4)] + "\n");
			else if(oRace == "Halfling")
				$("#npcField").append("Name: " + halFName[getRandom(0,5)] + " " + halLNamePt1[getRandom(0,4)] + halLNamePt2[getRandom(0,4)] + "\n");
		}
		else if(oSex == "Female"){
            //console.log("female name");
			if(oRace =="Human")
				$("#npcField").append("Name: " + humFName[getRandom(5,10)] + " " + humLName[getRandom(0,8)] + "\n");
			else if(oRace == "Elf")
				$("#npcField").append("Name: " + elfFName[getRandom(5,10)] + " " + elfLName[getRandom(0,8)] + "\n");
			else if(oRace == "Dwarf")
				$("#npcField").append("Name: " + dwaFName[getRandom(5,10)] + " " + dwaLNamePt1[getRandom(0,4)] + dwaLNamePt2[getRandom(0,4)] + "\n");
			else if(oRace == "Halfling")
				$("#npcField").append("Name: " + halFName[getRandom(5,10)] + " " + halLNamePt1[getRandom(0,4)] + halLNamePt2[getRandom(0,4)] + "\n");
		}
		else
			name = "Gender error"
	}
    
    //gender output handler
    if($("#toggleSex").is(':checked'))
        $("#npcField").append("Gender: " + oSex + "\n");
    //race output handler
    if($("#toggleRace").is(':checked'))
        $("#npcField").append("Race: " + oRace + "\n");
    
    let age = 0 , oAge = "" , aCategory = "";
    //age handler
	if($("#age").is(':checked')){
        console.log("generating age");
        if(oRace == "Human"){
            age = getRandom(15,91);
            if(age < 35){
                oAge = age + " (Adult)";
                aCategory = "adult";
            }
            else if(age < 53){
                oAge = age + " (Middle Aged)";
                aCategory = "middle"
            }
            else if(age < 70){
                oAge = age + " (Old)";
                aCategory = "old";
            }
            else{
                oAge = age + " (Venerable)";
                aCategory = "venerable";
            }
        }
        else if(oRace == "Elf"){
            age = getRandom(110,401)
            if(age < 175){
                oAge = age + " (Adult)";
                aCategory = "adult";
            }
            else if(age < 263){
                oAge = age + " (Middle Aged)";
                aCategory = "middle"
            }
            else if(age < 350){
                oAge = age + " (Old)";
                aCategory = "old";
            }
            else{
                oAge = age + " (Venerable)";
                aCategory = "venerable";
            }
        }
        else if(oRace == "Dwarf"){
            age = getRandom(40,301)
            if(age < 125){
                oAge = age + " (Adult)";
                aCategory = "adult";
            }
            else if(age < 188){
                oAge = age + " (Middle Aged)";
                aCategory = "middle"
            }
            else if(age < 250){
                oAge = age + " (Old)";
                aCategory = "old";
            }
            else{
                oAge = age + " (Venerable)";
                aCategory = "venerable";
            }
        }
        else if(oRace == "Halfling"){
            age = getRandom(20,151)
            if(age < 50){
                oAge = age + " (Adult)";
                aCategory = "adult";
            }
            else if(age < 75){
                oAge = age + " (Middle Aged)";
                aCategory = "middle"
            }
            else if(age < 100){
                oAge = age + " (Old)";
                aCategory = "old";
            }
            else{
                oAge = age + " (Venerable)";
                aCategory = "venerable";
            }
        }
        $("#npcField").append("Age: " + age + "\n");
    }
    
    let str = 0 , dex = 0 , con = 0 , int = 0 , wis = 0 , cha = 0;
    //ability score handler
    if($("#aScores").is(':checked')){
        str = getRandom(4,19);
        dex = getRandom(4,19);
        con = getRandom(4,19);
        int = getRandom(4,19);
        wis = getRandom(4,19);
        cha = getRandom(4,19);
        if(aCategory == "middle"){
            str--; dex--; con--; int++; wis++; cha++;
        }
        if(aCategory == "old"){
            str-=2; dex-=2; con-=2; int+=2; wis+=2; cha+=2;
        }
        if(aCategory == "venerable"){
            str-=3; dex-=3; con-=3; int+=3; wis+=3; cha+=3;
        }
        $("#npcField").append("Abiltity Scores:\nSTR:" + str + " DEX:" + dex + " CON:" + con + " INT:" + int + " WIS:" + wis + " CHA:" + cha + "\n");   
    }
    
    let item1 = "" , item2 = "" , item3 = "" , oWealth = "";
    //wealth and inventory handler
    if($("#toggleWealth").is(':checked')){
        console.log("getting wealth");
        if($("#wealth").val() == "random")
            oWealth = wealth[getRandom(0,3)];
        else
            oWealth = $("#wealth").val();
        console.log("generating inventory");
        if(oWealth == "Poor"){
            while(item1 == item2 || item1 == item3 || item2 == item3){
            item1 = lowItems[getRandom(0,10)];
            item2 = lowItems[getRandom(0,10)];
            item3 = lowItems[getRandom(0,10)];
            }
            $("#npcField").append("Wealth Outside Inventory: " + getRandom(10,101) + "gp\nInventory:\n" + item1 + "\n" + item2 + "\n" + item3 + "\n" + midItems[getRandom(0,10)] + "\n");
        }
        else if(oWealth == "Middle Class"){
            while(item1 == item2 || item1 == item3 || item2 == item3){
            item1 = midItems[getRandom(0,10)];
            item2 = midItems[getRandom(0,10)];
            item3 = midItems[getRandom(0,10)];
            }
            $("#npcField").append("Wealth Outside Inventory: " + getRandom(100,501) + "gp\nInventory:\n" + item1 + "\n" + lowItems[getRandom(0,10)] + "\n" + item2 + "\n" + item3 + "\n");
        }
        else if(oWealth == "Rich"){
            while(item1 == item2 || item1 == item3 || item2 == item3){
            item1 = highItem[getRandom(0,10)];
            item2 = highItem[getRandom(0,10)];
            item3 = highItem[getRandom(0,10)];
            }
            $("#npcField").append("Wealth Outside Inventory: " + getRandom(500,10001) + "gp\nInventory:\n" + item1 + "\n" + item2 + "\n" + lowItems[getRandom(0,10)] + "\n" + item3 + "\n" + midItems[getRandom(0,10)] + "\n");           
        }
    }
    
    let trait1 = "" , trait2 = "";
    //Physical traits handler
    if($("#physTraits").is(':checked')){
        console.log("generating physical traits")
        while(trait1 == trait2){
            trait1 = physTraits[getRandom(0,13)];
            trait2 = physTraits[getRandom(0,13)];
        }
          $("#npcField").append("Hair Color: " + hairColor[getRandom(0,5)] + "\nSkin Color: " + skinColor[getRandom(0,4)] + "\nEye Color: " + eyeColor[getRandom(0,5)] + "\nIdentifying Features:\n" + trait1 + "\n" + trait2 + "\n");
    }
    
    //Personality handler
     if($("#persTraits").is(':checked')){
         console.log("generating personality quirks");
         do{
            trait1 = persTraits[getRandom(0,14)];
            trait2 = persTraits[getRandom(0,14)];
         }while(trait1 == trait2);
         $("#npcField").append("Personality Quirks:\n" + trait1 + "\n" + trait2 + "\n");
     }
     
     let event1 = "" , event2 = "";
     //History handler
     if($("#history").is(':checked')){
         console.log("generating character history");
         do{
            event1 = events[getRandom(0,3)];
            event2 = events[getRandom(0,3)];
         }while(event1 == event2);
         $("#npcField").append("Memorable Events:\n" + event1 + "\n" + event2 + "\n");
     }
    console.log("character generated");
    console.log("-------------------");
}
