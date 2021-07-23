import { 
    Switch,
    Route
 } from 'react-router-dom'
import Home from '@components/home/home'

 const Navigation = () => {
    return (
           <Switch>
               <Route exact path='/home' component={Home} />
               {/* <Route path='/login' component={Login} />
               <Route path='/register' component={Register} />
               <PrivateRoute path='/admin' component={Admin} />
               <Route path='/403' component={Error403} />
               <Route path='*' component={Error404} /> */}
           </Switch>
    )
} 

export default Navigation