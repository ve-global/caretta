module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'assets/js/**/*.spec.js'
                dest: 'assets/temp/js/scripts.concat.js'
            }
        },

        babel: {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: {
                    'assets/temp/js/scripts.es2015.js': 'assets/temp/js/scripts.concat.js'
                }
            }
        },

        jasmine: {
            pivotal: {
                src: 'assets/temp/js/scripts.es2015.js',
                options: {
                    specs: [
                        'assets/tests/spec/**/*.spec.js',
                    ],
                    helpers: 'assets/tests/spec/**/*.helper.js',
                    summary: true,
                    junit: {
                        path: 'junit'
                    }
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            buildBower: {
                src: 'assets/temp/js/scripts.es2015.js',
                dest: 'assets/temp/js/scripts.min.js'
            }
        },

        sass: {
            dev: {
                files: {
                    'assets/temp/css/caretta.css': 'assets/scss/caretta.scss'
                }
            }
        },

        csso: {
            dynamic_mappings: {
                expand: true,
                cwd: 'assets/temp/TempPrefixes',
                src: 'assets/temp/css/caretta.css',
                dest: 'public/css',
                ext: '.min.css'
            }
        },

        clean: {
            temp: [
                'assets/junit',
                'assets/_tests',
                'assets/.sass-cache',
                'assets/temp'
            ]
        },

        scsslint: {
            all: 'assets/scss/caretta.scss',
            options: {
                bundleExec: false,
                config: '.scss-lint.yml'
            }
        },

        eslint: {
            target: [
                'gruntfile.js',
                'assets/js/**/*.js'
            ]
        }
    });

    grunt.registerTask('deploy', [
        'eslint',
        'scsslint',
        'copy',
        'concat',
        'babel',
        'jasmine',
        'uglify',
        'sass',
        'csso',
        'clean:temp'
    ]);
};
