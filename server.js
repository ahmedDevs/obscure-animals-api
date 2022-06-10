
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 

const species = {
    'spectral bat': {
        'scientific name': 'Vampyrum spectrum', 
        description: 'They are commonly named false vampires as they were believed to feed on blood. They are carnivores and they eat mice, small birds, and other bats. Unlike most bat species, Spectral Bats are monogamous.',
        'geographical origin': 'Mexico, Central America, South America', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Spectral_bat_photo.jpg',
        copyright: 'The image here, is from wikimedia. Under the creative commons license.'
    },  
    'velvet worm': {
        'scientific name': 'Onychophora', 
        description: 'Known to have been around for over 500 million years, Velvet Worms are a very intriguing species. They have small but complex brains and they exhibit social behavior. They often establish a pecking order and are ruled by the dominant female.',
        'geographical origin': 'Australia, New Zealand', 
        image: 'https://live.staticflickr.com/2410/2449050166_9bf000496e_b.jpg',
        copyright: 'The image here, is from flicker. Under the creative commons license.'    
    },
    'vampire squid': {
       'scientific name': 'Vampyroteuthis infernalis', 
       description: 'Little is known about the Vampire Squid, being a deep sea species. It is not a squid, despite its name. And unlike octopuses, it doesnt produce dark ink to disorient irs predetors. Instead, it produces bioluminescent material. They often go long periods of time without encountering the opposite sex, so female Vampire Squids store the male sperm long after their reproductive sessions.',
       'geographical origin': 'Deep ocean', 
       image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Image_from_page_230_of_%22The_Biological_bulletin%22.jpg',
       copyright: 'The image here, is from wikimedia. Under the creative commons license.'     
    },
    'tripod fish': {
        'scientific name': 'Bathypterois grallator',       
        description: 'Standing on the floor of the deep sea, with their long fins like tripods, this species is rarely sighted as they often lurk at the very bottom of the ocean.',
        'geographical origin': 'The oceans',
        image: 'https://live.staticflickr.com/3566/3604692131_12b5311a5c_b.jpg',
        copyright: 'The image here, is from flicker. Under the creative commons license.'       
    },
        'penis snake': {
        'scientific name': 'Atretochoana eiselti',    
        description: 'Named after the human penis owing to its resemblance. The penis snake was first discovered in Brazil. Around 32 inches long, not much is known about this snake besides the fact that they feed on small fish and worms.',
        'geographical origin': 'Brazillian Amazon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Atretochoana_eiselti.jpg',
        copyright: 'The image here, is from wikimedia. Under the creative commons license.'       
    },
    'naked mole rat': {
        'scientific name': 'Heterocephalus glaber',
        description: 'Known for its longevity and ability to withstand oxygen deprivation (about 18 minutes), the Naked mole-rate is a subject of research studies. As it ages, the mortality rate remains the same through out its life span. Unlike most mammals, as they age their mortality rate increases progressively. Research shows that their DNA repairs itself actively to avoid accumulation of damage.',
        'geographical origin': 'East Africa',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nacktmull.jpg',
        copyright: 'The image here, is from wikimedia. Under the creative commons license.',     
    },
    'Invalid query, try another one':{

    }
}





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api', (req, res) => {
    res.json(species);
})

app.get('/api/:name', (req, res) => {
    const animalName = req.params.name.toLowerCase();
    if(species[animalName]) {
        res.json(species[animalName]);
    }  else {
        res.json(species['Invalid query, try another one']);
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
