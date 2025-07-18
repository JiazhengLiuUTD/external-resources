const TJ2560HRC = formatMessage => ({
    name: 'Humanoid-Robot-Controller',
    deviceId: 'TJ2560HRC_arduinoTj2560',
    manufactor: 'TAIJING Robot',
    learnMore: 'https://www.taijing.com/',
    iconURL: 'asset/TJ2560HRC.png',
    description: formatMessage({
        id: 'TJ2560HRC.description',
        default: 'TAIJING Robot',
		description: 'Description for the taijing humanoid robot controllerdevice'
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
    connectionIconURL: '',
    connectionSmallIconURL: '',
    programMode: ['upload'],
    programLanguage: ['block', 'c','cpp'],
    tags: ['kit','arduino'],
    deviceExtensions: ['TJ2560HRCExt'],
    deviceExtensionsCompatible: '',
    helpLink: 'https://www.taijing.com/'
});

module.exports = TJ2560HRC;
