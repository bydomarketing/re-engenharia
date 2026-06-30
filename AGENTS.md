# RE Engenharia Elétrica - Diretrizes de Desenvolvimento e Regras de Negócio

Este documento serve para guiar agentes inteligentes e desenvolvedores nas manutenções e evoluções do portal da RE Engenharia Elétrica.

---

## 1. Botões de Ação do Portfólio (Cards)

* **Elemento de Ação**: Substituir quaisquer links ou chamadas simples pelo botão oficial institucional.
* **Estilo do Botão**:
  * Fundo azul institucional: `#123C73`
  * Efeito hover com cor de destaque: `#D62828` (vermelho do site)
  * Texto em branco e formato de fonte sans-serif em caixa alta com peso extrabold.
  * Preservar o selo `"Portfólio"` à direita do card de forma harmoniosa.
* **Texto padrão**: `"VER PROJETO COMPLETO"`

---

## 2. Regra Global de Imagens e Galerias do Portfólio

Para garantir a máxima autoridade e credibilidade, o portfólio da RE Engenharia Elétrica deve utilizar **exclusivamente fotos reais** dos projetos finalizados ou em andamento.

### Protocolo de Substituição
1. **Identificação**: Assim que fotos reais/específicas forem direcionadas a uma determinada obra, localize os arrays `imageUrl` e `galleryImages` correspondentes em `/src/data.ts`.
2. **Remoção Absoluta**: Delete **todas** as imagens provisórias, ilustrativas, geradas por IA comerciais de demonstração ou bancos de dados fictícios cadastrados previamente para aquele projeto. 
3. **Não Misturar**: É terminantemente proibido mesclar imagens temporárias/ilustrativas com as fotos reais fornecidas.
4. **Volume Real**: A quantidade de fotos cadastradas e expostas na galeria e no carrosel deve corresponder exatamente à quantidade real de fotos fornecidas (nem mais, nem menos).

### Política de Atualização e Adição
* Ao receber novas imagens para uma obra que já possua fotos reais registradas, **perguntar obrigatoriamente** ao usuário:
  > *"Estas fotos substituem a galeria atual ou devem ser adicionadas às fotos existentes?"*
* Caso não haja resposta ou instrução expressa no momento do envio, adote preventivamente a **substituição integral** da galeria existente para evitar detritos visuais.
