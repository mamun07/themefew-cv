import React from 'react';
import Banner from './container/Banner';
import SidebarMenu from './components/SidebarMenu';
import PersonalInfo from './container/PersonalInfo';

import { EntryMain, EntryMainContent, EntryMainMenu } from './appStyle';

function App() {
  return (
    <EntryMain>
      <EntryMainContent>
        <Banner />
        <PersonalInfo />
      </EntryMainContent>
      <EntryMainMenu>
        <SidebarMenu />
      </EntryMainMenu>
    </EntryMain>
  );
}

export default App;
