import { Navigate, Outlet } from 'react-router-dom';


function PublicRoutes() {
 const user = { name: 'Ivan' };
//  const user = null
 if (user) return <Outlet/>

 return <Navigate to="profile"/>

}

export default PublicRoutes;
