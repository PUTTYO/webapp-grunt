module.exports = function(grunt) {
    'use strict';
    var pkg = grunt.file.readJSON('package.json');
    grunt.initConfig({
        //bowerの設定
        bower: {
            install: {
                options: {
                    targetDir: './publicHtml/vender', //ライブラリの配置先
                    layout   : 'byType', //レイアウト
                    install  : true, // grunt実行時にbower installを実行する
                    verbose  : true, //ログを出力するかどうか
                    cleanTargetDir: true, //targetDirを削除する
                    cleanBowerDir : false // bowerのcomponentsディレクトリを削除する
                }
            }
        },
        jshint: {
            options: {
                node: true
            },
            files: {
                src: ['publicHtml/app/**/*.js']
            }
        },
        jst: {
            option: {
                processName: function (name) {
                    return name.match(/((?:smartphone|pc)\/.*).html$/)[1];
                },
                procesContent: function (src) {
                    return src.replace(/(^\s+|\s+$)/gm, '');
                },
                amd: true
            },
            smartphone: {
                files: {
                    'publicHtml/js/jst/smartphone.js':
                    ['public_html/js/templates/smartphone/**/*.html']
                }
            }
        },
        requirejs: {
            options: {
                mainConfigFile: './public_html/js/require.config.js',
                baseUrl: './public_html/js',
                paths: {
                    requirejs: 'vendor/requirejs/require'
                },
                include: ['requirejs'],
                optimize: 'none'
            },
            smartphone: {
                options: {
                    out: 'public_html/js/dist/smartphone.js',
                    name: 'src/smartphone'
                }
            }
        },
        uglify: {
            smartphone: {
                files: {
                    'public_html/js/dist/smartphone.min.js': [
                        'public_html/js/dist/smartphone.js'
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    //hostname: 'localhost'
                    hostname: '*',
                    livereload: true
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    './min.css': ['css/base.css', 'css/style.css']
                }
            }
        },
        //ここから監視
        //監視したファイルに動きがあれば、taskを呼び出す。
        watch: {
            html: {
                options: {
                    livereload: true
                },
                files: ['publicHtml/**/*.html', 'publicHtml/**/*.css']
            },
            js: {
                options: {
                    livereload: true
                },
                files: 'publicHtml/app/**/*.js',
                tasks: ['jshint', 'jasmine']
            },
            css: {
                options: {
                    livereload: true
                },
                files: ['publicHtml/app/**/*.css'],
                tasks: ['cssmin']
            }
        },
        jasmine: {
            // プロパティ名はテストケース名
            sample: {
                // このテストケースでテストするファイルの指定
                src: 'publicHtml/app/jasmineTest/src/sample.js',
                options: {
                    // テストケース
                    specs: 'publicHtml/app/jasmineTest/spec/*Spec.js',
                    // ヘルパー
                    helpers: 'spec/*Helper.js'
                }
            }
        }
    });

    //loadNpmTaskを変更
    var taskName;
    for (taskName in pkg.devDependencies) {
        if (taskName.substring(0, 6) == 'grunt-') {
            grunt.loadNpmTasks(taskName);
        }
    }

    // 追記
    grunt.registerTask('default', ['connect', 'cssmin', 'watch', 'jasmine',
        'jshint']);
};
