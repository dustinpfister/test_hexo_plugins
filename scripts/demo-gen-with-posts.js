/*

generate with data from posts

 */

hexo.extend.generator.register('gen-with-posts', function (locals) {

    let posts = locals.posts,
    html = '';

    locals.posts.forEach(function (post) {

        html += post.content;
        html += '<br>';

    });

    return [{

            path: 'with-posts/index.html',
            data: html

        }

    ];

});
