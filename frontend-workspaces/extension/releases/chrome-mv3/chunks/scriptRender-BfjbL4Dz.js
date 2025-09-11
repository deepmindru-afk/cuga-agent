import{e as i,R as e}from"./sidepanel-CYx2dhah.js";import{l as a,a as B,A as s,g as r,b as w}from"./AppContainer-DlJO1h2A.js";/**
* @license
* 
* (C) Copyright IBM Corp. 2017, 2025. All Rights Reserved.
* 
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
* 
* http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
* 
* @carbon/ai-chat 0.3.3
* 
* Built: Jul 11 2025 1:09 pm -04:00
* 
* 
*/function M(f){return f=f.endsWith("/")?f:`${f}/`,`
/* IBM Fonts */
@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Light-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-LightItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Regular-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-Italic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBold-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Mono/fonts/split/woff/IBMPlexMono-SemiBoldItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Light-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Light-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-LightItalic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-LightItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Regular-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Regular-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-Italic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-Italic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBold-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBold-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Sans';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff2/IBMPlexSans-SemiBoldItalic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Sans/fonts/split/woff/IBMPlexSans-SemiBoldItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Light-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Light-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 300;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-LightItalic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-LightItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Regular-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Regular-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 400;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-Italic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-Italic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBold-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBold-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Cyrillic.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Cyrillic.woff') format('woff');
  unicode-range: 'U+0400-045F', 'U+0472-0473', 'U+0490-049D', 'U+04A0-04A5', 'U+04AA-04AB', 'U+04AE-04B3', 'U+04B6-04BB', 'U+04C0-04C2', 'U+04CF-04D9', 'U+04DC-04DF', 'U+04E2-04E9', 'U+04EE-04F5', 'U+04F8-04F9';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Pi.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Pi.woff') format('woff');
  unicode-range: 'U+0E3F', 'U+2032-2033', 'U+2070', 'U+2075-2079', 'U+2080-2081', 'U+2083', 'U+2085-2089', 'U+2113', 'U+2116', 'U+2126', 'U+212E', 'U+2150-2151', 'U+2153-215E', 'U+2190-2199', 'U+21A9-21AA', 'U+21B0-21B3', 'U+21B6-21B7', 'U+21BA-21BB', 'U+21C4', 'U+21C6', 'U+2202', 'U+2206', 'U+220F', 'U+2211', 'U+221A', 'U+221E', 'U+222B', 'U+2248', 'U+2260', 'U+2264-2265', 'U+25CA', 'U+2713', 'U+274C', 'U+2B0E-2B11', 'U+EBE1-EBE7', 'U+ECE0', 'U+EFCC';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Latin3.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Latin3.woff') format('woff');
  unicode-range: 'U+0102-0103', 'U+1EA0-1EF9', 'U+20AB';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Latin2.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Latin2.woff') format('woff');
  unicode-range: 'U+0100-024F', 'U+0259', 'U+1E00-1EFF', 'U+20A0-20AB', 'U+20AD-20CF', 'U+2C60-2C7F', 'U+A720-A7FF', 'U+FB01-FB02';
}

@font-face {
  font-display: 'swap';
  font-family: 'IBM Plex Serif';
  font-style: italic;
  font-weight: 600;
  src:
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff2/IBMPlexSerif-SemiBoldItalic-Latin1.woff2') format('woff2'),
    url('${f}fonts/IBM-Plex-Serif/fonts/split/woff/IBMPlexSerif-SemiBoldItalic-Latin1.woff') format('woff');
  unicode-range: 'U+0000', 'U+000D', 'U+0020-007E', 'U+00A0-00A3', 'U+00A4-00FF', 'U+0131', 'U+0152-0153', 'U+02C6', 'U+02DA', 'U+02DC', 'U+2013-2014', 'U+2018-201A', 'U+201C-201E', 'U+2020-2022', 'U+2026', 'U+2030', 'U+2039-203A', 'U+2044', 'U+2074', 'U+20AC', 'U+2122', 'U+2212', 'U+FB01-FB02';
}`}async function I(f){const t=r(f),n=`${w(f)}/versions/${t}`;return M(n)}async function c({serviceManager:f}){var U;const{config:t}=f.store.getState(),[l,n]=await Promise.all([(U=t.public.__ibm__)!=null&&U.useShadowRoot?a():B(),I(t.public)]),o=document.createElement("div");f.container=o,f.customHostElement?(o.style.setProperty("width","100%","important"),o.style.setProperty("height","100%","important"),f.customHostElement.appendChild(o)):(document.body.appendChild(o),o.style.setProperty("width","0","important"),o.style.setProperty("height","0","important")),i.render(e.createElement(s,{serviceManager:f,hostElement:f.customHostElement,applicationStyles:l,fontStyles:n}),o)}export{c as render};
