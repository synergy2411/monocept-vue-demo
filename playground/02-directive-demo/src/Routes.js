import Home from './components/router-demo/Home.vue'
import User from './components/router-demo/user/User.vue'
import UserStart from './components/router-demo/user/UserStart.vue'
import UserEdit from './components/router-demo/user/UserEdit.vue'
import UserDetail from './components/router-demo/user/UserDetail.vue'

export const routes = [
    {
        path : "",       // http://localhost:8080
        component : Home
    },{
        path : "/user",
        component : User,
        children : [
            {
                path : "",
                component : UserStart
            }, {
                path : '/user/:id',
                component : UserDetail,
                beforeEnter: (to, from, next) => {
                    const rnd = Math.floor(Math.random()*10);
                    if(rnd > 2){
                        next()
                    }else{
                        next(false);
                    }
                    
                }
            },{
                path : "/user/:id/edit",
                component : UserEdit
            }
        ]
    }                       

]


// http://localhost:8080/user : UserStart
// http://localhost:8080/user/1 : UserDetails
// http://localhost:8080/user/1/edit : UserEdit