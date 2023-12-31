import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Cart } from './pages/cart'
import { ProductDetail} from './pages/detail'
import { Notfound} from './pages/notfound'

import { Layout } from './components/layout'

const router = createBrowserRouter ([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>
      },
      {
        path: "*",
        element: <Notfound/>
      }
    ]
  }
])

export { router }