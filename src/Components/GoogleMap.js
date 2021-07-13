import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SampleMap from '../Media/coffee_shop_map.png';

export default function GoogleMap(props) {
    return (
      <>
          {/* In the meantime use a sample image to show what it'd look like */}
          <Box display="flex" alignItems="flex-start" height={30}  justifyContent="center">
              <Typography>{props.address}</Typography>
          </Box>
          <Box display="flex" alignItems="flex-start" height={600}  justifyContent="center">
              <img src={SampleMap} alt="" />
          </Box>
      </>
  )
};

GoogleMap.propTypes = {
    address: PropTypes.string,
};
