import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'listavagas', loadChildren: './listavagas/listavagas.module#ListavagasPageModule' },
  { path: 'cadastrovagas', loadChildren: './cadastrovagas/cadastrovagas.module#CadastrovagasPageModule' },
  { path: 'edit/:id', loadChildren: './cadastrovagas/cadastrovagas.module#CadastrovagasPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
