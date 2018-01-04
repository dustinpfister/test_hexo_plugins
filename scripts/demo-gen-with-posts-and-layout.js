/*

generate with data from posts

 */


hexo.extend.generator.register('gen-with-posts-layout', function (locals) {

    return [{

            path: 'with-posts-layouts/index.html',
            data: locals,
            layout: ['index']

        }

    ];

});
