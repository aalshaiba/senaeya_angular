import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ContactComponent} from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {ShopsComponent} from './shops/shops.component';
import {SearchPipe} from './search.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
    {
        path: '', component: ShopsComponent
    },
    {
        path: 'contact', component: ContactComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContactComponent,
        ShopsComponent,
        SearchPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [{
        provide: LocationStrategy, useClass: HashLocationStrategy
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
