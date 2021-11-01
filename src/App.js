import './App.css';
import { AppBar, Container, Box, Toolbar, TableFooter, Grid } from '@mui/material';



function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <AppBar color="default" class="nav-bar">

          <Toolbar>
            <ul>
              <li>Here lies the bar of apps</li>
            </ul>
          </Toolbar>

        </AppBar>
      </header>

      <Container>
        <Container class="home-page-content">
          <img src='https://fantasyinmotion.files.wordpress.com/2014/01/dark-soul-witch-fantasy-353840.jpg' />
        </Container>
        <Container class="home-page-content">
          <img src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/08/dungeons-and-dragons-bard-2.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5" />
        </Container>
        <Container class="home-page-content">
          <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/01/paladin-cover.jpg?q=50&fit=contain&w=943&h=500&dpr=1.5" />
        </Container>
      </Container>


      <Container>
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
      </Container>
      <TableFooter>
        <ul>
          <li>Dummy thicc data for the footer</li>
          <li>Dummy thicc data for the footer</li>
          <li>Dummy thicc data for the footer</li>
        </ul>
      </TableFooter>
    </Container>
  );
}

export default App;
