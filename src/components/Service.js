import React from 'react';
import { makeStyles,Card,CardActionArea,CardActions,CardContent,Typography } from '@material-ui/core';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const classes = makeStyles({
  card: {
  
  },
  Typography: {
  }
});



class Swiper extends React.Component {
    
  render() {

      return (
        
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#1e576d42' }} />  
   
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
        
        <ParallaxLayer offset={1.7} speed={0.2} style={{ pointerEvents: 'none' }}>
          <img src={'/img/zok2.png'} style={{ width: '25%', marginLeft: '78%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={0.2} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '78%' }} />
        </ParallaxLayer>
        

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: ('/img/jes.png', true)
          }}
        />

        <ParallaxLayer
          offset={0}
          origo= 'slidercenter'
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={'/img/brt.png'} style={{ width: '40%' }} />
         
          <Card className={classes.card}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="secondary">
          WiniCari Mobile
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          Une application mobile qui va permettre de connaître <br></br>  non seulement la plus proche station mais,aussi <br></br>  l'heure d'arriver des bus. <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
        
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={'/img/iri.png'} style={{ width: '30%' }} />
         
          <Card className={classes.card}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="secondary">
          OS Ticket
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          le Dispositif est destiné à faciliter la gestion <br></br>de perception embarquée sur bus <br></br> à partir d'une base locale..<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
        
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          { <img src= {'/img/jes1.png'} style={{ width: '40%' }} /> }
          <Card className={classes.card}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="secondary">
          Plateforme Web

          </Typography>
          <Typography variant="body" color="textPrimary" component="p">
          Une plateforme web qui va permettre<br></br> de connaître les dates d'arriver des bus et <br></br>de gérer le parc des sociétés de transport.<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card>
   
        </ParallaxLayer>
       
      </Parallax>
    
       );    
    }    
    
}

    export default Swiper;
    
    


   




