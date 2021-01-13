const projectsData = [
    {
        "title": "Ambient JI Drone Generator",
        "description": "Ambient just intonation music in the browser, based upon a generative process.",
        "appURL": "https://skarukas.github.io/web-audio-projects/random-harmonics/",
        "repo": "https://github.com/skarukas/web-audio-projects/tree/master/random-harmonics"

    },
    {
        "title": "JShorthand",
        "description": "JavaScript syntax mini-library. Perform a set of object mutations or function calls in only one statement.",
        "repo": "https://github.com/skarukas/springs",
        "image": "jshorthand.jpg"
    },
    {
        "title": "Interactive Graph Builder",
        "description": "A graph (network) builder and framework for displaying and editing graphical (edge, vertex) data.",
        "appURL": "https://skarukas.github.io/graph-gui/index.html",
        "repo": "https://github.com/skarukas/graph-gui",
        "image": "graph-gui.png"
    },
    {
        "title": "tune",
        "description": "An object-oriented TypeScript library for dynamic musical tuning of pitch collections.",
        "repo": "https://github.com/skarukas/tune",
        "image": "tune.png"
    },
    {
        "title": "xen",
        "description": "A high-level, interpreted language for analyzing and operating upon musical pitch structures within the context of xenharmonic microtonal theory.",
        "appURL": "https://skarukas.github.io/xen/",
        "repo": "https://github.com/skarukas/xen",
        "image": "xen.png"
    },
    {
        "title": "springs",
        "description": "A \"piano roll\"-style music editor for voice-independent tuning and MIDI editing within the browser.",
        "appURL": "https://skarukas.github.io/springs/",
        "repo": "https://github.com/skarukas/springs",
        "image": "springs.png"
    },
    {
        "title": "Monophonic Audio Segmentation and Resynthesis",
        "description": "Use a recording of a solo instrument to synthesize new audio through automated pitch recognition and audio splicing. Final Project for B557 Audio Processing.",
        "repo": "https://github.com/skarukas/resynthesis",
        "image": "segmentation.png"
    }
]

/* Replace image urls with urls relative to /public folder */
for (let work of projectsData) {
    work.image = "img/" + (work.image || "default-project.jpg")
}

export default projectsData