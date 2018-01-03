/*

This is a basic example of using a generator in hexo

 */

hexo.extend.generator.register('gen-path', function (locals) {

   console.log('trying to make some files in a path.');

    return [{

            path: 'path/file1.md',
            data: 'this is file one.'

        }, {

            path: 'path/file2.md',
            data: 'this is file two.'

        }, {

            path: 'path/file3.md',
            data: 'this is file three.'

        }
    ];

});
