module.exports = {
	'env': {
        'browser':  true,
        'commonjs': true,
        'es6':      true
    },

    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },

    'globals': {
        'riot':      true,
        '__dirname': true,
        'process':   true,
        'App':       true,
        '$':         true
    },

    'plugins': ['riot','flowtype'],

    'rules': {
    }
}
