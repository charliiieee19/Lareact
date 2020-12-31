import React from 'react';
import {
   GridList,
   GridListTile,
   GridListTileBar,
   Container,
   isWidthUp,
   withWidth
} from '@material-ui/core';

const Gallery = props => {
   const columnLength = () => {
      if (isWidthUp('lg', props.width)) {
         return 3;
      }
      if (isWidthUp('md', props.width)) {
         return 3;
      }
      if (isWidthUp('sm', props.width)) {
         return 2;
      }
      if (isWidthUp('xs', props.width)) {
         return 1;
      }
   }

   return (
      <div style={{
         position: 'absolute',
         top: 64,
         left: 0,
         right: 0,
         bottom: 0,
         overflow: 'overlay'
      }}>
         {console.log()}
         {console.log(props.width)}
         <Container>
            <GridList cellHeight={250} cols={columnLength()} style={{ marginTop: 20 }}>
               <GridListTile cols={1}>
                  <img src={require('../../../img/A1.jpg')} />
                  <GridListTileBar title="Room A" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/A2.jpg')} />
                  <GridListTileBar title="Room A" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/A3.jpg')} />
                  <GridListTileBar title="Room A" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/B1.jpg')} />
                  <GridListTileBar title="Room B" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/B2.jpg')} />
                  <GridListTileBar title="Room B" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/B3.jpg')} />
                  <GridListTileBar title="Room B" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/B4.jpg')} />
                  <GridListTileBar title="Room B" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/C1.jpg')} />
                  <GridListTileBar title="Room C" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/C2.jpg')} />
                  <GridListTileBar title="Room C" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/C3.jpg')} />
                  <GridListTileBar title="Room C" />
               </GridListTile>
               <GridListTile cols={1}>
                  <img src={require('../../../img/C4.jpg')} />
                  <GridListTileBar title="Room C" />
               </GridListTile>
            </GridList>
            <br />
            <br />
         </Container>
      </div>
   );
}

export default withWidth()(Gallery);