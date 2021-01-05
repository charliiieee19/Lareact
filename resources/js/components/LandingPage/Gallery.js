import React, { useState } from 'react';
import {
   GridList,
   GridListTile,
   GridListTileBar,
   Container,
   isWidthUp,
   withWidth,
   Dialog,
   DialogContent,
   Slide
} from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

const Gallery = props => {
   const [openDialog, setOpenDialog] = useState(false);
   const [imgPath, setImgPath] = useState("A1");
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

   const handleDialog = (path) => {
      setOpenDialog(true);
      setImgPath(path);
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
         <Container>
            <Dialog
               open={openDialog}
               TransitionComponent={Transition}
               fullWidth
               maxWidth="lg"
               keepMounted
               onClose={() => setOpenDialog(false)}
            >
               <DialogContent>
                  <img
                     style={{
                        width: 'auto',
                        height: '100%',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                     }}
                     src={require(`../../../img/${imgPath}.jpg`)}
                  />
               </DialogContent>
            </Dialog>
            <GridList cellHeight={250} cols={columnLength()} style={{ marginTop: 20 }}>
               <GridListTile cols={1} onClick={() => handleDialog('A1')}>
                  <img src={require('../../../img/A1.jpg')} />
                  <GridListTileBar title="Room A" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('A2')}>
                  <img src={require('../../../img/A2.jpg')} />
                  <GridListTileBar title="Room A" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('A3')}>
                  <img src={require('../../../img/A3.jpg')} />
                  <GridListTileBar title="Room A" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('B1')}>
                  <img src={require('../../../img/B1.jpg')} />
                  <GridListTileBar title="Room B" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('B2')}>
                  <img src={require('../../../img/B2.jpg')} />
                  <GridListTileBar title="Room B" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('B3')}>
                  <img src={require('../../../img/B3.jpg')} />
                  <GridListTileBar title="Room B" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('B4')}>
                  <img src={require('../../../img/B4.jpg')} />
                  <GridListTileBar title="Room B" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('C1')}>
                  <img src={require('../../../img/C1.jpg')} />
                  <GridListTileBar title="Room C" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('C2')}>
                  <img src={require('../../../img/C2.jpg')} />
                  <GridListTileBar title="Room C" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('C3')}>
                  <img src={require('../../../img/C3.jpg')} />
                  <GridListTileBar title="Room C" />
               </GridListTile>
               <GridListTile cols={1} onClick={() => handleDialog('C4')}>
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