const { extendDefaultPlugins } = require('svgo')
module.exports = {
    multipass: true,
    js2svg: {
        indent: 4, // string with spaces or number of spaces. 4 by default
        pretty: true // boolean, false by default
    },
    plugins: extendDefaultPlugins([
        {
            name: 'moveGroupAttrsToElems',
            active: true
        },
        {
            name: 'cleanupIDs',
            active: false
        },
        {
            name: 'collapseGroups',
            active: false
        },
        {
            name: 'convertStyleToAttrs',
            active: true
        },
        {
            name: 'removeAttrs',
            params: {
                attrs: '(width="100%"|stroke.*)'
            }
        },
        {
            name: 'removeDimensions',
            active: true
        }
    ])
}
