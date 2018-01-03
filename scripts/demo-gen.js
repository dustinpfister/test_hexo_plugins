
hexo.extend.generator.register('sitemap', function (locals) {

    console.log('I am the file generator');

    return {

        path: 'test.md',
        data: 'this is only a test.'

    };

});
