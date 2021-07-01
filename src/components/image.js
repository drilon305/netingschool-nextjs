import React from 'react';
import { Image as Img } from 'theme-ui';
import FeatureThumb from 'assets/core-feature.png';


export default function Image({ src, ...rest }) {
  return ()<Image src={FeatureThumb} alt='Thumbnail' />
}
