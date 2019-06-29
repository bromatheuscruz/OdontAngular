import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";
import { PacientService } from "../pacient.service";
import { ViaCepService } from "../via-cep.service";
import { ViaCepResponseData } from "src/models/ViaCepResponseData";
import { ToastrService } from "src/app/toastr.service";
import { Pacient } from "src/models/Pacient";
import Address from "src/models/Address";

@Component({
  selector: "app-pacient-screen",
  templateUrl: "./pacient-screen.component.html",
  styleUrls: ["./pacient-screen.component.css"]
})
export class PacientScreenComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private pacientService: PacientService,
    private viaCep: ViaCepService,
    private toastrService: ToastrService
  ) {}

  pacientForm: FormGroup;
  private readonly CEP_LENGTH: number = 8;

  ngOnInit() {
    this.pacientForm = this.formBuilder.group({
      name: ["Matheus Cruz", [Validators.required]],
      responsibleName: "",
      rg: "111111111",
      cpf: "11111111111",
      email: ["bromatheuscruz@gmail.com", Validators.email],
      birthday: "18121994",
      phoneOne: "1111111111",
      phoneTwo: "11111111111",
      cep: [
        "21070820",
        [Validators.minLength(this.CEP_LENGTH), Validators.required]
      ],
      publicPlace: "",
      addressNumber: "216",
      district: "",
      complement: "Complement",
      observation: "Observation",
      city: "",
      state: ""
    });
  }

  getCep = (): void => {
    const control: AbstractControl = this.pacientForm.controls.cep;

    if (!control.invalid) {
      this.viaCep
        .getCep(this.pacientForm.controls.cep.value)
        .subscribe((response: ViaCepResponseData) => {
          this.pacientForm.controls.district.setValue(response.bairro),
            this.pacientForm.controls.state.setValue(response.uf),
            this.pacientForm.controls.city.setValue(response.localidade),
            this.pacientForm.controls.publicPlace.setValue(response.logradouro);
        });
    }
  };

  createPacient = (): void => {
    this.pacientService
      .createPacient({
        name: this.pacientForm.controls.name.value,
        responsibleName: this.pacientForm.controls.responsibleName.value,
        rg: this.pacientForm.controls.rg.value,
        cpf: this.pacientForm.controls.cpf.value,
        email: this.pacientForm.controls.email.value,
        birthday: this.pacientForm.controls.birthday.value,
        phones: [
          this.pacientForm.controls.phoneOne.value,
          this.pacientForm.controls.phoneTwo.value
        ],
        observation: this.pacientForm.controls.observation.value,
        address: {
          cep: this.pacientForm.controls.cep.value,
          addressNumber: this.pacientForm.controls.addressNumber.value,
          city: this.pacientForm.controls.city.value,
          publicPlace: this.pacientForm.controls.publicPlace.value,
          complement: this.pacientForm.controls.complement.value,
          district: this.pacientForm.controls.district.value,
          state: this.pacientForm.controls.state.value
        }
      })
      .subscribe(
        response => {
          this.toastrService.emmitSuccess("Paciente criado com sucesso");
        },
        err => {
          if (err.error.message) {
            this.toastrService.emmitError(err.error.message);
          } else {
            this.toastrService.emmitError(
              "Não foi possível cadastrar o paciente"
            );
          }
        }
      );
  };

  saveFormattedCpf = ($event): void => {
    this.pacientForm.controls.cpf.setValue($event);
  };
}
