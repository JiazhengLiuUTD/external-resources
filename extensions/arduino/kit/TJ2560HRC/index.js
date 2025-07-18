const TJ2560HRCExt = () => ({
    name: 'TJ2560HRC',
    extensionId: 'TJ2560HRCExt',
    version: '1.1.0',
    supportDevice: ['TJ2560HRC_arduinoTj2560'],
    author: 'Jiazheng Liu',
    description: 'Tj arduino 2560 humanoid robot controller board.',
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: null
});

module.exports = TJ2560HRCExt;
