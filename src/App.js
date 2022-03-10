import './App.css';
import IdCard from "./idCard/IdCard";
import Movie from "./movie/Movie";
import Book from "./book/Book";
import Wrapper from "./wrapper/Wrapper";

function App() {
  return (<>

          <h2 style={{textAlign:"center"}}>Recommendation library</h2>
          <Wrapper>

              <table className={'table table-striped mt-4'}>
                  <thead>
                    <th>Id Card</th>
                    <th>Movie</th>
                    <th>Book</th>
                  </thead>
                  <tbody>
                  <tr>
                      <td><IdCard name={'Marko'} date={'11. 11. 1990'} surname={'Markovic'} city={'Podgorica'} src={"./assets/idImages/marko.jpg"}/></td>
                      <td><Movie title={'The godfather'} year={2007} genre={'Crime'} director={"Francis Ford Coppola"} actors={["Robert de Niro","Al Pacino"]} src={"./assets/movieImages/godfather.jpg"}/></td>
                      <td><Book title={'1984'} year={1949} author={"George Orwell"} quote={"In the face of pain there are no heroes."} src={"./assets/bookImages/1984.jpg"}/></td>
                  </tr>
                  <tr>
                      <td><IdCard name={'Janko'} date={'10. 10. 1980'} surname={'Jankovic'} city={'Budva'} src={"./assets/idImages/janko.jpg"}/></td>
                      <td><Movie title={'The dark knight'} year={2008} genre={'Crime'} director={"Christoper Nolan"} actors={["Christian Bale","Heath Ledger"]} src={"./assets/movieImages/batman.jpg"}/></td>
                      <td><Book title={'To kill a mockingbird'} year={1960} author={"Harper Lee"}
                                quote={"The one thing that doesn't abide by majority rule is a person's conscience."} src={"./assets/bookImages/mockingbird.jpg"}/></td>
                  </tr>
                  <tr>
                      <td><IdCard name={'Ivana'} date={'12. 12. 2000'} surname={'Ivanovic'} city={'Podgorica'} src={"./assets/idImages/ivana.jpg"}/></td>
                      <td><Movie title={'20,000 Leagues Under the Sea'} year={1997} genre={'Fiction'} director={"Michael Anderson"} actors={['Richard Creena','Julie Cox']} src={"./assets/movieImages/sea.jpg"}/></td>
                      <td><Book title={'War and peace'} year={1867} author={"Leo Tolstoy"} quote={"There is no greatness where there is not simplicity, goodness, and truth."} src={"./assets/bookImages/warandpeace.jpg"}/></td>
                  </tr>
                  </tbody>
              </table>
           </Wrapper>
      </>

  );
}

export default App;
