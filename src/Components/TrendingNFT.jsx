import React from 'react'
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TrendingNFT({nftData}){
    return(
        <div className = 'nft--container'>
            <Box sx={{ width: '100%' }}>    
                <Grid container rowSpacing={2} columnSpacing={{ xs: 0.1, sm: 0, md: 0 }}>
                {/* <h5>{nftData.name}<br/>{nftData.symbol}</h5> */}
                <Grid item xs={4}>
                    {/* <Item>1</Item> */}
                    <div className = 'nft--title'>
                        <img src={nftData.thumb} alt="" />
                        {/* <h5>{nftData.name}<br/>{nftData.symbol}</h5> */}
                        <h5>{nftData.symbol}</h5>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    {/* <Item>2</Item> */}
                    <div className = 'nft--price'>
                        <h5>{nftData.data.floor_price}</h5>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    {/* <Item>3</Item> */}
                    <div className = 'nft--graph'>
                        {/* <h5>{nftData.data.floor_price}</h5> */}
                        <img src={nftData.data.sparkline} alt="" />
                    </div>
                </Grid>
                </Grid>
            </Box>
            <hr/>
        </div>
  

    )
}