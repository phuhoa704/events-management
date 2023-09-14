import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { router } from './configs/router';
import Homepage from './views/Home';
import Login from './views/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UserManagement from './components/Dashboard/Contents/Admin/UserManagement';
import LogsManagement from './components/Dashboard/Contents/Admin/LogsManagement';
import AdminDashboard from './components/Dashboard/Contents/Admin/Dashboard';
import UserInformation from './components/Dashboard/Contents/User/Information';
import UserHistory from './components/Dashboard/Contents/User/History';
import Deals from './views/Deals';
import UserTransaction from './components/Dashboard/Contents/User/Transaction';
import Notification from './components/Dashboard/Contents/Notification';
import AdminDashboardLayout from './views/AdminDashboard';
import DashboardLayout from './views/Dashboard';
import Signup from './views/Signup';
import { useDispatch, useSelector } from 'react-redux';
import TopBarProgress from "react-topbar-progress-indicator";
import './App.css';
import { setRedirect } from './redux/slices/Loading';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import Categories from './components/Dashboard/Contents/Admin/Categories';
import { CC_TOKEN, CC_TYPETOKEN, CC_USER } from './configs/constants';
import { saveToken, saveTypeToken, saveUser, saveUserDashboard } from './redux/slices/Auth';
import { getListPermissions } from './redux/actions/Permissions';

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { token, user } = useSelector(state => state.auth);
  const loading = useSelector(state => state.loading.loading);
  const redirect = useSelector(state => state.loading.redirect);
  TopBarProgress.config({
    barColors: {
      "0": '#C7F3D3',
      "1.0": "#073313"
    }
  })
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  useEffect(() => {
    dispatch(setRedirect(true));
    const timer = setTimeout(() => {
      dispatch(setRedirect(false))
    }, 1500)
    return () => clearTimeout(timer)
  }, [pathname, dispatch])
  useEffect(() => {
    let token = window.localStorage.getItem(CC_TOKEN);
    let typeToken = window.localStorage.getItem(CC_TYPETOKEN);
    let user = window.localStorage.getItem(CC_USER);
    if(token && user) {
      dispatch(saveToken(token));
      dispatch(saveTypeToken(typeToken));
      dispatch(saveUser(JSON.parse(user)));
      dispatch(saveUserDashboard((JSON.parse(user).user_type === 1) ? router.ADM_DASHBOARD : router.DASHBOARD));
    }
  }, [dispatch])
  useEffect(() => {
    if(Object.keys(user)) {
      dispatch(getListPermissions([]));
    }
  }, [user])
  const isSticky = (e) => {
    const header = document.querySelector('.navbar');
    const sidebar = document.querySelector('.dashboard-sidebar');
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 200 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    }
    if (sidebar) {
      scrollTop >= 200 ? sidebar.classList.add('is-sticky-sidebar') : sidebar.classList.remove('is-sticky-sidebar');
    }
  };
  const NoAuthRoute = ({ children }) => {
    return token ? <Homepage /> : children
  }
  const AuthRoute = ({ children }) => {
    return token ? children : <Homepage />
  }
  const AdminRoute = ({ children }) => {
    return (user.user_type === 1) ? children : <Homepage />
  }
  return (
    <div className="App">
      {redirect && <TopBarProgress />}
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path={router.HOME} element={<Homepage />} />
        <Route path={router.LOGIN} element={<NoAuthRoute><Login /></NoAuthRoute>} />
        <Route path={router.DEALS} element={<Deals />} />
        <Route path={router.SIGNUP} element={<NoAuthRoute><Signup /></NoAuthRoute>} />
        <Route path={router.DASHBOARD} element={<AuthRoute><DashboardLayout /></AuthRoute>}>
          <Route path={''} index element={<UserInformation />} />
          <Route path={router.USER_HISTORY} element={<UserHistory />} />
          <Route path={router.USER_TRANSACTION} element={<UserTransaction />} />
          <Route path={router.NOTIFICATION} element={<Notification />} />
        </Route>
        <Route path={router.ADM_DASHBOARD} element={<AdminDashboardLayout />}>
          <Route path={''} index element={<AdminDashboard />} />
          <Route path={router.ADMIN_USER_MANAGEMENT} element={<UserManagement />} />
          <Route path={router.ADMIN_LOG_MANAGEMENT} element={<LogsManagement />} />
          <Route path={router.ADMIN_CATEGORIES} element={<Categories />}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      {!pathname.includes(router.ADM_DASHBOARD) && <Footer />}
    </div>
  );
}

export default App;
