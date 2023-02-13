foam.CLASS({
    package: 'com.example',
    name: 'Controller',
    extends: 'foam.u2.Controller',

    methods: [
        function render () {
            this
                .start('h1')
                    .add('Hello, FOAM!')
                .end();
        }
    ]
});
