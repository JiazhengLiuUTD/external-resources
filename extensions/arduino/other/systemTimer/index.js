const systemTime = formatMessage => ({
    name: formatMessage({
        id: 'systemTime.name',
        default: 'systemtime module'
    }),
    extensionId: 'systemTime',
    version: '1.0.0',
    supportDevice: ['arduinoTj2560','tjabKit_arduinoUno'],
    author: 'Bright',
    iconURL: `asset/systemTimer.jpg`,
    description: formatMessage({
        id: 'systemTime.description',
        default: 'systemtime module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: null,
    tags: ['other'],
    helpLink: null
});

module.exports = systemTime;
