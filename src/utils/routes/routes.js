import { 
    Switch,
    Route
 } from 'react-router-dom'
import Home from '@components/home/home'
import About from '@components/about/about'
import Contacts from '@components/contacts/contacts'

 const Routes = () => {
    return (
           <Switch>
               <Route exact path='/home' component={Home} />
               <Route exact path='/about' component={About} />
               <Route exact path='/contacts' component={Contacts} />
               {/* <Route path='/login' component={Login} />
               <Route path='/register' component={Register} />
               <PrivateRoute path='/admin' component={Admin} />
               <Route path='/403' component={Error403} />
               <Route path='*' component={Error404} /> */}
           </Switch>
    )
} 

export default Routes