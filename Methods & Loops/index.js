/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/
import { contactsArr } from './contactsData.js'

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

function renderContact(contactObj) {
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    
    const { name, email, phone } = contactObj
    contactCard.innerHTML = `<p>${name}</p>
                            <p>${email}</p>
                            <p>${phone}</p>`
    contactDisplay.appendChild(contactCard)
}

patternSearchSubmit.addEventListener("click", () => {
    if (patternSearchInput.value.length === 0) {
        return
    }
    const regex = new RegExp(patternSearchInput.value, 'gi')
    const matchingContacts = contactsArr.filter(contact => regex.test(contact.name))
    contactDisplay.innerHTML = ""
    matchingContacts.forEach(contact => renderContact(contact))
})

/*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
