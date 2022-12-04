let movies = [{
    "Title": "The Shawshank Redemption",
    "Description": "A live-action prequel feature film following a young Cruella de Vil.",
    "Genre": {
        "Name": "Drama",
        "Description": "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre,[2] such as soap opera (operatic drama), police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy)."
    },
    "Director": {
        "Name": "Frank Darabont",
        "Bio": "Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution.",
        "Birth": {
            "$date": {
                "$numberLong": "-344822400000"
            }
        }
    },
    "ImagePath": "https://m.mediamazon.com/images/M/MV5BNzUzNzI0MjAxMl5BMl5BanBnXkFtZTgwMjQ2MjEyMDE@._V1_UX100_CR0,0,100,100_AL_.jpg ",
    "Featured": true
}, {
    "Title": "The Godfather",
    "Description": "The Godfather follows Vito Corleone, Don of the Corleone family, as he passes the mantel to his unwilling son, Michael.",
    "Genre": {
        "Name": "Crime",
        "Description": "Crime fiction, detective story, murder mystery, mystery novel, and police novel are terms used to describe narratives that centre on criminal acts and especially on the investigation, either by an amateur or a professional detective, of a serious crime, generally a murder."
    },
    "Director": {
        "Name": "Francis Ford Coppola",
        "Bio": "Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family. His father, Carmine Coppola, was a composer and musician. ",
        "Birth": {
            "$date": {
                "$numberLong": "-970012800000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg",
    "Featured": true
}, {
    "Title": "Spirited Away",
    "Description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "Genre": {
        "Name": "Animation",
        "Description": "Animated Films are ones in which individual drawings, paintings, or illustrations are photographed frame by frame (stop-frame cinematography)."
    },
    "Director": {
        "Name": "Hayao Miyazaki",
        "Bio": "Update: Hayao Miyazaki is one of Japan's greatest animation directors. The entertaining plots, compelling characters, and breathtaking animation in his films have earned him international renown from critics as well as public recognition within Japan",
        "Birth": {
            "$date": {
                "$numberLong": "-1104192000000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "Featured": true
}, {
    "Title": "Psycho",
    "Description": "A Phoenix secretary embezzles 40,000 dollars from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    "Genre": {
        "Name": "Horror",
        "Description": "Horror is a genre of speculative fiction which is intended to frighten, scare, or disgust.Literary historian J. A. Cuddon defined the horror story as a piece of fiction in prose of variable length... which shocks, or even frightens the reader, or perhaps induces a feeling of repulsion or loathing"
    },
    "Director": {
        "Name": "Alfred Hitchcock",
        "Bio": "Alfred Joseph Hitchcock was born in Leytonstone, Essex, England. He was the son of Emma Jane 'Whelan; 1863 – 1942' and East End greengrocer William Hitchcock '1862 – 1914'. His parents were both of half English and half Irish ancestry.",
        "Birth": {
            "$date": {
                "$numberLong": "-2221171200000"
            }
        },
        "Death": {
            "$date": {
                "$numberLong": "325814400000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "Featured": true
}, {
    "Title": "The Silence of the Lambs ",
    "Description": "Update: A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "Genre": {
        "Name": "Thriller",
        "Description": "Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety"
    },
    "Director": {
        "Name": "Jonathan Demme",
        "Bio": "Jonathan Demme was born on February 22, 1944 in Baldwin, Long Island, New York, USA as Robert Jonathan Demme.",
        "Birth": {
            "$date": {
                "$numberLong": "-816048000000"
            }
        },
        "Death": {
            "$date": {
                "$numberLong": "1493164800000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "Featured": true
}, {
    "Title": "The Lord of the Rings: The Return of the King",
    "Description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "Genre": {
        "Name": "Fantasy",
        "Description": "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore."
    },
    "Director": {
        "Name": "Peter Jackson",
        "Bio": "Sir Peter Jackson made history with The Lord of the Rings trilogy, becoming the first person to direct three major feature films simultaneously. The Fellowship of the Ring, The Two Towers and The Return of the King were nominated for and collected a slew of awards from around the globe, with The Return of the King receiving his most impressive collection of awards.",
        "Birth": {
            "$date": {
                "$numberLong": "-257817600000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg ",
    "Featured": true
}, {
    "Title": "The Hire ",
    "Description": "Recompilation of the all short films of from the series of short films produced by BMW The Hire, starring Clive Owen as the Driver.",
    "Genre": {
        "Name": "Action",
        "Description": "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero."
    },
    "Director": {
        "Name": "Joe Carnahan",
        "Bio": "Joe Carnahan is an American film director and screenwriter. He was born in Michigan in 1969, and was raised in California. He attended Fairfield High School in Fairfield, California. He graduated in 1987, at the age of 18.",
        "Birth": {
            "$date": {
                "$numberLong": "-20476800000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BMDZhZjExNTMtZjg4NS00ZjQxLThlZDktOWY5MDhkYzlhNmMyXkEyXkFqcGdeQXVyNTMyODM3MTg@._V1_UX67_CR0,0,67,98_AL_.jpg ",
    "Featured": false
}, {
    "Title": "Dracula",
    "Description": "The centuries old vampire Count Dracula comes to England to seduce his barrister Jonathan Harker's fiancée Mina Murray and inflict havoc in the foreign land.",
    "Genre": {
        "Name": "Drama",
        "Description": "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera (operatic drama), police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy). "
    },
    "Director": {
        "Name": "Francis Ford Coppola",
        "Bio": "Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family. His father, Carmine Coppola, was a composer and musician.",
        "Birth": {
            "$date": {
                "$numberLong": "-970012800000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BNjcyMDZlMTktYTIxOC00ZWFhLWJkYzgtNWNiYjAwYTFkNjIyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX67_CR0,0,67,98_AL_.jpg ",
    "Featured": true
}, {
    "Title": "Lifeboat",
    "Description": "Several survivors of a torpedoed merchant ship in World War II find themselves in the same lifeboat with one of the crew members of the U-boat that sank their ship.",
    "Genre": {
        "Name": "Drama",
        "Description": "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera (operatic drama), police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy). "
    },
    "Director": {
        "Name": "Alfred Hitchcock",
        "Bio": "Alfred Joseph Hitchcock was born in Leytonstone, Essex, England. He was the son of Emma Jane 'Whelan; 1863 – 1942' and East End greengrocer William Hitchcock '1862 – 1914'. His parents were both of half English and half Irish ancestry.",
        "Birth": {
            "$date": {
                "$numberLong": "-2221171200000"
            }
        },
        "Death": {
            "$date": {
                "$numberLong": "325814400000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BZTBmMjUyMjItYTM4ZS00MjAwLWEyOGYtYjMyZTUxN2I3OTMxXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg ",
    "Featured": true
}, {
    "Title": "Grind",
    "Description": "GRIND is a musical story exploring a damaged man's search for a connection in an interconnected world.",
    "Genre": {
        "Name": "Drama",
        "Description": "Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre, such as soap opera (operatic drama), police crime drama, political drama, legal drama, historical drama, domestic drama, teen drama, and comedy-drama (dramedy)."
    },
    "Director": {
        "Name": "Zachary Halley",
        "Bio": "Zachary Halley is known for his work on Drunk History (2013), Still the King (2016) and Public Morals (2015)."
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BMjI5NDgxODYyNV5BMl5BanBnXkFtZTgwNjc4NTQ2NTE@._V1_UX67_CR0,0,67,98_AL_.jpg ",
    "Featured": false
}, {
    "Title": "The Agronomist",
    "Description": "The true story of Jean Dominique, a Haitian radio journalist and human rights activist.",
    "Genre": {
        "Name": "Documentary",
        "Description": "A documentary film or documentary is a non-fictional motion-picture intended to document reality, primarily for the purposes of instruction, education, or maintaining a historical record"
    },
    "Director": {
        "Name": "Jonathan Demme",
        "Bio": "Jonathan Demme was born on February 22, 1944 in Baldwin, Long Island, New York, USA as Robert Jonathan Demme.",
        "Birth": {
            "$date": {
                "$numberLong": "-816048000000"
            }
        },
        "Death": {
            "$date": {
                "$numberLong": "1493164800000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BMjA5NjUwNzU2N15BMl5BanBnXkFtZTcwMDE4NDUyMQ@@._V1_UY98_CR0,0,67,98_AL_.jpg ",
    "Featured": true
}, {
    "Title": "The Dark Knight",
    "Description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice",
    "Genre": {
        "Name": "Thriller",
        "Description": "Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety"
    },
    "Director": {
        "Name": "Christopher Nolan ",
        "Bio": "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15. years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
        "Birth": {
            "$date": {
                "$numberLong": "18144000000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg ",
    "Featured": true
}, {
    "Title": "The Last Duel",
    "Description": "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire by challenging him to a duel.",
    "Genre": {
        "Name": "Action",
        "Description": "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases. Action films tend to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero."
    },
    "Director": {
        "Name": "Ridley Scott",
        "Bio": "Described by film producer Michael Deeley as 'the very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham).",
        "Birth": {
            "$date": {
                "$numberLong": "-1012608000000"
            }
        }
    },
    "ImagePath": "https://m.media-amazon.com/images/M/MV5BZGExZTUzYWQtYWJjZi00OTI4LTk4OGYtNTA2YzcwMmNiZTMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX67_CR0,0,67,98_AL_.jpg ",
    "Featured": true
}]
let users = [
    {
        id: 1,
        name: "nirlep",
        favoriteMovies: []
    },
    {
        id: 2,
        name: "neil",
        favoriteMovies: []
    }
]
module.exports = { movies, users }