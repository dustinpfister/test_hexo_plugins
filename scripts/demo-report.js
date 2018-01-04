/*

generate a report on posts

 */

let cheerio = require('cheerio');

hexo.extend.generator.register('report', function (locals) {

    let site = {};

    // tabulate word count for the given content, and element
    let tabWC = function (content, el) {

        let $ = cheerio.load(content),
        text = $(el).text(),
        count = text.split(' ').length;

        if (text.length > 0) {

            site.wordCounts[el] += count;
            site.wordCounts.total += count;

        }

    };

    // site wide defaults
    site.postCount = locals.posts.length;
    site.wordCounts = {};
    site.wordCounts.total = 0;
    site.wordCounts.p = 0;
    site.wordCounts.h1 = 0;
    site.wordCounts.h2 = 0;
    site.wordCounts.h3 = 0;
    site.wordCounts.h4 = 0;
    site.wordCounts.h5 = 0;
    site.wordCounts.h6 = 0;

    // tabulate for all posts
    locals.posts.forEach(function (post) {

        tabWC(post.content, 'p');
        let h = 1;
        while (h < 7) {
            tabWC(post.content, 'h' + h);
            h += 1;
        }

    });

    // set data to be used in the template
    locals.data.report = true;
    locals.data.site = site;

    return [{

            path: 'reports/index.html',
            data: locals,
            layout: ['report']

        }

    ];

});
