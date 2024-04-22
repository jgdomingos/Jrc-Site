function showDescription(descricaoId) {
    var descricao = document.getElementById(descricaoId);
    descricao.classList.add('active');
  }
  
  function hideDescription(descricaoId) {
    var descricao = document.getElementById(descricaoId);
    descricao.classList.remove('active');
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideAllDescriptions();
    }
})

function hideAllDescriptions() {
    var descricoes = document.querySelectorAll('.descricao');
    descricoes.forEach(function(descricao) {
      descricao.classList.remove('active');
    });
  }