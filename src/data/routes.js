const routes = [
  {
    index: true,
    label: 'Krishna Bajpai',
    path: '/',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];
<Router>
  <Switch>
    <Route path="/resume/resume">
      <Redirect to="/resume" />
    </Route>
    {Routes.map((route) => (
      <Route key={route.path} exact path={route.path}>
        {/* your component rendering logic */}
      </Route>
    ))}
  </Switch>
</Router>

export default routes;
