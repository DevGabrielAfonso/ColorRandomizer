# Color Randomizer

**Acesse o projeto online:**  
https://devgabrielafonso.github.io/ColorRandomizer/

Um site interativo que gera cores aleatórias e exibe automaticamente seus valores em **RGB** e **HEX**, além de aplicar a cor complementar para manter o contraste visual dos elementos na tela.

Projeto focado em praticar **JavaScript**, manipulação do **DOM**, lógica de cores e experiência visual do usuário.

---

## Demonstração

Ao clicar no botão **"Click me!"**, o sistema:

* Gera uma cor aleatória 🎲
* Muda o **background** da página
* Calcula a **cor invertida (complementar)**
* Atualiza textos e botão para manter legibilidade
* Mostra os valores da cor em:

  * RGB
  * HEX

---

## Conceitos praticados

Este projeto trabalha fundamentos importantes de front-end:

* Manipulação do DOM
* Eventos em JavaScript (`onclick`)
* Geração de números aleatórios
* Conversão de RGB → HEX
* Lógica de cor complementar
* Atualização dinâmica de estilos CSS
* Experiência do usuário (contraste automático)

---

## Tecnologias usadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)

Sem bibliotecas ou frameworks.

## Como funciona a lógica

1. O sistema gera 3 números aleatórios (0–255) para formar uma cor RGB.
2. A cor complementar é calculada invertendo cada canal:

```
corInvertida = 255 - valorRGB
```

3. A função converte RGB para HEX usando:

```
Number(c).toString(16).padStart(2, '0')
```

4. A interface é atualizada dinamicamente com as novas cores.

---

## O que esse projeto demonstra

✔ Lógica de programação
✔ Entendimento de cores digitais
✔ Manipulação de estilos via JavaScript
✔ Pensamento voltado para UI/UX
✔ Código sem dependências externas

---

## Possíveis melhorias futuras

* Copiar cor para a área de transferência
* Histórico de cores geradas
* Animação suave na troca de cor
* Exibir contraste WCAG
* Modo dark/light fixo

---

## Autor

**Gabriel Afonso Sussia**
Estudante de Ciência da Computação
Interessado em desenvolvimento, automações e criação de ferramentas úteis.

---

Se esse projeto te ajudou ou você curtiu a ideia, deixe uma ⭐ no repositório!
=======
# ColorRandomizer
A simple 2 random color generator
>>>>>>> 99cabcb71584dc9858ae1a304c7d705401e793a7
