import {
    writable,

} from 'svelte/store';


let resume = writable({
    intro: "I'm a UI/UX Designer & Frontend Developer from London, UK. I aim to make a difference through my creative solution.",
    about: "Worked with project teams to create user-friendly and appealing application interfaces and websites for users. Met with project manager, business analyst and architect right from beginning of project, creating rough mock-ups that were refined and extended over many iterations. Adjustments to mock-ups as necessary to address problems encountered.",
    personal_data: {
        name: 'John',
        address: '1234 House, Large Street, Small Road, Nice City, Poor County',
        phone: ' + 123 456 789 456',
        interest: ' freelance, full-time',
        date_of_birt: 'September 9, 1982',
        email: 'youremail@bond.com',
        skype: " James.Bond"
    },
    skills: [{
            id: 1,
            name: "Wordpress",
            knowledge: 0.9
        }, {
            id: 2,
            name: 'Photoshop',
            knowledge: 0.65
        },
        {
            id: 3,
            name: 'HTML&CSS',
            knowledge: 0.95
        },
        {
            id: 4,
            name: 'Javascript',
            knowledge: 0.4
        },

    ],

    experience: {
        title: " Some Title",
        description: " Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },

    education: {
        university: "Fatih University",
        date: {
            from: 2004,
            to: 2009
        },
        description: " Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

    },

    services: [{
        name: " WEB DESIGN",
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
    }, {
        name: "Backend ",
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
    }, {
        name: "CMS",
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
    }, {
        name: "Web-store",
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
    }, {
        name: "Booking-system",
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
    }, {
        name: "Api",
        description: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet'
    }, ]


})

export default resume

/**{
            id: 2,
            name: 'Photoshop',
            knowledge: 0.65
        },
        {
            id: 3,
            name: 'HTML&CSS',
            knowledge: 0.95
        },
        {
            id: 4,
            name: 'Javascript',
            knowledge: 0.4
        },
 */