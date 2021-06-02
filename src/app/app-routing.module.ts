import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { WeatherViewComponent } from './components/weather-view/weather-view.component';

const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "weather", component: WeatherViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
