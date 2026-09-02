# language: pt

Funcionalidade: Compra de produtos na Renner

  Cenário: Adicionar dois produtos ao carrinho
    Dado que estou na página inicial da Renner

    Quando busco o produto "Blusa Assimétrica em Malha com Gola Alta"
    E clico no produto "Blusa Assimétrica em Malha com Gola Alta"
    E seleciono o tamanho "M"
    E adiciono o produto ao carrinho

    Quando busco o produto "Blusa Bata Estampada em Viscose com Babados"
    E clico no produto "Blusa Bata Estampada em Viscose com Babados"
    E seleciono o tamanho "M"
    E adiciono o produto ao carrinho

    Então o carrinho deve conter os produtos:
      | produto                                                 | preco      |
      | Blusa Assimétrica em Malha com Gola Alta                | R$ 119,90  |
      | Blusa Bata Estampada em Viscose com Babados             | R$ 219,90 |