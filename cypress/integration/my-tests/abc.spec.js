import {visitRozetka, openUserMenu, checkElementText} from '../my-tests/page-objects/example'

describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        visitRozetka()
        openUserMenu()
        checkElementText('.modal__heading', 'Вход')

    })
  })