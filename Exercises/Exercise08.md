Exercise 8
==

Say you have this object:

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

1. Write a `for..in` loop, looping over each animal, to print out `X is a Y`, where `X` is the pet's name, and `Y` is the pet's species.
2. Let's say Oreo exhibited some cuteness by chasing his tail. We want to increment his `cutenessScore` by 5. How would you do that?

