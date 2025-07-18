const tj2560HrcOpenMv = formatMessage => ({
    name: formatMessage({
        id: 'tj2560HrcOpenMv.name',
        default: 'Camera Module'
    }),
    extensionId: 'tj2560HrcOpenMv',
    version: '1.0.0',
    supportDevice: ['TJ2560HRC_arduinoTj2560'],
    author: 'Jiazheng Liu',
    iconURL: `asset/tj2560HrcOpenMv.png`,
    description: formatMessage({
        id: 'tj2560HrcOpenMv.description',
        default: 'Camera Module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: null
});

module.exports = tj2560HrcOpenMv;