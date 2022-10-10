const Contacts = [
    {
        name: 'Katie Parry',
        phoneNumber: '+1 (437)124-1345',
        email: 'katie@live.com',
        expertise: 'Expertise in Web Development',
        skills: [
            'CSS',
            'HTML',
            'Bootstrap',
            'JavaScript',
            'Node js',
            'SASS',
            'Typescript'
        ],
        imageSrc: 'images/katie_seinfeld.jpeg'
    },
    {
        name: 'John Doe',
        phoneNumber: '+1 (647)124-1345',
        email: 'john@live.com',
        expertise: 'Expertise in iOS Development',
        skills: [
            'Swift',
            'XCode',
            'MacOS',
            'SwiftUI'
        ],
        imageSrc: 'images/john_doe.jpeg'
    },
    {
        name: 'Chris Smith',
        phoneNumber: '+1 (647)124-1345',
        email: 'chris@gmail.com',
        expertise: 'Expertise in Android Development',
        skills: [
            'React native',
            'Android studio',
            'MacOS',
            'Jetpack Compose',
            'Material design'
        ],
        imageSrc: 'images/chris_smith.jpeg'
    }
]

const searchContacts = (keyword) =>
    Contacts.filter(({name, phoneNumber, email, expertise, skills}) =>
        searchName(name, keyword) ||
        searchPhoneNumber(phoneNumber, keyword) ||
        searchEmail(email, keyword) ||
        searchExpertise(expertise, keyword) ||
        searchSkills(skills, keyword)
    )

const searchName = (name, keyword) => {
    return containsKeyword(name, keyword)
}

const searchPhoneNumber = (phoneNumber, keyword) =>
    containsKeyword(phoneNumber, keyword)

const searchEmail = (email, keyword) =>
    containsKeyword(email, keyword)

const searchExpertise = (expertise, keyword) => 
    containsKeyword(expertise, keyword)

const searchSkills = (skills, keyword) =>
    skills.some((skill) => containsKeyword(skill, keyword))

const containsKeyword = (string, keyword) =>
    string.includes(keyword)

export { Contacts, searchContacts }
