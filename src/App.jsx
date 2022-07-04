import React from 'react';
import Banner from './container/Banner';
import SidebarMenu from './components/SidebarMenu';

import { EntryMain, EntryMainContent, EntryMainMenu } from './appStyle';

function App() {
  return (
    <EntryMain>
      <EntryMainContent>
        <Banner />
        <h2 id="info">Welcome to Personal info</h2>
      </EntryMainContent>
      <EntryMainMenu>
        <SidebarMenu />
      </EntryMainMenu>
    </EntryMain>
  );
}

export default App;
