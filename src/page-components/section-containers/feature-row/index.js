import React from 'react';
import {styles} from './styles';

import {withResponsiveComponent} from '../../../components/screen-media';


const FeatureRow=props=>(<div style={styles.row.get()}>{props.children}</div>);

const ResponsiveFeatureRow=withResponsiveComponent(FeatureRow);

export default ResponsiveFeatureRow;
