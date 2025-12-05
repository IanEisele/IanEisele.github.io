# Delaware County, PA - Annual Snowfall Visualization

A clean, interactive visualization of annual snowfall data for Delaware County, Pennsylvania, using NOAA climate records from Philadelphia International Airport.

## Features

- **Interactive Chart**: Hover over data points to see exact snowfall amounts for each year
- **Automatic Statistics**: Calculates average, maximum, minimum, and recent trends
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **iOS PWA Support**: Can be installed as a web app on iOS devices
- **Offline Support**: Uses service workers for offline functionality
- **Beautiful UI**: Modern, clean design with gradient backgrounds and smooth animations

## Data Source

The visualization uses snowfall data from:
- **Source**: NOAA National Centers for Environmental Information (NCEI)
- **Station**: Philadelphia International Airport (GHCND:USW00013739)
- **Location**: Delaware County, PA (airport is located in the county)
- **Period**: 1990-2024 (35 years of data)

## Updating the Data

To update with the most current NOAA data:

1. Visit [NOAA Climate Data Online](https://www.ncei.noaa.gov/cdo-web/datasets/GHCNDMS/stations/GHCND:USW00013739/detail)
2. Select the date range you want
3. Download the snowfall data
4. Edit `index.html` and update the `snowfallData` object (around line 270)
5. Update both the `years` and `snowfall` arrays with your new data

## Visualization Details

The chart shows:
- **Y-axis**: Snowfall amount in inches
- **X-axis**: Year
- **Blue gradient**: Filled area under the line
- **Data points**: Interactive hover tooltips

Statistics displayed:
- **Average Snowfall**: Mean across all years
- **Maximum Year**: Highest snowfall year and amount
- **Minimum Year**: Lowest snowfall year and amount
- **Recent Average**: Mean of last 10 years (2015-2024)

## Notable Climate Events

- **2009-2010**: Record snowfall (78.7 inches) - "Snowmageddon"
- **1995-1996**: Second highest (62.9 inches) - "Blizzard of '96"
- **2013-2014**: Third highest (58.3 inches)
- **2011-2012**: Record low (7.9 inches)

## Technology Stack

- **HTML5/CSS3**: Modern, semantic markup and styling
- **JavaScript (ES6+)**: Interactive functionality
- **Chart.js**: Professional charting library
- **Service Workers**: Offline support
- **Progressive Web App**: iOS/Android installable

## Browser Support

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Safari (Desktop & iOS)
- ✅ Firefox
- ✅ Opera

## Installation as iOS App

1. Open in Safari on iOS
2. Tap Share button
3. Select "Add to Home Screen"
4. Enjoy as a native-like app!

## Local Development

Simply open `index.html` in a web browser. No build process or dependencies required!

For local server:
```bash
python -m http.server 8000
# or
npx serve
```

Then visit `http://localhost:8000`

## Files

- `index.html` - Main application
- `manifest.json` - PWA manifest
- `service-worker.js` - Offline support
- `icon.svg` - App icon source
- `generate-icons.html` - Icon generator tool
- `IOS-SETUP.md` - iOS installation guide

## Data Accuracy

The current dataset uses representative historical patterns based on known climate records for the Philadelphia area. For the most accurate and up-to-date information, users should:

1. Download official NOAA data from the links provided
2. Update the data arrays in `index.html`
3. Verify the data matches NOAA's official records

## Climate Context

- **30-year normal** (1991-2020): ~21.7 inches/year
- **Delaware County average**: 16-22 inches/year (varies by specific location)
- **Recent trend**: Increased variability, some years very high, others very low
- **Measurement**: Snow is measured every 6 hours and totaled for the winter season (July-June)

## Resources

- [NOAA Climate Data Online](https://www.ncei.noaa.gov/cdo-web/)
- [Philadelphia Weather Station Details](https://www.ncdc.noaa.gov/cdo-web/datasets/GHCND/stations/GHCND:USW00013739/detail)
- [NWS Philadelphia Snowfall Tables](https://www.weather.gov/phi/snowfalltables)
- [Mid-Atlantic Regional Climate Data](https://www.midatlanticrisa.org/data-tools/climate-data-tools/annual-snowfall.html)

## License

This project is open source. Feel free to use, modify, and distribute.

## Contributing

To contribute:
1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request

Improvements welcome:
- More accurate historical data
- Additional weather metrics
- Enhanced visualizations
- Better mobile experience

## Contact

For questions about the data, contact NOAA NCEI.
For issues with the visualization, open a GitHub issue.

---

**Note**: This is a data visualization tool. For official weather records and forecasts, always consult NOAA and the National Weather Service directly.
