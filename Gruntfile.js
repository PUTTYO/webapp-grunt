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
        connect: {
            server: {
                options: {
                    port: 9000,
                    //hostname: 'localhost'
                    hostname: '10.10.10.168',
                    livereload: true
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
                files: 'publicHtml/**/*.html'
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
