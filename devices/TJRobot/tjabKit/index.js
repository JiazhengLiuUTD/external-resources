const tjabKit = formatMessage => ({
    name: 'Controller-B+',
    deviceId: 'tjabKit_arduinoUno',
    manufactor: 'TAIJING Robot',
    learnMore: 'https://www.taijing.com/',
    iconURL: 'asset/TJRobot.png',
    description: formatMessage({
        id: 'tjabKit.description',
        default: 'TAIJING Robot.',
		description: 'Description for the taijing Controller-B+ kit device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: [
	    'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
	], 
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/TJRobot-illustration.svg',
    connectionSmallIconURL: 'asset/TJRobot-small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'c','cpp'],
    tags: ['kit','arduino'],
    deviceExtensions: ['tjabKitExt'],
    deviceExtensionsCompatible: '',
    helpLink: 'https://www.taijing.com/'
});

module.exports = tjabKit;
