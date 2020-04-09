import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule,Http } from '@angular/http'; 
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { EmptyCheckPipe } from './emptyCheck.pipe';
import { DateFormatPipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EmptyCheckPipe,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
