$('.collection')
    .on('click', '.collection-item', function () {
        
        var $badge = $('.badge', this);
        var nomeProduto = this.firstChild.textContent;

        if($badge.length === 0){

            $badge = $('<span class="badge brown-text">0<span>')
                .appendTo(this);
        }

        Materialize.toast(nomeProduto + 'adicionado', 1000);

        $badge.text(parseInt($badge.text()) + 1);
    });

$('.collection')
    .on('click', '.badge', function () {
        
        $(this).remove();
        return false;
    });

$('.modal-trigger').leanModal();

$('#confirmar')
    .on('click', function () {
        
        var text = '';

        $('.badge').parent().each(function () {
            texto += this.firstChild.textContent + ': ';
            texto += this.firstChild.textContent + ', ';
        });

        $('#resumo').empty().text(texto);
    });

$('.acao-limpar')
    .on('click', function () {
       
        $('#numero-mesa').val('');
        $('.badge').remove();
    });