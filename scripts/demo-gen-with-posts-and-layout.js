/*

generate with data from posts

 */


hexo.extend.generator.register('gen-with-posts-layout', function (locals) {

    // this is a report
    locals.data.report = true;
	
	// site totals

    return [{

            path: 'with-posts-layouts/index.html',
            data: locals,
            layout: ['report']

        }

    ];

});
