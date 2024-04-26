/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    
    const iconURI = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDJweCIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuODE0IiBmaWxsPSIjN2Y3ZjdmIiBkPSJNIDExLjUsMS41IEMgMTkuNzUyNCwxLjE4NDE3IDI3LjkxOSwxLjUxNzUgMzYsMi41QyAzOS40NjE0LDguNDI2MjQgNDIuNjI4LDE0LjQyNjIgNDUuNSwyMC41QyA0Mi41ODcyLDI2LjgyMTEgMzkuMjUzOCwzMi45ODc4IDM1LjUsMzlDIDI3LjI1NDMsMzkuODE0OSAxOS4wODc2LDM5LjY0ODMgMTEsMzguNUMgNy42Nzg1OCwzMi42ODYyIDQuNTExOTIsMjYuODUyOSAxLjUsMjFDIDQuNDQ3MjgsMTQuMjcxNSA3Ljc4MDYyLDcuNzcxNDggMTEuNSwxLjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2MwYzBjMCIgZD0iTSAxMy41LDQuNSBDIDIwLjE5OTgsNC4xNjk5OCAyNi44NjY1LDQuNTAzMzEgMzMuNSw1LjVDIDM2Ljc1MTYsMTAuMzM0MyAzOS43NTE2LDE1LjMzNDMgNDIuNSwyMC41QyAzOS42MjYyLDI1Ljc0ODYgMzYuNjI2MiwzMC45MTUyIDMzLjUsMzZDIDI2LjgwODUsMzYuODMwOSAyMC4xNDE4LDM2LjY2NDIgMTMuNSwzNS41QyAxMC4yNDg0LDMwLjY2NTcgNy4yNDg0NSwyNS42NjU3IDQuNSwyMC41QyA4LjAzMDcsMTUuNDM1OCAxMS4wMzA3LDEwLjEwMjUgMTMuNSw0LjUgWiIvPjwvZz4KPC9zdmc+Cg==';
    
    return `
<category name="%{BKY_INSERTSOURCECODE_CATEGORY}" id="INSERTSOURCECODE_CATEGORY" colour="#C0C0C0" secondaryColour="#808080" iconURI="${iconURI}">
    <block type="insertSourceCode_commandBlock" id="insertSourceCode_commandBlock">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">pinMode(0, INPUT);</field>
            </shadow>
        </value>
    </block>
    <block type="insertSourceCode_roundBlock" id="insertSourceCode_roundBlock">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">"Hello TJBlock"</field>
            </shadow>
        </value>
    </block>
    <block type="insertSourceCode_booleanBlock" id="insertSourceCode_booleanBlock">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">digitalRead(0)</field>
            </shadow>
        </value>
    </block>
    <block type="insertSourceCode_insertInIncludeArea" id="insertSourceCode_insertInIncludeArea">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">#include "example.h"</field>
            </shadow>
        </value>
    </block>
    <block type="insertSourceCode_insertInDefineArea" id="insertSourceCode_insertInDefineArea">
        <value name="CODE">
            <shadow type="text">
                <field name="TEXT">uint8_t example = 0;</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
