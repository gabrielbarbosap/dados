import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule} from '@ngx-translate/core';
import { DashComponent } from './dash.component';

@NgModule({
  declarations: [DashComponent],
  imports: [CommonModule, TranslateModule, SharedModule],
  exports: [DashComponent],
  entryComponents: [],
})
export class DashModule {}
