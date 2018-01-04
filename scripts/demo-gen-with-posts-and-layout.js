/*

generate with data from posts

 */


hexo.extend.generator.register('gen-with-posts-layout', function (locals) {

    console.log(locals);

    locals.data.report = true;

    return [{

            path: 'with-posts-layouts/index.html',
            data: locals,
            layout: ['report']

        }

    ];

});
