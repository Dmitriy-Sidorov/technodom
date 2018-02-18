$(function () {
    /*генерация хлебных крошек*/
    Handlebars.registerHelper('list', function (items, options) {
        var out = '<ul>';
        out = out + '<li>' + options.fn(items[0]) + '</li>';
        for (var i = 1, l = items.length; i < l; i++) {
            out = out + '<li>&#62;</li>' + '<li>' + options.fn(items[i]) + '</li>';
        }
        return out + '</ul>';
    });

    var templateBreadcrumbs = $('#templateBreadcrumbs').html();
    var templateCompile = Handlebars.compile(templateBreadcrumbs);

    var context = {
        breadcrumbs: [
            {category: 'Главная'},
            {category: 'Ноутбуки, компьютеры'},
            {category: 'Ноутбуки'}
        ]
    };

    var compiledHtml = templateCompile(context);
    $('.breadcrumbs').html(compiledHtml);
});

(function ($) {
    var textHidden = $('.paragraph'); /*для срабатывания анимированного скрытия или отображения объекта,
                                        добавить класс '.paragraph'*/
    var heightParagraph = textHidden.height();

    textHidden.css('height', heightParagraph);
    textHidden.toggleClass('hidden');

    var defaults = {
        show: 'show',
        hide: 'hide'
    };
    var options;
    $.fn.readMorePlugin = function (params) {
        options = $.extend({}, defaults, options, params);
        $(this).on('click', function () {
            textHidden.toggleClass('hidden');
            $(this).text(textHidden.is('.hidden') ? options.show : options.hide);
        });
        return this;
    };
})(jQuery);



