import { Suspense, useContext } from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import Loader from '@uiw/react-loader';
import { hsvaToHslaString } from '@uiw/react-color';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Context } from '../../Store';
import { routes } from '../../router';
import Header from '../../components/Header';

const Loading = (
  <div style={{ padding: 30 }}>
    <Loader tip="loading..." />
  </div>
);

export default function Root() {
  const { hsva } = useContext(Context);
  return (
    <HashRouter>
      <div style={{ backgroundColor: hsvaToHslaString(hsva), transition: 'background-color 0.3s ease 0s', minHeight: '100%' }}>
        <GitHubCorners fixed zIndex={99} size={60} target="__blank" href="https://github.com/uiwjs/react-color" />
        <Header menus={routes} />
        <Suspense
          fallback={
            <div style={{ padding: 30, textAlign: 'center' }}>
              <Loader tip="loading..." />
            </div>
          }
        >
          <Routes>
            {routes.map(({ component: Child, path }, idx) => {
              // @ts-ignore
              const Com = Child as any;
              return (
                <Route
                  key={idx}
                  path={path}
                  element={
                    <Suspense fallback={Loading}>
                      <Com />
                    </Suspense>
                  }
                />
              );
              // if (route.divider) {
              //   return null;
              // }
              // return <RouteWithSubRoutes key={idx} {...route} />;
            })}
          </Routes>
        </Suspense>
      </div>
    </HashRouter>
  );
}

// function RouteWithSubRoutes(route: any) {
//   return (
//     <Route
//       path={route.path}
//       render={(props) => {
//         return <route.component {...props} routes={route.routes} />;
//       }}
//     />
//   );
// }
