module.exports = angular.module('stf.device-status', [])
  .filter('statusNameAction', function (gettext) {
    return function (text) {
      return {
        'absent': gettext('Disconnected'),
        'present': gettext('Connected'),
        'offline': gettext('Offline'),
        'unauthorized': gettext('Unauthorized'),
        'preparing': gettext('Preparing'),
        'ready': gettext('Ready'),
        'using': gettext('Stop Using'),
        'busy': gettext('Busy'),
        'available': gettext('Use')
      }[text] || gettext('Unknown')
    }
  })
  .filter('statusNamePassive', function (gettext) {
    return function (text) {
      return {
        'absent': gettext('Disconnected'),
        'present': gettext('Connected'),
        'offline': gettext('Offline'),
        'unauthorized': gettext('Unauthorized'),
        'preparing': gettext('Preparing'),
        'ready': gettext('Ready'),
        'using': gettext('Using'),
        'busy': gettext('Busy'),
        'available': gettext('Available')
      }[text] || gettext('Unknown')
    }
  })
  .filter('batteryHealth', function (gettext) {
    return function (text) {
      return {
        'cold': gettext('Cold'),
        'good': gettext('Good'),
        'dead': gettext('Dead'),
        'over_voltage': gettext('Over Voltage'),
        'overheat': gettext('Overheat'),
        'unspecified_failure': gettext('Unspecified Failure')
      }[text] || gettext('-')
    }
  })
  .filter('batterySource', function (gettext) {
    return function (text) {
      return {
        'ac': gettext('AC'),
        'usb': gettext('USB'),
        'wireless': gettext('Wireless')
      }[text] || gettext('-')
    }
  })
  .filter('batteryStatus', function (gettext) {
    return function (text) {
      return {
        'charging': gettext('Charging'),
        'discharging': gettext('Discharging'),
        'full': gettext('Full'),
        'not_charging': gettext('Not Charging')
      }[text] || gettext('-')
    }
  })
  .filter('displayDensity', function (gettext) {
    return function (text) {
      return {
        '0.5': 'LDPI', // (120 dpi)
        '1': 'MDPI', // (160 dpi)
        '1.5': 'HDPI', // (240 dpi)
        '2': 'XHDPI', // (320 dpi)
        '3': 'XXHDPI', // (480 dpi)
        '4': 'XXXHDPI' // (640 dpi)
      }[text] || text
    }
  })
  .filter('networkType', function (gettext) {
    return function (text) {
      return {
        'bluetooth': gettext('Bluetooth'),
        'dummy': gettext('Dummy'),
        'ethernet': gettext('Ethernet'),
        'mobile': gettext('Mobile'),
        'mobile_dun': gettext('Mobile DUN'),
        'mobile_hipri': gettext('Mobile High Priority'),
        'mobile_mms': gettext('Mobile MMS'),
        'mobile_supl': gettext('Mobile SUPL'),
        'mobile_wifi': gettext('WiFi'),
        'wimax': gettext('WiMAX')
      }[text] || text
    }
  })
  .filter('networkSubType', function (gettext) {
    return function (text) {
      return {
        'mobile_wifi': gettext('WiFi'),
      }[text] || text
    }
  })
  .filter('humanizedBool', function (gettext) {
    return function (text) {
      switch (text) {
        case true:
          return gettext('Yes')
          break;
        case false:
          return gettext('No')
          break;
        default:
          return gettext('-')
      }
    }
  })
