describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
  cy.visit('src/index.html') // Correct relative path
  cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
})
  it('Extra 1 e 2 - Delay e Email invalido', () => {
    cy.get('#firstName').type('Nomarzera')
    cy.get('#lastName').type('Egrog')
    cy.get('#email').type('tests')
    cy.get('#open-text-area').type('Testando o preenchimento do form com email invalido', { delay: 0 })
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

   it('Extra 3 - Telefone invalido', () => {
    cy.get('#firstName').type('Nomarzera')
    cy.get('#lastName').type('Egrog')
    cy.get('#email').type('tests')
    cy.get('#phone').type('numero')
      .should('not.have.value', 'numero')    
  })

   it('Extra 4 - Telefone faltando', () => {
    cy.get('#firstName').type('Nomarzera')
    cy.get('#lastName').type('Egrog')
    cy.get('#email').type('tests')
    cy.get('#phone-checkbox').check()
    cy.get('.button').click()
    cy.get('.error').should('be.visible')    
  })
  it('Extra 5 - Preencher e apagar form', () => {
    cy.get('#firstName').type('Nomarzera')
    .should('have.value', 'Nomarzera')
    .clear().should('have.value', '')

    cy.get('#lastName').type('Egrog')
    .should('have.value', 'Egrog')
    .clear().should('have.value', '') 

    cy.get('#email').type('tests@tests.com')
    .should('have.value', 'tests@tests.com')
    .clear().should('have.value', '')

    cy.get('#phone').type('1233456789')
    .should('have.value', '1233456789')
    .clear().should('have.value', '')
      
  })

  it('Extra 6 - Form vazio', () => {
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  it('Extra 7 - Form preenchido com sucesso', () => {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get('.success').should('be.visible'); // Fix typo: "sucess" -> "success"
  });

   it('Extra 8 - Encontrar botão pelo nome', () => {
    cy.get('#firstName').type('Nomarzera')
    cy.get('#lastName').type('Egrog')
    cy.get('#email').type('tests')
    cy.get('#phone-checkbox').check()
    cy.contains('Enviar').click()
    cy.get('.error').should('be.visible')    
  })
  
  it('Preencher o formulario com sucesso', () => {
    
    //preenhcer nome
    cy.get('#firstName')
    .should('be.visible')
    .type('Nomar')
    .should('have.value', 'Nomar')

    //preenche sobrenome
    cy.get('#lastName')
    .should('be.visible')
    .type('Egrog')
    .should('have.value', 'Egrog')

    //preencher email
    cy.get('#email')
    .should('be.visible')
    .type('tests@tests.com')
    .should('have.value', 'tests@tests.com')
    
    //preencher como podemos ajudar
    cy.get('#open-text-area')
    .should('be.visible')
    .type('Testando o preenchimento do campo de texto')
    .should('have.value', 'Testando o preenchimento do campo de texto')

    // Click the "Enviar" button
   cy.get('.button') // Select the button by its text
    .should('be.visible') // Ensure the button is visible
    .click(); // Click the button

    // Verifica se a mensagem de sucesso está visível
    cy.get('.success')
      .should('be.visible')
    //.should('have.value', 'Mensagem enviada com sucesso.')

})
it('Usar o Select', () => {
  cy.get('#product').select('YouTube')
  .should('have.value', 'youtube')
})

it('Seleciona o produto mentoria', () => {
  cy.get('select').select('mentoria')
  .should('have.value', 'mentoria')
})

it('seleciona valor pelo indice', () => {
  cy.get('select').select(1)
})

it('Seleciona o radio button Feedback', () => {
  cy.get('[type="radio"]').check('feedback')
  .should('have.value', 'feedback')
})

it('verificar que o radio foi marcado', () => {
  cy.get('[type="radio"]').check('elogio')
  .should('be.checked')
})

it('Marcando checkbox', () => {
  cy.get('input[type="checkbox"]')
  .check()
  .should('be.checked')
  .last()
  .uncheck()
  .should('not.be.checked')
})

it('Subindo arquivos', () => {
  cy.get('input[type="file"]')
  .selectFile('C:/Users/ramon/Downloads/Ramon-Gorge-EN.pdf')
})

it('Seleciona arquivo da pasta fixtures', () => {
  cy.get('#file-upload')
  .selectFile('cypress/fixtures/example.json')
  cy.get('#file-upload')
  .should(input => {
    expect(input[0].files[0].name).to.equal('example.json')
  })
})

it('Subir arquivo com drag and drop', () => {
  cy.get('#file-upload').selectFile('cypress/fixtures/foto1.png', { action: 'drag-drop'})
  cy.get('#file-upload')
  .should(input => {
    expect(input[0].files[0].name).to.equal('foto1.png')
  })
})

it('Faz upload usando alias', () => {
  cy.fixture('foto1').as('foto')
  cy.get('#file-upload').selectFile('@foto')
  cy.get('#file-upload')
  .should(input => {
    expect(input[0].files[0].name).to.equal('foto1')
  })
})

it('Verifica se link abre em outra pagina', () => {
  cy.contains('a', 'Política de Privacidade')
  .should('have.attr', 'target','_blank')
  .invoke('removeAttr', 'target')
  .click()
  cy.get('#title')
  .contains('CAC TAT - Política de Privacidade')
  .should('be.visible')
})

it('Verifica pagina priovacy indepentende', () => {
  cy.visit('src/privacy.html')
  cy.get('#title')
  .contains('CAC TAT - Política de Privacidade')
  cy.get('#white-background')
  .should('be.visible')
})


})//end of code