import React from 'react'
import Banner from './serviceBanner/Banner'
import Grid from './gridView/Grid'
import Watermark from '../../Layouts/Body/Watermark'
import SecondBanner from '../../Layouts/Body/SecondBanner'


const Service = () => {
  return (
    <div>
        <Banner/>
        <Grid/>
        <Watermark/>
        <SecondBanner/>

    </div>
  )
}

export default Service