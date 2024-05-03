import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({width, height}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 92 87"
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}>
    <Path
      fill="#3b5fdf"
      d="M91.5 32.5v5c-2.257 2.084-4.757 2.417-7.5 1l-1 38c-.435 4.555-2.602 7.888-6.5 10h-62c-3.46-1.975-5.627-4.975-6.5-9l-1-39c-2.743 1.417-5.243 1.084-7.5-1v-5A1290.884 1290.884 0 0 0 37.5 4c5.333-4.667 10.667-4.667 16 0a1290.884 1290.884 0 0 0 38 28.5Zm-48-22a8.434 8.434 0 0 1 4 .5 737.313 737.313 0 0 0 26 19.5 353.221 353.221 0 0 1 .5 46L72.5 78c-3.317.498-6.65.665-10 .5a512.47 512.47 0 0 0-.5-32c-.833-2.167-2.333-3.667-4.5-4.5-8-.667-16-.667-24 0-2.167.833-3.667 2.333-4.5 4.5a512.47 512.47 0 0 0-.5 32 50.441 50.441 0 0 1-10-.5L17 76.5a353.221 353.221 0 0 1 .5-46 390.232 390.232 0 0 0 26-20Zm-6 39h16v29h-16v-29Z"
      style={{
        opacity: 0.925,
      }}
    />
  </Svg>
);
export default SvgComponent;
