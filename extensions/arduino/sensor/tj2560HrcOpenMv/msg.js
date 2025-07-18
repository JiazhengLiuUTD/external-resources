/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TJ2560HRCOPENMV_CATEGORY: 'Camera Module',
        TJ2560HRCOPENMV_SETPORT: 'set camera module port',
        TJ2560HRCOPENMV_SETMODE: 'set camera module to %1 mode',
        TJ2560HRCOPENMV_SETMODE_COLORMODE: 'color block',
        TJ2560HRCOPENMV_SETMODE_QRCODEMODE: 'QR code',
        TJ2560HRCOPENMV_SETMODE_LINEMODE: 'line track',
        TJ2560HRCOPENMV_SETLIGHT: 'set camera light %1',
        TJ2560HRCOPENMV_SETLIGHT_CLOSEALLLIGHT: 'close all',
        TJ2560HRCOPENMV_SETLIGHT_OPENREDLIGHT: 'open red light',
        TJ2560HRCOPENMV_SETLIGHT_OPENGREENLIGHT: 'open green light',
        TJ2560HRCOPENMV_SETLIGHT_OPENBLUELIGHT: 'open blue light',
        TJ2560HRCOPENMV_SETLIGHT_OPENIRLIGHT: 'open IR light',
        TJ2560HRCOPENMV_SETLIGHT_OPENALLLIGHT: 'open all light',
        TJ2560HRCOPENMV_RESETWHITEBALANCE: 'camera module reset white balance',
        TJ2560HRCOPENMV_LEARNCOLORBLOCK: 'camera module learn color block',
        TJ2560HRCOPENMV_GETCOLORBLOCKPOSITION: 'camera module get color block position',
        TJ2560HRCOPENMV_COLORBLOCKPOSITIONX: 'color block position X axis value',
        TJ2560HRCOPENMV_COLORBLOCKPOSITIONY: 'color block position Y axis value',
        TJ2560HRCOPENMV_GETQRCODEPOSITION: 'camera module get QR code block position',
        TJ2560HRCOPENMV_QRCODEPOSITIONX: 'QR code position X axis value',
        TJ2560HRCOPENMV_QRCODEPOSITIONY: 'QR code position Y axis value',
        TJ2560HRCOPENMV_GETQRCODEWHPOSITION: 'camera module get QR code block WH position',
        TJ2560HRCOPENMV_QRCODEWHPOSITIONX: 'QR code HW position X axis value',
        TJ2560HRCOPENMV_QRCODEWHPOSITIONY: 'QR code HW position Y axis value',
        TJ2560HRCOPENMV_GETQRCODEVALUE: 'camera module get QR code value and version',
        TJ2560HRCOPENMV_QRCODEVALUESTRING: 'camera module QR code string',
        TJ2560HRCOPENMV_QRCODEVALUEVERSION: 'camera module QR code version',
        TJ2560HRCOPENMV_GETQRECCMASK: 'camera module get QR code ECC and mask',
        TJ2560HRCOPENMV_QRCODEECC: 'camera module QR ECC level',
        TJ2560HRCOPENMV_QRCODEMASK: 'camera module QR mask',
        TJ2560HRCOPENMV_GETQRCODEDATATYPEANDECI: 'camera module get QR code data type and ECI',
        TJ2560HRCOPENMV_QRCODEDATATYPE: 'camera module QR data type',
        TJ2560HRCOPENMV_QRCODEDATAECI: 'camera module QR ECI',
        TJ2560HRCOPENMV_ISGETQRCODE: 'is camera module get valid QR?',
        TJ2560HRCOPENMV_SETLINETRACKMODE: 'camera module set line track mode %1',
        TJ2560HRCOPENMV_SETLINETRACKMODE_GRAYSCALE: 'grayscale',
        TJ2560HRCOPENMV_SETLINETRACKMODE_COLORFUL: 'colorful',
        TJ2560HRCOPENMV_ON: 'on',
        TJ2560HRCOPENMV_OFF: 'off',
        TJ2560HRCOPENMV_LINE_BLACK: 'black line while bg',
        TJ2560HRCOPENMV_LINE_WHITE: 'while line black bg',
        TJ2560HRCOPENMV_SETLENFLIP: 'camera module set len flip %1 %2',
        TJ2560HRCOPENMV_SETLENFLIP_VERTICAL: 'vertical',
        TJ2560HRCOPENMV_SETLENFLIP_HORIZONTAL: 'horizontal',
        TJ2560HRCOPENMV_GETLINEPOTION: 'camera module line position',
        TJ2560HRCOPENMV_GETLINEANGLE: 'camera module line angle',
        TJ2560HRCOPENMV_GETLINELENGTH: 'camera module line length',
        TJ2560HRCOPENMV_GETLINEERROROUTPUT: 'camera module line error output',
        TJ2560HRCOPENMV_SETLINECOLOR: 'camera module set line color %1',
        TJ2560HRCOPENMV_SETLINETHRESHOLD: 'camera module set line track threshold min %1 max %2',
        TJ2560HRCOPENMV_SETMODE_COLORBLOB: 'color recognize and locate',
        TJ2560HRCOPENMV_READCOLORBLOB:'read color and location of blob',
        TJ2560HRCOPENMV_BLOBCOLOR:'blob color',
        TJ2560HRCOPENMV_RED:'red',
        TJ2560HRCOPENMV_GREEN:'green',
        TJ2560HRCOPENMV_BLUE:'blue',
        TJ2560HRCOPENMV_YELLOW:'yellow',
        TJ2560HRCOPENMV_BLANK:'no color',
        TJ2560HRCOPENMV_GETCOLORBLOCKCOLOR:'read LAB',
        TJ2560HRCOPENMV_L:'L',
        TJ2560HRCOPENMV_A:'A',
        TJ2560HRCOPENMV_B:'B',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TJ2560HRCOPENMV_CATEGORY: '视觉模块',
        TJ2560HRCOPENMV_SETPORT: '初始化视觉模块',
        TJ2560HRCOPENMV_SETMODE: '设置视觉模块 %1 模式',
        TJ2560HRCOPENMV_SETMODE_COLORMODE: '色块识别',
        TJ2560HRCOPENMV_SETMODE_QRCODEMODE: '二维码识别',
        TJ2560HRCOPENMV_SETMODE_LINEMODE: '巡线',
        TJ2560HRCOPENMV_SETLIGHT: '设置补光 %1',
        TJ2560HRCOPENMV_SETLIGHT_CLOSEALLLIGHT: '全部关闭灯',
        TJ2560HRCOPENMV_SETLIGHT_OPENREDLIGHT: '打开红灯',
        TJ2560HRCOPENMV_SETLIGHT_OPENGREENLIGHT: '打开绿灯',
        TJ2560HRCOPENMV_SETLIGHT_OPENBLUELIGHT: '打开蓝灯',
        TJ2560HRCOPENMV_SETLIGHT_OPENIRLIGHT: '打开红外灯',
        TJ2560HRCOPENMV_SETLIGHT_OPENALLLIGHT: '打开全部灯',
        TJ2560HRCOPENMV_RESETWHITEBALANCE: '视觉模块重置白平衡',
        TJ2560HRCOPENMV_LEARNCOLORBLOCK: '视觉模块学习色块数据',
        TJ2560HRCOPENMV_GETCOLORBLOCKPOSITION: '视觉模块读取色块位置',
        TJ2560HRCOPENMV_COLORBLOCKPOSITIONX: '色块 X 坐标数值',
        TJ2560HRCOPENMV_COLORBLOCKPOSITIONY: '色块 Y 坐标数值',
        TJ2560HRCOPENMV_GETQRCODEPOSITION: '视觉模块读取二维码边界框 XY 坐标',
        TJ2560HRCOPENMV_QRCODEPOSITIONX: '二维码边界框 X 坐标数值',
        TJ2560HRCOPENMV_QRCODEPOSITIONY: '二维码边界框 Y 坐标数值',
        TJ2560HRCOPENMV_GETQRCODEWHPOSITION: '视觉模块读取二维码边界框 WH 坐标',
        TJ2560HRCOPENMV_QRCODEWHPOSITIONX: '二维码边界框 W 坐标数值',
        TJ2560HRCOPENMV_QRCODEWHPOSITIONY: '二维码边界框 H 坐标数值',
        TJ2560HRCOPENMV_GETQRCODEVALUE: '视觉模块读取二维码效载荷字符串与版本信息',
        TJ2560HRCOPENMV_QRCODEVALUESTRING: '二维码效载荷字符串',
        TJ2560HRCOPENMV_QRCODEVALUEVERSION: '二维码版本信息',
        TJ2560HRCOPENMV_GETQRECCMASK: '视觉模块读取二维码 ECC 水平与掩码',
        TJ2560HRCOPENMV_QRCODEECC: '二维码 ECC 水平',
        TJ2560HRCOPENMV_QRCODEMASK: '二维码掩码',
        TJ2560HRCOPENMV_GETQRCODEDATATYPEANDECI: '视觉模块读取二维码数据类型与ECI',
        TJ2560HRCOPENMV_QRCODEDATATYPE: '二维码数据类型',
        TJ2560HRCOPENMV_QRCODEDATAECI: '二维码 ECI',
        TJ2560HRCOPENMV_ISGETQRCODE: '视觉模块检测到二维码？',
        TJ2560HRCOPENMV_SETLINETRACKMODE: '视觉模块设置巡线为 %1 模式',
        TJ2560HRCOPENMV_SETLINETRACKMODE_GRAYSCALE: '灰度',
        TJ2560HRCOPENMV_SETLINETRACKMODE_COLORFUL: '彩色',
        TJ2560HRCOPENMV_ON: '开',
        TJ2560HRCOPENMV_OFF: '关',
        TJ2560HRCOPENMV_SETLENFLIP: '视觉模块设置镜头 %1 反转 %2',
        TJ2560HRCOPENMV_SETLENFLIP_VERTICAL: '垂直',
        TJ2560HRCOPENMV_SETLENFLIP_HORIZONTAL: '水平',
        TJ2560HRCOPENMV_GETLINEPOTION: '线和图像边缘距离值',
        TJ2560HRCOPENMV_GETLINEANGLE: '线条角度值',
        TJ2560HRCOPENMV_GETLINELENGTH: '巡线模长',
        TJ2560HRCOPENMV_GETLINEERROROUTPUT: '误差输出',
        TJ2560HRCOPENMV_SETLINECOLOR: '视觉模块设置巡线颜色 %1',
        TJ2560HRCOPENMV_LINE_BLACK: '白底黑线',
        TJ2560HRCOPENMV_LINE_WHITE: '黑底白线',
        TJ2560HRCOPENMV_SETLINETHRESHOLD: '视觉模块设置巡线阈值 最小值 %1 最大值 %2',
        TJ2560HRCOPENMV_SETMODE_COLORBLOB:'颜色识别定位',
        TJ2560HRCOPENMV_READCOLORBLOB:'视觉模块读取色块颜色和位置',
        TJ2560HRCOPENMV_BLOBCOLOR:'色块颜色',
        TJ2560HRCOPENMV_RED:'红色',
        TJ2560HRCOPENMV_GREEN:'绿色',
        TJ2560HRCOPENMV_BLUE:'蓝色',
        TJ2560HRCOPENMV_YELLOW:'黄色',
        TJ2560HRCOPENMV_BLANK:'未发现色块',
        TJ2560HRCOPENMV_GETCOLORBLOCKCOLOR:'视觉模块读取色块颜色通道数值',
        TJ2560HRCOPENMV_L:'L通道数值',
        TJ2560HRCOPENMV_A:'A通道数值',
        TJ2560HRCOPENMV_B:'B通道数值',
        TJ2560HRCOPENMV_LOCATECOLOR:'定位 %1 色块位置',
        TJ2560HRCOPENMV_SETMODE_SHAPE:'形状识别',
        TJ2560HRCOPENMV_READSHAPE:'视觉模块读取形状',
        TJ2560HRCOPENMV_SHAPE:'形状',
        TJ2560HRCOPENMV_CIRCLE:'圆形',
        TJ2560HRCOPENMV_RECT:'矩形',
        TJ2560HRCOPENMV_OTHERSHAPE:'其他',
        TJ2560HRCOPENMV_SHAPEPOSITIONX: '形状 X 坐标数值',
        TJ2560HRCOPENMV_SHAPEPOSITIONY: '形状 Y 坐标数值',
    });
    return Blockly;
}

exports = addMsg;
