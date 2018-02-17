$(function () {
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