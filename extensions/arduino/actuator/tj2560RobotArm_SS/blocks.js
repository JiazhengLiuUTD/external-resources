/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#006000';
    const secondaryColour = '#006000';

    Blockly.Blocks.tj2560RobotArm_SS_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'PORT',
                        options: [
                            ['P3', 'P3'],
                            ['P4', 'P4'],
                            ['P5', 'P5'],
                            ['P6', 'P6']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_SS_home = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_HOME,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_SS_reset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_RESET,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_SS_offset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_OFFSET,
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

    Blockly.Blocks.tj2560RobotArm_SS_M20 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_M20,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MOVE',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G00, 'MOVEJ'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G01, 'MOVEL'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G05, 'JUMP']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G91, 'INCREMENT']]
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

    Blockly.Blocks.tj2560RobotArm_SS_Speed = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_SPEED,
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

    Blockly.Blocks.tj2560RobotArm_SS_Dir_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_DIR_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'D',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_SS_FORWARD, 'Y'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_BACKWARD, 'Y-'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_UP, 'Z'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_DOWN, 'Z-'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_RIGHT, 'X'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_LEFT, 'X-']]
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

    Blockly.Blocks.tj2560RobotArm_SS_M21 = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_M21,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G91, 'INCREMENT']]
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

    Blockly.Blocks.tj2560RobotArm_SS_Axis_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_AXIS_MOVE,
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
                            [Blockly.Msg.TJ2560ROBOTARM_SS_CW, '-1'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_CCW, '1']]
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

    Blockly.Blocks.tj2560RobotArm_SS_Arc_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_ARC_MOVE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'REVOLVE',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_SS_CW, 'CW'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_CCW, 'CCW']]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'POS',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G90, 'GOTO'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_G91, 'INCREMENT']]
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

    Blockly.Blocks.tj2560RobotArm_SS_Tool_Offset = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_TOOL_OFFSET,
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

    Blockly.Blocks.tj2560RobotArm_SS_Suction_Cup = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_SUCTION_CUP,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'STA',
                        options: [
                            [Blockly.Msg.TJ2560ROBOTARM_SS_SUCTION_CUP_ON, 'ON'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_SUCTION_CUP_OFF, 'OFF'],
                            [Blockly.Msg.TJ2560ROBOTARM_SS_SUCTION_CUP_BLOW, 'BLOW']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.tj2560RobotArm_SS_Angle_Move = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_ANGLE_MOVE,
                args0: [                   
                    {
                        type: 'input_value',
                        name: 'ANGLE'
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

    Blockly.Blocks.tj2560RobotArm_SS_status = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.TJ2560ROBOTARM_SS_STATUS,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
