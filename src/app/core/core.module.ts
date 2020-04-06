import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        HttpClientModule,
        CardModule,
        DropdownModule,
        PanelModule,
        DataViewModule,
        TreeModule,
        ButtonModule,
        SidebarModule
    ]
})
export class CoreModule { }
