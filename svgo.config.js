module.exports = {
    /* Doing multiple passes of svgo helps to ensure maximum optimization */
    multipass: true,

    /* Format the output to preserve readability */
    js2svg: {
        indent: 4,
        pretty: true
    },

    /* This is the standard SVGO plugins list, with a few modifications:
        - cleanupIDs
        - collapseGroups
        + convertStyleToAttrs
        + removeDimensions */
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
