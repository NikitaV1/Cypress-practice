export const visitRozetka = () =>  cy.visit('https://rozetka.com.ua/')
export const openUserMenu = () => { cy.get('.side-menu__toggler > svg').click(); cy.get(':nth-child(2) > .menu-main__link > .menu-main__link-title').click() }
export const checkElementText = (element, text) => cy.get(element).should('contain.text', text)
