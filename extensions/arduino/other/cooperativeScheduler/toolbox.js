/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    
    const iconURI = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDJweCIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuODM5IiBmaWxsPSIjOGJiMzAwIiBkPSJNIDExLjUsMS41IEMgMTkuNzUyNCwxLjE4NDE3IDI3LjkxOSwxLjUxNzUgMzYsMi41QyAzOS40NjE0LDguNDI2MjQgNDIuNjI4LDE0LjQyNjIgNDUuNSwyMC41QyA0Mi41ODcyLDI2LjgyMTEgMzkuMjUzOCwzMi45ODc4IDM1LjUsMzlDIDI3LjI1NDMsMzkuODE0OSAxOS4wODc2LDM5LjY0ODMgMTEsMzguNUMgNy42Nzg1OCwzMi42ODYyIDQuNTExOTIsMjYuODUyOSAxLjUsMjFDIDQuNDQ3MjgsMTQuMjcxNSA3Ljc4MDYyLDcuNzcxNDggMTEuNSwxLjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MSIgZmlsbD0iI2E2ZDIwMCIgZD0iTSAxMy41LDQuNSBDIDIwLjE5OTgsNC4xNjk5OCAyNi44NjY1LDQuNTAzMzEgMzMuNSw1LjVDIDM2Ljc1MTYsMTAuMzM0MyAzOS43NTE2LDE1LjMzNDMgNDIuNSwyMC41QyAzOS42MjYyLDI1Ljc0ODYgMzYuNjI2MiwzMC45MTUyIDMzLjUsMzZDIDI2LjgwODUsMzYuODMwOSAyMC4xNDE4LDM2LjY2NDIgMTMuNSwzNS41QyAxMC4wNTI1LDMwLjkzOTUgNy4zODU4NCwyNS45Mzk1IDUuNSwyMC41QyA4LjE3NTA5LDE1LjE0OTggMTAuODQxOCw5LjgxNjQ5IDEzLjUsNC41IFoiLz48L2c+Cjwvc3ZnPgo=';
    
    return `
<category name="%{BKY_COOPERATIVESCHEDULER_CATEGORY}" id="COOPERATIVESCHEDULER_CATEGORY" colour="#A6D200" secondaryColour="#8CB400"  iconURI="${iconURI}">
    <block type="cooperativeScheduler_start" id="cooperativeScheduler_start">
    </block>
    <block type="cooperativeScheduler_setup" id="cooperativeScheduler_setup">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="cooperativeScheduler_sleep" id="cooperativeScheduler_sleep">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">1000</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
