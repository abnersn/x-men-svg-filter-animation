module.exports = {
    multipass: true,
    js2svg: {
        indent: 4, // string with spaces or number of spaces. 4 by default
        pretty: true // boolean, false by default
    },
    plugins: [
        'removeDoctype',
        'removeXMLProcInst',
        'removeComments',
        'removeMetadata',
        'removeEditorsNSData',
        'cleanupAttrs',
        'mergeStyles',
        'inlineStyles',
        'minifyStyles',
        'removeUselessDefs',
        'cleanupNumericValues',
        'convertColors',
        'removeUnknownsAndDefaults',
        'removeNonInheritableGroupAttrs',
        'removeUselessStrokeAndFill',
        'removeViewBox',
        'cleanupEnableBackground',
        'removeHiddenElems',
        'removeEmptyText',
        'convertShapeToPath',
        'convertEllipseToCircle',
        'moveElemsAttrsToGroup',
        'moveGroupAttrsToElems',
        'convertPathData',
        'convertTransform',
        'removeEmptyAttrs',
        'removeEmptyContainers',
        'mergePaths',
        'convertStyleToAttrs',
        'removeUnusedNS',
        'removeDimensions',
        'sortDefsChildren',
        'removeTitle',
        'removeDesc'
    ]
}
