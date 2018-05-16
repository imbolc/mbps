# mbps
Readable network bitrate

## Install

    npm i mbps

## Api

    mbps(bytes, seconds)

## Usage

    > var mbps = require('mbps')
    > mbps(100, 10)
    '80.0 bps'
    > mbps(10e3, 10)
    '7.8 kbps'
    > mbps(10e6, 10)
    '7.6 Mbps'
    > mbps(10e9, 10)
    '7.5 Gbps'

