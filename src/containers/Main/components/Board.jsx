import React, { memo } from 'react';
import { Grid, Skeleton } from '../../../components'
import { numberWithCommas } from '../../../commons/utils/regexReplace';
import Card from './Card';

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;
  
  const getValue = (value) => (value === undefined) 
    ? <Skeleton variant="text" width={200} height={60}></Skeleton>
    : numberWithCommas(value);
  
  return(
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card value={getValue(cases)} label="Total de casos" color="#5D78FF"/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7BB29"/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000"/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#A95078"/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887"/>
      </Grid>
    </Grid>
  )
}

export default memo(Board);