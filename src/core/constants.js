const appConstants = Object.freeze({
  // Validation patterns
  VALIDATION_PATTERNS: {
    onlyAlphabet: '^[a-zA-Z]+$', // Applicable for alphapet field
    alphaNumeric: '[أ-يa-zA-Z-_()0-9]+', // Applicable for alpha Numeric field
    alphaNumericWithDot: '[أ-يa-zA-Z-_()0-9.]+', // Applicable for alpha Numeric with dot
    alphaNumericWithSpace: '[أ-يa-zA-Z-_()0-9 ]+', // Applicable for alpha Numeric with space
    onlyNumber: '^[0-9]*$', // Applicable for Number field
    alphabetWithSpace: '^[a-zA-Z ]+$', // Applicable for alphapet with space
    phonenumber: '[+0-9 ]+', // Applicable for phone Number field
    email:
      '([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1}[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*)((@[a-zA-Z-]{2}[a-zA-Z-]*)[\\.](([a-zA-Z]{3}|[a-zA-Z]{2})|([a-zA-Z]{3}|[a-zA-Z]{2}).[a-zA-Z]{2}))', // Applicable for email field
    countryCode: '[+0-9]+', // Applicable for country code field
    password: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
    url: 'https?://.+', // Applicable for URL field
    priceFormatPattern: '[0-9.,]+', // Applicable for price format
  },

  ICON_TEMPLATE: {
    plus :['icon-plus','icon-minus'],
    keyboardArrow: ['icon-keyboard_arrow_right','icon-keyboard_arrow_down'],
    circleArrow: ['icon-circle-right','icon-circle-down'],
    arrow: ['icon-arrow-right','icon-arrow-down'],
    tick: ['icon-checkbox-unchecked','icon-checkbox-checked'],
  },
  MONTHS_TEMPLATE: [{'name':'Jan'}, {'name':'Feb'}, {'name':'Mar'}, {'name':'Apr'}, {'name':'May'}, {'name':'Jun'}, {'name':'Jul'}, {'name':'Aug'}, {'name':'Sep'}, {'name':'Oct'}, {'name':'Nov'}, {'name':'Dec'}],

});
export default appConstants;

// plus,keyboardArrow,tick,circleArrow,arrow
export const IconTemplate = {'icon':'circleArrow'};

//https://apexcharts.com/docs/options/theme/#palette
export const ChartColorPalette = {
'palette1' : {'color1':'#008FFB','color2':'#00E396','color3':'#FEB019','color4':'#FF4560','color5':'#775DD0'},
'palette2' : {'color1':'#3F51B5','color2':'#03A9F4','color3':'#4CAF50','color4':'#F9CE1D','color5':'#FF9800'},
'palette3' : {'color1':'#33B2DF','color2':'#546E7A','color3':'#D4526E','color4':'#13D8AA','color5':'#A5978B'},
'palette4' : {'color1':'#4ECDC4','color2':'#C7F464','color3':'#81D4FA','color4':'#546E7A','color5':'#FD6A6A'},
'palette5' : {'color1':'#2B908F','color2':'#F9A3A4','color3':'#90EE7E','color4':'#FA4443','color5':'#69D2E7'},
'palette6' : {'color1':'#449DD1','color2':'#F86624','color3':'#EA3546','color4':'#662E9B','color5':'#C5D86D'},
'palette7' : {'color1':'#D7263D','color2':'#1B998B','color3':'#2E294E','color4':'#F46036','color5':'#E2C044'},
'palette8' : {'color1':'#662E9B','color2':'#F86624','color3':'#F9C80E','color4':'#EA3546','color5':'#43BCCD'},
'palette9' : {'color1':'#5C4742','color2':'#A5978B','color3':'#8D5B4C','color4':'#5A2A27','color5':'#C4BBAF'},
'palette10' : {'color1':'#A300D6','color2':'#7D02EB','color3':'#5653FE','color4':'#2983FF','color5':'#00B1F2'}};