import React from 'react';

import { AppBase, AppTitle, AppSubTitle } from './loginPageStyles';


import SignInButton from '../../components/Layout/SignInButton';

const LoginPage = () => (
  <AppBase id="app" data-testid="login">
    <AppTitle>ReacTrelloUbeequo</AppTitle>
    <AppSubTitle>Pachi Badilla</AppSubTitle>
    <SignInButton text="Create new Dashboard" />
  </AppBase>
);

export default LoginPage;
