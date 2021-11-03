import './App.css';
import { AppBar, Container, Box, Toolbar, TableFooter, Grid, Typography, Link } from '@mui/material';



function App() {
  return (
    <Container className="App homePageContainer">
      {/* <header className="App-header">
        <AppBar color="default" class="nav-bar">

          <Toolbar>
            <ul>
              <li>Here lies the bar of apps</li>
            </ul>
          </Toolbar>

        </AppBar>
      </header> */}

      <Container maxWidth={false} disableGutters={true}>

        <Grid container>

          <Grid container>

            <Grid item xs={12}>
              <Typography variant='h2'>
                Dummy thicc content
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h4'>
                Caked up in 4k
              </Typography>
            </Grid>

          </Grid>

          <Grid container justifyContent='center'>

            <Grid item xs={1} justifyContent='right'>
              <Link href='#' underline='hover'>
                <Typography variant='h4'>
                  Pics
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={1}>
              <Link href='#' underline='hover'>
                <Typography variant='h4'>
                  Vids
                </Typography>
              </Link>
            </Grid>

          </Grid>

          <Grid container>
            <img className='imageContainer' src='https://fantasyinmotion.files.wordpress.com/2014/01/dark-soul-witch-fantasy-353840.jpg' />
          </Grid>

        </Grid>

      </Container>

      <Container maxWidth={false} disableGutters={true}>

        <Grid container>

          <Grid container>

            <Grid item xs={12}>
              <Typography variant='h2'>
                Dummy thicc content
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h4'>
                Caked up in 4k
              </Typography>
            </Grid>

          </Grid>

          <Grid container justifyContent='center'>

            <Grid item xs={1} justifyContent='right'>
              <Link href='#' underline='hover'>
                <Typography variant='h4'>
                  Pics
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={1}>
              <Link href='#' underline='hover'>
                <Typography variant='h4'>
                  Vids
                </Typography>
              </Link>
            </Grid>

          </Grid>

          <Grid container>
            <img className='imageContainer' src='https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/08/dungeons-and-dragons-bard-2.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5' />
          </Grid>

        </Grid>

      </Container>

      <Container maxWidth={false} disableGutters={true}>

        <Grid container>

          <Grid container>

            <Grid item xs={12}>
              <Typography variant='h2'>
                Dummy thicc content
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h4'>
                Caked up in 4k
              </Typography>
            </Grid>

          </Grid>

          <Grid container justifyContent='center'>

            <Grid item xs={1} justifyContent='right'>
              <Link href='#' underline='hover'>
                <Typography variant='h4'>
                  Pics
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={1}>
              <Link href='#' underline='hover'>
                <Typography variant='h4'>
                  Vids
                </Typography>
              </Link>
            </Grid>

          </Grid>

          <Grid container>
            <img className='imageContainer' src='https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/01/paladin-cover.jpg?q=50&fit=contain&w=943&h=500&dpr=1.5' />
          </Grid>

        </Grid>

      </Container>

      <Container maxWidth={false} disableGutters={true}>
        <Grid container>
          <Container xs={6} md={6} lg={6} justifyContent='center' disableGutters={true}>

            <Grid item>
              <Typography variant='h3'>
                Spells
              </Typography>

            </Grid>
            <Grid item>
              <img className='imageContainer' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afb86caa-39ba-4a91-ba30-89b096bb4c5b/dd2hlhj-1cfe0289-138c-4605-ae62-de8b83d5bc95.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmYjg2Y2FhLTM5YmEtNGE5MS1iYTMwLTg5YjA5NmJiNGM1YlwvZGQyaGxoai0xY2ZlMDI4OS0xMzhjLTQ2MDUtYWU2Mi1kZThiODNkNWJjOTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YDjS2ShhINFNAESWwggUyB9HrNfswIJC_AK6-8pWjNw' />
            </Grid>
          </Container>

          <Container xs={6} md={6} lg={6} justifyContent='center' disableGutters={true}>
            <Grid item>
              <Typography variant='h3'>
                Weapons and Armor
              </Typography>
            </Grid>
            <Grid item>
              <img className='imageContainer' src='https://image.shutterstock.com/image-illustration/shield-swords-isolated-coat-arms-260nw-268312856.jpg' />
            </Grid>
          </Container>
        </Grid>
        
        <Grid container>
        <Container xs={6} md={6} lg={6}  justifyContent='center' disableGutters={true}>
            <Grid item>
              <Typography variant='h3'>
                Classes
              </Typography>
            </Grid>
            <Grid item>
              <img className='imageContainer' src='https://www.wargamer.com/wp-content/uploads/2021/01/dnd-5e-class-guide-main-image-adventuring-party-closeup-900x507.jpg' />
            </Grid>
          </Container>
          <Container xs={6} md={6} lg={6} justifyContent='center' disableGutters={true}>
            <Grid item>
              <Typography variant='h3'>
                Magic Items
              </Typography>
            </Grid>
            <Grid item>
              <img className='imageContainer' src='https://cdn11.bigcommerce.com/s-7ndfb/images/stencil/1280x1280/products/61965/147255/apiijt86z__23227.1612566740.jpg?c=2' />
            </Grid>
          </Container>

        </Grid>
      </Container>



      {/* <Container>
        <Grid container rowspacing={4} columspacing={0}>
        <Container class="home-page-content2">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afb86caa-39ba-4a91-ba30-89b096bb4c5b/dd2hlhj-1cfe0289-138c-4605-ae62-de8b83d5bc95.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmYjg2Y2FhLTM5YmEtNGE5MS1iYTMwLTg5YjA5NmJiNGM1YlwvZGQyaGxoai0xY2ZlMDI4OS0xMzhjLTQ2MDUtYWU2Mi1kZThiODNkNWJjOTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YDjS2ShhINFNAESWwggUyB9HrNfswIJC_AK6-8pWjNw" />
        </Container>
        <Container class="home-page-content2" >
          <img src="https://image.shutterstock.com/image-illustration/shield-swords-isolated-coat-arms-260nw-268312856.jpg" />
        </Container>
        <Container class="home-page-content2" >
          <img src="https://www.wargamer.com/wp-content/uploads/2021/01/dnd-5e-class-guide-main-image-adventuring-party-closeup-900x507.jpg" />
        </Container>
        <Container class="home-page-content2" >
          <img src="https://cdn11.bigcommerce.com/s-7ndfb/images/stencil/1280x1280/products/61965/147255/apiijt86z__23227.1612566740.jpg?c=2" />
        </Container>
        </Grid>
      </Container> */}

      {/* <TableFooter>
        <ul>
          <li>Dummy thicc data for the footer</li>
          <li>Dummy thicc data for the footer</li>
          <li>Dummy thicc data for the footer</li>
        </ul>
      </TableFooter> */}
    </Container>
  );
}

export default App;
