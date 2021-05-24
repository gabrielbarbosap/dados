import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, TranslateModule, SharedModule],
  exports: [LoginComponent],
  entryComponents: [],
})
export class LoginModule {}
