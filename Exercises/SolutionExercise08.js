// Define the object.
var pets = {
   "Chica" : {
        "species" : "dog",
        "name" : "Chica",
        "color" : "tan",
        "sound" : {
            "name" : "bark",
            "duration" : "100 ms",
            "frequency" : "when visitors knock"
        },
        "cutenessScore" : 72
    },
    "Avery" : {
        "species" : "dog",
        "name" : "Avery",
        "color" : "black",
        "sound" : {
            "name" : "bark",
            "duration" : "100 ms",
            "frequency" : "when big dogs sniff"
        },
"cutenessScore" : 74
    },
    "Oreo" : {
        "species" : "cat",
        "name" : "Oreo",
        "color" : "black and white",
        "sound" : {
            "name" : "meow",
            "duration" : "1 second",
            "frequency" : "whenever hungry"
        },
        "cutenessScore" : 61
    },
    "Chestnut" : {
        "species" : "guinea pig",
	"name" : "Chestnut",
        "hobbies" : ["squeaking", "popcorning", "eating"],
        "sound" : {
            "name" : "squeak",
            "duration" : "500 ms",
            "frequency" : "whenever hungry"
        },
        "cutenessScore" : 68
    }
};

// Part 1: Print out the pets.
for (var key in pets) {
    // We should loop for each key. So, the first time through the loop,
    // key will be "Chica", then "Avery", and so on.
    // pets[key] gives us the pet object associated with the pet.
    // You need to use square brackets here rather than object notation,
    // because we're getting the property name dynamically.
    thePet = pets[key];
    console.log(thePet.name + " is a " + thePet.species);
}

// Part 2: Add 5 to Oreo's cutenessScore:
pets.Oreo.cutenessScore += 5;
pets.Oreo
// Object {species: "cat", name: "Oreo", color: "black and white", sound: Object, cutenessScore: 66}
