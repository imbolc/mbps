module.exports = function mbps (bytes, seconds) {
    var speed = seconds ? bytes * 8 / seconds : 0
    var units = [' bps', ' kbps', ' Mbps', ' Gbps', ' Tbps', 'Pbps', 'Ebps', 'Zbps', 'Ybps']
    var unitNum = 0
    while (speed > 1024) {
        speed = speed / 1024
        unitNum++
    }
    return Math.max(speed, 0.1).toFixed(1) + units[unitNum]
}
