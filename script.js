//fazer o card girar ao ser clicado
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

document.querySelectorAll('.botao').forEach(button => {
    button.addEventListener('click', function (event) {
      event.stopPropagation();

      const card = this.closest('.flip-card');
      const isExpanded = card.classList.contains('expandido');

      card.classList.toggle('expandido');

      // Alterna o texto do botão
      this.textContent = isExpanded ? 'Expandir' : 'Diminuir';
    });
  });

  // Opcional: Fechar clicando fora do card
  document.addEventListener('click', function (event) {
    const expandedCard = document.querySelector('.flip-card.expandido');

    if (
      expandedCard &&
      !expandedCard.contains(event.target) &&
      !event.target.classList.contains('botao')
    ) {
      expandedCard.classList.remove('expandido');

      // Restaura o texto do botão
      const botao = expandedCard.querySelector('.botao');
      if (botao) botao.textContent = 'Expandir';
    }
  });