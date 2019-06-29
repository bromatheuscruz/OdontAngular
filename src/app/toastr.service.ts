import { Injectable } from '@angular/core';
import { ToastrService as NgxToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastrService: NgxToastrService) { }

  emmitError = (message: string) => {
    this.toastrService.error(message);
  }

  emmitSuccess = (message: string) => {
    this.toastrService.success(message);
  }

  emmitWarn = (message: string) => {
    this.toastrService.warning(message);
  }
}
