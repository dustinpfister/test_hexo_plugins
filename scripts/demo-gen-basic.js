/*

    This is a basic example of using a generator in hexo

*/


hexo.extend.generator.register('gen-basic', function (locals) {

    return {

        path: 'test.md',
        data: 'this is only a test.'

    };

});
