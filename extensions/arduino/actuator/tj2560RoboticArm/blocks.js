/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00CED1';
    const secondaryColour = '#00CED1';

    Blockly.Blocks.tj2560RoboticArm_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RoboticArm_home = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_HOME,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RoboticArm_reset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_RESET,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    /*
    Blockly.Blocks.tj2560RoboticArm_offset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_OFFSET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'JOINT',
                        options: [
                            ['1', 'JOINT1'],
                            ['2', 'JOINT2'],
                            ['3', 'JOINT3']]
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    */
    Blockly.Blocks.tj2560RoboticArm_M20 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_M20,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MOVE',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_G01, 'MOVEL'],
                            [Blockly.Msg.TJ2560ROBOTICARM_G00, 'MOVEJ']]
                            //[Blockly.Msg.TJ2560ROBOTICARM_G05, 'JUMP']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTICARM_G91, 'INCREMENT']]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'F'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    /*
    Blockly.Blocks.tj2560RoboticArm_Speed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_SPEED,
                args0: [
                    {
                        type: 'input_value',
                        name: 'SPEED',
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    */
    Blockly.Blocks.tj2560RoboticArm_Dir_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_DIR_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_FORWARD, 'Y'],
                            [Blockly.Msg.TJ2560ROBOTICARM_BACKWARD, 'Y-'],
                            [Blockly.Msg.TJ2560ROBOTICARM_UP, 'Z'],
                            [Blockly.Msg.TJ2560ROBOTICARM_DOWN, 'Z-'],
                            [Blockly.Msg.TJ2560ROBOTICARM_RIGHT, 'X'],
                            [Blockly.Msg.TJ2560ROBOTICARM_LEFT, 'X-']]
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    },
                    {
                        type: 'input_value',
                        name: 'F'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    /*
    Blockly.Blocks.tj2560RoboticArm_M21 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_M21,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTICARM_G91, 'INCREMENT']]
                    },
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'A'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RoboticArm_Axis_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_AXIS_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'JOINT',
                        options: [
                            ['1', 'X'],
                            ['2', 'Y'],
                            ['3', 'Z'],
                            ['4', 'A']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'REVOLVE',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_CW, '-1'],
                            [Blockly.Msg.TJ2560ROBOTICARM_CCW, '1']]
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RoboticArm_Arc_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_ARC_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'REVOLVE',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_CW, 'CW'],
                            [Blockly.Msg.TJ2560ROBOTICARM_CCW, 'CCW']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTICARM_G91, 'INCREMENT']]
                    },
                    
                    {
                        type: 'input_value',
                        name: 'X'
                    },
                    {
                        type: 'input_value',
                        name: 'Y'
                    },
                    {
                        type: 'input_value',
                        name: 'Z'
                    },
                    {
                        type: 'input_value',
                        name: 'R'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RoboticArm_Tool_Offset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_TOOL_OFFSET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D',
                        options: [
                            ['X', 'OFFSET_X'],
                            ['Y', 'OFFSET_Y'],
                            ['Z', 'OFFSET_Z']]
                    },                   
                    {
                        type: 'input_value',
                        name: 'N'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    */
    Blockly.Blocks.tj2560RoboticArm_Suction_Cup = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_SUCTION_CUP,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_SUCTION_CUP_ON, 'ON'],
                            [Blockly.Msg.TJ2560ROBOTICARM_SUCTION_CUP_OFF, 'OFF']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RoboticArm_Clamping_Jaws = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_CLAMPING_JAWS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTICARM_CLAMPING_JAWS_OPEN, 'OPEN'],
                            [Blockly.Msg.TJ2560ROBOTICARM_CLAMPING_JAWS_CLOSE, 'CLOSE']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RoboticArm_Angle_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_ANGLE_MOVE,
                args0: [                   
                    {
                        type: 'input_value',
                        name: 'ANGLE'
                    },
                    {
                        type: 'input_value',
                        name: 'N'
                    },
                    {
                        type: 'input_value',
                        name: 'F'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RoboticArm_status = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTICARM_STATUS,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
