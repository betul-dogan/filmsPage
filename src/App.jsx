import Film from './Film'
import Header from './Header'
import { films } from './assets/Data'
function App() {
  return (
    <>
    <Header/>
    {
      films?.map((film)=>(
        // films elemanlarına tek tek Film componenti içinde "filmPropu" adı altında olarak erişebilirsiniz
        <Film key={film.id} filmPropsu={film}/>
      ))
    }
    </>
  )
}

export default App
