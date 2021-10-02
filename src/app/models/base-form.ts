import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { ETipoUsuario } from '../enums/ETipoUsuario';
import { BaseComponent } from './base-component';

export abstract class BaseForm extends BaseComponent {
  form: FormGroup;

  constructor(protected appService: AppService, protected router: Router, protected permissaoAcesso: ETipoUsuario) {
    super(appService, router, permissaoAcesso);
  }

  public hasError(name: string, error: string): boolean {
    const invalido = this.form.get(name).touched && this.form.get(name).errors?.[error];
    if(invalido) { return true; }
    return false;
  }
}
