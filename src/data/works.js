/* *** TEMPLATE ***
    {
        "title": "",
        "year": "",
        "instrumentationShort": "",
        "instrumentationLong": "",
        "description": "",
        "tags": [],
        "duration": "",
        "image": "",
        "purchase": {
            "publisher": "",
            "link": ""
        },
        "audio": "",
        "video": ""
    }
*/

const worksData = [
    /* {
        "id": "test",
        "title": "test item",
        "year": "2020",
        "instrumentationShort": "marimba",
        "instrumentationLong": "5.0 octave marimba",
        "description": "",

        "duration": "7 minutes",

        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 0.01
        },
        "audio": ""

    }, */
    {
        "id": "redshift",
        "title": "Redshift",
        "year": "2020",
        "instrumentationShort": "marimba",
        "instrumentationLong": "5.0 octave marimba",
        "description": `<em>Redshift</em> is a "moto perpetuo" style marimba solo in which flowing passages and sparkling melodies give way to deviations, progressively shifting the piece into new soundworlds. Metric modulations and added/subtracted beats keep the piece always moving forward in unexpected ways.</br></br>This piece was written for a consortium commission led by Josh Fulford, which included percussionists Robert Clayson, Zachary Cook, Joe Kulick, Cameron Leach, Chin-Li Sophia Lo, Paul Millette, and Russell Wharton.`,
        "tags": ["solo", "fast", "difficult"],
        "duration": "7 minutes",
        "image": "redshift.jpg",
        "purchase": {
          "publisher": "Tapspace",
          "link": "https://www.tapspace.com/marimba-xylophone/redshift"
        },
        "audio": "redshift.mp3",
        "video": "https://www.youtube.com/watch?v=WbUJQERrcl4"

    },
    {
        "id": "blue-gray",
        "title": "blue-gray",
        "year": "2018",
        "instrumentationShort": "marimba",
        "instrumentationLong": "5.0 octave marimba",
        "tags": ["solo", "slow", "quiet", "soft"],
        "description": "<em>blue-gray</em> is a delicate and expressive piece for marimba with melodic layers that weave in and out of each other, giving the performer many opportunities to shape the music. Moments of extremely soft dynamics create a fragile stillness that is intensified by large leaps in register, to be performed very quickly and softly. It received the Honorable Mention in the 2019 Percussive Arts Society Composition Contest.",
        "duration": "5 1/2 minutes",
        "image": "blue-gray.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 10
        },
        "audio": "blue-gray.mp3",
        "video": "https://www.youtube.com/watch?v=D1phB4DTI94"
    },
    {
        "id": "deep-beneath",
        "title": "Deep Beneath the Ice",
        "year": "2015",
        "instrumentationShort": "marimba",
        "instrumentationLong": "5.0 octave marimba",
        "tags": ["solo", "medium"],
        "description": "<em>Deep Beneath the Ice</em> was written in January 2015 at Interlochen Arts Academy. In the warmer months of the year, I would sit by Green Lake on campus and enjoy being so close to nature. In winter, the lake would freeze over, sealing all life beneath a layer of ice. Similarly, the far-below freezing temperatures would keep all of the students inside. While trapped inside a practice room, I composed this piece as a reminder that even in isolation, life exists as active as ever.",
        "duration": "6 minutes",
        "image": "deep-beneath-the-ice.jpg",
        "purchase": {
            "publisher": "C. Alan",
            "link": "http://c-alanpublications.com/deep-beneath-the-ice/"
        },
        "audio": "deep-beneath-the-ice.mp3",
        "video": "https://www.youtube.com/watch?v=fn4rYp5tVnA"
    },
    {
        "id": "poeme",
        "title": "Poeme in F-sharp Major (Scriabin, arr. Karukas)",
        "year": "2018",
        "instrumentationShort": "marimba",
        "instrumentationLong": "5.0 octave marimba",
        "tags": ["solo", "difficult", "arrangement", "expressive"],
        "description": "<em>Poème No. 1</em> is the first piece in Alexander Scriabin’s Op. 32 <em>Deux Poemes</em>, written in 1903. Though it was originally composed for piano, Stephen Karukas’ arrangement for solo marimba brings the piece’s intricate, overlapping melodies to the world of percussion. This piece’s gentle late romantic style allows for a heightened degree of freedom and personal expression, a side of marimba performance that is not often taken advantage of. <em>Poeme No. 1</em> is a perfect piece for anyone looking to add a moment of intimacy and repose to their recital programs.",
        "duration": "4 minutes",
        "image": "poeme.png",
        "purchase": {
            "publisher": "Tapspace",
            "link": "https://www.tapspace.com/marimba-xylophone/po%C3%A8me-no.-1-scriabin"
        },
        "audio": "poeme.mp3",
        "video": "https://www.youtube.com/watch?v=HZonuuFCC5Y"
    },
    {
        "id": "etude-in-c",
        "title": "Etude in C (for the right hand alone)",
        "year": "2016",
        "instrumentationShort": "marimba",
        "instrumentationLong": "4.0 octave marimba",
        "description": "<em>Etude in C</em> is a short and sweet—but virtuosic—marimba etude for the right hand. In both performance and composition, this piece attempts to challenge the expressive limits created by a set of musical constraints, namely a small range, simple diatonic harmony, and the use of only one hand (two mallets) in performance.",
        "duration": "2 minutes",
        "image": "etude-in-c.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 5
        },
        "audio": "etude-in-c.mp3",
        "video": "https://www.youtube.com/watch?v=OptgBA6Zrg8"
    },
    {
        "id": "two-epilogues",
        "title": "Two Epilogues",
        "year": "2018",
        "instrumentationShort": "vibraphone and glockenspiel solo",
        "instrumentationLong": "vibraphone, glockenspiel",
        "description": "<em>I. Little Souls</em> is a solo glockenspiel piece that at times has up to four disparate voices, characterized by differences in timbre, range, and articulation. The left hand plays a steady chimelike pattern as the upper voices play floating melodies that only occasionally unify.\n<em>II. Breathing</em> is a meditative solo vibraphone piece in which all notes ring freely between rolled chords, creating an ocean of steadily evolving harmony.",
        "duration": "I. 3 1/2 minutes\nII. 5 1/2 minutes",
        "image": "two-epilogues.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 10
        },
        "audio": "two-epilogues.mp3",
        "video": "https://www.youtube.com/watch?v=93tGL5wUTzg&list=PLofodEqi3NSZQSs8buH0-RvAtxGM_iYVM&index=1"
    },
    {
        "id": "elements",
        "title": "Elements",
        "year": "2018",
        "instrumentationShort": "multipercussion solo",
        "instrumentationLong": "3 metals, 4 wood, 4 drums, low drum w/ foot, cymbal w/ foot, staccato sound w/ foot",
        "description": "<em>Elements</em> is an exciting multiple percussion solo for assorted metal, wood, and skin. Quick, turbulent passages on the drums are juxtaposed with mathematically-structured sections whose polyrhythmic layers give the illusion of multiple simultaneous tempi. Metal and wood instruments tick out displaced rhythmic groupings like broken metronomes.",
        "duration": "7 minutes",
        "image": "elements.png",
        "purchase": {
            "publisher": "Pocket Publications",
            "link": "https://www.pocketpublications.com/product-page/elements-karukas-multi-perc-solo"
        },
        "audio": "elements.mp3",
        "video": "https://www.youtube.com/watch?v=-PkxxZL5Hqo"
    },
    {
        "id": "to-live-and-die",
        "title": "To Live and Die in the Wild",
        "year": "2018",
        "instrumentationShort": "multipercussion solo",
        "instrumentationLong": "kick drum, bass drum, 2 toms, snare drum, bongos, brake drum, large sizzle cymbal",
        "description": "Designed to evoke images of primitive life, <em>To Live and Die in the Wild</em> utilizes a range of sounds, including intense ritual drumming, intricate polyrhythmic cells, and weeping, howling effects made possible by fading between different drums and rolling on the very edge of the bass drum. Each section of the piece represents a different terror that could mean life or death for a creature without shelter.",
        "duration": "4 to 10 minutes (movements are modular)",
        "image": "to-live-and-die.jpg",
        "purchase": {
            "publisher": "C. Alan",
            "link": "http://c-alanpublications.com/to-live-and-die-in-the-wild/"
        },
        "audio": "to-live-and-die.mp3",
        "video": "https://www.youtube.com/watch?v=CDBwz0PEoSY"
    },
    {
        "id": "bad-number",
        "title": "Bad Number",
        "year": "2019",
        "instrumentationShort": "timpani solo",
        "instrumentationLong": "4 timpani (32\", 29\", 26\", 23\")",

        "duration": "7 minutes",
        "image": "bad-number.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 10
        }


    },
    {
        "id": "optimal-damage",
        "title": "Optimal Damage",
        "year": "2021",
        "instrumentationShort": "percussion quartet",
        "instrumentationLong": "bongos, med. wood block, small cym. low woodblock, snare, kick drum, crash, 3 toms, hi-hat",
        "description": `I wrote "Optimal Damage" for the percussion ensemble at Concord High School (Indiana). At the time, I had just graduated from college, and I decided to take a step back in time to pay homage to the kinds of music that first inspired me to become a percussionist when I was in high school.

        Some things that came to mind were the snare breaks that I would play in the marching band show or hear from the prominent indoor drumlines of the time, as well as the groovy, unpitched percussion ensemble music I was exposed to. Inspired by this memory, "Optimal Damage" includes a groovy backbone over which solo/duo opportunities take place, including wood block “snare breaks” and polyrhythmic illusions that create a fun challenge for both students and seasoned players.
        
        Optimal Damage was also written with accessibility in mind. The instrumentation is simple enough to be available to virtually any music program or freelance percussionist, and it is small enough to fit in a car.`,

        "duration": "6 minutes",
        "image": "optimal-damage.jpg",
        "purchase": {
            "publisher": "C. Alan",
            "link": "https://c-alanpublications.com/optimal-damage/"
        },
        "audio": "optimal-damage.mp3",
        "video": "https://www.youtube.com/watch?v=cv6uBLnkAw4"
    },
    {
        "id": "presence",
        "title": "Presence",
        "year": "2016",
        "instrumentationShort": "percussion trio",
        "instrumentationLong": "5.0 octave marimba (shared), vibraphone, bass drum, crotales (2 octaves), wind chimes, 32\" & 26\" timpani, 2 bows",

        "duration": "11 minutes",
        "image": "presence.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 15
        },
        "audio": "presence.mp3",
        "video": "https://www.youtube.com/watch?v=-i2Il28IrS0"
    },
    {
        "id": "i-am-electric",
        "title": "I am [electric]",
        "year": "2016",
        "instrumentationShort": "marimba quartet",
        "instrumentationLong": "4.0 octave marimba, 4.0 octave marimba, 5.0 octave marimba (shared)",

        "duration": "6 minutes",
        "image": "i-am-electric.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 12,
            "note": "This is the version for marimba quartet."
        },
        "audio": "i-am-electric.mp3"

    },
    {
        "id": "harmonic-motion",
        "title": "Harmonic Motion in Fluid Space",
        "year": "2019",
        "instrumentationShort": "string quartet",
        "instrumentationLong": "2 violins, viola, cello",

        "duration": "11 minutes",
        "image": "harmonic-motion.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 15
        },
        "audio": "harmonic-motion.mp3",
        "video": "https://www.youtube.com/watch?v=KOaqDNza7RM&list=PLofodEqi3NSbQ6xc-AUBORqkAZsikB57X&index=1"
    },
    {
        "id": "it-flows",
        "title": "It flows",
        "year": "2017",
        "instrumentationShort": "saxophone and marimba",
        "instrumentationLong": "alto saxophone, 5.0 octave marimba",
        "description": "Expressively textural in one moment and relentlessly groovy in the next, <em>It flows</em> is a challenging and varied work for marimba and alto saxophone that includes polyrhythmic textures, exciting hocketed lines, and soaring saxophone melodies. The constantly evolving harmony and texture keeps the piece fun for both performers and audience.",
        "duration": "9 minutes",
        "image": "it-flows.jpg",
        "purchase": {
            "publisher": "C. Alan",
            "link": "http://c-alanpublications.com/it-flows/"
        },
        "audio": "it-flows.mp3",
        "video": "https://www.youtube.com/watch?v=yiPUJJI4le4"
    },
    {
        "id": "third-rail",
        "title": "Third Rail / Revelation",
        "year": "2021",
        "instrumentationShort": "bass clarinet, bari sax, marimba, and piano",
        "instrumentationLong": "bass clarinet, bari sax, marimba (5.0 octave), piano",
        "description": `I wrote "Third Rail / Revelation" when living in Seattle in the summer of 2021. My primary interaction with most of the city was through public transit. Through this lens, the city to me was a symbol of freedom, but consequently of fear, whether from the subway racing by the platform at 50 miles per hour or from the very real terror, anxiety, or even ecstasy felt by another passenger whose violent shouting at an apparition brought their imagined reality to life. When writing this piece, the images that stuck in my mind were of the mechanical artifacts from an industrial age that persist into the present in our cities, as well as the ways in which rapidly accelerating technologies bring new anxieties into our lives.`,

        "duration": "7 minutes",
        "image": "third-rail.jpg",
        "purchase": "contact",
        "audio": "third-rail.mp3"

    },
    {
      "id": "third-rail-electronics",
      "title": "Third Rail / Revelation",
      "year": "2022",
      "instrumentationShort": "bari sax, marimba, and fixed media",
      "instrumentationLong": "baritone sax, marimba (5.0 octave), fixed media",
      "description": `I wrote "Third Rail / Revelation" when living in Seattle in the summer of 2021. My primary interaction with most of the city was through public transit. Through this lens, the city to me was a symbol of freedom, but consequently of fear, whether from the subway racing by the platform at 50 miles per hour or from the very real terror, anxiety, or even ecstasy felt by another passenger whose violent shouting at an apparition brought their imagined reality to life. When writing this piece, the images that stuck in my mind were of the mechanical artifacts from an industrial age that persist into the present in our cities, as well as the ways in which rapidly accelerating technologies bring new anxieties into our lives.
 
      This piece was originally written for marimba, bari sax, piano, and bass clarinet. In the duet version with electronics, I used prepared piano samples and noisy synths to reimagine these parts as mechanical sonic objects, inspired by the <a href="https://www.youtube.com/watch?v=ibInHhy5Jmw" target="_blank">gritty experimental techno</a> that had served as a soundtrack to the bus rides I took between the International District and downtown Seattle.`,
 
      "duration": "7 minutes",
      "image": "third-rail-photo.jpg",
      "purchase": "contact",
      "audio": "third-rail-with-electronics.mp3"

  },
    /* {
        "id": "material",
        "title": "Material",
        "year": "2021",
        "instrumentationShort": "trumpet and percussion quartet",
        "instrumentationLong": "trumpet and percussion quartet",
        "description": "Description Coming Soon",

        "duration": "7 minutes",
        "image": "material.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 20
        },


    }, */
    {
        "id": "three-shades-violin",
        "title": "Three Shades of Sun",
        "year": "2016",
        "instrumentationShort": "solo violin",
        "instrumentationLong": "violin",

        "duration": "5 minutes",
        "image": "three-shades-of-sun.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 10,
            "note": "This is the version for solo violin."
        },
        "audio": "three-shades-of-sun.mp3",
        "video": "https://www.youtube.com/watch?v=pRJTJabFrXw"
    },
    {
        "id": "three-shades-viola",
        "title": "Three Shades of Sun",
        "year": "2016",
        "instrumentationShort": "solo viola",
        "instrumentationLong": "viola",

        "duration": "5 minutes",
        "image": "three-shades-of-sun.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 10,
            "note": "This is the version for solo viola."
        },
        "audio": "three-shades-of-sun.mp3",
        "video": "https://www.youtube.com/watch?v=pRJTJabFrXw"
    },
    {
        "id": "man-against-himself",
        "title": "Man Against Himself",
        "year": "2017",
        "instrumentationShort": "solo piano",
        "instrumentationLong": "piano",
        
        "duration": "10 minutes",
        "image": "man-against-himself.jpg",
        "purchase": {
            "publisher": "Stephen Karukas",
            "price": 10
        },
        "audio": "man-against-himself.mp3",
        "video": "https://www.youtube.com/watch?v=9_bwdNdev0M"
    },
    {
        "id": "in-a-breath",
        "title": "In a Breath, Ending",
        "year": "2018",
        "instrumentationShort": "orchestra",
        "instrumentationLong": "3d1, 2+1, 3, 2+cbsn - 4, 3, 2+bs, 1, timp+3perc, hp, str",

        "duration": "9 minutes",
        "image": "in-a-breath.png",
        "purchase": "contact",
        "audio": "in-a-breath.mp3", 
        "video": "https://www.youtube.com/watch?v=8FYA5os0CYs"
    }
]

export default worksData