/// <reference types="Cypress" />

describe('Calculator', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="display"]').as('display')
    cy.getCalcButton('C').as('clear')
    cy.getCalcButton('+-').as('changeSignal')
    cy.getCalcButton('%').as('percentage')
    cy.getCalcButton('/').as('division')
    cy.getCalcButton('7').as('7')
    cy.getCalcButton('8').as('8')
    cy.getCalcButton('9').as('9')
    cy.getCalcButton('X').as('multiplication')
    cy.getCalcButton('4').as('4')
    cy.getCalcButton('5').as('5')
    cy.getCalcButton('6').as('6')
    cy.getCalcButton('-').as('minus')
    cy.getCalcButton('1').as('1')
    cy.getCalcButton('2').as('2')
    cy.getCalcButton('3').as('3')
    cy.getCalcButton('+').as('plus')
    cy.getCalcButton('0').as('0')
    cy.getCalcButton('.').as('dot')
    cy.getCalcButton('=').as('equal')
  })

  it('displays the calculator initial value', () => {
    cy.get('#digit > div').should('have.text', '0')
  })

  it('displays all buttons on the calculator', () => {
    cy.get('@display').should('exist')
    cy.get('@clear').should('exist')
    cy.get('@changeSignal').should('exist')
    cy.get('@percentage').should('exist')
    cy.get('@division').should('exist')
    cy.get('@7').should('exist')
    cy.get('@8').should('exist')
    cy.get('@9').should('exist')
    cy.get('@multiplication').should('exist')
    cy.get('@4').should('exist')
    cy.get('@5').should('exist')
    cy.get('@6').should('exist')
    cy.get('@minus').should('exist')
    cy.get('@1').should('exist')
    cy.get('@2').should('exist')
    cy.get('@3').should('exist')
    cy.get('@plus').should('exist')
    cy.get('@0').should('exist')
    cy.get('@dot').should('exist')
    cy.get('@equal').should('exist')
  })

  context('performs arithmetics operations', () => {
    afterEach('clean the display', () => {
      cy.get('@clear').click()
    })

    context('with positive numbers only', () => {
      it('performs a sum operation', () => {
        cy.get('@2').click()
        cy.get('@plus').click()
        cy.get('@2').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '4')
      })

      it('performs a subtraction operation', () => {
        cy.get('@5').click()
        cy.get('@minus').click()
        cy.get('@2').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '3')
      })

      it('performs a multiplication operation', () => {
        cy.get('@1').click()
        cy.get('@2').click()
        cy.get('@multiplication').click()
        cy.get('@8').click()
        cy.get('@9').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '1 068')
      })

      it('performs a division operation', () => {
        cy.get('@1').click()
        cy.get('@0').click()
        cy.get('@division').click()
        cy.get('@2').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '5')
      })
    })

    context('with negative numbers', () => {
      it('performs a sum operation', () => {
        cy.get('@9').click()
        cy.get('@changeSignal').click()
        cy.get('@plus').click()
        cy.get('@2').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '-7')
      })

      it('performs a subtraction operation', () => {
        cy.get('@5').click()
        cy.get('@changeSignal').click()
        cy.get('@minus').click()
        cy.get('@5').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '-10')
      })

      it('performs a multiplication operation', () => {
        cy.get('@2').click()
        cy.get('@1').click()
        cy.get('@changeSignal').click()
        cy.get('@multiplication').click()
        cy.get('@9').click()
        cy.get('@9').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '-2 079')
      })

      it('performs a division operation', () => {
        cy.get('@7').click()
        cy.get('@changeSignal').click()
        cy.get('@division').click()
        cy.get('@2').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '-3.5')
      })
    })

    context('with decimal numbers', () => {
      it('performs a sum operation', () => {
        cy.get('@2').click()
        cy.get('@dot').click()
        cy.get('@5').click()
        cy.get('@plus').click()
        cy.get('@3').click()
        cy.get('@dot').click()
        cy.get('@4').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '5.9')
      })

      it('performs a subtraction operation', () => {
        cy.get('@2').click()
        cy.get('@dot').click()
        cy.get('@5').click()
        cy.get('@minus').click()
        cy.get('@3').click()
        cy.get('@dot').click()
        cy.get('@4').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '-0.8999999999999999')
      })

      it('performs a multiplication operation', () => {
        cy.get('@3').click()
        cy.get('@dot').click()
        cy.get('@5').click()
        cy.get('@multiplication').click()
        cy.get('@1').click()
        cy.get('@dot').click()
        cy.get('@6').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '5.6000000000000005')
      })

      it('performs a division operation', () => {
        cy.get('@8').click()
        cy.get('@dot').click()
        cy.get('@4').click()
        cy.get('@division').click()
        cy.get('@2').click()
        cy.get('@dot').click()
        cy.get('@6').click()
        cy.get('@equal').click()
        cy.get('@display').should('have.text', '3.230769230769231')
      })
    })
  })

  context('handle invalid arithmetics operations', () => {
    it('performs a 0-division operation', () => {
      cy.get('@1').click()
      cy.get('@0').click()
      cy.get('@division').click()
      cy.get('@0').click()
      cy.get('@equal').click()
      cy.get('@display').should('have.text', "Can't divide with 0")
    })

    it('performs a 0 changing signal operation', () => {
      cy.get('@0').click()
      cy.get('@changeSignal').click()
      cy.get('@display').should('have.text', '0')
    })
  })
})