import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { FormsModule } from '@angular/forms';
import { MovieRoutingModule } from './movies.routing.module';
import { MovieInfoListComponent } from './movies/components/movie-info-list/movie-info-list.component';
import { MoviesContainerComponent } from './movies/components/movies-container/movies-container.component';
import { MovieInfoComponent } from './movies/components/movie-info/movie-info.component';

@NgModule({
    declarations:[MovieInfoListComponent, MoviesContainerComponent, MovieInfoComponent],
    imports:[
        MovieRoutingModule,
        FormsModule,
        CardModule,
        DropdownModule,
        PanelModule,
        DataViewModule,
        TreeModule,
        ButtonModule,
        SidebarModule
    ]
})
export class MoviesModule { }
