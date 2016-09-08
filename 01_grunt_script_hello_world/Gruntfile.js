module.exports = function(grunt) {

    grunt.initConfig({        
        jshint: {
            // define the files to lint
            files: ['resources/ui/components/**/*.js']
        },
        concat: {
            options: {},
            dist: {
                src: ['resources/ui/components/**/*.js'],
                dest: 'assets/js/ui-components.js'
            }
        },
        uglify: {
            dist: {
                src: 'assets/js/ui-components.js',
                dest: 'assets/js/ui-components.min.js'
            }
        },
        watch: {
            files: ['resources/ui/components/**/*.js'],
            tasks: ['jshint', 'concat']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint','concat','uglify','watch']);

};
